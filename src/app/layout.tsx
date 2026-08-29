"use client";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Loader from "@/components/ui/Loader";
import { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="font-(family-name:/)">
      <head>
        <link rel="icon" href="/img/favicon.png" type="image/png" />
      </head>
      <body>
        <LanguageProvider>
          <Loader />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
