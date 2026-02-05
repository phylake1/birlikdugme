"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/905XXXXXXXXX" },
];

gsap.registerPlugin(ScrollTrigger);

export default function BirlikDugme() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // HER ŞEYİ GİZLE
    gsap.set(".category-pill", { opacity: 0, scale: 0 });
    gsap.set(".product-card", { opacity: 0, y: 60 });
    gsap.set(".feature-item", { opacity: 0, x: -50 });
    gsap.set(".stat-item", { opacity: 0, y: 40 });
    gsap.set(".about-content", { opacity: 0, y: 50 });
    gsap.set(".about-image", { opacity: 0, scale: 0.95 });
    gsap.set(".contact-item", { opacity: 0, y: 40 });
    gsap.set(".cta-content", { opacity: 0, y: 50 });

    // 500ms BEKLE - Hero3D'nin setup'ı bitsin
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero başlıkları
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
          delay: 0.25,
          ease: "power3.out",
        });
        gsap.from(".hero-cta", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: 0.5,
          ease: "power3.out",
        });

        // Kategori pilleri
        gsap.to(".category-pill", {
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "back.out(1.7)",
          stagger: { amount: 1.2, from: "random" },
          scrollTrigger: {
            trigger: ".categories-container",
            start: "top 85%",
            markers: false,
          },
        });

        // Ürünler
        gsap.to(".product-card", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".products-section",
            start: "top 80%",
            markers: false,
          },
        });

        // Özellikler
        gsap.to(".feature-item", {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 75%",
            markers: false,
          },
        });

        // İstatistikler
        gsap.to(".stat-item", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            markers: false,
          },
        });

        // Hakkımızda
        gsap.to(".about-content", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            markers: false,
          },
        });

        gsap.to(".about-image", {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            markers: false,
          },
        });

        // İletişim
        gsap.to(".contact-item", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 75%",
            markers: false,
          },
        });

        // Banner
        gsap.to(".scroll-banner", {
          xPercent: -50,
          repeat: -1,
          duration: 30,
          ease: "linear",
        });

        // CTA
        gsap.to(".cta-content", {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 75%",
            markers: false,
          },
        });

        // Refresh - Hero3D'den sonra
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }, containerRef);

      return () => ctx.revert();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const categoryRows = [
    ["Plastik Düğme", "Metal Düğme", "Ayaklı Düğme"],
    ["Fermuar", "Toka", "Metal Aksesuar", "Çıt Çıt", "Broş"],
    ["Kemer Tokası", "Etiket", "Aplik", "Lastik", "Grogren"],
    ["Balıksırtı", "Dantel", "Pul", "Şerit", "Arma"],
    ["Askı", "Kuş Gözü", "Baskı"],
  ];

  const products = [
    {
      name: "Klasik Düğmeler",
      desc: "Gömlek ve kıyafetler için",
      image: "/img/1.jpg",
    },
    {
      name: "Dekoratif Düğmeler",
      desc: "Özel tasarımlar",
      image: "/img/2.jpg",
    },
    {
      name: "Metal Aksesuarlar",
      desc: "Dayanıklı ve şık",
      image: "/img/3.jpg",
    },
    { name: "Fermuarlar", desc: "Her boyutta mevcut", image: "/img/4.jpg" },
    { name: "Tokalar", desc: "Kemer ve çanta için", image: "/img/5.jpg" },
    { name: "Çıt Çıtlar", desc: "Pratik çözümler", image: "/img/6.jpg" },
    { name: "Etiketler", desc: "Marka kimliğiniz için", image: "/img/7.jpg" },
    { name: "Süs Taşları", desc: "Dekoratif amaçlı", image: "/img/8.jpg" },
  ];

  const stats = [
    { num: "25", suffix: "+", label: "Yıllık Tecrübe" },
    { num: "5K", suffix: "+", label: "Ürün Çeşidi" },
    { num: "1K", suffix: "+", label: "Mutlu Müşteri" },
    { num: "100", suffix: "%", label: "Memnuniyet" },
  ];

  const features = [
    {
      title: "Geniş Ürün Yelpazesi",
      desc: "Düğmeden aksesuara kadar tüm tekstil ihtiyaçlarınız için binlerce ürün seçeneği",
    },
    {
      title: "Kalite Garantisi",
      desc: "Uluslararası standartlara uygun, test edilmiş ve onaylanmış ürünler",
    },
    {
      title: "Hızlı Teslimat",
      desc: "Stoklu ürünlerde aynı gün kargo, toplu siparişlerde hızlı üretim",
    },
    {
      title: "Profesyonel Destek",
      desc: "Uzman ekibimiz ürün seçiminden sonrasına kadar yanınızda",
    },
  ];

  return (
    <div ref={containerRef} className="relative overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-tight text-black px-4">
              Birlik Düğme & Aksesuar
            </h1>
            <p className="hero-subtitle text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-2 sm:mb-12 leading-relaxed px-4">
              Kaliteli düğme ve tekstil aksesuarları ithalatında
              <span className="block mt-2 text-black font-semibold">
                güvenilir çözüm ortağınız
              </span>
            </p>
            <div className="hero-cta flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
                Ürünleri İncele
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-black rounded-full font-medium hover:border-black transition-all duration-300 text-sm sm:text-base">
                İletişime Geç
              </button>
            </div>
          </div>

          <div className="categories-container max-w-6xl mx-auto px-4">
            <p className="text-center text-xs sm:text-sm text-gray-500 mb-6 sm:mb-10 uppercase tracking-wider font-light">
              Ürün Kategorilerimiz
            </p>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {categoryRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 ${rowIndex % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}
                >
                  {row.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="category-pill">
                      <div className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full bg-black text-white border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer font-light whitespace-nowrap text-xs sm:text-sm lg:text-base">
                        {category}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gray-100/50 rounded-full blur-3xl" />
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="products-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-3 sm:mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
              Geniş ürün yelpazemiz ile her ihtiyacınıza uygun çözümler
              sunuyoruz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div key={index} className="product-card group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 border border-gray-200 bg-white transition-all duration-500 group-hover:border-orange-500 group-hover:shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-black mb-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <button className="px-8 sm:px-12 py-3 sm:py-4 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
              Tüm Ürünleri Görüntüle
            </button>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="features-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/img/whybd.jpg"
                alt="Birlik Düğme"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 sm:mb-10 lg:mb-12">
                Neden Birlik Düğme?
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="feature-item flex items-start gap-3 sm:gap-4 lg:gap-5"
                  >
                    <div className="w-0.5 sm:w-1 h-10 sm:h-12 bg-orange-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-medium text-black mb-1 sm:mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="stats-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center group">
                <div className="inline-flex flex-col items-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-500">
                    {stat.num}
                    <span className="text-3xl sm:text-4xl lg:text-5xl">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="h-px w-12 sm:w-16 bg-gray-300 mb-2 sm:mb-3" />
                  <div className="text-xs sm:text-sm text-gray-500 font-light tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="about-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="about-content text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8">
                Hakkımızda
              </h2>
              <div className="about-content w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mb-6 sm:mb-8" />
              <div className="about-content space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  1999 yılından bu yana tekstil sektörünün vazgeçilmez aksesuarları olan düğme, fermuar, toka ve benzeri ürünlerin ithalatında uzmanlaşmış bir firma olarak hizmet veriyoruz.
                </p>
                <p>
                  Çeyrek asrı aşkın tecrübemizle, sektörün önde gelen firmalarına kaliteli ve güvenilir ürünler sunmanın gururunu yaşıyoruz. Geniş ürün yelpazemiz ve müşteri odaklı yaklaşımımız ile tekstil sektörünün her alanına hitap ediyoruz.
                </p>
                <p>
                  Kalite kontrol süreçlerimiz ve uluslararası tedarikçi ağımız sayesinde, müşterilerimize en iyi ürünleri en uygun fiyatlarla sunuyoruz. Hızlı teslimat, esnek ödeme seçenekleri ve profesyonel müşteri hizmetlerimiz ile sektörde fark yaratıyoruz.
                </p>
              </div>
            </div>
            <div className="about-image relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/img/whybd.jpg"
                alt="Birlik Düğme Hakkında"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className="contact-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-3 sm:mb-4">
              İletişim
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
              Sorularınız ve talepleriniz için bizimle iletişime geçin
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <div className="contact-item flex items-center justify-center gap-4 sm:gap-6">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl text-black font-light">
                  +90 (XXX) XXX XX XX
                </p>
              </div>
            </div>

            <div className="contact-item flex items-center justify-center gap-4 sm:gap-6">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl text-black font-light">
                  info@birlikdugme.com
                </p>
              </div>
            </div>

            <div className="contact-item flex items-center justify-center gap-4 sm:gap-6">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl text-black font-light">
                  Merkez Mah. Tekstil Cad. No:123
                </p>
                <p className="text-sm sm:text-base text-gray-500 font-light mt-1">
                  İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 sm:px-12 py-3 sm:py-4 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
              Mesaj Gönder
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

      {/* CTA */}
      <section className="cta-section relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
            Projeleriniz İçin
            <span className="block mt-2 font-normal">Doğru Adres</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Düğme ve tekstil aksesuarları ihtiyaçlarınız için bizimle iletişime
            geçin
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white rounded-full text-base sm:text-lg font-light hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg">
              Fiyat Teklifi Alın
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-gray-300 text-black rounded-full text-base sm:text-lg font-light hover:border-black transition-all duration-300">
              Katalog İndirin
            </button>
          </div>
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
                    
                     <a key={social.name}
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
    </div>
  );
}