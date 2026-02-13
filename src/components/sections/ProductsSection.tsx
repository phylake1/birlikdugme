"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".product-card", { opacity: 0, y: 60 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
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

        setTimeout(() => ScrollTrigger.refresh(), 100);
      }, containerRef);

      return () => ctx.revert();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const products = [
    {
      name: t("classicButtons"),
      desc: t("classicButtonsDesc"),
      image: "/img/1.jpg",
    },
    {
      name: t("decorativeButtons"),
      desc: t("decorativeButtonsDesc"),
      image: "/img/2.jpg",
    },
    {
      name: t("metalAccessories"),
      desc: t("metalAccessoriesDesc"),
      image: "/img/3.jpg",
    },
    { name: t("zippers"), desc: t("zippersDesc"), image: "/img/4.jpg" },
    { name: t("buckles"), desc: t("bucklesDesc"), image: "/img/5.jpg" },
    { name: t("snapFasteners"), desc: t("snapFastenersDesc"), image: "/img/6.jpg" },
    { name: t("labels"), desc: t("labelsDesc"), image: "/img/7.jpg" },
    { name: t("decorativeStones"), desc: t("decorativeStonesDesc"), image: "/img/8.jpg" },
  ];

  return (
    <section
      id="products"
      className="products-section sm:py-24 lg:py-15 px-4 sm:px-6 lg:px-8 bg-white"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-3 sm:mb-4">
            {t("productsTitle")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
            {t("productsDesc")}
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
  );
}
