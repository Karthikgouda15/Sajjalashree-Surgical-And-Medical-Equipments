import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import GlassCard from '../components/GlassCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRentalsOnly, setShowRentalsOnly] = useState(false);

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesRental = !showRentalsOnly || product.isRental;
      return matchesSearch && matchesCategory && matchesRental;
    });
  }, [searchTerm, selectedCategory, showRentalsOnly]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Our Product Catalog</h1>
          <p className="text-slate-500 dark:text-slate-400">High-performance medical and surgical solutions for every clinical need.</p>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <GlassCard hover={false} className="p-4">
              <div className="flex items-center gap-2 mb-4 text-medical-600 font-bold">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find equipment..."
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-medical-500 outline-none dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </GlassCard>

            <GlassCard hover={false} className="p-4">
              <div className="flex items-center justify-between mb-4 text-medical-600 font-bold">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Availability</span>
                </div>
              </div>
              <button
                onClick={() => setShowRentalsOnly(!showRentalsOnly)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all border-2 ${
                  showRentalsOnly 
                    ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400' 
                    : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className="font-bold text-sm">Rentals Only</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${showRentalsOnly ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showRentalsOnly ? 'right-1' : 'left-1'}`} />
                </div>
              </button>
            </GlassCard>

            <GlassCard hover={false} className="p-4">
              <div className="flex items-center gap-2 mb-4 text-medical-600 font-bold">
                <Filter className="w-5 h-5" />
                <span>Categories</span>
              </div>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      if (category !== 'Medical Equipment Hire' && category !== 'All') setShowRentalsOnly(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-xl transition-all ${
                      selectedCategory === category
                        ? 'bg-medical-500 text-white shadow-lg shadow-medical-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard hover={false} className="p-6 bg-medical-500 text-white border-none shadow-xl shadow-medical-500/20">
              <Package className="w-10 h-10 mb-4 opacity-50" />
              <h4 className="font-bold mb-2">Bulk Orders?</h4>
              <p className="text-sm text-white/80 mb-4">Contact our team for special hospital pricing and bulk procurement.</p>
              <button className="w-full bg-white text-medical-600 py-2 rounded-lg font-bold text-sm">Inquire Now</button>
            </GlassCard>
          </div>

          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mb-6">
                   <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters or search keywords.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
