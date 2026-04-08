"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/portfolio";

const typeColors: Record<string, string> = {
  "full-time": "#7A9E8E",
  "creator": "#C9A84C",
  "organization": "#D4748A",
  "freelance": "#888880",
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
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Career</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
            Work <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Experience</em>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "8px",
            bottom: "8px",
            width: "1px",
            background: "linear-gradient(180deg, var(--gold), rgba(201,168,76,0.1))",
          }} />

          {experiences.map((exp, i) => (
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
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: exp.current ? "var(--gold)" : "var(--bg-card2)",
                border: `1px solid ${exp.current ? "var(--gold)" : "var(--text-muted)"}`,
              }} />

              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "28px 32px",
                transition: "border-color 0.3s",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                  <div>
                    <span style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: typeColors[exp.type],
                      background: `${typeColors[exp.type]}15`,
                      padding: "3px 10px",
                      border: `1px solid ${typeColors[exp.type]}30`,
                      display: "inline-block",
                      marginBottom: "10px",
                    }}>
                      {typeLabels[exp.type]}
                      {exp.current && " · Active"}
                    </span>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: "6px" }}>
                      {exp.company}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{exp.role}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
