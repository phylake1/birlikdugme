"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Auto hide after 1.5 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      // Force reflow and animation
      requestAnimationFrame(() => {
        if (loaderRef.current) {
          loaderRef.current.style.transform = 'scale(0.95)';
          loaderRef.current.style.opacity = '0';
          
          setTimeout(() => {
            setMounted(false);
          }, 300);
        }
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={loaderRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm ${
        isExiting ? "pointer-events-none" : "pointer-events-auto"
      }`}
      style={{
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isExiting ? 'scale(0.95)' : 'scale(1)',
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
