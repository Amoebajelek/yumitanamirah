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
          padding: "80px 20px",
          background: "var(--bg-alt)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            fontSize: "2.5rem",
            color: "var(--accent-orange)",
            opacity: 0.4,
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
            bottom: "15%",
            left: "8%",
            fontSize: "2rem",
            color: "var(--accent-purple)",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          &#x2605;
        </motion.div>

        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="badge" style={{ marginBottom: "16px" }}>Get in Touch</span>

            <h2 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}>
              Let&apos;s Work
              <br />
              <span style={{ color: "var(--primary)" }}>Together</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "40px", fontWeight: 400 }}>
              Tertarik berkolaborasi atau ingin mengundang saya sebagai narasumber?
              <br />
              Mari terhubung melalui platform berikut.
            </p>

            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
              <a
                href="mailto:Andiyumitanamirah@gmail.com"
                style={{
                  padding: "16px 36px",
                  background: "var(--primary)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "100px",
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
                Email Me &#x2197;
              </a>
              <a
                href="https://wa.me/6281315198387"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "16px 36px",
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  transition: "all 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "100px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-teal)";
                  e.currentTarget.style.color = "var(--accent-teal)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
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
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {s.label} &#x2197;
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "28px 20px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        background: "var(--bg)",
      }}>
        <span style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "var(--text)",
        }}>
          YN<span style={{ color: "var(--primary)" }}>.</span>
        </span>
        <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }}>
          &copy; {new Date().getFullYear()} Yumita Namirah &middot; Social Media Specialist & Content Creator &middot; Jakarta
        </span>
      </footer>
    </>
  );
}
