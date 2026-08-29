"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

// Sabit bir süre yerine, düğme modelinin (ve stüdyo ortam ışığı HDR'ının)
// fiilen yüklenip yüklenmediğini drei'nin global yükleme yöneticisini
// izleyen useProgress ile takip ediyoruz. Model zaten önbellekteyse loader
// gecikmeden kapanır; yavaş bağlantılarda model gerçekten hazır olana
// kadar (en fazla MAX_WAIT_MS) açık kalır — böylece "sayfa yüklendi ama
// model hâlâ gelmedi" boşluğu oluşmaz. MIN_VISIBLE_MS, model çok hızlı
// gelirse loader'ın göz kırpar gibi anında kaybolmasını engelliyor.
const MIN_VISIBLE_MS = 400;
const MAX_WAIT_MS = 8000;

export default function Loader() {
  const [mounted, setMounted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const shownAtRef = useRef(Date.now());
  const exitStartedRef = useRef(false);

  const { progress, active } = useProgress();

  const startExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setIsExiting(true);

    requestAnimationFrame(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transform = "scale(0.95)";
        loaderRef.current.style.opacity = "0";
      }
      setTimeout(() => setMounted(false), 300);
    });
  }, []);

  // Model (ve ortam HDR'ı) fiilen yüklendiğinde loader'ı smooth şekilde kapat.
  useEffect(() => {
    const modelReady = !active && progress >= 100;
    if (!modelReady) return;

    const elapsed = Date.now() - shownAtRef.current;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    const timer = setTimeout(startExit, wait);
    return () => clearTimeout(timer);
  }, [active, progress, startExit]);

  // Güvenlik ağı: model bir şekilde hiç yüklenmezse loader sonsuza kadar açık kalmasın.
  useEffect(() => {
    const safety = setTimeout(startExit, MAX_WAIT_MS);
    return () => clearTimeout(safety);
  }, [startExit]);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm ${
        isExiting ? "pointer-events-none" : "pointer-events-auto"
      }`}
      style={{
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isExiting ? "scale(0.95)" : "scale(1)",
        opacity: isExiting ? 0 : 1,
      }}
    >
      <div className="relative">
        {/* Classic spinning circle */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
