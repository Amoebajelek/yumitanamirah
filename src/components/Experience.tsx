"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/portfolio";

const typeColors: Record<string, string> = {
  "full-time": "var(--accent-teal)",
  "creator": "var(--primary)",
  "organization": "var(--accent-purple)",
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
    <section id="experience" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Career</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Work <span style={{ color: "var(--primary)" }}>Experience</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gap: "16px" }}>
          {experiences.map((exp, i) => {
            const color = typeColors[exp.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "28px 32px",
                  borderRadius: "20px",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: color,
                      background: `${color}12`,
                      padding: "5px 14px",
                      borderRadius: "100px",
                    }}>
                      {typeLabels[exp.type]}
                    </span>
                    {exp.current && (
                      <span style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--accent-green)",
                        background: "rgba(34, 197, 94, 0.1)",
                        padding: "5px 14px",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}>
                        <span style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--accent-green)",
                        }} />
                        Active
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
                    {exp.company}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 400 }}>{exp.role}</p>
                </div>
                <span style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  paddingTop: "4px",
                }}>
                  {exp.period}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
