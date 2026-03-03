// src/services/api/profileApi.ts
// ✅ FIXED: Always prefer Firestore values over Firebase Auth defaults

import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { db, auth, storage } from '../../../lib/firebase/client';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// ============================================================================
// TYPES
// ============================================================================

export interface UserProfile {
  uid: string;
  email: string;           // Read-only from Firebase Auth
  displayName?: string;    // Can be updated
  phoneNumber?: string;
  photoURL?: string;
  gender?: string;
  birthDate?: string;
  nickname?: string;
  createdAt?: string;
  updatedAt?: string;
  isPublicProfile?: boolean;
}

export interface ProfileUpdateData {
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  gender?: string;
  birthDate?: string;
  nickname?: string;
}

// ============================================================================
// GET USER PROFILE - FIXED: Prefer Firestore values
// ============================================================================

/**
 * Get user's profile from Firestore
 * ✅ FIXED: Always prefer Firestore values over Firebase Auth
 * 
 * Why this matters:
 * - Firebase Auth stores Google account defaults (Gmail name, Google photo)
 * - Firestore stores user's actual profile (custom name, uploaded photo)
 * - On refresh, if we use Auth defaults first, updated profile disappears
 * 
 * Solution:
 * - Always use Firestore values when available
 * - Only use Firebase Auth as fallback for new users
 */
export const getUserProfile = async (): Promise<UserProfile> => {
  const user = auth.currentUser;
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  console.log('📋 Fetching user profile for:', user.uid);

  try {
    // Get user document from Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const userDocSnap = await getDoc(userDocRef);

    // If Firestore document exists, use it as primary source
    if (userDocSnap.exists()) {
      const firestoreData = userDocSnap.data();
      console.log('✅ Firestore user document found');
      
      // ✅ FIXED: Build profile with Firestore as PRIMARY source
      // Check if Firestore has the value, use it; otherwise fall back to Firebase Auth
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        // ✅ Prefer Firestore displayName - if it's empty/missing, fall back to Firebase Auth
        displayName: firestoreData.displayName && firestoreData.displayName.trim() 
          ? firestoreData.displayName 
          : user.displayName || '',
        // ✅ Prefer Firestore photoURL - if it's empty/missing, fall back to Firebase Auth
        photoURL: firestoreData.photoURL && firestoreData.photoURL.trim()
          ? firestoreData.photoURL
          : user.photoURL || '',
        phoneNumber: firestoreData.phoneNumber,
        gender: firestoreData.gender,
        birthDate: firestoreData.birthDate,
        nickname: firestoreData.nickname,
        createdAt: firestoreData.createdAt,
        updatedAt: firestoreData.updatedAt,
        isPublicProfile: firestoreData.isPublicProfile
      };

      console.log('✅ Profile loaded from Firestore (Firestore values preferred):');
      console.log('   displayName:', profile.displayName, '(from Firestore)');
      console.log('   photoURL:', profile.photoURL, '(from Firestore)');
      return profile;
    } else {
      console.log('⚠️ Firestore user document not found, creating one...');
      
      // Create user document on first login with Firebase Auth defaults
      const initialProfile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || ''
      };
      
      await createUserProfile(user.uid, initialProfile);
      
      console.log('✅ Created new Firestore profile from Firebase Auth defaults');
      return initialProfile;
    }
  } catch (error) {
    console.error('❌ Error fetching user profile:', error);
    throw error;
  }
};

// ============================================================================
// CREATE USER PROFILE (on first login)
// ============================================================================

export const createUserProfile = async (
  uid: string,
  initialData?: Partial<UserProfile>
): Promise<UserProfile> => {
  const user = auth.currentUser;

  if (!user || user.uid !== uid) {
    throw new Error('Cannot create profile for different user');
  }

  console.log('✨ Creating user profile for:', uid);

  try {
    const userDocRef = doc(db, 'users', uid);
    
    const profileData = {
      uid: uid,
      email: user.email || '',
      displayName: initialData?.displayName || user.displayName || '',
      phoneNumber: initialData?.phoneNumber || '',
      photoURL: initialData?.photoURL || user.photoURL || '',
      gender: initialData?.gender || '',
      birthDate: initialData?.birthDate || '',
      nickname: initialData?.nickname || user.displayName || '',
      isPublicProfile: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    await setDoc(userDocRef, profileData);
    
    console.log('✅ User profile created');
    return {
      ...profileData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('❌ Error creating user profile:', error);
    throw error;
  }
};

// ============================================================================
// UPDATE USER PROFILE
// ============================================================================

export const updateUserProfile = async (
  updates: ProfileUpdateData
): Promise<UserProfile> => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  console.log('📝 Updating user profile:', updates);

  try {
    const userDocRef = doc(db, 'users', user.uid);

    // Prepare update data
    const updateData: any = {
      ...updates,
      updatedAt: serverTimestamp()
    };

    // Remove undefined values
    Object.keys(updateData).forEach(key =>
      updateData[key] === undefined && delete updateData[key]
    );

    // Update Firestore document
    await updateDoc(userDocRef, updateData);

    console.log('✅ Profile updated successfully in Firestore');

    // ✅ Return fresh profile from Firestore to ensure latest data
    const freshProfile = await getUserProfile();
    console.log('✅ Fresh profile loaded after update:');
    console.log('   displayName:', freshProfile.displayName);
    console.log('   photoURL:', freshProfile.photoURL);
    return freshProfile;
  } catch (error) {
    console.error('❌ Error updating profile:', error);
    throw error;
  }
};

// ============================================================================
// UPLOAD PROFILE PHOTO
// ============================================================================

export const uploadProfilePhoto = async (file: File): Promise<string> => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  console.log('📤 Uploading profile photo:', file.name);

  try {
    // Create storage reference
    const timestamp = Date.now();
    const filename = `profiles/${user.uid}/${timestamp}_${file.name}`;
    const storageRef = ref(storage, filename);

    // Upload file
    console.log('⏳ Uploading to Firebase Storage...');
    await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log('✅ Photo uploaded! URL:', downloadURL);

    // ✅ Update profile and get fresh data
    const updatedProfile = await updateUserProfile({ photoURL: downloadURL });

    console.log('✅ Profile updated with new photo URL');
    return downloadURL;
  } catch (error) {
    console.error('❌ Error uploading photo:', error);
    throw error;
  }
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export const profileApi = {
  getUserProfile,
  createUserProfile,
  updateUserProfile,
  uploadProfilePhoto
};

export default profileApi;