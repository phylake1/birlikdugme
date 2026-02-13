"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".about-content", { opacity: 0, y: 50 });
    gsap.set(".about-image", { opacity: 0, scale: 0.95 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
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

        setTimeout(() => ScrollTrigger.refresh(), 100);
      }, containerRef);

      return () => ctx.revert();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="about"
      className="about-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="about-image relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white-100">
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
              {t("aboutTitle")}
            </h2>
            <div className="about-content w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mb-6 sm:mb-8" />
            <div className="about-content space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed">
              <p>
                {t("aboutText1")}
              </p>
              <p>
                {t("aboutText2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
