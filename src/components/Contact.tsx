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
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
        ref={ref}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(180deg, transparent, var(--gold))",
              margin: "0 auto 40px",
            }} />

            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>
              Get in Touch
            </p>
            <h2 style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}>
              Let&apos;s work
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>together</em>
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "48px" }}>
              Tertarik berkolaborasi atau ingin mengundang saya sebagai narasumber?
              <br />
              Mari terhubung melalui platform berikut.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
              <a
                href="mailto:Andiyumitanamirah@gmail.com"
                style={{
                  padding: "14px 32px",
                  background: "var(--gold)",
                  color: "var(--bg)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "opacity 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                ✉ Email Me
              </a>
              <a
                href="https://wa.me/6281315198387"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 32px",
                  background: "transparent",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "all 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Instagram", url: "https://www.instagram.com/namirah.yumita" },
                { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita" },
                { label: "LinkedIn", url: "https://linkedin.com/in/andi-yumita-namirah-51444a243/" },
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
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
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
      }}>
        <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", color: "var(--gold)" }}>
          Yumita Namirah
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} · Social Media Specialist & Content Creator · Jakarta, Indonesia
        </span>
      </footer>
    </>
  );
}
