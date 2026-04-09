"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          padding: scrolled ? "12px 20px" : "20px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{
          fontSize: "1.4rem",
          textDecoration: "none",
          fontWeight: 800,
          color: "var(--text)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          YN<span style={{ color: "var(--primary)", fontSize: "1.6rem", lineHeight: 1 }}>.</span>
        </a>

        {/* Desktop nav */}
        <div style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
          background: "var(--pill-bg)",
          padding: "4px",
          borderRadius: "100px",
        }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.85rem",
                padding: "8px 18px",
                borderRadius: "100px",
                transition: "all 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "var(--pill-bg)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.1rem",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"}
          </button>

          <a
            href="#contact"
            className="hidden-mobile"
            style={{
              padding: "10px 24px",
              background: "var(--primary)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              borderRadius: "100px",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
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
            Let&apos;s Chat &#x2197;
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              fontSize: "1.5rem",
              padding: "4px",
              display: "none",
            }}
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
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
              padding: "20px 20px 28px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "12px 16px",
                  borderRadius: "12px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--pill-bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 24px",
                background: "var(--primary)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                borderRadius: "100px",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Let&apos;s Chat &#x2197;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
