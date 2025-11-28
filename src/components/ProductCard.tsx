import {Plus} from 'lucide-react';
import { Product } from '../data/menu';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
        {product.spicy && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            Épicé
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <span className="text-amber-400 font-bold whitespace-nowrap">
            {product.price.toFixed(2)} €
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>
        
        <button className="w-full bg-neutral-800 hover:bg-white hover:text-neutral-900 text-white py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent">
          <Plus size={18} />
          Ajouter
        </button>
      </div>
    </div>
  );
}
