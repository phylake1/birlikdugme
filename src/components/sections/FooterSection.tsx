"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".cta-content", { opacity: 0, y: 50 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
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

  return (
    <div ref={containerRef}>
      {/* BANNER */}
      <section className="relative py-8 sm:py-10 lg:py-12 bg-black overflow-hidden">
        <div className="scroll-banner flex whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {(t("bannerTexts") as unknown as string[]).map((text: string, index: number) => (
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
            {t("ctaTitle")}
            <span className="block mt-2 font-normal">{t("ctaTitleHighlight")}</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/905536952434"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white rounded-full text-base sm:text-lg font-light hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t("ctaButtonQuote")}
            </a>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-gray-300 text-black rounded-full text-base sm:text-lg font-light hover:border-orange-500 transition-all duration-300 hover:text-orange-500 duration-300">
              {t("ctaButtonCatalog")}
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
                {t("footerDesc")}
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
                {t("quickLinks")}
              </h4>
              <ul className="space-y-2 sm:space-y-3 ">
                {[
                  { name: t("home"), href: "/" },
                  { name: t("products"), href: "#products" },
                  { name: t("branches"), href: "#branches" },
                  { name: t("about"), href: "#about" },
                  { name: t("contact"), href: "#contact" },
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
                {t("contactInfo")}
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
