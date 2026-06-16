import React from 'react';
import { User, Package, MapPin, Settings, LogOut, ChevronRight, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/utils';

export const Account: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen py-10 font-sans">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                            <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                                AI
                            </div>
                            <h3 className="font-bold text-lg">Anisul Islam</h3>
                            <p className="text-xs text-gray-500">anis55491@gmail.com</p>
                            <button className="mt-4 text-[10px] uppercase font-bold text-brand-orange hover:underline tracking-widest">Edit Profile</button>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <nav className="flex flex-col">
                                {[
                                    { icon: Package, label: 'My Orders', active: true },
                                    { icon: MapPin, label: 'Addresses', active: false },
                                    { icon: Bell, label: 'Notifications', active: false },
                                    { icon: Settings, label: 'Security', active: false },
                                    { icon: LogOut, label: 'Sign Out', active: false, color: 'text-red-500' }
                                ].map((item, idx) => (
                                    <button 
                                        key={idx}
                                        className={cn(
                                            "flex items-center px-6 py-4 text-sm font-medium border-l-4 transition-all",
                                            item.active ? "bg-blue-50/50 border-brand-blue text-brand-blue" : "border-transparent text-gray-600 hover:bg-gray-50"
                                        )}
                                    >
                                        <item.icon className={cn("w-5 h-5 mr-4", item.color)} />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                                <h1 className="text-2xl font-bold">Recent Orders</h1>
                                <button className="text-sm font-bold text-brand-blue hover:underline">View All</button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { id: 'EM-984210', date: 'Oct 12, 2024', total: 125000, status: 'Processing', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100' },
                                    { id: 'EM-875122', date: 'Sept 28, 2024', total: 28000, status: 'Delivered', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' }
                                ].map((order) => (
                                    <div key={order.id} className="flex items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors cursor-pointer group">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 mr-4">
                                            <img src={order.img} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <p className="font-bold text-gray-800">Order #{order.id}</p>
                                                <span className={cn(
                                                    "text-[10px] font-bold uppercase px-2 py-1 rounded-full",
                                                    order.status === 'Delivered' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                                                )}>{order.status}</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Placed on {order.date}</p>
                                            <p className="text-sm font-bold text-brand-blue mt-2">৳{order.total.toLocaleString()}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-blue ml-4" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold mb-4">Default Shipping</h4>
                                <div className="text-sm text-gray-500 space-y-1">
                                    <p className="font-bold text-gray-800">Anisul Islam</p>
                                    <p>Level 5, Basundhara City Mall</p>
                                    <p>Dhaka, 1215</p>
                                    <p>Bangladesh</p>
                                </div>
                                <button className="mt-4 text-xs font-bold text-brand-blue uppercase tracking-widest hover:underline">Change Default</button>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold mb-4">Saved Payments</h4>
                                <div className="flex items-center space-x-3 text-sm text-gray-500">
                                    <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center font-bold text-[10px]">VISA</div>
                                    <span>•••• 4242</span>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-2">Expires 12/28</p>
                                <button className="mt-4 text-xs font-bold text-brand-blue uppercase tracking-widest hover:underline">Manage Methods</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
