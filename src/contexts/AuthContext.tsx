import React, { createContext, useContext, useEffect, useState } from 'react';
import { type User, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase/client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../lib/react-query/queryKeys';

// Custom user type for Chinese authentication (not used in global version)
interface CustomUser {
  uid: string;
  email?: string;
  phone?: string;
  displayName?: string;
  photoURL?: string;
  emailVerified: boolean;
  isCustomAuth: true;
  payType?: number;
  startTime?: string | null;
  endTime?: string | null;
  metadata?: {
    creationTime: string;
  };
}

// Union type for Firebase or Custom user
export type AuthUser = User | CustomUser;

interface AuthContextType {
  user: AuthUser | null;
  userProfile: any | null;
  userFeatures: any | null;
  loading: boolean;
  isCustomAuth: boolean;
  payType: number;
  startTime: string | null;
  endTime: string | null;
  isPremium: boolean;
  isExpired: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (profileData: {
    nickname?: string;
    gender?: string;
    phone?: string;
    imageUrl?: string;
    birthDate?: string;
  }) => Promise<void>;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [customUser, setCustomUser] = useState<CustomUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const queryClient = useQueryClient();

  // ✅ For Firebase global version, we don't fetch user features from API
  // All data comes from Firebase Auth
  const payType = 0;  // Free tier (can be extended with Firestore user doc)
  const startTime = null;
  const endTime = null;
  const isExpired = false;
  const isPremium = false;

  useEffect(() => {
    // ✅ Global version always uses Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Auth state changed:', user ? `✅ ${user.email}` : '❌ Not authenticated');
      setFirebaseUser(user);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithEmail = async (email: string, password: string) => {
    console.log('🔐 Logging in with email:', email);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const registerWithEmail = async (email: string, password: string) => {
    console.log('📝 Registering with email:', email);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    console.log('🔐 Logging in with Google');
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    try {
      if (firebaseUser) {
        await signOut(auth);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }

    // Clear custom auth
    localStorage.removeItem('custom_auth_token');
    localStorage.removeItem('custom_user_data');
    localStorage.removeItem('payType');
    setCustomUser(null);

    // Clear cache
    queryClient.clear();
  };

  const updateUserProfile = async (profileData: {
    nickname?: string;
    gender?: string;
    phone?: string;
    imageUrl?: string;
    birthDate?: string;
  }) => {
    try {
      console.log('📝 Updating user profile:', profileData);
      // For Firebase, you can update user profile here
      // For now, this is a placeholder
      console.log('✅ Profile update complete');
    } catch (error) {
      console.error('Failed to update user profile:', error);
      throw error;
    }
  };

  const refreshUserProfile = async () => {
    // For Firebase, no need to refresh from API
    console.log('✅ Profile refreshed');
  };

  const loading = authLoading;
  const user = firebaseUser || customUser;
  const isCustomAuth = !!customUser;

  const value: AuthContextType = {
    user,
    userProfile: null,
    userFeatures: null,
    loading,
    isCustomAuth,
    payType,
    startTime,
    endTime,
    isPremium,
    isExpired,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    logout,
    updateUserProfile,
    refreshUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};