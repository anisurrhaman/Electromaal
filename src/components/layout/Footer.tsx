import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Info */}
          <div>
            <Link to="/" className="text-xl font-display font-bold text-white mb-3 block">
              Electro<span className="text-brand-orange">maal</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Electromaal is Bangladesh's leading electronics destination. We provide original products from top global brands.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Service</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-brand-orange flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-brand-orange flex-shrink-0" />
                <span>+880 1850-005600</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-center text-gray-500 text-[10px]">
          <p>&copy; {new Date().getFullYear()} Electromaal.</p>
        </div>
      </div>
    </footer>
  );
};
