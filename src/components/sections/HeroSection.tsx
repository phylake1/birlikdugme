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
        // Her satır için ayrı ScrollTrigger (mobildeki tek akışkan satır
        // ve desktop'taki zigzag satırların hepsi ".category-row" class'ını
        // taşıdığı için aynı seçiciyle otomatik yakalanıyor)
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

  // Mobilde satırları ayrı blok olarak zorlamak yerine tüm kategorileri
  // tek bir akışkan flex-wrap içine alıyoruz; böylece bir önceki "satır"
  // dolduktan sonra artan tek bir baloncuk (ör. "Broş", "Grogren", "Arma")
  // kendi başına, boş alanın ortasında kalmıyor.
  const allCategories = categoryRows.flat();

  return (
    <section ref={containerRef} className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-6 sm:pb-10 lg:pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="categories-container max-w-6xl mx-auto px-4">
          {/* Mobil (md altı): tüm kategoriler tek bir akışkan satırda */}
          <div className="category-row flex md:hidden flex-wrap justify-center gap-2 sm:gap-3">
            {allCategories.map((category, index) => (
              <div key={index} className="category-pill">
                <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black text-white border border-gray-200 hover:border-orange-500 hover:bg-orange-500 duration-300 hover:shadow-lg transition-all duration-300 cursor-pointer font-light whitespace-nowrap text-xs sm:text-sm">
                  {category}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet/Desktop (md ve üstü): mevcut zigzag satır düzeni korunuyor */}
          <div className="hidden md:block space-y-4 lg:space-y-6">
            {categoryRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`category-row flex flex-wrap justify-center gap-3 lg:gap-4 ${rowIndex % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}
              >
                {row.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="category-pill">
                    <div className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-black text-white border border-gray-200 hover:border-orange-500 hover:bg-orange-500 duration-300 hover:shadow-lg transition-all duration-300 cursor-pointer font-light whitespace-nowrap text-sm lg:text-base">
                      {category}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
