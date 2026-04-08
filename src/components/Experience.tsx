"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/portfolio";

const typeColors: Record<string, string> = {
  "full-time": "var(--accent-teal)",
  "creator": "var(--primary)",
  "organization": "var(--secondary)",
  "freelance": "var(--accent-orange)",
};

const typeLabels: Record<string, string> = {
  "full-time": "Full-time",
  "creator": "Creator",
  "organization": "Organization",
  "freelance": "Freelance",
};

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>Career</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
            Work{" "}
            <em style={{
              fontStyle: "italic",
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Experience</em>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line with gradient */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "8px",
            bottom: "8px",
            width: "2px",
            background: "linear-gradient(180deg, var(--primary), var(--secondary), var(--accent-teal))",
            borderRadius: "2px",
          }} />

          {experiences.map((exp, i) => {
            const color = typeColors[exp.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  paddingLeft: "40px",
                  paddingBottom: "48px",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: "-5px",
                  top: "8px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: exp.current ? color : "var(--bg-card2)",
                  border: `2px solid ${color}`,
                  boxShadow: exp.current ? `0 0 12px ${color}60` : "none",
                }} />

                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "28px 32px",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-card)",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}`;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <span style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: color,
                        background: `${color}15`,
                        padding: "4px 12px",
                        border: `1px solid ${color}30`,
                        display: "inline-block",
                        marginBottom: "10px",
                        borderRadius: "6px",
                        fontWeight: 500,
                      }}>
                        {typeLabels[exp.type]}
                        {exp.current && " \u00B7 Active"}
                      </span>
                      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: "6px" }}>
                        {exp.company}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{exp.role}</p>
                    </div>
                    <span style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                      paddingTop: "2px",
                    }}>
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
