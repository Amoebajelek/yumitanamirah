import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import LanguageProvider from "@/components/LanguageProvider";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yumita Namirah — Social Media Content Creator",
  description: "Portfolio of Yumita Namirah — Social Media Content Creator and Scoutinfluencer based in Jakarta, Indonesia. Served 50+ brands with 7M+ total views.",
  keywords: ["content creator", "social media specialist", "jakarta", "yumita namirah"],
  openGraph: {
    title: "Yumita Namirah — Social Media Content Creator",
    description: "Social Media Content Creator & Scoutinfluencer based in Jakarta",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
