import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yumita Namirah — Social Media Specialist & Content Creator",
  description: "Portfolio of Yumita Namirah S.S — Social Media Specialist, Content Creator, and Scout Influencer based in Jakarta, Indonesia.",
  keywords: ["content creator", "social media specialist", "jakarta", "yumita namirah"],
  openGraph: {
    title: "Yumita Namirah — Content Creator",
    description: "Social Media Specialist & Content Creator based in Jakarta",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
