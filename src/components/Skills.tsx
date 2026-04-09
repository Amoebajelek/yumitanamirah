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
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" style={{
      padding: "100px 40px",
      background: "var(--bg-alt)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Expertise</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Technical <span style={{ color: "var(--primary)" }}>Skills</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "14px",
        }}>
          {skills.map((skill, i) => {
            const color = skillColors[i % skillColors.length];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "20px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-card)",
                }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.15 },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: `${color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  flexShrink: 0,
                }}>
                  {skill.icon}
                </div>
                <span style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 600 }}>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
