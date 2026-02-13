"use client";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Loader from "@/components/ui/Loader";
import { useState, useEffect } from "react";
import { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 saniye loader göster

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="tr" className="font-(family-name:/)">
      <head>
        <link rel="icon" href="/img/favicon.png" type="image/png" />
      </head>
      <body>
        <LanguageProvider>
          {isLoading && <Loader />}
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}