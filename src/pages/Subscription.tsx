import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  MapIcon, 
  SparklesIcon, 
  CurrencyDollarIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscriptionCard from '../components/SubscriptionCard';
import PaymentMethodSelection from '../components/PaymentMethodSelection';
import SubscriptionSummary from '../components/profile/SubscriptionSummary';
import { useSubscription } from '../hooks/useSubscription';

// FAQ Data Structure
interface FaqItem {
  question: string;
  answer: string;
}

const Subscription: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const {
    selectedPlanId,
    userSubscription,
    plans,
    isLoading,
    isUpdating,
    showPaymentMethodSelection,
    pendingPlanId,
    handlePlanSelect,
    handlePlanUpdate,
    handlePaymentMethodSelect,
    closePaymentMethodSelection,
  } = useSubscription();

  // Local state for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: t('subscription.faq.cancel.question', 'Can I cancel my subscription anytime?'),
      answer: t('subscription.faq.cancel.answer', 'Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your current billing period.')
    },
    {
      question: t('subscription.faq.trial.question', 'How does the plan upgrade work?'),
      answer: t('subscription.faq.trial.answer', 'When you upgrade to a higher tier, the change happens immediately. We will pro-rate any remaining time on your current plan.')
    },
    {
      question: t('subscription.faq.payment.question', 'Is my payment information secure?'),
      answer: t('subscription.faq.payment.answer', 'Absolutely. We use industry-standard encryption (SSL) and process payments through secure providers like Stripe and Alipay. We never store your card details.')
    },
    {
      question: t('subscription.faq.support.question', 'What does VIP Support include?'),
      answer: t('subscription.faq.support.answer', 'VIP Support grants you priority access to our travel concierge team, ensuring faster response times and personalized trip assistance.')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header showNavLinks={true} />
      
      <main className="pb-20">
        {/* 1. HERO SECTION: Emotional Hook */}
        <div className="relative bg-slate-900 h-[500px] overflow-hidden">
          {/* Abstract Background with Gradient Overlay */}
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 to-slate-900/90 z-10" />
             <img
               src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
               alt={t('subscription.travelBackground', 'Travel Background')}
               className="w-full h-full object-cover opacity-40"
             />
          </div>

          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                {t('subscription.heroTitle', 'Unlock the World')}
              </h1>
              <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                {t('subscription.heroSubtitle', 'Experience travel without limits. Access exclusive guides, offline maps, and VIP concierge support.')}
              </p>
            </motion.div>
          </div>
          
          {/* Decorative Curve at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L1440 120L1440 0C1440 0 1082.5 97.5 720 97.5C357.5 97.5 0 0 0 0L0 120Z" fill="#F8FAFC"/>
            </svg>
          </div>
        </div>

        {/* 2. CURRENT STATUS: Floating Card Effect */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          >
            <SubscriptionSummary hideButton={true} />
          </motion.div>
        </div>

        {/* 3. PLANS GRID: The Main Choice */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">{t('subscription.choosePlan', 'Choose Your Journey')}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              {t('subscription.choosePlanDesc', 'Flexible plans designed for every type of traveler. Upgrade, downgrade, or cancel anytime.')}
            </p>
          </div>

          {/* Responsive Grid: Scroll on mobile, Grid on desktop */}
          <div className="relative">
             <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {isLoading && plans.length === 0 ? (
                // Skeletons
                [...Array(4)].map((_, index) => (
                  <div key={`skeleton-${index}`} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-96 animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-8 mx-auto" />
                    <div className="h-10 bg-slate-200 rounded w-1/2 mb-6 mx-auto" />
                    <div className="space-y-4">
                      <div className="h-2 bg-slate-100 rounded w-full" />
                      <div className="h-2 bg-slate-100 rounded w-5/6" />
                      <div className="h-2 bg-slate-100 rounded w-4/6" />
                    </div>
                  </div>
                ))
              ) : (
                plans.map((plan, index) => (
                  <motion.div
                    key={plan.planId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="relative h-full">
                      {userSubscription?.planId === plan.planId && (
                        <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                          <span className="bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-slate-50 uppercase tracking-wider">
                            {t('subscription.currentPlan', 'Current Plan')}
                          </span>
                        </div>
                      )}
                      <SubscriptionCard
                        plan={plan}
                        isSelected={userSubscription?.planId === plan.planId}
                        isLoading={isUpdating && selectedPlanId === plan.planId}
                        onClick={() => handlePlanSelect(plan.planId)}
                        onButtonClick={() => handlePlanUpdate(plan.planId)}
                        className="h-full"
                      />
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* 4. VALUE PROPOSITION: Why Upgrade? */}
        <div className="bg-white py-20 mt-24 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 font-serif">
                  {t('subscription.featuresTitle', 'Premium Benefits')}
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                      <MapIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t('subscription.features.unlimitedOfflineMaps', 'Unlimited Offline Maps')}</h4>
                      <p className="text-slate-600 mt-1">{t('subscription.features.unlimitedOfflineMapsDesc', 'Download entire cities to your phone. Never get lost, even without a signal.')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                      <SparklesIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t('subscription.features.exclusiveHiddenGems', 'Exclusive Hidden Gems')}</h4>
                      <p className="text-slate-600 mt-1">{t('subscription.features.exclusiveHiddenGemsDesc', 'Access our curated database of secret spots, away from the tourist crowds.')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                      <ChatBubbleLeftRightIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t('subscription.features.conciergeChat', '24/7 Concierge Chat')}</h4>
                      <p className="text-slate-600 mt-1">{t('subscription.features.conciergeChatDesc', 'Real-time support from local experts to help with reservations and emergencies.')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <CurrencyDollarIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t('subscription.features.exclusivePartnerDeals', 'Exclusive Partner Deals')}</h4>
                      <p className="text-slate-600 mt-1">{t('subscription.features.exclusivePartnerDealsDesc', 'Save up to 20% on hotels and experiences with our global partners.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                 {/* Abstract representation of the app UI */}
                 <div className="absolute inset-0 bg-linear-to-tr from-teal-500 to-emerald-500 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                 <img
                   src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                   alt={t('subscription.appExperience', 'App Experience')}
                   className="relative rounded-3xl shadow-2xl z-10 border-4 border-white"
                 />
              </div>
            </div>
          </div>
        </div>

        {/* 5. FAQ SECTION */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10 font-serif">
            {t('subscription.faqTitle', 'Frequently Asked Questions')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-teal-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-teal-600" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => navigate('/support')}
          className="group flex items-center justify-center w-14 h-14 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
          aria-label="Contact Support"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 group-hover:animate-pulse" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('common.needHelp', 'Need Help?')}
          </span>
        </button>
      </div>

      {/* Payment Method Selection Modal */}
      {showPaymentMethodSelection && pendingPlanId && (
        <PaymentMethodSelection
          plan={plans.find(p => p.planId === pendingPlanId)!}
          isOpen={showPaymentMethodSelection}
          onClose={closePaymentMethodSelection}
          onSelectPaymentMethod={(paymentMethod) => handlePaymentMethodSelect(pendingPlanId, paymentMethod)}
          isLoading={isUpdating}
        />
      )}
    </div>
  );
};

export default Subscription;