"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function BranchesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial state immediately
    const branchCards = containerRef.current.querySelectorAll(".branch-card");
    const headings = containerRef.current.querySelectorAll("h2, p");
    
    gsap.set(branchCards, { opacity: 0, y: 60 });
    gsap.set(headings, { opacity: 0, y: 30 });

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Animate section title and description
        gsap.to(headings, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            markers: false,
            once: true,
          },
        });

        gsap.to(branchCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
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

  const branches = [
    {
      name: t("bayrampasaBranch"),
      address: "Cevatpaşa, 100. Yıl Cd No:16",
      district: "Bayrampaşa",
      city: "İstanbul",
      phone: "+90 532 301 88 00",
      email: "info@birlikdugme.com",
      hours: t("hours"),
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2953.242631334538!2d28.887106446105854!3d41.07052524209947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab993b2183c4b%3A0x471582527d895d73!2zQmlybGlrIETDvMSfbWUgJiBBa3Nlc3Vhcg!5e0!3m2!1sen!2str!4v1771017521885!5m2!1sen!2str",
      mapsLink: "https://maps.app.goo.gl/VRnL3uyqvXApspLR8",
    },
    {
      name: t("merterBranch"),
      address: "M. Nesihi Özmen Mah Savaş Cad, Karadal Sok. 13/A",
      district: "Güngören",
      city: "İstanbul",
      phone: "+90 (553) 695 24 34",
      email: "info@birlikdugme.com",
      hours: t("hours"),
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4937485415994!2d28.88412667649509!3d41.01445257134959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb193236e931%3A0x590ba06f68bb744a!2zQmlybGlrIETDvMSfbWUgJiBBa3Nlc3Vhcg!5e0!3m2!1sen!2str!4v1770919205247!5m2!1sen!2str",
      mapsLink: "https://maps.app.goo.gl/CsmircsP5m6Pkr8v6",
    },
  ];

  return (
    <section
      id="branches"
      className="branches-section py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white pt-20 sm:pt-20 lg:pt-20"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-black mb-3 sm:mb-4">
            {t("branchesTitle")}
          </h2>
          <div className="w-16 sm:w-20 h-px bg-orange-500 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4">
            {t("branchesDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="branch-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
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
                  {t("getDirections")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
