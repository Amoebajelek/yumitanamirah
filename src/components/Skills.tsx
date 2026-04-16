"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

const skillColors = [
  "var(--primary)",
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-orange)",
  "var(--accent-purple)",
  "var(--accent-green)",
  "var(--accent-rose)",
  "var(--primary)",
  "var(--accent-teal)",
  "var(--accent-blue)",
  "var(--accent-purple)",
  "var(--accent-orange)",
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const hardSkills = skills.filter(s => s.type === "hard");
  const softSkills = skills.filter(s => s.type === "soft");

  return (
    <section id="skills" style={{ padding: "80px 20px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Expertise</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Technical <span style={{ color: "var(--primary)" }}>Skills</span>
          </h2>
        </motion.div>

        {/* Hard Skills */}
        <div style={{ marginBottom: "32px" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)",
            background: "var(--badge-bg)", padding: "5px 14px", borderRadius: "100px",
            display: "inline-block", marginBottom: "16px",
          }}>Hard Skills</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
            {hardSkills.map((skill, i) => {
              const color = skillColors[i % skillColors.length];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    padding: "16px 18px", display: "flex", alignItems: "center", gap: "12px",
                    borderRadius: "14px", boxShadow: "var(--shadow-card)", transition: "all 0.2s ease", cursor: "default",
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px", background: `${color}12`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>{skill.icon}</div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div style={{ marginBottom: "24px" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-purple)",
            background: "rgba(139, 92, 246, 0.08)", padding: "5px 14px", borderRadius: "100px",
            display: "inline-block", marginBottom: "16px",
          }}>Soft Skills</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
            {softSkills.map((skill, i) => {
              const color = skillColors[(i + hardSkills.length) % skillColors.length];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: (i + hardSkills.length) * 0.05 }}
                  style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    padding: "16px 18px", display: "flex", alignItems: "center", gap: "12px",
                    borderRadius: "14px", boxShadow: "var(--shadow-card)", transition: "all 0.2s ease", cursor: "default",
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px", background: `${color}12`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>{skill.icon}</div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Language bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "14px",
            padding: "16px 20px", display: "flex", alignItems: "center", gap: "14px",
            flexWrap: "wrap", boxShadow: "var(--shadow-card)",
          }}
        >
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-blue)",
            background: "rgba(59, 130, 246, 0.08)", padding: "5px 14px", borderRadius: "100px",
          }}>Language</span>
          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)" }}>English — TOEFL: 544</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>|</span>
          <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-secondary)" }}>Basic French (UNJ)</span>
        </motion.div>
      </div>
    </section>
  );
}
