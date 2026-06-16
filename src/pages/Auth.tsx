import React, { useState } from 'react';
import { User, Mail, Lock, ShieldCheck, ArrowRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/utils';

export const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-brand-light font-sans flex items-center justify-center py-20 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Brand Logo Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-brand-blue/5 overflow-hidden border border-gray-100">
                    <div className="bg-brand-blue py-10 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-3xl font-display font-bold text-white mb-2">Electro<span className="text-brand-orange">maal</span></h1>
                            <p className="text-blue-100 text-xs font-medium uppercase tracking-widest">Premium Electronics Hub</p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue to-blue-900"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="flex mb-8 border-b border-gray-100">
                            <button 
                                onClick={() => setIsLogin(true)}
                                className={cn(
                                    "flex-grow pb-4 text-sm font-bold uppercase tracking-wider transition-all",
                                    isLogin ? "text-brand-blue border-b-2 border-brand-blue" : "text-gray-400"
                                )}
                            >Login</button>
                            <button 
                                onClick={() => setIsLogin(false)}
                                className={cn(
                                    "flex-grow pb-4 text-sm font-bold uppercase tracking-wider transition-all",
                                    !isLogin ? "text-brand-blue border-b-2 border-brand-blue" : "text-gray-400"
                                )}
                            >Sign Up</button>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.form 
                                key={isLogin ? 'login' : 'signup'}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                onSubmit={handleSubmit} 
                                className="space-y-6"
                            >
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <div className="relative">
                                            <input required type="text" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="e.g. John Doe" />
                                            <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <div className="relative">
                                        <input required type="email" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="name@company.com" />
                                        <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                                        {isLogin && <a href="#" className="text-[10px] text-brand-blue hover:underline">Forgot?</a>}
                                    </div>
                                    <div className="relative">
                                        <input required type="password" underline className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-blue transition-all outline-none" placeholder="••••••••" />
                                        <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 transition-all flex items-center justify-center shadow-lg shadow-brand-blue/20"
                                >
                                    {isLoading ? 'Processing...' : (
                                        <>{isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="ml-2 w-5 h-5" /></>
                                    )}
                                </button>

                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                                    <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest"><span className="bg-white px-2 text-gray-400">or continue with</span></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button type="button" className="flex items-center justify-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                        <span className="mr-2">G</span> <span className="text-xs font-bold">Google</span>
                                    </button>
                                    <button type="button" className="flex items-center justify-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                        <Github className="w-4 h-4 mr-2" /> <span className="text-xs font-bold">Github</span>
                                    </button>
                                </div>
                            </motion.form>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">
                    <ShieldCheck className="w-4 h-4 mr-2 text-green-500" /> SSL Secured Transaction
                </div>
            </motion.div>
        </div>
    );
};
