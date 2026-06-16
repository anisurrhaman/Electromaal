import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="bg-brand-light min-h-screen py-20 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Get in touch</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mt-2 mb-6">Contact <span className="text-brand-orange">Electromaal</span></h1>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Have questions about a product, order status, or technical support? Our team of electronics experts is ready to help you nationwide.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue mr-6 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1">Customer Support</h4>
                                    <p className="text-gray-500">+880 1234 567890</p>
                                    <p className="text-xs text-gray-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue mr-6 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1">Email Inquiry</h4>
                                    <p className="text-gray-500">support@electromaal.com</p>
                                    <p className="text-xs text-gray-400 mt-1">24/7 Response for General Questions</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue mr-6 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1">Headquarters</h4>
                                    <p className="text-gray-500">Level 5, Basundhara City Mall, Dhaka</p>
                                    <p className="text-xs text-gray-400 mt-1">Experience Center & Service Hub</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-blue/5 border border-gray-100">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-brand-dark mb-4">Message Sent!</h2>
                                <p className="text-gray-500">Thank you for reaching out. Our support team will get back to you within 24 hours.</p>
                                <button onClick={() => setStatus(null)} className="mt-8 px-6 py-2 bg-brand-blue text-white rounded-lg font-bold">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Full Name</label>
                                        <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Email Address</label>
                                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Subject</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none">
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Order Tracking</option>
                                        <option>Corporate Sales</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Message</label>
                                    <textarea required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-brand-blue/20"
                                >
                                    {status === 'sending' ? 'Sending...' : (
                                        <><span>Send Message</span><Send className="w-4 h-4 ml-2" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-20 rounded-3xl overflow-hidden h-[400px] border border-gray-200 grayscale contrast-125 opacity-80 shadow-inner bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Interactive Map Location Loading...</p>
                </div>
            </div>
        </div>
    );
};
