import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Phone, Mail, Zap } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/utils';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, setCartOpen } = useCart();
  const navigate = useNavigate();

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-800 border-b border-gray-200 shadow-sm">
      {/* Top Bar - Very Thin */}
      <div className="bg-gray-100 py-1.5 px-4 border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-[11px] font-bengali font-semibold text-gray-700">
          <div className="flex items-center">
             সারা বাংলাদেশে হোম ডেলিভারি
          </div>
          <div className="flex items-center">
            <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#25D366] font-sans font-bold hover:text-green-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-1">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              +880 1234 567890
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6">
        
        {/* Mobile Header: Logo & Search & Icons in a smart arrangement */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">
              E
            </div>
            <span className="font-display font-black text-xl tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">
              ELECTRO<span className="text-brand-orange">MAAL</span>
            </span>
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={() => setCartOpen(true)} 
              className="relative text-gray-700 hover:text-brand-orange transition-colors focus:outline-none"
              aria-label="Open Cart Drawer"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-brand-orange transition-colors">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Highly Visible on Mobile */}
        <div className="flex-1 w-full md:mx-6">
          <div className="relative w-full flex shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="সার্চ করুন..."
              className="w-full pl-4 pr-12 py-3 md:py-2.5 bg-white border border-brand-orange/60 rounded-l-md md:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange text-gray-800 placeholder-gray-400 font-bengali text-sm md:text-base transition-shadow"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="absolute right-[60px] top-[14px] md:top-[12px] text-gray-400 hover:text-brand-orange transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button 
              onClick={() => { if(searchQuery) navigate(`/shop?search=${encodeURIComponent(searchQuery)}`) }}
              className="bg-brand-orange hover:bg-orange-600 text-white px-5 md:px-6 rounded-r-md md:rounded-r-lg flex items-center justify-center transition-colors shadow-inner"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/auth" className="flex flex-col items-center text-gray-600 hover:text-brand-orange transition-colors group">
            <User className="w-6 h-6 group-hover:scale-105 transition-transform" />
            <span className="text-[11px] font-bold font-sans mt-1">Account</span>
          </Link>
          <button 
            onClick={() => setCartOpen(true)} 
            className="flex flex-col items-center text-gray-600 hover:text-brand-orange transition-colors relative group focus:outline-none"
            aria-label="Open Cart Drawer"
          >
            <ShoppingCart className="w-6 h-6 group-hover:scale-105 transition-transform" />
            <span className="text-[11px] font-bold font-sans mt-1">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-[0_2px_4px_rgba(255,102,0,0.3)]">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden z-50 shadow-lg",
        isMenuOpen ? "max-h-screen pb-4" : "max-h-0"
      )}>
        <div className="px-4 py-4 space-y-4 font-bengali">
          <div className="flex flex-col space-y-3 font-semibold text-[15px] text-gray-700">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange py-1 transition-colors">হোম</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange py-1 transition-colors">সকল পণ্য</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange py-1 transition-colors">যোগাযোগ</Link>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="flex items-center text-gray-700 hover:text-brand-orange transition-colors font-bold text-sm">
              <User className="w-5 h-5 mr-3 text-brand-orange" /> My Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
