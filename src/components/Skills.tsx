"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

const skillColors = [
  "var(--primary)",
  "var(--secondary)",
  "var(--accent-teal)",
  "var(--accent-orange)",
  "var(--accent-blue)",
  "var(--accent-green)",
  "var(--accent-rose)",
  "var(--primary-light)",
  "var(--secondary)",
  "var(--accent-teal)",
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" style={{
      padding: "120px 40px",
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>Expertise</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
            Technical{" "}
            <em style={{
              fontStyle: "italic",
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Skills</em>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {skills.map((skill, i) => {
            const color = skillColors[i % skillColors.length];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "24px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 8px 30px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                {/* Color accent bar */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "100%",
                  background: color,
                  borderRadius: "0 2px 2px 0",
                }} />
                <span style={{ fontSize: "1.4rem", marginLeft: "8px" }}>{skill.icon}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.3 }}>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
