"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();

  const navLinks = [
    { label: locale === "id" ? "Beranda" : "Home", href: "#" },
    { label: locale === "id" ? "Tentang" : "About", href: "#about" },
    {
      label: locale === "id" ? "Pengalaman" : "Experience",
      href: "#experience",
    },
    {
      label: locale === "id" ? "Portofolio" : "Portfolio",
      href: "#portfolio",
    },
    { label: locale === "id" ? "Keahlian" : "Skills", href: "#skills" },
    { label: locale === "id" ? "Kontak" : "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "10px 20px" : "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.4s ease",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Brand - left on mobile, center on desktop */}
          <a href="#" className="show-mobile" style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
          }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "#fff",
            }}>
              YN
            </div>
          </a>

          {/* Desktop nav - left links */}
          <div style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            background: "var(--pill-bg)",
            padding: "4px",
            borderRadius: "100px",
            backdropFilter: "blur(10px)",
          }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                style={{
                  color: "var(--hero-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  padding: "7px 14px",
                  borderRadius: "100px",
                  transition: "all 0.2s",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--hero-text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Center brand - desktop only */}
          <a href="#" className="hidden-mobile nav-brand-center" style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
          }}>
            <div style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#fff",
            }}>
              YN
            </div>
          </a>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={toggleLocale}
              aria-label="Toggle language"
              style={{
                background: "var(--pill-bg)",
                border: "1px solid var(--hero-border)",
                borderRadius: "999px",
                minWidth: "52px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#fff",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
                padding: "0 12px",
              }}
            >
              {locale === "id" ? "EN" : "ID"}
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "var(--pill-bg)",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.95rem",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              {theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: "var(--pill-bg)",
                border: "none",
                cursor: "pointer",
                color: scrolled ? "var(--text)" : "#fff",
                fontSize: "1.2rem",
                display: "none",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? "\u2715" : "\u2630"}
            </button>

            <a
              href="#contact"
              className="hidden-mobile"
              style={{
                padding: "8px 20px",
                background: "var(--primary)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                borderRadius: "100px",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-dark)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {locale === "id" ? "Hubungi Saya" : "Contact Us"}
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              padding: "16px 20px 24px",
              borderBottom: "1px solid var(--hero-border)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "12px 16px",
                  borderRadius: "12px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLocale}
              style={{
                padding: "12px 16px",
                background: "transparent",
                border: "1px solid var(--hero-border)",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 700,
                borderRadius: "12px",
                textAlign: "left",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              {locale === "id"
                ? "Switch ke English"
                : "Switch to Bahasa Indonesia"}
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 24px",
                background: "var(--primary)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 700,
                borderRadius: "100px",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              {locale === "id" ? "Hubungi Saya" : "Contact Us"}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-brand-center { display: none !important; }
        }
      `}</style>
    </>
  );
}
