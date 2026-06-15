import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ products, onAddToCart }) {
  // Get first 4 products for "New Arrivals"
  const newArrivals = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-rich-bark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Hero Banner" 
            className="w-full h-full object-cover opacity-70" 
            src="/images/hero_banner.png" 
          />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-pure-eggshell mb-6 drop-shadow-md">
            호주의 대자연과 한국의 정을 잇다
          </h1>
          <p className="font-body-lg text-body-lg text-oatmeal-canvas mb-10 max-w-2xl drop-shadow-sm">
            호서방이 엄선한 프리미엄 호주 라이프스타일 셀렉트샵
          </p>
          <Link 
            to="/shop" 
            className="bg-aussie-eucalyptus text-pure-eggshell font-label-caps text-label-caps px-8 py-4 rounded-lg hover:bg-primary-container transition-colors duration-300 shadow-md inline-block"
          >
            지금 둘러보기
          </Link>
        </div>
      </header>

      <main>
        {/* Brand Story Section */}
        <section className="bg-oatmeal-canvas py-section-gap px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <img 
              alt="Hoseobang Story Logo" 
              className="w-32 h-32 object-contain mb-8 opacity-90 mix-blend-multiply" 
              src="/images/manuka_honey_jar.png" 
            />
            <h2 className="font-headline-md text-headline-md text-rich-bark mb-6">호서방 이야기</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              호주 자연의 웅장함과 한국 가정의 따뜻함. 어울릴 것 같지 않은 두 세계가 호서방을 통해 만납니다. 
              우리는 겉치레보다는 본질에 집중하며, 자연 그대로의 건강함과 손길이 닿은 정성을 여러분의 일상에 전하고자 합니다. 
              신뢰할 수 있는 생산자로부터 직접 소싱한 제품들로, 당신의 삶에 작은 휴식과 건강을 선사합니다.
            </p>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-rich-bark mb-12 text-center">큐레이션</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(43,35,25,0.06)] bg-pure-eggshell aspect-square cursor-pointer">
              <img 
                alt="Premium Honey" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/manuka_honey_jar.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-bark/80 via-rich-bark/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-headline-sm text-headline-sm text-pure-eggshell mb-2">프리미엄 호주 꿀</h3>
                <Link 
                  to="/shop" 
                  className="text-pure-eggshell flex items-center font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  자세히 보기 <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(43,35,25,0.06)] bg-pure-eggshell aspect-square cursor-pointer">
              <img 
                alt="Traditional Snacks" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/korean_snacks_tea.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-bark/80 via-rich-bark/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-headline-sm text-headline-sm text-pure-eggshell mb-2">전통 한국 간식</h3>
                <Link 
                  to="/shop" 
                  className="text-pure-eggshell flex items-center font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  자세히 보기 <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(43,35,25,0.06)] bg-pure-eggshell aspect-square cursor-pointer">
              <img 
                alt="Aussie Lifestyle Goods" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/hero_banner.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-bark/80 via-rich-bark/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-headline-sm text-headline-sm text-pure-eggshell mb-2">호주 생활 잡화</h3>
                <Link 
                  to="/shop" 
                  className="text-pure-eggshell flex items-center font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  자세히 보기 <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals (Product Grid) */}
        <section className="bg-oatmeal-canvas py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-headline-lg text-headline-lg text-rich-bark">새로 들어온 제품</h2>
              <Link 
                to="/shop" 
                className="font-label-caps text-label-caps text-aussie-eucalyptus hover:text-rich-bark transition-colors border-b border-aussie-eucalyptus pb-1"
              >
                모두 보기
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {newArrivals.map((product) => (
                <div key={product.id} className="group flex flex-col relative">
                  <div className="relative bg-pure-eggshell rounded-xl overflow-hidden aspect-[4/5] mb-4 shadow-[0_2px_12px_rgba(43,35,25,0.04)]">
                    <Link to={`/product/${product.id}`} className="block w-full h-full">
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        src={product.image} 
                      />
                    </Link>
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-sunburnt-clay/10 text-sunburnt-clay px-2 py-1 rounded font-label-caps text-label-caps text-[10px]">
                        NEW
                      </div>
                    )}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        onAddToCart(product, 1);
                      }}
                      className="absolute bottom-4 right-4 bg-pure-eggshell/90 p-2 rounded-full shadow-sm text-rich-bark hover:text-aussie-eucalyptus hover:bg-pure-eggshell transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                        shopping_bag
                      </span>
                    </button>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h4 className="font-body-md text-body-md text-rich-bark mb-1 line-clamp-1 hover:text-aussie-eucalyptus transition-colors">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="font-label-price text-label-price text-aussie-eucalyptus">
                    ₩ {product.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-soft-sage/20">
          <h2 className="font-headline-md text-headline-md text-rich-bark mb-12">호서방의 약속</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-oatmeal-canvas flex items-center justify-center mb-6 text-aussie-eucalyptus">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  verified_user
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-rich-bark mb-3">100% 검증된 원산지</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">호주와 한국의 믿을 수 있는 생산자로부터 생산된 정품만을 취급합니다.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-oatmeal-canvas flex items-center justify-center mb-6 text-aussie-eucalyptus">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  handshake
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-rich-bark mb-3">생산자 직거래</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">유통 단계를 최소화하여 생산자에게 정당한 이익을, 소비자에게 합리적인 가격을 제공합니다.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-oatmeal-canvas flex items-center justify-center mb-6 text-aussie-eucalyptus">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  eco
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-rich-bark mb-3">지속 가능한 포장</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">자연을 생각하는 마음으로 재활용 및 생분해 가능한 소재를 우선적으로 사용합니다.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
