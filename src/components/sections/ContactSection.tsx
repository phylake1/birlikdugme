"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial state immediately
    const contactItems = containerRef.current.querySelectorAll(".contact-item");
    const headings = containerRef.current.querySelectorAll("h2, p");
    
    gsap.set(contactItems, { opacity: 0, y: 40 });
    gsap.set(headings, { opacity: 0, y: 30 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Animate section title and description
        gsap.to(headings, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            markers: false,
            once: true,
          },
        });

        gsap.to(contactItems, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            markers: false,
            once: true,
          },
        });

        setTimeout(() => ScrollTrigger.refresh(), 100);
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="contact"
      className="contact-section py-5 sm:py-24 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-white pt-20 sm:pt-20 lg:pt-20"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-3 sm:mb-4">
            {t("contactTitle")}
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-orange-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
            {t("contactDesc")}
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
              <span>{t("whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
