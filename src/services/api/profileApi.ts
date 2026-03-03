// src/services/profileApi.ts
// ✅ FIREBASE VERSION - Uses Firestore instead of Chinese API

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
// GET USER PROFILE
// ============================================================================

/**
 * Get user's profile from Firestore
 * Combines Firebase Auth data + Firestore user document
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

    // Combine Firebase Auth + Firestore data
    const profile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || ''
    };

    // Add Firestore data if exists
    if (userDocSnap.exists()) {
      const firestoreData = userDocSnap.data();
      console.log('✅ Firestore user document found');
      
      return {
        ...profile,
        phoneNumber: firestoreData.phoneNumber,
        gender: firestoreData.gender,
        birthDate: firestoreData.birthDate,
        nickname: firestoreData.nickname,
        createdAt: firestoreData.createdAt,
        updatedAt: firestoreData.updatedAt,
        isPublicProfile: firestoreData.isPublicProfile
      };
    } else {
      console.log('⚠️ Firestore user document not found, creating one...');
      
      // Create user document on first login
      await createUserProfile(user.uid, profile);
      
      return profile;
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

    console.log('✅ Profile updated successfully');

    // Return updated profile
    return getUserProfile();
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

    // Update profile with new photo URL
    await updateUserProfile({ photoURL: downloadURL });

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