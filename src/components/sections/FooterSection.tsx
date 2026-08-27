"use client";

import {
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FooterSection() {
  const { t } = useLanguage();

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
                { key: "home", name: t("home"), href: "/" },
                { key: "products", name: t("products"), href: "#products" },
                { key: "branches", name: t("branches"), href: "#branches" },
                { key: "about", name: t("about"), href: "#about" },
                { key: "contact", name: t("contact"), href: "#contact" },
              ].map((link) => (
                <li key={link.key}>
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
  );
}
