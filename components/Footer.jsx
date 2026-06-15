import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface w-full mt-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto bg-oatmeal-canvas dark:bg-rich-bark">
        <div className="md:col-span-1 mb-8 md:mb-0">
          <div className="font-headline-sm text-headline-sm text-rich-bark dark:text-pure-eggshell mb-4">
            Hoseobang
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container">
            © 2026 Hoseobang. Bridges between Australia & Korea.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary-container hover:text-sunburnt-clay transition-colors duration-200 cursor-pointer" href="#">Shipping Policy</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary-container hover:text-sunburnt-clay transition-colors duration-200 cursor-pointer" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary-container hover:text-sunburnt-clay transition-colors duration-200 cursor-pointer" href="#">Privacy</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary-container hover:text-sunburnt-clay transition-colors duration-200 cursor-pointer" href="#">Sustainability</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-primary-container hover:text-sunburnt-clay transition-colors duration-200 cursor-pointer" href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
