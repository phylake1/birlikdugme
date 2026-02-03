import "./globals.css"
import Navbar from "@/components/navbar/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="font-(family-name:/)">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
