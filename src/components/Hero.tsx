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
        padding: "120px 20px 80px",
        position: "relative",
        overflow: "hidden",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Decorative stars */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          fontSize: "3rem",
          color: "var(--accent-orange)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      >
        &#x2726;
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "60%",
          left: "5%",
          fontSize: "2rem",
          color: "var(--primary)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        &#x2726;
      </motion.div>
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          fontSize: "1.5rem",
          color: "var(--accent-purple)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        &#x2605;
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginBottom: "24px" }}
      >
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 18px",
          background: "var(--badge-bg)",
          color: "var(--badge-text)",
          borderRadius: "100px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--primary)",
          }} />
          Social Media Specialist & Content Creator
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          marginBottom: "24px",
          color: "var(--text)",
          letterSpacing: "-0.02em",
        }}
      >
        Level Up Your Content!{" "}
        <span style={{ color: "var(--primary)" }}>Pro Editing</span>
        <br />
        Without The Hassle!
      </motion.h1>

      {/* Subtitle bullets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {["7+ Years Experience", "2K+ Contents Created", "Brand Voice Expert"].map((item) => (
          <span key={item} style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            fontWeight: 500,
          }}>
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--text-muted)",
            }} />
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}
      >
        <a
          href="#portfolio"
          style={{
            padding: "16px 36px",
            background: "var(--primary)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 700,
            borderRadius: "100px",
            transition: "all 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary-dark)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 58, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--primary)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          See Portfolio &#x2197;
        </a>
        <a
          href="#contact"
          style={{
            padding: "16px 36px",
            border: "2px solid var(--border)",
            color: "var(--text)",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 700,
            borderRadius: "100px",
            transition: "all 0.2s ease",
            background: "transparent",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Social links at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        style={{
          marginTop: "64px",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Instagram", url: "https://www.instagram.com/namirah.yumita" },
          { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita" },
          { label: "LinkedIn", url: "https://linkedin.com/in/andi-yumita-namirah-51444a243/" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {social.label} &#x2197;
          </a>
        ))}
      </motion.div>
    </section>
  );
}
