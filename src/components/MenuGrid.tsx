import { useState } from 'react';
import { products } from '../data/menu';
import ProductCard from './ProductCard';

const categories = ['Tous', 'Sushi', 'Maki', 'Sashimi', 'Chinois', 'Accompagnement'] as const;

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Tous');

  const filteredProducts = activeCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Notre Carte</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection rigoureuse de nos meilleures spécialités, préparées à la commande par nos chefs experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/20'
                  : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
