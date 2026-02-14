"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".category-pill", { opacity: 0, scale: 0.8, y: 30 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero animasyonları
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

        // Kategori başlığı animasyonu
        gsap.from(".categories-title", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".categories-container",
            start: "top 90%",
            markers: false,
          },
        });

        // Her satır için ayrı ScrollTrigger
        const rows = gsap.utils.toArray(".category-row");
        rows.forEach((row: any, index) => {
          const pills = row.querySelectorAll(".category-pill");
          
          gsap.to(pills, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: {
              amount: 0.4,
              from: "start",
            },
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
              markers: false,
            },
          });
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
    [t("plasticButton"), t("metalButton"), t("footedButton")],
    [t("zipper"), t("buckle"), t("metalAccessory"), t("snapFastener"), t("brooch")],
    [t("beltBuckle"), t("label"), t("application"), t("elastic"), t("grograin")],
    [t("herringbone"), t("lace"), t("bead"), t("ribbon"), t("emblem")],
    [t("hanger"), t("birdEye"), t("print")],
  ];

  return (
    <section ref={containerRef} className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-tight text-black px-4">
            {t("heroTitle")}
          </h1>
          <p className="hero-subtitle text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-2 sm:mb-12 leading-relaxed px-4">
            {t("heroSubtitle")}
            <span className="block mt-2 text-black font-semibold">
              {t("heroSubtitleHighlight")}
            </span>
          </p>
          <div className="hero-cta flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            
             <a href="#products"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full font-medium hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              {t("heroButtonProducts")}
            </a>
            
             <a href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-black rounded-full font-medium hover:border-orange-500 transition-all duration-300 text-sm sm:text-base hover:text-orange-500 duration-300"
            >
              {t("heroButtonContact")}
            </a>
          </div>
        </div>

        <div className="categories-container max-w-6xl mx-auto px-4 pt-10">
          <p className="categories-title text-center text-xs sm:text-sm text-gray-500 mb-6 sm:mb-10 uppercase tracking-wider font-light">
            {t("categoriesTitle")}
          </p>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {categoryRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`category-row flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 ${rowIndex % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}
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
  );
}