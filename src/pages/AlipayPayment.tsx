import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QRCodeCanvas } from 'qrcode.react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { QrCodeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { createAlipayOrder, checkOrderStatus, getPlanDetails } from '../services/paymentApi';

interface LocationState {
  planId: string;
  planName?: string;
  planPrice?: number;
  paymentMethod: string;
}

const AlipayPayment: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [status, setStatus] = useState<'loading' | 'ready' | 'polling' | 'success' | 'error'>('loading');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [orderData, setOrderData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [pollingAttempt, setPollingAttempt] = useState<number>(0);
  const [lastStatus, setLastStatus] = useState<number | null>(null);
  
  const initRef = useRef(false);
  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Redirect if no plan selected
  useEffect(() => {
    if (!state?.planId) {
      navigate('/pricing');
    }
  }, [state, navigate]);

  // Create order
  useEffect(() => {
    const initializePayment = async () => {
      if (!state?.planId || initRef.current) return;
      initRef.current = true;

      try {
        setStatus('loading');
        console.log('📱 Initializing Alipay payment...');
        console.log('Plan ID:', state.planId);

        const order = await createAlipayOrder(state.planId);

        console.log('✅ Order created successfully!');
        console.log('Full order data:', order);

        setQrCodeUrl(order.payQrCode);
        setOrderNumber(order.orderNo);
        setOrderData(order);
        setStatus('ready');

        // Start polling after 2 seconds
        setTimeout(() => {
          startPolling(order.orderNo, order);
        }, 2000);

      } catch (error: any) {
        console.error('❌ Failed to initialize payment:', error);
        setErrorMessage(error.message || 'Failed to create payment order');
        setStatus('error');
      }
    };

    initializePayment();

    return () => {
      if (pollingRef.current) {
        clearTimeout(pollingRef.current);
      }
    };
  }, [state?.planId]);

  const startPolling = (orderNo: string, order: any) => {
    setStatus('polling');
    setPollingAttempt(0);
    
    console.log('🔄 Starting payment status polling...');
    console.log('Order Number:', orderNo);
    
    pollStatus(orderNo, order, 0);
  };

  const pollStatus = async (orderNo: string, order: any, attempt: number) => {
    if (attempt >= 60) {
      console.log('⏱️ Polling timeout');
      setErrorMessage('Payment verification timed out. Please manually check your order status.');
      setStatus('error');
      return;
    }

    try {
      console.log(`\n📊 === Polling Attempt ${attempt + 1}/60 ===`);
      
      const statusValue = await checkOrderStatus(orderNo);
      
      console.log(`🔍 Raw status value from backend: ${statusValue}`);
      console.log(`📌 Status interpretation:`);
      console.log(`   0 = Pending/Unpaid`);
      console.log(`   1 = PAID ✅`);
      console.log(`   2 = Cancelled ❌`);
      console.log(`📍 Current status: ${statusValue} (${
        statusValue === 0 ? 'PENDING' : 
        statusValue === 1 ? 'PAID ✅' : 
        statusValue === 2 ? 'CANCELLED ❌' : 
        'UNKNOWN'
      })`);
      
      setPollingAttempt(attempt + 1);
      setLastStatus(statusValue);

      // ✅ PAYMENT CONFIRMED
      if (statusValue === 1) {
        console.log('\n🎉🎉🎉 PAYMENT CONFIRMED! 🎉🎉🎉');
        console.log('Order:', orderNo);
        console.log('Status changed from 0 → 1 (PAID)');
        
        if (pollingRef.current) {
          clearTimeout(pollingRef.current);
        }
        
        setStatus('success');
        
        console.log('\n🚀 Navigating to payment result page...');
        console.log('Navigation will happen in 1.5 seconds...');
        
        setTimeout(() => {
          console.log('🎯 NAVIGATING NOW to /payment/result');
          navigate('/payment/result', {
            state: {
              planId: state.planId,
              planName: getPlanDetails(state.planId).name,
              planPrice: order.amount,
              paymentMethod: 'Alipay',
              orderNumber: orderNo,
              orderData: order,
              vipTypeId: order.vipTypeId,
              startTime: order.startTime,
              endTime: order.endTime
            }
          });
        }, 1500);
        
        return;
      }

      // ❌ PAYMENT CANCELLED
      if (statusValue === 2) {
        console.log('❌ Payment cancelled');
        setErrorMessage('Payment was cancelled');
        setStatus('error');
        return;
      }

      // ⏳ STILL PENDING
      console.log('⏳ Payment still pending...');
      console.log(`⏰ Next check in 3 seconds...`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      
      pollingRef.current = setTimeout(() => {
        pollStatus(orderNo, order, attempt + 1);
      }, 3000);

    } catch (error: any) {
      console.error(`⚠️ Error during polling:`, error);
      
      // Continue polling
      pollingRef.current = setTimeout(() => {
        pollStatus(orderNo, order, attempt + 1);
      }, 3000);
    }
  };

  // ✅ MANUAL CHECK BUTTON (for testing)
  const handleManualCheck = async () => {
    if (!orderNumber) return;
    
    console.log('\n🔍 MANUAL STATUS CHECK');
    console.log('Order:', orderNumber);
    
    try {
      const statusValue = await checkOrderStatus(orderNumber);
      
      console.log(`Status: ${statusValue}`);
      setLastStatus(statusValue);
      
      if (statusValue === 1) {
        console.log('✅ PAYMENT CONFIRMED!');
        setStatus('success');
        
        setTimeout(() => {
          navigate('/payment/result', {
            state: {
              planId: state.planId,
              planName: getPlanDetails(state.planId).name,
              planPrice: orderData?.amount,
              paymentMethod: 'Alipay',
              orderNumber: orderNumber,
              orderData: orderData,
              vipTypeId: orderData?.vipTypeId,
              startTime: orderData?.startTime,
              endTime: orderData?.endTime
            }
          });
        }, 1000);
      } else {
        alert(`Current Status: ${statusValue}\n0 = Pending\n1 = Paid\n2 = Cancelled`);
      }
    } catch (error: any) {
      console.error('Manual check error:', error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleRetry = () => {
    navigate(-1);
  };

  const planDetails = getPlanDetails(state?.planId || 'month');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {t('payment.alipayPayment', 'Alipay Payment')}
            </h1>
            <p className="text-lg text-slate-600">
              {status === 'loading' 
                ? 'Preparing your payment...'
                : status === 'polling'
                ? 'Waiting for payment confirmation...'
                : 'Scan QR code with your Alipay app'
              }
            </p>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {/* LOADING */}
            {status === 'loading' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-teal-100 border-t-teal-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-600">Creating your order...</p>
              </div>
            )}

            {/* READY / POLLING */}
            {(status === 'ready' || status === 'polling') && (
              <div className="text-center">
                {/* QR CODE */}
                <div className="mb-8">
                  <div className="inline-block p-6 bg-white border-4 border-slate-200 rounded-2xl shadow-sm">
                    {qrCodeUrl ? (
                      <>
                        <QRCodeCanvas 
                          value={qrCodeUrl}
                          size={256}
                          level="H"
                          includeMargin={true}
                        />
                        <p className="text-xs text-slate-500 mt-2">
                          Scan with Alipay
                        </p>
                      </>
                    ) : (
                      <div className="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center">
                        <QrCodeIcon className="w-32 h-32 text-slate-400" />
                      </div>
                    )}
                  </div>
                  
                  {/* Polling Status */}
                  {status === 'polling' && (
                    <div className="mt-4">
                      <div className="flex items-center justify-center gap-2 text-teal-600 mb-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-sm font-medium">
                          Verifying payment...
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2">
                        Attempt {pollingAttempt}/60
                      </p>
                      {lastStatus !== null && (
                        <p className="text-xs text-slate-600">
                          Last status: {lastStatus} ({
                            lastStatus === 0 ? '⏳ Pending' : 
                            lastStatus === 1 ? '✅ Paid' : 
                            lastStatus === 2 ? '❌ Cancelled' : 
                            '❓ Unknown'
                          })
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Order Info */}
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-600">Order Number:</span>
                    <span className="font-semibold text-slate-900 font-mono text-sm">
                      {orderNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-600">Plan:</span>
                    <span className="font-semibold text-slate-900">
                      {planDetails.name}
                    </span>
                  </div>
                  {orderData && (
                    <>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-600">Start Date:</span>
                        <span className="font-medium text-slate-700 text-sm">
                          {new Date(orderData.startTime).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-600">End Date:</span>
                        <span className="font-medium text-slate-700 text-sm">
                          {new Date(orderData.endTime).toLocaleDateString()}
                        </span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                    <span className="text-slate-600">Amount:</span>
                    <span className="text-2xl font-bold text-teal-600">
                      ${orderData?.amount || planDetails.price}
                    </span>
                  </div>
                </div>

                {/* Manual Check Button */}
                <button
                  onClick={handleManualCheck}
                  className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  🔍 Check Payment Status Now
                </button>

                {/* Instructions */}
                <div className="text-left space-y-3 mb-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">How to pay:</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">1</div>
                    <p className="text-slate-700">Open Alipay app on your phone</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">2</div>
                    <p className="text-slate-700">Tap "Scan" and scan the QR code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">3</div>
                    <p className="text-slate-700">Confirm payment in Alipay</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">4</div>
                    <p className="text-slate-700">Wait for automatic confirmation</p>
                  </div>
                  <div className="flex items-start gap-3 border-t border-blue-200 pt-3 mt-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">!</div>
                    <p className="text-slate-700 font-medium">
                      After paying, click "Check Payment Status Now" button above
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SUCCESS */}
            {status === 'success' && (
              <div className="text-center py-12">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Payment Confirmed!
                </h2>
                <p className="text-slate-600 mb-6">
                  Redirecting to confirmation page...
                </p>
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                </div>
              </div>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <div className="text-center py-12">
                <XCircleIcon className="w-20 h-20 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Payment Error
                </h2>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  {errorMessage}
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <button
                    onClick={handleRetry}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                  >
                    Try Again
                  </button>
                  {orderNumber && (
                    <button
                      onClick={handleManualCheck}
                      className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
                    >
                      Check Order Status
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Warning */}
          {status === 'polling' && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 text-center font-medium">
                ⚠️ Please keep this page open while we verify your payment
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AlipayPayment;
