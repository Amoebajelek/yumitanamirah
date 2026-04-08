"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "120px 40px",
          background: "var(--bg-alt)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Background gradient orbs */}
        <div style={{
          position: "absolute",
          top: "0",
          left: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "0",
          right: "20%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,127,23,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }} />

        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div style={{
              width: "2px",
              height: "60px",
              background: "var(--gradient-1)",
              margin: "0 auto 40px",
              borderRadius: "2px",
            }} />

            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>
              Get in Touch
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}>
              Let&apos;s work
              <br />
              <em style={{
                fontStyle: "italic",
                background: "var(--gradient-1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>together</em>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "48px" }}>
              Tertarik berkolaborasi atau ingin mengundang saya sebagai narasumber?
              <br />
              Mari terhubung melalui platform berikut.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
              <a
                href="mailto:Andiyumitanamirah@gmail.com"
                style={{
                  padding: "14px 32px",
                  background: "var(--gradient-1)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "8px",
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
                Email Me
              </a>
              <a
                href="https://wa.me/6281315198387"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 32px",
                  background: "transparent",
                  border: "1px solid var(--border-hover)",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "all 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-teal)";
                  e.currentTarget.style.color = "var(--accent-teal)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Instagram", url: "https://www.instagram.com/namirah.yumita", color: "var(--secondary)" },
                { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita", color: "var(--accent-teal)" },
                { label: "LinkedIn", url: "https://linkedin.com/in/andi-yumita-namirah-51444a243/", color: "var(--accent-blue)" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = s.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 40px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        background: "var(--bg)",
      }}>
        <span style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1rem",
          background: "var(--gradient-1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 700,
        }}>
          Yumita Namirah
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} &middot; Social Media Specialist & Content Creator &middot; Jakarta, Indonesia
        </span>
      </footer>
    </>
  );
}
