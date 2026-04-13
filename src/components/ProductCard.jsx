import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import GlassCard from './GlassCard';

const ProductCard = ({ product, delay }) => {
  return (
    <GlassCard delay={delay} className="group p-4 flex flex-col h-full">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-medical-500 hover:text-white transition-all transform -translate-y-4 group-hover:translate-y-0 duration-300">
            <Eye className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="px-3 py-1 bg-medical-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg">
            {product.category.split(' ')[0]}
          </div>
          {product.isRental && (
            <div className="px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg">
              Available for Hire
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-[10px] text-slate-400 ml-1">(12+ reviews)</span>
        </div>
        <h3 className="text-lg font-bold mb-2 dark:text-white leading-tight group-hover:text-medical-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
        <span className="font-bold text-medical-600">{product.price}</span>
        <button className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-medical-500 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Inquire
        </button>
      </div>
    </GlassCard>
  );
};

export default ProductCard;
