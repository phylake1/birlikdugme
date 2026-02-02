"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BirlikDugme() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      // Category pills - scattered animation
      gsap.from(".category-pill", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: {
          amount: 1.2,
          from: "random",
        },
        delay: 0.8,
        ease: "back.out(1.7)",
      });

      // Product showcase
      gsap.from(".product-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-section",
          start: "top 75%",
        },
      });

      // Features reveal
      gsap.from(".feature-item", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 70%",
        },
      });

      // Stats counter - elegant reveal
      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 75%",
        },
      });

      // Infinite scroll banner
      gsap.to(".scroll-banner", {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "linear",
      });

      // CTA section
      gsap.from(".cta-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    "Plastik Düğme",
    "Metal Düğme",
    "Dekoratif Düğme",
    "Fermuar",
    "Toka",
    "Metal Aksesuar",
    "Çıt Çıt",
    "Kemer Tokası",
    "Etiket",
    "Aplike",
    "Süs Taşı",
    "Dantel",
  ];

  return (
    <div ref={containerRef} className="relative overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content */}
          <div className="text-center mb-20">
            <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight text-black">
              Birlik Düğme
            </h1>
            <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Kaliteli düğme ve tekstil aksesuarları ithalatında
              <span className="block mt-2 text-black font-semibold">
                güvenilir çözüm ortağınız
              </span>
            </p>
            <div className="hero-cta flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
                Ürünleri İncele
              </button>
              <button className="px-8 py-4 border border-gray-300 text-black rounded-full font-medium hover:border-black transition-all duration-300">
                İletişime Geç
              </button>
            </div>
          </div>

          {/* Product Categories - Scattered Layout */}
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-wider font-light">
              Ürün Kategorilerimiz
            </p>

            {/* Scattered Grid Layout */}
            <div className="relative min-h-[200px] flex justify-center">
              {/* Row 1 - Top scattered */}
              <div className="absolute top-0 category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[0]}
                </div>
              </div>
              <div className="absolute top-0 left-[58%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[1]}
                </div>
              </div>
              <div className="absolute left-[27%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[2]}
                </div>
              </div>

              {/* Row 2 - Middle left */}
              <div className="absolute top-[60px] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[3]}
                </div>
              </div>
              <div className="absolute top-[60px] left-[37%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[4]}
                </div>
              </div>
              <div className="absolute top-[60px] left-[56%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[5]}
                </div>
              </div>

              {/* Row 3 - Center */}
              <div className="absolute top-[120px] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[6]}
                </div>
              </div>
              <div className="absolute top-[120px] left-[32%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[7]}
                </div>
              </div>
              <div className="absolute top-[120px] left-[55%] category-pill">
                <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                  {categories[8]}
                </div>
              </div>

              <div className="text-center">
                {/* Row 4 - Bottom scattered */}
                <div className="absolute top-[180px] category-pill">
                  <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                    {categories[9]}
                  </div>
                </div>
                <div className="absolute top-[180px] left-[39%] category-pill">
                  <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                    {categories[10]}
                  </div>
                </div>
                <div className="absolute top-[180px] left-[59%] category-pill">
                  <div className="px-6 py-3 rounded-full bg-black border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light">
                    {categories[11]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Products Showcase */}
      <section className="products-section py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-black mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
              Geniş ürün yelpazemiz ile her ihtiyacınıza uygun çözümler
              sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Klasik Düğmeler", desc: "Gömlek ve kıyafetler için" },
              { name: "Dekoratif Düğmeler", desc: "Özel tasarımlar" },
              { name: "Metal Aksesuarlar", desc: "Dayanıklı ve şık" },
              { name: "Fermuarlar", desc: "Her boyutta mevcut" },
              { name: "Tokalar", desc: "Kemer ve çanta için" },
              { name: "Çıt Çıtlar", desc: "Pratik çözümler" },
              { name: "Etiketler", desc: "Marka kimliğiniz için" },
              { name: "Süs Taşları", desc: "Dekoratif amaçlı" },
            ].map((product, index) => (
              <div key={index} className="product-card group cursor-pointer">
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mb-4 border border-gray-200 group-hover:border-orange-500 transition-all duration-500 group-hover:shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-black mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-9xl font-light mb-4 opacity-80">B</div>
                  <div className="text-2xl font-light tracking-wider">
                    Birlik Düğme
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-12">
                Neden Birlik Düğme?
              </h2>

              <div className="space-y-8">
                <div className="feature-item flex items-start gap-5">
                  <div className="w-1 h-12 bg-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Geniş Ürün Yelpazesi
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Düğmeden aksesuara kadar tüm tekstil ihtiyaçlarınız için
                      binlerce ürün seçeneği
                    </p>
                  </div>
                </div>

                <div className="feature-item flex items-start gap-5">
                  <div className="w-1 h-12 bg-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Kalite Garantisi
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Uluslararası standartlara uygun, test edilmiş ve
                      onaylanmış ürünler
                    </p>
                  </div>
                </div>

                <div className="feature-item flex items-start gap-5">
                  <div className="w-1 h-12 bg-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Hızlı Teslimat
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Stoklu ürünlerde aynı gün kargo, toplu siparişlerde hızlı
                      üretim
                    </p>
                  </div>
                </div>

                <div className="feature-item flex items-start gap-5">
                  <div className="w-1 h-12 bg-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Profesyonel Destek
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Uzman ekibimiz ürün seçiminden sonrasına kadar yanınızda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Elegant & Minimal */}
      <section className="stats-section py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="stat-item text-center group">
              <div className="inline-flex flex-col items-center">
                <div className="text-7xl font-light text-black mb-3 group-hover:text-orange-500 transition-colors duration-500">
                  25<span className="text-5xl">+</span>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3" />
                <div className="text-sm text-gray-500 font-light tracking-wider uppercase">
                  Yıllık Tecrübe
                </div>
              </div>
            </div>

            <div className="stat-item text-center group">
              <div className="inline-flex flex-col items-center">
                <div className="text-7xl font-light text-black mb-3 group-hover:text-orange-500 transition-colors duration-500">
                  5K<span className="text-5xl">+</span>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3" />
                <div className="text-sm text-gray-500 font-light tracking-wider uppercase">
                  Ürün Çeşidi
                </div>
              </div>
            </div>

            <div className="stat-item text-center group">
              <div className="inline-flex flex-col items-center">
                <div className="text-7xl font-light text-black mb-3 group-hover:text-orange-500 transition-colors duration-500">
                  1K<span className="text-5xl">+</span>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3" />
                <div className="text-sm text-gray-500 font-light tracking-wider uppercase">
                  Mutlu Müşteri
                </div>
              </div>
            </div>

            <div className="stat-item text-center group">
              <div className="inline-flex flex-col items-center">
                <div className="text-7xl font-light text-black mb-3 group-hover:text-orange-500 transition-colors duration-500">
                  100<span className="text-5xl">%</span>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3" />
                <div className="text-sm text-gray-500 font-light tracking-wider uppercase">
                  Memnuniyet
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Banner */}
      <section className="relative py-12 bg-black overflow-hidden">
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
                  <span className="text-6xl font-light text-white/10 mx-12 hover:text-white/20 transition-colors duration-500">
                    {text}
                  </span>
                  <span className="text-4xl text-orange-500/20 mx-8">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative py-40 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h2 className="text-6xl sm:text-7xl font-light text-black mb-6 leading-tight">
            Projeleriniz İçin
            <span className="block mt-2 font-normal">Doğru Adres</span>
          </h2>
          <div className="w-24 h-px bg-orange-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Düğme ve tekstil aksesuarları ihtiyaçlarınız için bizimle iletişime
            geçin
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-black text-white rounded-full text-lg font-light hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
              Fiyat Teklifi Alın
            </button>
            <button className="px-10 py-5 border border-gray-300 text-black rounded-full text-lg font-light hover:border-black transition-all duration-300">
              Katalog İndirin
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-light mb-6">Birlik Düğme</h3>
              <p className="text-gray-400 mb-8 leading-relaxed font-light max-w-md">
                1999'dan beri tekstil sektörüne kaliteli düğme ve aksesuar
                tedariki yapan güvenilir firmanız.
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "LinkedIn", "WhatsApp"].map(
                  (social) => (
                    <button
                      key={social}
                      className="w-12 h-12 rounded-full border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title={social}
                    >
                      <span className="text-xs text-gray-600">●</span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-light mb-6 text-gray-400">
                Hızlı Bağlantılar
              </h4>
              <ul className="space-y-3">
                {["Ana Sayfa", "Ürünler", "Hakkımızda", "İletişim", "SSS"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-300 font-light"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-light mb-6 text-gray-400">
                İletişim
              </h4>
              <ul className="space-y-3 text-gray-500 font-light">
                <li className="hover:text-orange-500 transition-colors">
                  📞 +90 (XXX) XXX XX XX
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  ✉️ info@birlikdugme.com
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  📍 İstanbul, Türkiye
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 text-sm font-light">
              © 2024 Birlik Düğme. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-8 text-sm text-gray-600 font-light">
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
    </div>
  );
}
