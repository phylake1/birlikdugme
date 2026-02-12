"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import { BrightnessContrastShader } from "three/examples/jsm/Addons.js";

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/birlikdugmeaksesuar/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/birlikdugme?igsh=MXdqNXU1NWd6dWZmMg==",
  },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/905536952434" },
];

gsap.registerPlugin(ScrollTrigger);

export default function BirlikDugme() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".category-pill", { opacity: 0, scale: 0 });
    gsap.set(".product-card", { opacity: 0, y: 60 });
    gsap.set(".branch-card", { opacity: 0, y: 60 });
    gsap.set(".stat-item", { opacity: 0, y: 40 });
    gsap.set(".about-content", { opacity: 0, y: 50 });
    gsap.set(".about-image", { opacity: 0, scale: 0.95 });
    gsap.set(".contact-item", { opacity: 0, y: 40 });
    gsap.set(".cta-content", { opacity: 0, y: 50 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
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

        gsap.to(".branch-card", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".branches-section",
            start: "top 85%",
            markers: false,
          },
        });

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

        gsap.to(".scroll-banner", {
          xPercent: -50,
          repeat: -1,
          duration: 30,
          ease: "linear",
        });

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

  const branches = [
    {
      name: "Bayrampaşa Şube",
      address: "Cevatpaşa, 100. Yıl Cd No:16",
      district: "Bayrampaşa",
      city: "İstanbul",
      phone: "+90 532 301 88 00",
      email: "info@birlikdugme.com",
      hours: "Pazartesi - Cumartesi: 08:00 - 19:00",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4937485415994!2d28.88412667649509!3d41.01445257134959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb193236e931%3A0x590ba06f68bb744a!2zQmlybGlrIETDvMSfbWUgJiBBa3Nlc3Vhcg!5e0!3m2!1sen!2str!4v1770919205247!5m2!1sen!2str",
      mapsLink: "https://maps.app.goo.gl/VRnL3uyqvXApspLR8",
    },
    {
      name: "Merter Şube",
      address: "M. Nesihi Özmen Mah Savaş Cad, Karadal Sok. 13/A",
      district: "Güngören",
      city: "İstanbul",
      phone: "+90 (553) 695 24 34",
      email: "info@birlikdugme.com",
      hours: "Pazartesi - Cumartesi: 08:00 - 19:00",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4937485415994!2d28.88412667649509!3d41.01445257134959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb193236e931%3A0x590ba06f68bb744a!2zQmlybGlrIETDvMSfbWUgJiBBa3Nlc3Vhcg!5e0!3m2!1sen!2str!4v1770919205247!5m2!1sen!2str",
      mapsLink: "https://maps.app.goo.gl/CsmircsP5m6Pkr8v6",
    },
  ];

  const stats = [
    { num: "35", suffix: "+", label: "Yıllık Tecrübe" },
    { num: "5K", suffix: "+", label: "Ürün Çeşidi" },
    { num: "10K", suffix: "+", label: "Mutlu Müşteri" },
    { num: "100", suffix: "%", label: "Memnuniyet" },
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
              <a
                href="#products"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full font-medium hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Ürünleri İncele
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-black rounded-full font-medium hover:border-orange-500 transition-all duration-300 text-sm sm:text-base hover:text-orange-500 duration-300"
              >
                İletişime Geç
              </a>
            </div>
          </div>

          <div className="categories-container max-w-6xl mx-auto px-4 pt-10">
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
                      <div className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full bg-black text-white border border-gray-200 hover:border-orange-500 hover:bg-orange-500 duration-300 hover:shadow-lg transition-all duration-300 cursor-pointer font-light whitespace-nowrap text-xs sm:text-sm lg:text-base">
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

      <section
        id="products"
        className="products-section sm:py-24 lg:py-15 px-4 sm:px-6 lg:px-8 bg-white"
      >
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
        </div>
      </section>

      <section
        id="branches"
        className="branches-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-black mb-3 sm:mb-4">
              Şubelerimiz
            </h2>
            <div className="w-16 sm:w-20 h-px bg-orange-500 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4">
              İstanbul'da iki farklı noktadan hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Harita */}
                <div className="w-full h-64 sm:h-72">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter:
                        "invert(90%) hue-rotate(180deg) saturate(0.8) contrast(1.1)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Bilgiler */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-light text-black mb-6">
                    {branch.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm sm:text-base text-gray-900 font-light leading-relaxed">
                          {branch.address}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                          {branch.district}, {branch.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-black flex-shrink-0" />

                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="text-sm sm:text-base text-gray-900 font-light hover:text-orange-500 transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-black flex-shrink-0" />

                      <a
                        href={`mailto:${branch.email}`}
                        className="text-sm sm:text-base text-gray-900 font-light hover:text-orange-500 transition-colors"
                      >
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                      <svg
                        className="w-5 h-5 text-black flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-gray-600 font-light">
                        {branch.hours}
                      </p>
                    </div>
                  </div>

                  <a
                    href={branch.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-light hover:bg-orange-500 transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg"
                  >
                    <MapPin className="w-4 h-4" />
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section
        id="about"
        className="about-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="about-image relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/img/whybd.jpg"
                alt="Birlik Düğme Hakkında"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div>
              <h2 className="about-content text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8">
                Hakkımızda
              </h2>
              <div className="about-content w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mb-6 sm:mb-8" />
              <div className="about-content space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  1999 yılından bu yana tekstil sektörünün vazgeçilmez
                  aksesuarları olan düğme, fermuar, toka ve benzeri ürünlerin
                  ithalatında uzmanlaşmış bir firma olarak hizmet veriyoruz.
                </p>
                <p>
                  Çeyrek asrı aşkın tecrübemizle, sektörün önde gelen
                  firmalarına kaliteli ve güvenilir ürünler sunmanın gururunu
                  yaşıyoruz. Geniş ürün yelpazemiz ve müşteri odaklı
                  yaklaşımımız ile tekstil sektörünün her alanına hitap
                  ediyoruz.
                </p>
                <p>
                  Kalite kontrol süreçlerimiz ve uluslararası tedarikçi ağımız
                  sayesinde, müşterilerimize en iyi ürünleri en uygun fiyatlarla
                  sunuyoruz. Hızlı teslimat, esnek ödeme seçenekleri ve
                  profesyonel müşteri hizmetlerimiz ile sektörde fark
                  yaratıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section py-5 sm:py-24 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
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
                  +90 553 695 24 34
                </p>
              </div>
            </div>

            <div className="contact-item flex items-center justify-center gap-4 sm:gap-6">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl text-black font-light">
                  +90 532 301 88 00
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
              <a
                href="https://wa.me/905536952434"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#25D366] text-white px-5 py-2.5 text-[15px] font-medium rounded-full hover:bg-[#20BA5A] transition-all shadow-sm hover:shadow-md hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
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

      <section className="cta-section relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
            Doğru Ürün
            <span className="block mt-2 font-normal">Doğru Adres</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Düğme ve tekstil aksesuarları ihtiyaçlarınız için bizimle iletişime
            geçin
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/905536952434"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white rounded-full text-base sm:text-lg font-light hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Fiyat Teklifi Alın
            </a>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-gray-300 text-black rounded-full text-base sm:text-lg font-light hover:border-orange-500 transition-all duration-300 hover:text-orange-500 duration-300">
              Katalog İndirin
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div className="sm:col-span-2 lg:col-span-2">
              <a href="#" className="flex items-center">
                <img
                  src="/img/birlikdugme_w.png"
                  alt="Birlik Düğme"
                  className="h-10 w-auto mb-1"
                />
              </a>
              <p className="text-white-100 opacity-70 mb-6 sm:mb-8 leading-relaxed font-light max-w-md text-sm sm:text-base">
                1999'dan beri tekstil sektörüne kaliteli düğme ve aksesuar
                tedariki yapan güvenilir firmanız.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white-100 opacity-70 hover:border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white-100 opacity-70 group-hover:text-orange-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-white-100 opacity-80">
                Hızlı Bağlantılar
              </h4>
              <ul className="space-y-2 sm:space-y-3 ">
                {[
                  { name: "Ana Sayfa", href: "/" },
                  { name: "Ürünler", href: "#products" },
                  { name: "Şubeler", href: "#branches" },
                  { name: "Hakkımızda", href: "#about" },
                  { name: "İletişim", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white-100 opacity-70 hover:text-orange-500 transition-colors duration-300 font-light text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-white-100 opacity-80">
                İletişim
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-white-100 opacity-70 font-light text-sm sm:text-base">
                <li className="hover:text-orange-500 transition-colors">
                  +90 (553) 695 24 34
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
          <div className="border-t border-white-100 opacity-50 pt-6 sm:pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
            <p className="text-white-100 opacity-100 text-xs sm:text-sm font-light">
              © 2026 Birlik Düğme. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
