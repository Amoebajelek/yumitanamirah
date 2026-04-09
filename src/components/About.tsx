"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} style={{ padding: "100px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span className="badge" style={{ marginBottom: "16px" }}>About Me</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Crafting Stories That
          <br />
          <span style={{ color: "var(--primary)" }}>Resonate & Convert</span>
        </h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }} className="about-grid">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "20px" }}>
            Saya adalah Yumita Namirah, Social Media Specialist dan Content Creator berbasis di Jakarta dengan passion mendalam di dunia digital storytelling. Dengan pengalaman sejak 2018, saya telah membangun karier yang menjembatani kreativitas dan strategi konten.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "40px" }}>
            Dari brand komersial hingga gerakan kepramukaan internasional — termasuk World Scout Jamboree di Korea Selatan — saya membawa perspektif unik dalam membangun brand voice yang autentik dan konten yang berdampak nyata.
          </p>

          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { num: "7+", label: "Years Creating", color: "var(--primary)" },
              { num: "2K+", label: "Contents Made", color: "var(--accent-teal)" },
              { num: "5+", label: "Brands Handled", color: "var(--accent-purple)" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "var(--bg-alt)",
                padding: "20px 28px",
                borderRadius: "16px",
                minWidth: "130px",
              }}>
                <div style={{ fontSize: "2rem", color: stat.color, fontWeight: 800, letterSpacing: "-0.02em" }}>{stat.num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500, marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "36px",
            borderRadius: "20px",
            boxShadow: "var(--shadow-card)",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--primary)",
              }} />
              <span style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>
                Profile
              </span>
            </div>

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
                gridTemplateColumns: "100px 1fr",
                gap: "16px",
                alignItems: "start",
              }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", paddingTop: "2px", letterSpacing: "0.03em" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.5, fontWeight: 500 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
