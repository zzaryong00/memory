import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopAll({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // Default or popular
  });

  const categories = ['All', 'Aussie Life', 'Korean Pantry', 'Gifts'];

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12">
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline-lg text-headline-lg md:font-display-hero md:text-display-hero text-rich-bark mb-2">Shop All</h1>
          <p className="font-body-md text-body-md text-warm-khaki max-w-2xl">
            Curated goods bringing the best of the Australian outdoors and Korean warmth directly to your home.
          </p>
        </div>
        {/* Filters */}
        <div className="flex gap-4 w-full md:w-auto">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-pure-eggshell border border-soft-sage focus:border-aussie-eucalyptus rounded-[6px] py-2 px-4 font-body-sm text-body-sm text-rich-bark outline-none flex-1 md:flex-none cursor-pointer"
          >
            <option value="popular">Sort by Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <button className="bg-pure-eggshell border border-soft-sage text-rich-bark rounded-[6px] py-2 px-4 font-label-caps text-label-caps flex items-center gap-2 hover:border-aussie-eucalyptus transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filters
          </button>
        </div>
      </div>

      {/* Layout Grid: Sidebar + Products */}
      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Categories */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="font-label-caps text-label-caps text-warm-khaki mb-4 uppercase tracking-wider hidden md:block">Categories</h2>
            <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <li key={category}>
                  <button 
                    onClick={() => setSelectedCategory(category)}
                    className={`font-body-sm text-body-sm py-2 px-4 rounded-lg w-full text-left whitespace-nowrap transition-colors duration-200 ${
                      selectedCategory === category 
                        ? 'bg-aussie-eucalyptus text-pure-eggshell' 
                        : 'text-on-surface-variant hover:bg-pure-eggshell hover:text-aussie-eucalyptus'
                    }`}
                  >
                    {category === 'All' ? 'Shop All' : category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {sortedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-pure-eggshell rounded-[12px] shadow-soft-drop overflow-hidden flex flex-col group border border-soft-sage/15"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-surface-variant">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={product.image} 
                  />
                </Link>
                {product.tag && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-sunburnt-clay/10 text-sunburnt-clay font-label-caps text-[10px] py-1 px-2 rounded-full uppercase font-bold tracking-wide backdrop-blur-sm">
                      {product.tag}
                    </span>
                  </div>
                )}
                <button 
                  onClick={() => onAddToCart(product, 1)}
                  className="absolute bottom-4 right-4 bg-pure-eggshell/90 text-aussie-eucalyptus w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-aussie-eucalyptus hover:text-pure-eggshell cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <div className="p-5 flex flex-col flex-grow text-left">
                <p className="font-label-caps text-[10px] text-warm-khaki uppercase mb-1">{product.categoryLabel}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-headline-sm text-body-lg text-rich-bark mb-2 flex-grow hover:text-aussie-eucalyptus transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-auto">
                  <p className="font-label-price text-label-price text-aussie-eucalyptus">
                    ₩ {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
