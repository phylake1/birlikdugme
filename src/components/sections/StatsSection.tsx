"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".stat-item", { opacity: 0, y: 40 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
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

        setTimeout(() => ScrollTrigger.refresh(), 100);
      }, containerRef);

      return () => ctx.revert();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const stats = [
    { num: "35", suffix: "+", label: t("statsExperience") },
    { num: "5K", suffix: "+", label: t("statsProducts") },
    { num: "10K", suffix: "+", label: t("statsCustomers") },
    { num: "100", suffix: "%", label: t("statsSatisfaction") },
  ];

  return (
    <section className="stats-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={containerRef}>
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
  );
}
