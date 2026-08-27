"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CategoryMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!trackRef.current) return;

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 24,
      ease: "linear",
    });

    return () => {
      tween.kill();
    };
  }, []);

  const words = [
    t("plasticButton"),
    t("metalButton"),
    t("footedButton"),
    t("zipper"),
    t("buckle"),
    t("metalAccessory"),
    t("snapFastener"),
    t("brooch"),
    t("label"),
    t("lace"),
    t("ribbon"),
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-black overflow-hidden">
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex items-center">
            {words.map((word, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/70 mx-4 sm:mx-6">
                  {word}
                </span>
                <span className="text-lg sm:text-xl text-orange-500/70 mx-3 sm:mx-4">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
