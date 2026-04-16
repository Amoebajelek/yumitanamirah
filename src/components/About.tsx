"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const highlights = [
  {
    icon: "🎬",
    title: "Video Content Creation",
    desc: "End-to-end video production from concept, shooting to editing for brands and organizations.",
    color: "var(--primary)",
  },
  {
    icon: "📊",
    title: "Content Strategy",
    desc: "Data-driven content planning, analytics and performance optimization for social media growth.",
    color: "var(--accent-blue)",
  },
  {
    icon: "🎯",
    title: "Brand Management",
    desc: "Managing 10+ brand accounts with consistent voice and visual identity across platforms.",
    color: "var(--accent-purple)",
  },
  {
    icon: "🌍",
    title: "Scoutinfluencer",
    desc: "International experience as social media team at World Scout Jamboree 2023 in South Korea.",
    color: "var(--accent-teal)",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} style={{
      padding: "80px 20px",
      background: "var(--bg-alt)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>About Me</span>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
          }}>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}>
              My <span style={{ color: "var(--primary)" }}>Services</span>
            </h2>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "0.92rem",
              maxWidth: "450px",
              lineHeight: 1.6,
            }}>
              Social Media Content Creator berbasis di Jakarta dengan pengalaman sejak 2018. Dari brand komersial hingga organisasi internasional.
            </p>
          </div>
        </motion.div>

        <div className="about-services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}>
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "28px 24px",
                transition: "all 0.2s ease",
                boxShadow: "var(--shadow-card)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                background: `${item.color}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "20px",
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px", lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Profile info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="profile-bar"
          style={{
            marginTop: "24px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {[
            { label: "Education", value: "Bachelor of Literature — English Literature, Universitas Pertiwi" },
            { label: "Location", value: "Jakarta, Indonesia" },
            { label: "Language", value: "English (TOEFL: 544) · Basic French" },
            { label: "Email", value: "Andiyumitanamirah@gmail.com" },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text)", fontWeight: 500, lineHeight: 1.4, wordBreak: "break-word" }}>
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-services-grid { grid-template-columns: 1fr !important; }
          .profile-bar { grid-template-columns: 1fr 1fr !important; padding: 20px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .profile-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
