import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../contexts/AuthContext';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  billingCycle: 'week' | 'month' | 'season' | 'year';
  vipTypeId: number;
  popular?: boolean;
  features: string[];
  savings?: string;
}

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { payType } = useAuth(); // ✅ Get current payType from context
  
  const [activePeriod, setActivePeriod] = useState<'week' | 'month' | 'season' | 'year'>('week');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const plans: PricingPlan[] = [
    {
      id: 'week',
      name: t('pricing.week', 'Week'),
      price: 19,
      period: t('pricing.perWeek', 'Per week'),
      billingCycle: 'week',
      vipTypeId: 1,
      features: [
        t('pricing.features.unlimitedTrips', 'Unlimited trip planning'),
        t('pricing.features.aiRecommendations', 'AI-powered recommendations'),
        t('pricing.features.offlineAccess', 'Offline access'),
        t('pricing.features.prioritySupport', 'Priority support'),
      ]
    },
    {
      id: 'month',
      name: t('pricing.month', 'Month'),
      price: 39,
      period: t('pricing.perMonth', 'Per month'),
      billingCycle: 'month',
      vipTypeId: 2,
      popular: true,
      savings: t('pricing.save30', 'Save 30%'),
      features: [
        t('pricing.features.allWeekFeatures', 'All Week features'),
        t('pricing.features.advancedAnalytics', 'Advanced analytics'),
        t('pricing.features.teamCollaboration', 'Team collaboration'),
        t('pricing.features.customBranding', 'Custom branding'),
      ]
    },
    {
      id: 'season',
      name: t('pricing.season', 'Season'),
      price: 89,
      period: t('pricing.perMonth', 'Per month'),
      billingCycle: 'season',
      vipTypeId: 3,
      savings: t('pricing.save40', 'Save 40%'),
      features: [
        t('pricing.features.allMonthFeatures', 'All Month features'),
        t('pricing.features.dedicatedManager', 'Dedicated account manager'),
        t('pricing.features.apiAccess', 'API access'),
        t('pricing.features.whiteLabel', 'White-label options'),
      ]
    },
    {
      id: 'year',
      name: t('pricing.year', 'Year'),
      price: 199,
      period: t('pricing.perMonth', 'Per month'),
      billingCycle: 'year',
      vipTypeId: 4,
      savings: t('pricing.save50', 'Save 50%'),
      features: [
        t('pricing.features.allSeasonFeatures', 'All Season features'),
        t('pricing.features.lifetimeUpdates', 'Lifetime updates'),
        t('pricing.features.vipSupport', 'VIP support'),
        t('pricing.features.earlyAccess', 'Early access to new features'),
      ]
    }
  ];

  // ✅ Auto-select current plan based on payType
  useEffect(() => {
    // Map payType to planId
    const payTypeToPlanId: Record<number, string> = {
      1: 'week',
      2: 'month',
      3: 'season',
      4: 'year'
    };

    const currentPlanId = payTypeToPlanId[payType];
    
    if (currentPlanId) {
      setSelectedPlan(currentPlanId);
      setActivePeriod(currentPlanId as any);
      console.log('✅ Auto-selected current plan:', currentPlanId, 'based on payType:', payType);
    } else {
      console.log('ℹ️ No active subscription (payType = 0)');
    }
  }, [payType]);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleUpdatePlan = (planId: string) => {
    const selectedPlanData = plans.find(p => p.id === planId);
    
    console.log('✅ Plan selected:', {
      planId,
      vipTypeId: selectedPlanData?.vipTypeId,
      name: selectedPlanData?.name,
      price: selectedPlanData?.price
    });
    
    // Navigate to payment method selection with all plan details
    navigate('/payment/method', { 
      state: { 
        planId: planId,
        planName: selectedPlanData?.name,
        planPrice: selectedPlanData?.price,
        vipTypeId: selectedPlanData?.vipTypeId
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('pricing.title', 'Choose Your Plan')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('pricing.subtitle', 'Unlock unlimited trips, AI recommendations, and more')}
          </p>

          {/* ✅ Show current subscription if exists */}
          {payType > 0 && (
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-teal-100 border border-teal-300 rounded-full">
              <span className="text-teal-700 font-medium">
                ⭐ {t('pricing.currentPlan', 'Current Plan')}: 
              </span>
              <span className="font-bold text-teal-900">
                {plans.find(p => p.vipTypeId === payType)?.name || 'VIP'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Period Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            {['week', 'month', 'season', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activePeriod === period
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t(`pricing.${period}`, period.charAt(0).toUpperCase() + period.slice(1))}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const isCurrentPlan = plan.vipTypeId === payType;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  selectedPlan === plan.id
                    ? 'ring-2 ring-teal-600 scale-105'
                    : 'hover:scale-105'
                } ${
                  isCurrentPlan
                    ? 'border-2 border-purple-600'
                    : plan.popular
                    ? 'border-2 border-teal-600'
                    : 'border border-slate-200'
                }`}
              >
                {/* Current Plan Badge */}
                {isCurrentPlan && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      ✨ {t('pricing.yourCurrentPlan', 'Current Plan')}
                    </span>
                  </div>
                )}

                {/* Popular Badge */}
                {!isCurrentPlan && plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {t('pricing.popular', 'Most Popular')}
                    </span>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      handleSelectPlan(plan.id);
                      handleUpdatePlan(plan.id);
                    }}
                    disabled={isCurrentPlan}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isCurrentPlan
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : selectedPlan === plan.id
                        ? 'bg-slate-700 text-white hover:bg-slate-800'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                  >
                    {isCurrentPlan
                      ? `✓ ${t('pricing.currentPlan', 'Current Plan')}`
                      : selectedPlan === plan.id
                      ? t('pricing.selected', 'Selected')
                      : t('pricing.select', 'Select Plan')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('pricing.faqTitle', 'Frequently Asked Questions')}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t('pricing.faq1Question', 'Can I change my plan later?')}
              </h3>
              <p className="text-slate-600">
                {t('pricing.faq1Answer', 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t('pricing.faq2Question', 'Is there a free trial?')}
              </h3>
              <p className="text-slate-600">
                {t('pricing.faq2Answer', 'We offer a 7-day free trial for all plans. No credit card required.')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t('pricing.faq3Question', 'What payment methods do you accept?')}
              </h3>
              <p className="text-slate-600">
                {t('pricing.faq3Answer', 'We accept all major credit cards, PayPal, and bank transfers.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;