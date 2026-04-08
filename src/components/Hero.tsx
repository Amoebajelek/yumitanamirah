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
        background: "var(--gradient-hero)",
      }}
    >
      {/* Decorative gradient orbs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(196,127,23,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,184,48,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        filter: "blur(60px)",
      }} />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          width: "2px",
          height: "80px",
          background: "var(--gradient-1)",
          marginBottom: "40px",
          transformOrigin: "top",
          borderRadius: "2px",
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
          color: "var(--primary)",
          marginBottom: "24px",
          fontWeight: 500,
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
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: "16px",
          color: "var(--text)",
        }}
      >
        Yumita
        <br />
        <em style={{
          fontStyle: "italic",
          background: "var(--gradient-1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Namirah</em>
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
            background: "var(--gradient-1)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            display: "inline-block",
            borderRadius: "8px",
            fontWeight: 500,
            boxShadow: "0 4px 20px rgba(212, 160, 23, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(212, 160, 23, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(212, 160, 23, 0.3)";
          }}
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          style={{
            padding: "14px 36px",
            border: "1px solid var(--border-hover)",
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            background: "transparent",
            display: "inline-block",
            borderRadius: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hover)";
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Social links */}
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
        {[
          { label: "Instagram", url: "https://www.instagram.com/namirah.yumita", color: "var(--secondary)" },
          { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita", color: "var(--accent-teal)" },
          { label: "LinkedIn", url: "https://linkedin.com/in/andi-yumita-namirah-51444a243/", color: "var(--accent-blue)" },
        ].map((social, i) => (
          <span key={social.label} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {i > 0 && <span style={{ color: "var(--border)", userSelect: "none" }}>&middot;</span>}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {social.label}
            </a>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
