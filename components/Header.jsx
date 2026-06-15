import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="bg-pure-eggshell dark:bg-rich-bark w-full sticky top-0 z-50 border-b border-soft-sage/15">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link 
          to="/" 
          className="font-headline-md text-headline-md font-bold text-rich-bark dark:text-pure-eggshell cursor-pointer"
        >
          Hoseobang
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/shop" 
            className={`font-label-caps text-label-caps transition-colors duration-200 cursor-pointer active:opacity-70 ${
              location.pathname === '/shop' 
                ? 'text-aussie-eucalyptus border-b-2 border-aussie-eucalyptus pb-1' 
                : 'text-on-secondary-fixed-variant dark:text-on-primary-container hover:text-aussie-eucalyptus'
            }`}
          >
            Shop All
          </Link>
          <a className="font-label-caps text-label-caps text-on-secondary-fixed-variant dark:text-on-primary-container hover:text-aussie-eucalyptus transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Aussie Life</a>
          <a className="font-label-caps text-label-caps text-on-secondary-fixed-variant dark:text-on-primary-container hover:text-aussie-eucalyptus transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Korean Pantry</a>
          <a className="font-label-caps text-label-caps text-on-secondary-fixed-variant dark:text-on-primary-container hover:text-aussie-eucalyptus transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Gifts</a>
          <a className="font-label-caps text-label-caps text-on-secondary-fixed-variant dark:text-on-primary-container hover:text-aussie-eucalyptus transition-colors duration-200 cursor-pointer active:opacity-70" href="#">About</a>
        </div>

        <div className="flex items-center space-x-6 text-aussie-eucalyptus dark:text-primary-fixed-dim">
          <Link to="/checkout" className="flex items-center relative cursor-pointer hover:text-aussie-eucalyptus transition-colors duration-200 active:opacity-70">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
              shopping_cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-sunburnt-clay text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <span className="material-symbols-outlined cursor-pointer hover:text-aussie-eucalyptus transition-colors duration-200 active:opacity-70" style={{ fontVariationSettings: "'FILL' 0" }}>
            person
          </span>
        </div>
      </div>
    </nav>
  );
}
