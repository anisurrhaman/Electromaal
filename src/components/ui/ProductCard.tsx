import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/utils';
import { useCart } from '../../hooks/useCart';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Calculate dynamic old price for professional e-commerce feel
  const oldPrice = product.discountPercent 
    ? Math.round(product.price / (1 - (product.discountPercent / 100))) 
    : Math.round(product.price * 1.25);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-200 overflow-hidden group transition-all duration-300 hover:border-brand-orange/60 hover:shadow-md relative flex flex-col justify-between h-full rounded-lg"
    >
      {/* Subtle, thin grey lines resembling a simplified circuit trace at the corners for aesthetic continuity */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-300 pointer-events-none group-hover:border-brand-orange/40 transition-colors"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gray-300 pointer-events-none group-hover:border-brand-orange/40 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gray-300 pointer-events-none group-hover:border-brand-orange/40 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-300 pointer-events-none group-hover:border-brand-orange/40 transition-colors"></div>

      <div className="flex flex-col flex-1">
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Include styling for small orange "Discount" or "New" badges in the top right corner */}
          {product.badge && (
            <span className="absolute top-2 right-2 bg-brand-orange text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-sm rounded-sm z-20 font-sans">
              {product.badge === 'discount' && product.discountPercent ? `${product.discountPercent}% OFF` : product.badge.toUpperCase()}
            </span>
          )}

          {product.stock < 15 && product.stock > 0 && (
            <span className="absolute top-2 left-2 bg-brand-black/80 text-brand-orange text-[8px] font-bold px-1.5 py-0.5 uppercase tracking-wide font-mono rounded-sm">
              LOW STOCK: {product.stock}
            </span>
          )}
          
          {/* Accent Overlays */}
          <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors duration-300"></div>
        </Link>

        {/* Content Box */}
        <div className="p-2.5 sm:p-3 pb-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1">
              <Link to={`/shop?category=${product.category}`} className="font-mono text-[8px] sm:text-[9px] uppercase font-bold text-gray-400 hover:text-brand-orange transition-all">
                {product.category}
              </Link>
              {product.brand && (
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-brand-orange font-bold font-sans">
                  {product.brand}
                </span>
              )}
            </div>
            
            {/* Title bold, optimized to look extremely neat and clear */}
            <Link to={`/product/${product.id}`} className="block mt-1 text-[11px] sm:text-xs font-bold text-gray-800 hover:text-brand-orange transition-colors h-9 line-clamp-2 leading-tight tracking-normal font-sans">
              {product.name}
            </Link>

            {/* Subtle Rating Indicator like Daraz */}
            <div className="flex items-center space-x-1 mt-1">
              <Star className="w-2.5 h-2.5 fill-amber-400 stroke-amber-400" />
              <span className="text-[9px] text-gray-600 font-bold font-sans">{product.rating}</span>
              <span className="text-[9px] text-gray-400 font-sans">({product.reviews})</span>
            </div>
          </div>

          {/* Pricing: Show a crossed-out old price and a large, bold current price in orange */}
          <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-col justify-end">
            <div className="flex items-baseline space-x-2 flex-wrap">
              <span className="text-sm sm:text-base font-extrabold text-brand-orange font-sans">
                ৳ {product.price.toLocaleString('en-BD')}
              </span>
              <span className="text-[9px] sm:text-xs text-gray-400 line-through font-sans">
                ৳ {oldPrice.toLocaleString('en-BD')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Every card must have a bright orange "Add to Cart" button that spans the full width of the card's bottom */}
      {/* CTA: 'অর্ডার করুন' (Order Now) in Hind Siliguri font */}
      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className="w-full py-2 bg-brand-orange text-white font-bengali font-bold text-xs sm:text-sm text-center hover:bg-brand-black hover:text-white border-t border-brand-orange hover:border-brand-black transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200 flex items-center justify-center space-x-1 shadow-inner active:scale-[0.98]"
        title="Add to Cart / অর্ডার করুন"
      >
        <ShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>{product.stock === 0 ? "স্টক শেষ" : "অর্ডার করুন"}</span>
      </button>
    </motion.div>
  );
};
