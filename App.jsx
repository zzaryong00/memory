import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

// Define products based on design system and download URLs
const PRODUCTS = [
  {
    id: "manuka-honey",
    name: "프리미엄 마누카 꿀 500g",
    price: 45000,
    category: "Korean Pantry",
    categoryLabel: "Australian Honey",
    image: "/images/manuka_honey_jar.png",
    description: "Sourced deep from the pristine native forests of Eastern Australia, this ultra-premium, high-potency Manuka honey boasts a guaranteed MGO rating of 850+. A medicinal-grade nectar with a robust, earthy flavor profile, perfect for daily wellness rituals or targeted immune support.",
    rating: 4.8,
    reviews: 128,
    isNew: true,
    tag: "MGO 850+"
  },
  {
    id: "doenjang",
    name: "Artisanal Doenjang Paste (수제 전통 된장)",
    price: 32000,
    category: "Korean Pantry",
    categoryLabel: "Korean Pantry",
    image: "/images/korean_snacks_tea.png",
    description: "A beautifully crafted ceramic bowl sitting on a rough wooden table, filled with premium Korean fermented bean paste. Made using traditional organic methods in warm morning light, emphasizing rustic yet modern tactile textures.",
    rating: 4.9,
    reviews: 86,
    tag: "Bestseller"
  },
  {
    id: "walnut-snack",
    name: "수제 호두 정과 세트 (Korean Traditional Walnuts)",
    price: 28000,
    category: "Korean Pantry",
    categoryLabel: "Korean Pantry",
    image: "/images/korean_snacks_tea.png",
    description: "Traditional Korean walnut snacks elegantly arranged. Crispy, sweet, and nutty, bringing a bridge between Korean and Australian tea cultures.",
    rating: 4.7,
    reviews: 42,
    isNew: true,
    tag: "New"
  },
  {
    id: "camphor-board",
    name: "캄포나무 도마 (Aussie Camphor Board - 중)",
    price: 65000,
    category: "Aussie Life",
    categoryLabel: "Aussie Life",
    image: "/images/hero_banner.png",
    description: "Handcrafted Australian Camphor Laurel wooden cutting board. Brings natural antibacterial properties and a rustic wooden texture to your modern kitchen.",
    rating: 4.9,
    reviews: 95
  },
  {
    id: "canvas-tote",
    name: "Bushland Canvas Tote Bag (캔버스 토트백)",
    price: 85000,
    category: "Aussie Life",
    categoryLabel: "Aussie Life",
    image: "/images/hero_banner.png",
    description: "Rugged yet premium olive green canvas tote bag, reflecting a relaxed Australian outback lifestyle. Highly durable and spacious.",
    rating: 4.6,
    reviews: 29
  },
  {
    id: "green-tea",
    name: "Jeju Green Tea Cold Brew (제주 세작 녹차)",
    price: 24000,
    category: "Korean Pantry",
    categoryLabel: "Korean Pantry",
    image: "/images/korean_snacks_tea.png",
    description: "Chilled and refreshing premium green tea cold brew from the volcanic soils of Jeju Island. Pure, clean taste.",
    rating: 4.8,
    reviews: 54
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    // Add visual alert
    alert(`${product.name}이(가) 장바구니에 ${quantity}개 담겼습니다.`);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="antialiased min-h-screen flex flex-col font-body-md relative bg-pure-eggshell text-rich-bark">
        <div className="texture-overlay"></div>
        
        <Header cartCount={cartCount} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={PRODUCTS} onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<ShopAll products={PRODUCTS} onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetail products={PRODUCTS} onAddToCart={handleAddToCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} onClearCart={handleClearCart} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
