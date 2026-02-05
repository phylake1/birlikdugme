import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { Search } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birlik Düğme",
  description: "Bu site için kısa ve açıklayıcı bir description buraya yazılır.",
  keywords: ["nextjs", "web tasarım", "react", "seo", "frontend"],

  icons: {
    icon: [
      { url: "/img/favicon.png" },
    ],
    shortcut: "/img/favicon.png",
    apple: "/img/favicon.png",
  },

  openGraph: {
    title: "Birlik Düğme",
    description: "Bu site için kısa ve açıklayıcı bir description buraya yazılır.",
    url: "https://birlikdugme.com",
    siteName: "Birlik Düğme",
    images: [
      {
        url: "https://siteadresin.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site görseli",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Site Başlığı | Marka Adı",
    description: "Bu site için kısa ve açıklayıcı bir description buraya yazılır.",
    images: ["https://siteadresin.com/og-image.jpg"],
  },
};

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}