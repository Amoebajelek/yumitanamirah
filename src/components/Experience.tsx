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
    <section id="experience" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Career</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            My Work <span style={{ color: "var(--primary)" }}>Experience</span>
          </h2>
        </motion.div>

        <div className="exp-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}>
          {experiences.map((exp, i) => {
            const color = typeColors[exp.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  borderRadius: "20px",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: color,
                      background: `${color}12`,
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}>
                      {typeLabels[exp.type]}
                    </span>
                    {exp.current && (
                      <span style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--accent-green)",
                        background: "rgba(34, 197, 94, 0.1)",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-green)" }} />
                        Active
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {exp.period}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "4px", lineHeight: 1.3 }}>
                  {exp.company}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: exp.description ? "12px" : "0" }}>
                  {exp.role}
                </p>
                {exp.description && (
                  <p style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    paddingTop: "10px",
                    borderTop: "1px solid var(--border)",
                  }}>
                    {exp.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
