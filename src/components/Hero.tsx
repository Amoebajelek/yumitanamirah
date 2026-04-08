"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "5%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,116,138,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Decorative line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          width: "1px",
          height: "80px",
          background: "linear-gradient(180deg, transparent, var(--gold))",
          marginBottom: "40px",
          transformOrigin: "top",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "24px",
          fontWeight: 400,
        }}
      >
        Social Media Specialist & Content Creator
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 600,
          lineHeight: 1.05,
          marginBottom: "16px",
          color: "var(--text)",
        }}
      >
        Yumita
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Namirah</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        style={{
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
          marginBottom: "48px",
          textTransform: "uppercase",
        }}
      >
        S.S — Jakarta, Indonesia
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
      >
        <a
          href="#portfolio"
          style={{
            padding: "14px 36px",
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            background: "transparent",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.color = "var(--bg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          style={{
            padding: "14px 36px",
            border: "1px solid rgba(240,237,232,0.15)",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            background: "transparent",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,237,232,0.4)";
            e.currentTarget.style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,237,232,0.15)";
            e.currentTarget.style.color = "var(--text-muted)";
          }}
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "24px",
        }}
      >
        <a
          href="https://www.instagram.com/namirah.yumita"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          Instagram
        </a>
        <span style={{ color: "var(--border)", userSelect: "none" }}>·</span>
        <a
          href="https://www.tiktok.com/@namirah.yumita"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          TikTok
        </a>
        <span style={{ color: "var(--border)", userSelect: "none" }}>·</span>
        <a
          href="https://linkedin.com/in/andi-yumita-namirah-51444a243/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
