"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "TR" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  TR: {
    // Hero Section
    heroTitle: "Birlik Düğme & Aksesuar",
    heroSubtitle: "Kaliteli düğme ve tekstil aksesuarları ithalatında",
    heroSubtitleHighlight: "güvenilir çözüm ortağınız",
    heroButtonProducts: "Ürünleri İncele",
    heroButtonContact: "İletişime Geç",
    categoriesTitle: "Ürün Kategorilerimiz",
    
    // Products Section
    productsTitle: "Öne Çıkan Ürünler",
    productsDesc: "Geniş ürün yelpazemiz ile her ihtiyacınıza uygun çözümler sunuyoruz",
    
    // Branches Section
    branchesTitle: "Şubelerimiz",
    branchesDesc: "İstanbul'da iki farklı noktadan hizmet veriyoruz",
    getDirections: "Yol Tarifi Al",
    
    // Stats Section
    statsExperience: "Yıllık Tecrübe",
    statsProducts: "Ürün Çeşidi",
    statsCustomers: "Mutlu Müşteri",
    statsSatisfaction: "Memnuniyet",
    
    // About Section
    aboutTitle: "Hakkımızda",
    aboutText1: "Birlik Düğme, 37 yılı aşkın tecrübesiyle tekstil aksesuarları alanında faaliyet gösteren köklü bir ithalat ve tedarik firmasıdır. Düğme, fermuar ve benzeri ürünlerde yüksek stok kapasitesi ve geniş ürün çeşitliliği ile Türkiye genelinde üreticilere hizmet vermektedir.",
    aboutText2: "Uluslararası tedarik ağımız, güçlü stok yapımız ve sürdürülebilir fiyat politikamız sayesinde binlerce firma tarafından tercih edilen güvenilir bir çözüm ortağıyız. Merter ve Bayrampaşa'daki iki şubemizle sektöre hızlı ve istikrarlı tedarik sağlıyoruz.",
    
    // Contact Section
    contactTitle: "İletişim",
    contactDesc: "Sorularınız ve talepleriniz için bizimle iletişime geçin",
    whatsapp: "WhatsApp",
    
    // Footer Section
    bannerTexts: ["Kalite", "Güven", "Hız", "Çeşitlilik", "Profesyonellik", "Memnuniyet"],
    ctaTitle: "Doğru Ürün",
    ctaTitleHighlight: "Doğru Adres",
    ctaDesc: "Düğme ve tekstil aksesuarları ihtiyaçlarınız için bizimle iletişime geçin",
    ctaButtonQuote: "Fiyat Teklifi Alın",
    ctaButtonCatalog: "Katalog İndirin",
    footerDesc: "37 yıllık tecrübe. Güçlü stok. Güvenilir tedarik.",
    quickLinks: "Hızlı Bağlantılar",
    contactInfo: "İletişim",
    
    // Navigation
    home: "Anasayfa",
    products: "Ürünler",
    branches: "Şubeler",
    about: "Hakkımızda",
    contact: "İletişim",
    search: "Ürün veya kategori ara...",
    popularSearches: "Popüler Aramalar",
    escToClose: "ESC ile kapat",
    language: "Language",
    menu: "Menü",
    
    // Product Names
    classicButtons: "Klasik Düğmeler",
    decorativeButtons: "Dekoratif Düğmeler",
    metalAccessories: "Metal Aksesuarlar",
    zippers: "Fermuarlar",
    buckles: "Tokalar",
    snapFasteners: "Çıt Çıtlar",
    labels: "Etiketler",
    decorativeStones: "Süs Taşları",
    
    // Product Descriptions
    classicButtonsDesc: "Gömlek ve kıyafetler için",
    decorativeButtonsDesc: "Özel tasarımlar",
    metalAccessoriesDesc: "Dayanıklı ve şık",
    zippersDesc: "Her boyutta mevcut",
    bucklesDesc: "Kemer ve çanta için",
    snapFastenersDesc: "Pratik çözümler",
    labelsDesc: "Marka kimliğiniz için",
    decorativeStonesDesc: "Dekoratif amaçlı",
    
    // Categories
    plasticButton: "Plastik Düğme",
    metalButton: "Metal Düğme",
    footedButton: "Ayaklı Düğme",
    zipper: "Fermuar",
    buckle: "Toka",
    metalAccessory: "Metal Aksesuar",
    snapFastener: "Çıt Çıt",
    brooch: "Broş",
    beltBuckle: "Kemer Tokası",
    label: "Etiket",
    application: "Aplik",
    elastic: "Lastik",
    grograin: "Grogren",
    herringbone: "Balıksırtı",
    lace: "Dantel",
    bead: "Pul",
    ribbon: "Şerit",
    emblem: "Arma",
    hanger: "Askı",
    birdEye: "Kuş Gözü",
    print: "Baskı",
    
    // Branch Names
    bayrampasaBranch: "Bayrampaşa Şube",
    merterBranch: "Merter Şube",
    
    // Contact Info
    hours: "Pazartesi - Cumartesi: 08:00 - 19:00",
    
    // Overlay Texts
    overlayTitle1: "Kalite Detaylarda Gizlidir",
    overlayDesc1: "Yüksek kaliteli malzemelerden üretilen dayanıklı ve şık düğmeler. Birlik Düğme, her üründe estetik ve uzun ömürlü kullanım sunar.",
    overlayTitle2: "Geniş Ürün Yelpazesi",
    overlayDesc2: "Farklı model ve tasarımlarla her ihtiyaca uygun çözümler. Zengin çeşitlilik ve sürekli stok avantajı her zaman yanınızda.",
    overlayTitle3: "İthal Kalite, Uygun Fiyat",
    overlayDesc3: "Dünyanın seçkin üreticilerinden ithal edilen düğmeler, Birlik Düğme güvencesiyle ulaşılabilir fiyatlarla sunar.",
    overlayTitle4: "Sektörün Güvenilir Tercihi",
    overlayDesc4: "Tekstil profesyonellerinin yıllardır tercih ettiği marka. Güvenilir tedarik, istikrarlı kalite ve hızlı teslimat.",
  },
  EN: {
    // Hero Section
    heroTitle: "Birlik Button & Accessories",
    heroSubtitle: "Your trusted partner in quality button and textile accessories import",
    heroSubtitleHighlight: "reliable solution partner",
    heroButtonProducts: "View Products",
    heroButtonContact: "Contact Us",
    categoriesTitle: "Our Product Categories",
    
    // Products Section
    productsTitle: "Featured Products",
    productsDesc: "We offer solutions for all your needs with our wide product range",
    
    // Branches Section
    branchesTitle: "Our Branches",
    branchesDesc: "We serve from two different locations in Istanbul",
    getDirections: "Get Directions",
    
    // Stats Section
    statsExperience: "Years of Experience",
    statsProducts: "Product Varieties",
    statsCustomers: "Happy Customers",
    statsSatisfaction: "Satisfaction",
    
    // About Section
    aboutTitle: "About Us",
    aboutText1: "Birlik Button is a well-established import and supply company with over 37 years of experience in the textile accessories sector. We serve manufacturers throughout Turkey with high stock capacity and wide product variety in buttons, zippers and similar products.",
    aboutText2: "With our international supply network, strong stock structure and sustainable pricing policy, we are a trusted solution partner preferred by thousands of companies. We provide fast and stable supply to the sector with our two branches in Merter and Bayrampaşa.",
    
    // Contact Section
    contactTitle: "Contact",
    contactDesc: "Contact us for your questions and requests",
    whatsapp: "WhatsApp",
    
    // Footer Section
    bannerTexts: ["Quality", "Trust", "Speed", "Variety", "Professionalism", "Satisfaction"],
    ctaTitle: "Right Product",
    ctaTitleHighlight: "Right Address",
    ctaDesc: "Contact us for your button and textile accessories needs",
    ctaButtonQuote: "Get Price Quote",
    ctaButtonCatalog: "Download Catalog",
    footerDesc: "37 years of experience. Strong stock. Reliable supply.",
    quickLinks: "Quick Links",
    contactInfo: "Contact",
    
    // Navigation
    home: "Home",
    products: "Products",
    branches: "Branches",
    about: "About Us",
    contact: "Contact",
    search: "Search product or category...",
    popularSearches: "Popular Searches",
    escToClose: "ESC to close",
    language: "Language",
    menu: "Menu",
    
    // Product Names
    classicButtons: "Classic Buttons",
    decorativeButtons: "Decorative Buttons",
    metalAccessories: "Metal Accessories",
    zippers: "Zippers",
    buckles: "Buckles",
    snapFasteners: "Snap Fasteners",
    labels: "Labels",
    decorativeStones: "Decorative Stones",
    
    // Product Descriptions
    classicButtonsDesc: "For shirts and clothes",
    decorativeButtonsDesc: "Special designs",
    metalAccessoriesDesc: "Durable and stylish",
    zippersDesc: "Available in all sizes",
    bucklesDesc: "For belts and bags",
    snapFastenersDesc: "Practical solutions",
    labelsDesc: "For your brand identity",
    decorativeStonesDesc: "For decorative purposes",
    
    // Categories
    plasticButton: "Plastic Button",
    metalButton: "Metal Button",
    footedButton: "Footed Button",
    zipper: "Zipper",
    buckle: "Buckle",
    metalAccessory: "Metal Accessory",
    snapFastener: "Snap Fastener",
    brooch: "Brooch",
    beltBuckle: "Belt Buckle",
    label: "Label",
    application: "Application",
    elastic: "Elastic",
    grograin: "Grograin",
    herringbone: "Herringbone",
    lace: "Lace",
    bead: "Bead",
    ribbon: "Ribbon",
    emblem: "Emblem",
    hanger: "Hanger",
    birdEye: "Bird's Eye",
    print: "Print",
    
    // Branch Names
    bayrampasaBranch: "Bayrampaşa Branch",
    merterBranch: "Merter Branch",
    
    // Contact Info
    hours: "Monday - Saturday: 08:00 - 19:00",
    
    // Overlay Texts
    overlayTitle1: "Quality is Hidden in Details",
    overlayDesc1: "Durable and stylish buttons produced from high-quality materials. Birlik Button offers aesthetic and long-lasting use for every product.",
    overlayTitle2: "Wide Product Range",
    overlayDesc2: "Suitable solutions for every need with different models and designs. Rich variety and constant stock advantage always with you.",
    overlayTitle3: "Imported Quality, Affordable Prices",
    overlayDesc3: "Buttons imported from the world's leading manufacturers. Birlik Button offers accessible prices with assurance.",
    overlayTitle4: "Sector's Reliable Choice",
    overlayDesc4: "The brand preferred by textile professionals for years. Reliable supply, consistent quality and fast delivery.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("TR");

  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR");
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.TR] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
