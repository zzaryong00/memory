import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout({ cart, onClearCart }) {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isOrdered, setIsOrdered] = useState(false);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingCost = shippingMethod === 'standard' ? 8000 : 15000;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shippingCost + tax;

  const handlePayNow = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    onClearCart();
  };

  if (isOrdered) {
    return (
      <main className="flex-grow pt-[100px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-md mx-auto w-full text-center">
        <div className="bg-pure-eggshell rounded-xl p-8 shadow-soft-drop border border-soft-sage/15 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-aussie-eucalyptus/10 text-aussie-eucalyptus flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[36px] fill">verified</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-rich-bark mb-4">주문이 완료되었습니다!</h1>
          <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
            호서방을 이용해 주셔서 감사합니다.<br />
            주문하신 내역과 배송 정보는 입력하신 이메일로 전송되었습니다. 따뜻함이 가득한 하루 되세요.
          </p>
          <Link 
            to="/" 
            className="w-full bg-aussie-eucalyptus text-pure-eggshell font-label-caps text-label-caps py-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm block text-center"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-[100px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-left">
      <div className="mb-8 md:mb-12">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-rich-bark">Checkout</h1>
        <p className="font-body-md text-body-md text-secondary mt-2">Complete your purchase to bring a touch of hearth home.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-12 items-start">
        {/* Left Column: Forms */}
        <form onSubmit={handlePayNow} className="lg:col-span-7 flex flex-col gap-10">
          {/* Contact Information */}
          <section>
            <h2 className="font-headline-sm text-headline-sm mb-4 border-b border-soft-sage/20 pb-2">Contact Information</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="email">Email</label>
                <input 
                  required
                  className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" 
                  id="email" 
                  placeholder="your@email.com" 
                  type="email"
                />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <input 
                  className="rounded border-outline-variant text-aussie-eucalyptus focus:ring-aussie-eucalyptus w-4 h-4 cursor-pointer" 
                  id="newsletter" 
                  type="checkbox"
                />
                <label className="font-body-sm text-body-sm text-secondary cursor-pointer" htmlFor="newsletter">
                  Keep me updated on news and exclusive offers
                </label>
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section>
            <h2 className="font-headline-sm text-headline-sm mb-4 border-b border-soft-sage/20 pb-2">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col md:col-span-2">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="country">Country/Region</label>
                <select 
                  className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors appearance-none" 
                  id="country"
                >
                  <option>South Korea</option>
                  <option>Australia</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="firstName">First Name</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="firstName" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="lastName">Last Name</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="lastName" type="text" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="address">Address</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="address" placeholder="Street address or P.O. Box" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="city">City</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="city" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="postcode">Postal Code</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="postcode" type="text" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-label-caps text-label-caps text-secondary mb-1" htmlFor="phone">Phone</label>
                <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus transition-colors" id="phone" type="tel" />
              </div>
            </div>
          </section>

          {/* Delivery Method */}
          <section>
            <h2 className="font-headline-sm text-headline-sm mb-4 border-b border-soft-sage/20 pb-2">Delivery Method</h2>
            <div className="flex flex-col gap-3">
              <label className="relative cursor-pointer">
                <input 
                  checked={shippingMethod === 'standard'} 
                  onChange={() => setShippingMethod('standard')}
                  className="peer sr-only" 
                  name="delivery" 
                  type="radio"
                />
                <div className="w-full flex items-center justify-between p-4 border border-outline-variant rounded bg-pure-eggshell/50 hover:border-soft-sage transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      shippingMethod === 'standard' ? 'border-aussie-eucalyptus' : 'border-outline-variant'
                    }`}>
                      {shippingMethod === 'standard' && <div className="w-2 h-2 rounded-full bg-aussie-eucalyptus"></div>}
                    </div>
                    <div>
                      <span className="block font-body-md text-body-md text-rich-bark font-medium">Standard Delivery</span>
                      <span className="block font-body-sm text-body-sm text-secondary">3-5 Business Days</span>
                    </div>
                  </div>
                  <span className="font-label-price text-label-price text-rich-bark">₩ 8,000</span>
                </div>
              </label>
              <label className="relative cursor-pointer">
                <input 
                  checked={shippingMethod === 'express'} 
                  onChange={() => setShippingMethod('express')}
                  className="peer sr-only" 
                  name="delivery" 
                  type="radio"
                />
                <div className="w-full flex items-center justify-between p-4 border border-outline-variant rounded bg-pure-eggshell/50 hover:border-soft-sage transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      shippingMethod === 'express' ? 'border-aussie-eucalyptus' : 'border-outline-variant'
                    }`}>
                      {shippingMethod === 'express' && <div className="w-2 h-2 rounded-full bg-aussie-eucalyptus"></div>}
                    </div>
                    <div>
                      <span className="block font-body-md text-body-md text-rich-bark font-medium">Express Courier</span>
                      <span className="block font-body-sm text-body-sm text-secondary">1-2 Business Days</span>
                    </div>
                  </div>
                  <span className="font-label-price text-label-price text-rich-bark">₩ 15,000</span>
                </div>
              </label>
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <h2 className="font-headline-sm text-headline-sm mb-4 border-b border-soft-sage/20 pb-2">Payment</h2>
            <p className="font-body-sm text-body-sm text-secondary mb-4">All transactions are secure and encrypted.</p>
            <div className="flex flex-col border border-outline-variant rounded overflow-hidden">
              {/* Credit Card */}
              <div className="border-b border-outline-variant last:border-0 bg-pure-eggshell">
                <label className="flex items-center p-4 cursor-pointer">
                  <input 
                    checked={paymentMethod === 'card'} 
                    onChange={() => setPaymentMethod('card')}
                    className="peer sr-only" 
                    name="payment" 
                    type="radio"
                  />
                  <div className="flex items-center gap-3 w-full">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      paymentMethod === 'card' ? 'border-aussie-eucalyptus' : 'border-outline-variant'
                    }`}>
                      {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-aussie-eucalyptus"></div>}
                    </div>
                    <span className="font-body-md text-body-md font-medium flex-1">Credit Card</span>
                    <div className="flex gap-1 text-secondary">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                  </div>
                </label>
                {paymentMethod === 'card' && (
                  <div className="p-4 pt-0 border-t border-outline-variant/50 bg-oatmeal-canvas/30">
                    <div className="flex flex-col gap-3 mt-3">
                      <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus w-full" placeholder="Card number" type="text" />
                      <div className="grid grid-cols-2 gap-3">
                        <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus w-full" placeholder="Expiration date (MM/YY)" type="text" />
                        <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus w-full" placeholder="Security code" type="password" />
                      </div>
                      <input required className="bg-pure-eggshell border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus focus:ring-1 focus:ring-aussie-eucalyptus w-full" placeholder="Name on card" type="text" />
                    </div>
                  </div>
                )}
              </div>
              {/* PayPal */}
              <div className="border-b border-outline-variant last:border-0 bg-pure-eggshell/50 hover:bg-pure-eggshell transition-colors">
                <label className="flex items-center p-4 cursor-pointer">
                  <input 
                    checked={paymentMethod === 'paypal'} 
                    onChange={() => setPaymentMethod('paypal')}
                    className="peer sr-only" 
                    name="payment" 
                    type="radio"
                  />
                  <div className="flex items-center gap-3 w-full">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      paymentMethod === 'paypal' ? 'border-aussie-eucalyptus' : 'border-outline-variant'
                    }`}>
                      {paymentMethod === 'paypal' && <div className="w-2 h-2 rounded-full bg-aussie-eucalyptus"></div>}
                    </div>
                    <span className="font-body-md text-body-md font-medium flex-1">PayPal</span>
                  </div>
                </label>
              </div>
            </div>
          </section>

          <button 
            type="submit"
            className="w-full bg-aussie-eucalyptus text-pure-eggshell font-label-caps text-label-caps py-4 rounded-lg mt-8 hover:opacity-90 active:scale-[0.98] transition-all shadow-sm cursor-pointer text-center"
          >
            Pay Now
          </button>
        </form>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="sticky top-[100px] bg-pure-eggshell rounded-xl p-6 md:p-8 shadow-sm border border-soft-sage/15">
            <h2 className="font-headline-sm text-headline-sm mb-6 text-rich-bark">Order Summary</h2>
            
            {/* Items List */}
            <div className="flex flex-col gap-6 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <p className="text-secondary text-body-md">장바구니가 비어 있습니다.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-oatmeal-canvas shrink-0 border border-outline-variant/30 relative">
                      <img alt={item.product.name} className="w-full h-full object-cover" src={item.product.image} />
                      <span className="absolute -top-2 -right-2 bg-secondary text-pure-eggshell font-label-caps text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-body-md text-body-md font-medium text-rich-bark line-clamp-2">{item.product.name}</h3>
                      <p className="font-body-sm text-body-sm text-secondary">{item.product.categoryLabel}</p>
                    </div>
                    <div className="font-label-price text-label-price text-aussie-eucalyptus">
                      ₩ {(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Discount Code */}
            <div className="flex gap-2 mb-6 border-y border-soft-sage/20 py-4">
              <input className="bg-oatmeal-canvas border border-outline-variant rounded p-3 font-body-md text-body-md focus:outline-none focus:border-aussie-eucalyptus w-full" placeholder="Gift card or discount code" type="text" />
              <button type="button" className="bg-secondary text-pure-eggshell px-4 rounded font-label-caps text-label-caps hover:bg-rich-bark transition-colors cursor-pointer">Apply</button>
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3 font-body-md text-body-md text-secondary">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-rich-bark">₩ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-rich-bark">₩ {shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (10%)</span>
                <span className="font-medium text-rich-bark">₩ {tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-end mt-4 pt-4 border-t border-soft-sage/20">
                <span className="font-headline-sm text-headline-sm text-rich-bark">Total</span>
                <span className="font-headline-md text-headline-md text-aussie-eucalyptus">₩ {total.toLocaleString()}</span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-center text-outline mt-4">
              <span className="material-symbols-outlined text-[16px] inline-block align-text-bottom mr-1">lock</span>
              Secure SSL Encrypted Payment
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
