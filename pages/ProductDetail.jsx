import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('500g');
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const thumbnails = [
    product.image,
    "/images/korean_snacks_tea.png",
    "/images/hero_banner.png"
  ];

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 text-left">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex text-sm text-soft-sage mb-8 items-center space-x-2">
        <Link className="hover:text-aussie-eucalyptus transition-colors" to="/">Home</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <Link className="hover:text-aussie-eucalyptus transition-colors" to="/shop">Shop</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span aria-current="page" className="text-rich-bark font-medium">{product.name}</span>
      </nav>

      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-section-gap">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-pure-eggshell rounded-xl overflow-hidden relative shadow-[0_4px_24px_rgba(43,35,25,0.06)] border border-soft-sage/10 group">
            <img 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src={thumbnails[activeThumbnail]} 
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-pure-eggshell/90 backdrop-blur text-aussie-eucalyptus font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-aussie-eucalyptus/20 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">verified</span> 100% Pure
              </span>
              {product.tag && (
                <span className="bg-sunburnt-clay/10 text-sunburnt-clay font-label-caps text-label-caps px-3 py-1.5 rounded-full border border-sunburnt-clay/20 w-fit">
                  {product.tag}
                </span>
              )}
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <div 
                key={index}
                onClick={() => setActiveThumbnail(index)}
                className={`aspect-square bg-pure-eggshell rounded-lg overflow-hidden border-2 cursor-pointer transition-colors ${
                  activeThumbnail === index ? 'border-aussie-eucalyptus' : 'border-soft-sage/30 hover:border-aussie-eucalyptus/50'
                }`}
              >
                <img alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" src={thumb} />
              </div>
            ))}
            <div className="aspect-square bg-pure-eggshell rounded-lg overflow-hidden border border-soft-sage/30 hover:border-aussie-eucalyptus/50 cursor-pointer flex items-center justify-center bg-surface-variant text-rich-bark">
              <span className="material-symbols-outlined">play_circle</span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-rich-bark mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-sunburnt-clay">
                <span className="material-symbols-outlined fill text-[20px]">star</span>
                <span className="material-symbols-outlined fill text-[20px]">star</span>
                <span className="material-symbols-outlined fill text-[20px]">star</span>
                <span className="material-symbols-outlined fill text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star_half</span>
                <span className="ml-2 text-sm text-soft-sage font-medium">({product.reviews} Reviews)</span>
              </div>
            </div>
            <p className="font-label-price text-[28px] text-aussie-eucalyptus mb-6">
              ₩ {product.price.toLocaleString()} <span className="text-sm font-normal text-soft-sage">KRW</span>
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 mb-8 border-t border-soft-sage/20 pt-6">
            {/* Size Selector */}
            <div>
              <label className="block font-label-caps text-label-caps text-rich-bark mb-3">Select Size</label>
              <div className="flex space-x-3">
                {['250g', '500g', '1kg'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => size !== '1kg' && setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      size === '1kg' 
                        ? 'border-soft-sage/30 text-rich-bark opacity-50 cursor-not-allowed relative overflow-hidden'
                        : selectedSize === size 
                          ? 'border-aussie-eucalyptus bg-pure-eggshell text-aussie-eucalyptus'
                          : 'border-soft-sage/30 bg-transparent text-rich-bark hover:border-aussie-eucalyptus'
                    }`}
                  >
                    {size}
                    {size === '1kg' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-soft-sage/50 rotate-[-15deg]"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-soft-sage/40 rounded-lg bg-pure-eggshell p-1 w-full sm:w-32 h-[52px]">
                <button 
                  onClick={decrementQty}
                  className="p-2 text-rich-bark hover:text-sunburnt-clay transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">remove</span>
                </button>
                <input 
                  aria-label="Quantity" 
                  className="w-full text-center bg-transparent border-none focus:ring-0 font-medium text-rich-bark p-0 focus:outline-none" 
                  readOnly 
                  value={quantity}
                />
                <button 
                  onClick={incrementQty}
                  className="p-2 text-rich-bark hover:text-aussie-eucalyptus transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-grow h-[52px] bg-aussie-eucalyptus text-pure-eggshell rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>

          {/* Features Accordion */}
          <div className="border-t border-soft-sage/20 divide-y divide-soft-sage/20">
            <div className="py-4 cursor-pointer group flex justify-between items-center">
              <span className="font-headline-sm text-[18px] text-rich-bark group-hover:text-aussie-eucalyptus transition-colors">Health Benefits</span>
              <span className="material-symbols-outlined text-soft-sage group-hover:text-aussie-eucalyptus transition-colors">add</span>
            </div>
            <div className="py-4 cursor-pointer group flex justify-between items-center">
              <span className="font-headline-sm text-[18px] text-rich-bark group-hover:text-aussie-eucalyptus transition-colors">Origin & Extraction</span>
              <span className="material-symbols-outlined text-soft-sage group-hover:text-aussie-eucalyptus transition-colors">add</span>
            </div>
            <div className="py-4 cursor-pointer group flex justify-between items-center">
              <span className="font-headline-sm text-[18px] text-rich-bark group-hover:text-aussie-eucalyptus transition-colors">Shipping & Returns</span>
              <span className="material-symbols-outlined text-soft-sage group-hover:text-aussie-eucalyptus transition-colors">add</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
