"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { locale } = useLanguage();

  return (
    <>
      {/* CTA Section */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "var(--hero-bg)",
          position: "relative",
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 92, 53, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }} />

        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 16px",
              background: "rgba(255, 92, 53, 0.12)",
              color: "var(--primary)",
              borderRadius: "100px",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "1px solid rgba(255, 92, 53, 0.2)",
              marginBottom: "20px",
            }}>
              &#x2728; {locale === "id" ? "Mari Terhubung" : "Let's Connect"}
            </span>

            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "16px",
              color: "var(--hero-text)",
              letterSpacing: "-0.02em",
            }}>
              {locale === "id" ? "Punya Ide Proyek" : "Have An Awesome Project"}
              <br />
              {locale === "id" ? (
                <span style={{ color: "var(--primary)" }}>Menarik? Mari Diskusikan</span>
              ) : (
                <span style={{ color: "var(--primary)" }}>Let&apos;s Discuss</span>
              )}
            </h2>
            <p style={{
              color: "var(--hero-text-secondary)",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              marginBottom: "36px",
            }}>
              {locale === "id"
                ? "Tertarik berkolaborasi atau ingin mengundang saya sebagai narasumber? Mari terhubung melalui platform berikut."
                : "Interested in collaborating or inviting me as a speaker? Let’s connect through the platforms below."}
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
              <a
                href="mailto:Andiyumitanamirah@gmail.com"
                style={{
                  padding: "14px 36px",
                  background: "var(--primary)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
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
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 92, 53, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {locale === "id" ? "Kirim Email" : "Email Me"} &#x2197;
              </a>
              <a
                href="https://wa.me/6281315198387"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 36px",
                  border: "1px solid var(--hero-border)",
                  color: "var(--hero-text)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  borderRadius: "100px",
                  transition: "all 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-teal)";
                  e.currentTarget.style.color = "var(--accent-teal)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--hero-border)";
                  e.currentTarget.style.color = "var(--hero-text)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                WhatsApp
              </a>
            </div>

            {/* Credentials row */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              {[
                {
                  icon: "&#x2B50;",
                  text: locale === "id" ? "50+ Brand Ditangani" : "50+ Brands Served",
                },
                { icon: "&#x1F3AC;", text: "7M+ Views" },
                {
                  icon: "&#x2714;&#xFE0F;",
                  text:
                    locale === "id"
                      ? "Spesialis Content Creator"
                      : "Content Creator Specialist",
                },
              ].map((item) => (
                <span key={item.text} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  color: "var(--hero-text-muted)",
                  fontWeight: 500,
                }}>
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Instagram", url: "https://www.instagram.com/namirah.yumita" },
                { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita" },
                { label: "LinkedIn", url: "https://linkedin.com/in/andiyumitanamirah" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--hero-text-muted)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--hero-text-muted)")}
                >
                  {s.label} &#x2197;
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" style={{
        padding: "24px 20px",
        borderTop: "1px solid var(--hero-border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        background: "var(--hero-bg)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.65rem",
            fontWeight: 800,
            color: "#fff",
          }}>
            YN
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--hero-text)" }}>
            Yumita Namirah
          </span>
        </div>
        <span style={{ fontSize: "0.78rem", color: "var(--hero-text-muted)", fontWeight: 400 }}>
          &copy; {new Date().getFullYear()} &middot;{" "}
          {locale === "id"
            ? "Social Media Content Creator"
            : "Social Media Content Creator"}{" "}
          &middot; Jakarta, Indonesia
        </span>
      </footer>
      <style>{`
        @media (max-width: 767px) {
          .site-footer {
            flex-direction: column !important;
            text-align: center !important;
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </>
  );
}
