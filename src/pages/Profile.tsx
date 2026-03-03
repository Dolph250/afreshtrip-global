// src/pages/Profile.tsx
// ✅ FIREBASE VERSION - Uses Firestore for profile data

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  UserCircleIcon,
  CreditCardIcon,
  MapPinIcon,
  BellIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

// Layout & Context
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../contexts/SnackbarContext';

// Tab Content Components
import ProfileTab from '../components/profile/ProfileTab';
import SubscriptionTab from '../components/profile/SubscriptionTab';
import MyTripsTab from '../components/profile/MyTripsTab';
import NotificationTab from '../components/profile/NotificationTab';

// Profile API
import { updateUserProfile, getUserProfile } from '../services/api/profileApi';
import type { UserProfile, ProfileUpdateData } from '../services/api/profileApi';

type TabId = 'profile' | 'subscription' | 'trips' | 'notification';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const { user, logout } = useAuth();
  const { showSuccess, showError } = useSnackbar();
  
  // Get initial tab from URL
  const initialTab = (searchParams.get('tab') as TabId) || 'profile';
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  // Tab configuration
  const tabs = [
    {
      id: 'profile' as TabId,
      label: t('trips.myProfile') || 'My Profile',
      icon: UserCircleIcon
    },
    {
      id: 'subscription' as TabId,
      label: t('trips.subscription') || 'Subscription',
      icon: CreditCardIcon
    },
    {
      id: 'trips' as TabId,
      label: t('trips.myTrips') || 'My trips',
      icon: MapPinIcon
    },
    {
      id: 'notification' as TabId,
      label: t('trips.notifications') || 'Notification',
      icon: BellIcon
    }
  ];

  // ✅ Load user profile on mount
  useEffect(() => {
    const loadProfile = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        console.log('📋 Loading user profile for:', user.uid);
        setIsLoadingProfile(true);
        
        const profile = await getUserProfile();
        setUserProfile(profile);
        
        console.log('✅ Profile loaded:', profile);
      } catch (error) {
        console.error('❌ Failed to load profile:', error);
        showError(t('common.error.loadProfileFailed') || 'Failed to load profile');
      } finally {
        setIsLoadingProfile(false);
      }
    };

    loadProfile();
  }, [user, navigate, t, showError]);

  // ✅ Handle profile update - Firebase Firestore
  const handleProfileUpdate = async (formData: ProfileUpdateData) => {
    if (!user) {
      showError('Not authenticated');
      return;
    }

    setIsUpdatingProfile(true);

    try {
      console.log('📝 Updating profile in Firebase:', formData);
      
      // Call Firestore update
      const updatedProfile = await updateUserProfile(formData);
      
      // Update local state
      setUserProfile(updatedProfile);
      
      console.log('✅ Profile updated successfully');
      showSuccess(t('trips.updateSuccess') || 'Profile updated successfully!');
      
    } catch (error) {
      console.error('❌ Profile update failed:', error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to update profile';
      
      showError(errorMessage);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      showError(t('common.error.logoutFailed') || 'Logout failed');
    }
  };

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileTab
            onSubmit={handleProfileUpdate}
            isLoading={isUpdatingProfile}
            userProfile={userProfile}
          />
        );
      case 'subscription':
        return <SubscriptionTab />;
      case 'trips':
        return <MyTripsTab />;
      case 'notification':
        return <NotificationTab />;
      default:
        return null;
    }
  };

  // Loading state
  if (isLoadingProfile) {
    return (
      <div className="min-h-screen bg-gray-50/50">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: t('header.home'), href: '/' },
            { label: t('profileNav.profile'), href: '/profile' }
          ]}
          className="mb-8"
        />

        <div className="max-w-7xl mx-auto">
          {/* Tabbed Navigation */}
          <div className="bg-white rounded-t-2xl border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-6 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-white bg-teal-600 rounded-t-lg -mb-px'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-t-lg'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-t-lg transition-all whitespace-nowrap ml-auto"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                {t('trips.logout') || 'Logout'}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-2xl shadow-sm p-8">
            {renderTabContent()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;