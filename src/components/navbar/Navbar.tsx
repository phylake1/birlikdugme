"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const menuItems = {
    TR: {
      home: "Anasayfa",
      products: "Ürünler",
      franchise: "Şubeler",
      about: "Hakkımızda",
      contact: "İletişim",
      whatsapp: "WhatsApp",
    },
    EN: {
      home: "Home",
      products: "Products",
      franchise: "Branches",
      about: "About Us",
      contact: "Contact",
      whatsapp: "WhatsApp",
    },
  };

  const navLinks = [
    { href: "#", label: menuItems[language].home },
    { href: "#products", label: menuItems[language].products },
    { href: "#branches", label: menuItems[language].franchise },
    { href: "#about", label: menuItems[language].about },
    { href: "#contact", label: menuItems[language].contact },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Scroll durumunu takip et. requestAnimationFrame ile throttle edilmiş
  // ve state sadece eşik (20px) geçildiğinde değişiyor. Eski navbar'da
  // scroll event'inde doğrudan DOM'a (document.querySelector + classList)
  // dokunuluyordu; bu React'ın render döngüsü dışında olduğu için
  // navbar'ın "yanıp sönmesi" gibi görünen kararlı olmayan bir davranışa
  // sebep oluyordu. Burada tek bir React state ile, threshold geçilmeden
  // gereksiz render tetiklenmiyor.
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/*
        Navbar hafif saydam + backdrop-blur ile buzlu cam (glassmorphism)
        görünümünde. Daha önceki "beyaz flaş" sorunu blur'dan değil, scroll
        event'inde doğrudan DOM manipülasyonundan ve mobil menünün navbar
        ile aynı katmanı paylaşmasından kaynaklanıyordu; ikisi de kalıcı
        olarak çözüldü (scroll artık tek bir React state, mobil menü de
        navbar'ın altında ayrı bir eleman), bu yüzden blur'u geri
        eklemek güvenli.
      */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 flex items-center">
              <img
                src="/img/birlikdugme_b.png"
                alt="Birlik Düğme"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Section - Language, WhatsApp */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-all font-medium text-sm border border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span>{language}</span>
              </button>

              <a
                href="https://wa.me/905XXXXXXXXX"
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{menuItems[language].whatsapp}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-menu-panel"
                className="relative inline-flex items-center justify-center p-2 rounded-full text-black hover:text-gray-600 hover:bg-gray-100/50 focus:outline-none transition-colors"
              >
                <span className="sr-only">Menü</span>
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*
        Mobil menü - navbar'ın hemen altında (top-16) konumlanıyor, kendi
        düz beyaz arka planı var (blur yok), bu yüzden navbar ile
        compositing çakışması/flaş riski yok. Açılış artık keskin bir
        görünür/gizli değil, opacity + hafif translateY ile yumuşak bir
        geçiş yapıyor. Panel her zaman DOM'da; sadece isOpen'a göre
        görünürlük/etkileşim class'ları değişiyor, böylece transition
        her açılış/kapanışta oynayabiliyor.
      */}
      <div
        id="mobile-menu-panel"
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-black hover:text-gray-600 px-4 py-3 text-xl font-light transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-between px-4 py-3 text-black hover:bg-gray-50 rounded-lg transition-all font-light text-lg mt-4"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span>Language</span>
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                {language}
              </span>
            </button>
          </div>

          <a
            href="https://wa.me/905536952434"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center space-x-2 bg-[#25D366] text-white hover:bg-[#20BA5A] px-6 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>{menuItems[language].whatsapp}</span>
          </a>
        </div>
      </div>
    </>
  );
}
