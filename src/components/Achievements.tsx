"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/data/portfolio";

const years = ["2025", "2024", "2023", "2022"];

export default function Achievements() {
  const [activeYear, setActiveYear] = useState<string>("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeYear === "all"
    ? achievements
    : achievements.filter(a => a.year === activeYear);

  return (
    <section id="achievements" style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "48px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Recognition</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
            Achievements &<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Certificates</em>
          </h2>
        </motion.div>

        {/* Year filter */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}>
          {["all", ...years].map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              style={{
                padding: "7px 18px",
                background: activeYear === y ? "var(--gold)" : "transparent",
                border: `1px solid ${activeYear === y ? "var(--gold)" : "var(--border)"}`,
                color: activeYear === y ? "var(--bg)" : "var(--text-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
                transition: "all 0.2s",
              }}
            >
              {y === "all" ? "All Years" : y}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {filtered.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.6) }}
              style={{
                background: ach.highlight ? "rgba(201,168,76,0.04)" : "var(--bg-card)",
                border: `1px solid ${ach.highlight ? "rgba(201,168,76,0.3)" : "var(--border)"}`,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: "20px",
                alignItems: "center",
                transition: "border-color 0.3s",
              }}
            >
              <div style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                color: ach.highlight ? "var(--gold)" : "var(--text-muted)",
                fontWeight: 600,
                fontStyle: "italic",
              }}>
                {ach.year}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                  {ach.highlight && (
                    <span style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: "var(--gold)",
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                    }}>
                      International
                    </span>
                  )}
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text)" }}>{ach.title}</h3>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{ach.role}</p>
              </div>
              <div style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textAlign: "right",
                whiteSpace: "nowrap",
                opacity: 0.6,
              }}>
                {ach.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
