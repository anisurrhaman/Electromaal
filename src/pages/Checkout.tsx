import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Truck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, itemCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryArea, setDeliveryArea] = useState<'inside' | 'outside'>('inside');
  
  const deliveryCharge = deliveryArea === 'inside' ? 60 : 120;
  const finalTotal = cartTotal + deliveryCharge;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert('Order placed successfully! Order ID: EM-' + Math.floor(Math.random() * 1000000));
      navigate('/');
    }, 2000);
  };

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center font-bengali">
        <h2 className="text-2xl font-bold mb-4">আপনার কার্টে কোনো প্রোডাক্ট নেই</h2>
        <Link to="/shop" className="text-brand-orange hover:text-brand-black transition-colors font-bold underline">শপে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 space-y-6">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="bg-white p-5 md:p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
              <h2 className="text-xl md:text-2xl font-bold mb-6 font-bengali text-gray-800 flex items-center">
                <Truck className="w-6 h-6 mr-3 text-brand-orange" />
                ডেলিভারি ইনফরমেশন
              </h2>
              
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold font-bengali text-gray-700">আপনার নাম <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="text" 
                    placeholder="সম্পূর্ণ নাম লিখুন" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg font-bengali text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold font-bengali text-gray-700">মোবাইল নাম্বার <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="tel" 
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="01XXXXXXXXX" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg font-sans text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold font-bengali text-gray-700">ডেলিভারি এরিয়া <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={cn(
                      "flex items-center p-3 sm:p-4 border rounded-xl cursor-pointer transition-all",
                      deliveryArea === 'inside' ? "border-brand-orange bg-brand-orange/5" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    )}>
                      <input 
                        type="radio" 
                        name="area" 
                        checked={deliveryArea === 'inside'} 
                        onChange={() => setDeliveryArea('inside')}
                        className="w-4 h-4 text-brand-orange focus:ring-brand-orange accent-brand-orange" 
                      />
                      <span className="ml-3 text-sm font-bold font-bengali text-gray-800">ঢাকার ভিতরে (৳ ৬০)</span>
                    </label>
                    <label className={cn(
                      "flex items-center p-3 sm:p-4 border rounded-xl cursor-pointer transition-all",
                      deliveryArea === 'outside' ? "border-brand-orange bg-brand-orange/5" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    )}>
                      <input 
                        type="radio" 
                        name="area" 
                        checked={deliveryArea === 'outside'} 
                        onChange={() => setDeliveryArea('outside')}
                        className="w-4 h-4 text-brand-orange focus:ring-brand-orange accent-brand-orange" 
                      />
                      <span className="ml-3 text-sm font-bold font-bengali text-gray-800">ঢাকার বাইরে (৳ ১২০)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold font-bengali text-gray-700">ডেলিভারি ঠিকানা <span className="text-red-500">*</span></label>
                  <textarea 
                    required
                    rows={3} 
                    placeholder="বাসা নং, রোড নং, এলাকা..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg font-bengali text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all resize-none"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary & Payment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-5 md:p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <h3 className="text-lg font-bold font-bengali text-gray-800 border-b border-gray-100 pb-4 mb-4">অর্ডার সামারি</h3>
                
                {/* Items */}
                <div className="max-h-52 overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-3">
                            <div className="w-14 h-14 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-grow min-w-0 flex flex-col justify-center">
                                <p className="text-xs md:text-sm font-bold truncate text-gray-800 font-sans">{item.name}</p>
                                <p className="text-[11px] text-gray-500 font-sans mt-0.5">পরিমাণ: <span className="font-bold">{item.quantity}</span></p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800 font-sans">৳ {(item.price * item.quantity).toLocaleString('en-BD')}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calculation */}
                <div className="space-y-3 pt-4 border-t border-gray-100 font-sans text-gray-600 font-medium">
                    <div className="flex justify-between">
                        <span className="font-bengali">সাবটোটাল</span>
                        <span>৳ {cartTotal.toLocaleString('en-BD')}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bengali">ডেলিভারি চার্জ</span>
                        <span>৳ {deliveryCharge.toLocaleString('en-BD')}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-lg md:text-xl font-bold pt-4 mt-2 border-t border-dashed border-gray-300">
                        <span className="font-bengali text-gray-800">সর্বমোট</span>
                        <span className="text-brand-orange overflow-visible">৳ {finalTotal.toLocaleString('en-BD')}</span>
                    </div>
                </div>

                {/* Selected Payment Method highlighting */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold font-bengali text-gray-500 mb-3 uppercase">পেমেন্ট মেথড</h3>
                  <div className="flex items-center p-4 rounded-xl border border-brand-orange bg-brand-orange/5 text-gray-800">
                    <ShieldCheck className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0" />
                    <span className="font-bold font-bengali text-sm">Cash on Delivery (ক্যাশ অন ডেলিভারি)</span>
                  </div>
                  <p className="text-[11px] font-bengali mt-2 text-gray-500 text-center">প্রোডাক্ট হাতে পেয়ে পেমেন্ট করুন!</p>
                </div>
            </div>

            {/* Mobile Sticky Button - Hidden on large screens because it's sticky at the bottom */}
            <div className="lg:static fixed bottom-0 left-0 right-0 p-4 lg:p-0 bg-white lg:bg-transparent border-t lg:border-t-0 border-gray-200 lg:border-transparent lg:shadow-none shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50">
              <button 
                  form="checkout-form"
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-brand-orange text-white rounded-xl hover:bg-brand-orange/90 active:bg-brand-orange/80 transition-all flex items-center justify-center font-bengali font-bold text-lg shadow-[0_4px_15px_rgba(255,102,0,0.3)] disabled:bg-gray-300 disabled:shadow-none"
              >
                  {isProcessing ? 'অর্ডার প্রসেস হচ্ছে...' : 'কনফার্ম করুন'} <ChevronRight className="ml-1 w-6 h-6" />
              </button>
            </div>
            {/* Pad the bottom of the page on mobile so the sticky button doesn't hide content */}
            <div className="h-20 lg:hidden block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper inside file for simplicity
function cn(...inputs: any) {
    return inputs.filter(Boolean).join(' ');
}
