import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, PackageSearch, Hexagon, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="bg-white min-h-screen pt-20 pb-16 sm:pb-20">
      {/* Tight Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="bg-black py-8 sm:py-12 px-6 sm:px-8 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 p-8 text-brand opacity-5">
             <Hexagon size={100} fill="currentColor" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white mb-3">Catalog</h1>
          <p className="text-gray-400 max-w-lg text-xs sm:text-sm font-medium mb-6">
            Precision industrial components for extreme environments.
          </p>
          
          <div className="w-full max-w-lg relative">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none text-gray-500">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand shadow-xl text-sm sm:text-base font-serif placeholder:text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Sidebar & Grid */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

    {/* Filters */}
    <div className="lg:w-64 shrink-0 space-y-4 lg:space-y-8">

      {/* Mobile + Desktop filter layout */}
      <div>
        <div className="flex flex-wrap lg:flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 lg:py-3 rounded font-black uppercase tracking-widest text-[8px] sm:text-[9px] transition-all flex items-center justify-center lg:justify-start
                ${
                  activeCategory === cat
                    ? "bg-brand text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Parts — now visible on all screens */}
      <div className="bg-light p-5 sm:p-6 rounded-xl border border-gray-100">
        <h4 className="text-[10px] font-black text-black uppercase tracking-widest mb-2">
          Custom Parts
        </h4>
        <p className="text-[10px] text-gray-400 font-bold leading-relaxed mb-4">
          Don’t see your specific component? We build to blueprint.
        </p>
        <a
          href="/#contact"
          className="text-[9px] font-black uppercase tracking-widest text-brand hover:underline flex items-center gap-1"
        >
          Send Blueprint <ChevronRight size={10} />
        </a>
      </div>

    </div>

    {/* Product Grid */}
    <div className="flex-1">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
          <PackageSearch size={40} className="text-gray-200 mb-2" />
          <h3 className="text-lg font-serif font-black text-gray-300">
            No results
          </h3>
        </div>
      )}
    </div>

  </div>
</div>
    </div>
  );
};

export default Products;