"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = {
    TR: {
      home: "Anasayfa",
      products: "Ürünler",
      franchise: "Şubeler",
      about: "Hakkımızda",
      contact: "İletişim",
      search: "Ürün veya kategori ara...",
      whatsapp: "WhatsApp",
    },
    EN: {
      home: "Home",
      products: "Products",
      franchise: "Branches",
      about: "About Us",
      contact: "Contact",
      search: "Search product or category...",
      whatsapp: "WhatsApp",
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsSearchClosing(false);
  };

  const closeSearch = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("shadow-md");
        } else {
          nav.classList.remove("shadow-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img
                  src="/img/birlikdugme_b.png"
                  alt="Birlik Düğme"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              
               <a href="#"
                className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
              >
                {menuItems[language].home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              
              <a  href="#products"
                className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
              >
                {menuItems[language].products}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a  href="#branches"
                className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
              >
                {menuItems[language].franchise}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              
               <a href="#about"
                className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
              >
                {menuItems[language].about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>

              
               <a href="#contact"
                className="relative text-black hover:text-gray-600 px-4 py-2 text-[15px] font-medium transition-all group"
              >
                {menuItems[language].contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Right Section - Search, Language, WhatsApp */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-black hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-all"
                aria-label="Search"
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Language Toggle */}
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

              {/* WhatsApp Button */}
              
               <a href="https://wa.me/905XXXXXXXXX"
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
              {/* Mobile Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-black hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-all"
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Hamburger */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-black hover:text-gray-600 hover:bg-gray-100/50 focus:outline-none transition-colors"
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

      {/* Mobile Full Screen Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-[60] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Menu Content */}
        <div className="h-full flex flex-col">
          {/* Top Bar with Logo and Close */}
          <div className="flex justify-between items-center h-16 px-6 border-b border-gray-100">
            <img
              src="/img/birlikdugme_b.png"
              alt="Birlik Düğme"
              className="h-10 w-auto"
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-full text-black hover:bg-gray-100 transition-colors"
            >
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
            </button>
          </div>

          {/* Menu Items Container */}
          <div className="flex-1 flex flex-col justify-between px-6 py-8 overflow-y-auto">
            {/* Menu Links */}
            <div className="space-y-1">
              {[
                {
                  href: "#",
                  label: menuItems[language].home,
                  delay: 100,
                },
                {
                  href: "#products",
                  label: menuItems[language].products,
                  delay: 150,
                },
                {
                  href: "#branches",
                  label: menuItems[language].franchise,
                  delay: 200,
                },
                {
                  href: "#about",
                  label: menuItems[language].about,
                  delay: 250,
                },
                {
                  href: "#contact",
                  label: menuItems[language].contact,
                  delay: 300,
                },
              ].map((item, index) => (
                 <a key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block text-black hover:text-gray-600 px-4 py-3 text-xl font-light transition-all duration-300 ${
                    isOpen ? "animate-fadeIn" : ""
                  }`}
                  style={{
                    animationDelay: `${item.delay}ms`,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`w-full flex items-center justify-between px-4 py-3 text-black hover:bg-gray-50 rounded-lg transition-all font-light text-lg mt-4 ${
                  isOpen ? "animate-fadeIn" : ""
                }`}
                style={{
                  animationDelay: "300ms",
                  opacity: isOpen ? 1 : 0,
                }}
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

            {/* Mobile WhatsApp Button */}
            
             <a href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={`flex items-center justify-center space-x-2 bg-[#25D366] text-white hover:bg-[#20BA5A] px-6 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl ${
                isOpen ? "animate-fadeIn" : ""
              }`}
              style={{
                animationDelay: "350ms",
                opacity: isOpen ? 1 : 0,
              }}
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
      </div>

      {/* Search Modal Popup */}
      {isSearchOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4 transition-all duration-700 ease-in-out ${
            isSearchClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeSearch}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-700 ease-in-out ${
              isSearchClosing ? "opacity-0" : "opacity-100"
            }`}
          ></div>

          {/* Search Container */}
          <div
            className={`relative w-full max-w-2xl transition-all duration-700 ease-in-out ${
              isSearchClosing
                ? "opacity-0 -translate-y-10 scale-95"
                : "opacity-100 translate-y-0 scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-gray-200/50">
              {/* Search Input */}
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder={menuItems[language].search}
                  className="w-full px-16 py-5 text-lg text-black placeholder:text-gray-400 bg-transparent rounded-xl focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={closeSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>
              </div>

              {/* Quick Links */}
              <div
                className={`mt-4 px-4 pb-3 transition-all duration-1000 ease-in-out ${
                  isSearchClosing
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ transitionDelay: isSearchClosing ? "0ms" : "300ms" }}
              >
                <div className="text-xs text-gray-500 font-medium mb-2">
                  {language === "TR" ? "Popüler Aramalar" : "Popular Searches"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Düğme", "Fermuar", "Aksesuar", "Metal"].map(
                    (tag, index) => (
                      <button
                        key={tag}
                        className={`px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all hover:scale-105 ${
                          !isSearchClosing ? "animate-fadeIn" : ""
                        }`}
                        style={{
                          animationDelay: `${400 + index * 100}ms`,
                          opacity: !isSearchClosing ? 1 : 0,
                        }}
                      >
                        {tag}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ESC Hint */}
            <div
              className={`mt-4 text-center transition-all duration-1000 ease-in-out ${
                isSearchClosing
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: isSearchClosing ? "0ms" : "500ms" }}
            >
              <span className="text-sm text-white/80">
                ESC {language === "TR" ? "ile kapat" : "to close"}
              </span>
            </div>
          </div>
        </div>
      )}

    
    </>
  );
}
