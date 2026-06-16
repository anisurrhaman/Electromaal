import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/utils';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center font-sans">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-blue/90 transition-all">
          Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen py-10 font-sans tech-grid">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-display font-bold text-brand-dark mb-8 tracking-tighter">Inventory <span className="text-brand-blue">Matrix</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item) => (
              <motion.div
                layout
                key={item.id}
                className="bg-white p-4 rounded-none border border-gray-200 flex flex-col md:flex-row items-center gap-6 group hover:border-brand-blue transition-colors"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-none border border-gray-100 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <span className="tech-mono text-[9px] font-bold text-brand-blue uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-md font-bold text-brand-dark mt-1 hover:text-brand-blue transition-colors">
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h3>
                  <p className="tech-mono text-[10px] text-gray-400 mt-2">UNIT_QTY: {formatPrice(item.price)}</p>
                </div>

                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:text-brand-blue transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:text-brand-blue transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right flex md:flex-col justify-between items-center md:items-end w-full md:w-auto gap-4">
                  <p className="text-lg font-bold text-brand-blue">{formatPrice(item.price * item.quantity)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold border-b border-gray-100 pb-4 mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal ({itemCount} items)</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Estimated Shipping</span>
                        <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Taxes (VAT 5%)</span>
                        <span>{formatPrice(cartTotal * 0.05)}</span>
                    </div>
                </div>

                <div className="flex justify-between items-end border-t border-gray-100 pt-6 mb-8">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Total Amount</p>
                        <p className="text-2xl font-display font-bold text-brand-blue">{formatPrice(cartTotal * 1.05)}</p>
                    </div>
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">
                        Saves ৳1,200
                    </div>
                </div>

                <Link to="/checkout" className="w-full flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20 active:scale-[0.98]">
                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center text-xs text-gray-500">
                        <Truck className="w-4 h-4 mr-3 text-brand-blue" />
                        <span>Nationwide Delivery in 3-5 business days</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 mr-3 text-brand-blue" />
                        <span>SSL Secure Payment Gateway</span>
                    </div>
                </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold mb-3">Do you have a promo code?</p>
                <div className="flex space-x-2">
                    <input 
                        type="text" 
                        placeholder="Enter code" 
                        className="flex-grow px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors">Apply</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
