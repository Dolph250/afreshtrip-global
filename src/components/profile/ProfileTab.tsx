// src/components/profile/ProfileTab.tsx
// ✅ FIREBASE VERSION - Uses Firestore profile data

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CameraIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { uploadProfilePhoto } from '../../services/api/profileApi';
import type { UserProfile, ProfileUpdateData } from '../../services/api/profileApi';

interface ProfileTabProps {
  onSubmit: (data: ProfileUpdateData) => Promise<void>;
  isLoading: boolean;
  userProfile: UserProfile | null;
}

const ProfileTab: React.FC<ProfileTabProps> = ({
  onSubmit,
  isLoading,
  userProfile
}) => {
  const { t } = useTranslation();
  
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  
  const [formData, setFormData] = useState<ProfileUpdateData>({
    displayName: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    photoURL: ''
  });

  // ✅ Load profile data when userProfile updates
  useEffect(() => {
    if (userProfile) {
      console.log('📋 Loading profile data from Firestore:', userProfile);
      
      setFormData({
        displayName: userProfile.displayName || '',
        phoneNumber: userProfile.phoneNumber || '',
        birthDate: userProfile.birthDate || '',
        gender: userProfile.gender || '',
        photoURL: userProfile.photoURL || ''
      });
      
      setAvatarPreview(userProfile.photoURL || '');
      console.log('✅ Profile form populated');
    }
  }, [userProfile]);

  const handleInputChange = (field: keyof ProfileUpdateData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ✅ Handle avatar upload
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingAvatar(true);

    try {
      console.log('📤 Uploading avatar:', file.name);
      
      // Show preview immediately
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Upload to Firebase Storage
      const imageUrl = await uploadProfilePhoto(file);
      
      console.log('✅ Avatar uploaded!', imageUrl);
      
      // Update form data with new URL
      setFormData(prev => ({ ...prev, photoURL: imageUrl }));
      
    } catch (error) {
      console.error('❌ Avatar upload failed:', error);
      alert('Failed to upload avatar. Please try again.');
      
      // Reset preview on error
      setAvatarPreview(userProfile?.photoURL || '');
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('📝 Submitting profile update:', formData);
    
    await onSubmit(formData);
  };

  // Loading state
  if (!userProfile) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Avatar */}
      <div className="lg:col-span-1">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={avatarPreview || formData.photoURL || '/assets/default-avatar.png'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.currentTarget.src = '/assets/default-avatar.png';
              }}
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 p-2 bg-teal-600 rounded-full text-white cursor-pointer hover:bg-teal-700 transition-colors shadow-lg"
            >
              {isUploadingAvatar ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <CameraIcon className="w-5 h-5" />
              )}
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                disabled={isUploadingAvatar}
              />
            </label>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {formData.displayName || 'User'}
          </h3>
          <p className="text-sm text-gray-500">{userProfile.email}</p>
          
          {/* Upload Status */}
          {isUploadingAvatar && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
              <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
              <span className="text-xs text-yellow-700 font-medium">
                Uploading image...
              </span>
            </div>
          )}
          
          {!isUploadingAvatar && formData.photoURL && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs text-teal-700 font-medium">
                Firebase Storage
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Edit Form */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {t('trips.editProfileInfo') || 'Edit Profile Information'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email - Read Only */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('common.email') || 'Email'} (Read-Only)
            </label>
            <input
              type="email"
              value={userProfile.email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500">
              {t('profile.emailReadOnly') || 'Email cannot be changed. Manage it in account settings.'}
            </p>
          </div>

          {/* Display Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('common.name') || 'Full Name'}
            </label>
            <input
              type="text"
              value={formData.displayName}
              onChange={(e) => handleInputChange('displayName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g., John Doe"
            />
          </div>

          {/* Nickname */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('common.nickname') || 'Nickname'}
            </label>
            <input
              type="text"
              value={formData.displayName}
              onChange={(e) => handleInputChange('displayName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g., John"
            />
          </div>

          {/* Phone & DOB Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('common.phone') || 'Phone Number'}
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('common.birthDate') || 'Date of Birth'}
              </label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Gender Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t('common.gender') || 'Gender'}
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">{t('profile.male') || 'Male'}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">{t('profile.female') || 'Female'}</span>
              </label>
            </div>
          </div>

          {/* Update Button */}
          <div className="flex items-center gap-2 pt-4">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <button
              type="submit"
              disabled={isLoading || isUploadingAvatar}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t('common.updating') || 'Updating...'}
                </div>
              ) : (
                t('common.update') || 'Update Profile'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileTab;