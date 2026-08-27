"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProduct = {
  name: string | string[];
  desc?: string | string[];
  image: string;
  alt?: string;
};

type Props = {
  products: LightboxProduct[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ProductLightbox({
  products,
  activeIndex,
  onClose,
  onNavigate,
}: Props) {
  const total = products.length;

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % total);
  }, [activeIndex, total, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goPrev, goNext]);

  const product = products[activeIndex];
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        aria-label="Kapat"
      >
        <X className="w-6 h-6" />
      </button>

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 sm:left-6 z-10 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Önceki ürün"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 sm:right-6 z-10 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Sonraki ürün"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}

      <div
        className="relative z-0 max-w-3xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xl">
          <img
            key={product.image}
            src={product.image}
            alt={(Array.isArray(product.alt) ? product.alt.join(" ") : product.alt) || (Array.isArray(product.name) ? product.name.join(" ") : product.name)}
            className="w-full h-full object-cover animate-fadeIn"
          />
        </div>
        <div className="mt-5 text-center px-4">
          <h3 className="text-white text-lg sm:text-xl font-medium mb-1">
            {product.name}
          </h3>
          {product.desc && (
            <p className="text-white/60 text-sm sm:text-base font-light">
              {product.desc}
            </p>
          )}
          {total > 1 && (
            <p className="text-white/40 text-xs sm:text-sm font-light mt-3 tracking-wider">
              {activeIndex + 1} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
