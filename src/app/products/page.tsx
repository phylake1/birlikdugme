"use client";

import { useState, useRef } from "react";
import { Search, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/905XXXXXXXXX" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Tümü",
    "Plastik Düğme",
    "Metal Düğme",
    "Ayaklı Düğme",
    "Fermuar",
    "Toka",
    "Metal Aksesuar",
    "Çıt Çıt",
    "Broş",
    "Kemer Tokası",
    "Etiket",
    "Aplik",
  ];

  const products = [
    {
      id: 1,
      name: "Premium Blazer Düğmesi",
      category: "Metal Düğme",
      image: "/img/1.jpg",
      description: "Altın kaplama, şık ve dayanıklı",
    },
    {
      id: 2,
      name: "Klasik Gömlek Düğmesi",
      category: "Plastik Düğme",
      image: "/img/2.jpg",
      description: "Beyaz, 4 delikli standart",
    },
    {
      id: 3,
      name: "Dekoratif Ceket Düğmesi",
      category: "Metal Düğme",
      image: "/img/3.jpg",
      description: "Kabartmalı desenli, premium",
    },
    {
      id: 4,
      name: "YKK Metal Fermuar",
      category: "Fermuar",
      image: "/img/4.jpg",
      description: "Pirinç, 20cm-80cm arası",
    },
    {
      id: 5,
      name: "Kemer Tokası Gümüş",
      category: "Toka",
      image: "/img/5.jpg",
      description: "Paslanmaz çelik, ayarlanabilir",
    },
    {
      id: 6,
      name: "Çıt Çıt Seti",
      category: "Çıt Çıt",
      image: "/img/6.jpg",
      description: "10mm, metal, nikelsiz",
    },
    {
      id: 7,
      name: "Dokuma Etiket",
      category: "Etiket",
      image: "/img/7.jpg",
      description: "Özel tasarım, çok renkli",
    },
    {
      id: 8,
      name: "Taş İşlemeli Aplik",
      category: "Aplik",
      image: "/img/8.jpg",
      description: "El işçiliği, kristal taşlı",
    },
    {
      id: 9,
      name: "Ayaklı Düğme Set",
      category: "Ayaklı Düğme",
      image: "/img/1.jpg",
      description: "12mm-18mm arası çeşitler",
    },
    {
      id: 10,
      name: "Broş Metal",
      category: "Broş",
      image: "/img/2.jpg",
      description: "Dekoratif, çeşitli boyutlar",
    },
    {
      id: 11,
      name: "Lüks Düğme Koleksiyonu",
      category: "Metal Aksesuar",
      image: "/img/3.jpg",
      description: "Altın ve gümüş seçenekli",
    },
    {
      id: 12,
      name: "Plastik Renkli Düğme",
      category: "Plastik Düğme",
      image: "/img/4.jpg",
      description: "20+ renk seçeneği",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tümü" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6">
            Ürünlerimiz
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Tekstil sektörü için geniş ürün yelpazemizi keşfedin
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-6 sm:py-8">
          {/* Search Bar - Full Width */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Ürün adı, kategori veya açıklama ile arayın..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all text-base font-light bg-white shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Categories & Results */}
          <div className="space-y-4">
            {/* Results Count - Centered */}
            <div className="text-center">
              <p className="text-base text-gray-600 font-light">
                <span className="text-2xl font-normal text-black">{filteredProducts.length}</span>
                {" "}adet ürün gösteriliyor
              </p>
            </div>

            {/* Categories Slider */}
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:border-orange-500 transition-all opacity-0 group-hover:opacity-100 -translate-x-1/2"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Categories Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth justify-center"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-light transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-black text-white shadow-lg scale-105"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:border-orange-500 transition-all opacity-0 group-hover:opacity-100 translate-x-1/2"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-light">
                Aradığınız kriterlere uygun ürün bulunamadı
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl mb-3 sm:mb-4 bg-gray-100 border border-gray-200 transition-all duration-500 group-hover:border-orange-500 group-hover:shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full">
                        <button className="w-full bg-white/95 backdrop-blur-sm text-black py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-white transition-all">
                          Detayları Gör
                        </button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full font-light">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium text-black mb-1 sm:mb-2 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-light line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6">
            Aradığınızı Bulamadınız mı?
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Özel ürün talepleriniz için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
              İletişime Geç
            </button>
            <button className="px-8 sm:px-10 py-3 sm:py-4 border border-gray-300 text-black rounded-full font-light hover:border-black transition-all duration-300 text-sm sm:text-base">
              Katalog İndir
            </button>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative py-8 sm:py-10 lg:py-12 bg-black overflow-hidden">
        <div className="scroll-banner flex whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {[
                "Kalite",
                "Güven",
                "Hız",
                "Çeşitlilik",
                "Profesyonellik",
                "Memnuniyet",
              ].map((text, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/60 mx-6 sm:mx-8 lg:mx-12 hover:text-white/20 transition-colors duration-500">
                    {text}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-orange-500/60 mx-4 sm:mx-6 lg:mx-8">
                    •
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
                Birlik Düğme
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed font-light max-w-md text-sm sm:text-base">
                1999'dan beri tekstil sektörüne kaliteli düğme ve aksesuar
                tedariki yapan güvenilir firmanız.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    
                    <a  key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-gray-400">
                Hızlı Bağlantılar
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {["Ana Sayfa", "Ürünler", "Hakkımızda", "İletişim", "SSS"].map(
                  (link) => (
                    <li key={link}>
                      
                       <a href="#"
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-300 font-light text-sm sm:text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-gray-400">
                İletişim
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-500 font-light text-sm sm:text-base">
                <li className="hover:text-orange-500 transition-colors">
                  +90 (XXX) XXX XX XX
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  info@birlikdugme.com
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  İstanbul, Türkiye
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 text-xs sm:text-sm font-light">
              © 2026 Birlik Düğme. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 font-light">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-banner {
          animation: scroll 30s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}