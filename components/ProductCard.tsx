import React from 'react';
import { Product } from '../types';
import { Box, Settings, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-brand dark:hover:border-red-500 dark:shadow-none dark:hover:border-gray-600 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-800">
        <img
          src={`/product_images/light/${product.id}.jpg`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:hidden"
        />
        <img
          src={`/product_images/dark/${product.id}.png`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hidden dark:block"
        />
        {product.isBestSeller && (
          <div className="absolute top-1 left-1">
            <div className="bg-brand text-white px-1.5 py-0.5 rounded-xs text-[7px] font-black uppercase tracking-[0.1em] shadow-lg">
              BEST
            </div>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex flex-col flex-grow">
        <div className="space-y-0.5">
          <span className="text-[7px] sm:text-[8px] font-black text-brand dark:text-red-400 uppercase tracking-widest leading-none block">{product.category}</span>
          <h3 className="text-xs sm:text-base font-serif font-black text-black dark:text-white leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="space-y-1 text-[8px] sm:text-[10px] font-bold">
          <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
            <Box size={10} className="text-brand dark:text-red-500 shrink-0" />
            <span className="text-black dark:text-gray-300 truncate">{product.material}</span>
          </div>
        </div>

        <div className="pt-2 mt-auto flex items-center justify-between border-t border-gray-50 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="text-[7px] font-black text-gray-300 dark:text-gray-500 uppercase tracking-widest leading-none mb-0.5">Approx</span>
            <span className="text-sm sm:text-base font-serif font-black text-black dark:text-white">{product.price}</span>
          </div>
          <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded transition-all group-hover:bg-brand group-hover:text-white dark:group-hover:bg-red-500">
            <ArrowUpRight size={12} className="sm:size-14" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;