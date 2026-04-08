"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }} className="about-grid">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>
            About
          </p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2, marginBottom: "32px" }}>
            Crafting stories that
            <br />
            <em style={{
              fontStyle: "italic",
              background: "var(--gradient-3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>resonate & convert</em>
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div className="section-line" />
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "20px" }}>
            Saya adalah Yumita Namirah, Social Media Specialist dan Content Creator berbasis di Jakarta dengan passion mendalam di dunia digital storytelling. Dengan pengalaman sejak 2018, saya telah membangun karier yang menjembatani kreativitas dan strategi konten.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "32px" }}>
            Dari brand komersial hingga gerakan kepramukaan internasional — termasuk World Scout Jamboree di Korea Selatan — saya membawa perspektif unik dalam membangun brand voice yang autentik dan konten yang berdampak nyata.
          </p>

          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[
              { num: "7+", label: "Years Creating", color: "var(--primary)" },
              { num: "2K+", label: "Contents Made", color: "var(--secondary)" },
              { num: "5+", label: "Brands Handled", color: "var(--accent-teal)" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", color: stat.color, fontWeight: 700 }}>{stat.num}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: info card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "40px",
            position: "relative",
            borderRadius: "16px",
            boxShadow: "var(--shadow-card)",
          }}>
            {/* Corner gradient accent */}
            <div style={{
              position: "absolute",
              top: "-1px",
              right: "-1px",
              width: "60px",
              height: "60px",
              borderTop: "2px solid var(--primary)",
              borderRight: "2px solid var(--secondary)",
              borderTopRightRadius: "16px",
            }} />
            <div style={{
              position: "absolute",
              bottom: "-1px",
              left: "-1px",
              width: "60px",
              height: "60px",
              borderBottom: "2px solid var(--accent-teal)",
              borderLeft: "2px solid var(--primary)",
              borderBottomLeftRadius: "16px",
            }} />

            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "24px" }}>
              Profile
            </p>

            {[
              { label: "Full Name", value: "Yumita Namirah, S.S" },
              { label: "Position", value: "Social Media Specialist & Content Creator" },
              { label: "Location", value: "Koja, Jakarta Utara, DKI Jakarta" },
              { label: "Education", value: "S1 Sastra Inggris — Universitas Pertiwi Jakarta" },
              { label: "Email", value: "Andiyumitanamirah@gmail.com" },
              { label: "Phone", value: "081315198387 (WA Only)" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "14px 0",
                borderBottom: i < 5 ? "1px solid var(--border)" : "none",
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: "16px",
                alignItems: "start",
              }}>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", paddingTop: "2px" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.4 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
