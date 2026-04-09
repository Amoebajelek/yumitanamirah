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
    <section id="achievements" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Recognition</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Achievements &
            <br />
            <span style={{ color: "var(--primary)" }}>Certificates</span>
          </h2>
        </motion.div>

        {/* Year filter */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginBottom: "36px",
          flexWrap: "wrap",
          background: "var(--pill-bg)",
          padding: "4px",
          borderRadius: "100px",
          width: "fit-content",
        }}>
          {["all", ...years].map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              style={{
                padding: "8px 20px",
                background: activeYear === y ? "var(--pill-active-bg)" : "transparent",
                border: "none",
                color: activeYear === y ? "var(--pill-active-text)" : "var(--text-muted)",
                fontSize: "0.82rem",
                cursor: "pointer",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                transition: "all 0.2s ease",
                borderRadius: "100px",
                fontWeight: activeYear === y ? 700 : 500,
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
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              style={{
                background: ach.highlight ? "var(--badge-bg)" : ach.level === "nasional" ? "rgba(14, 165, 116, 0.05)" : "var(--bg-card)",
                border: `1px solid ${ach.highlight ? "var(--primary)" : ach.level === "nasional" ? "var(--accent-teal)" : "var(--border)"}`,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "56px 1fr auto",
                gap: "20px",
                alignItems: "center",
                transition: "all 0.2s ease",
                borderRadius: "16px",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => {
                if (!ach.highlight) {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                }
              }}
              onMouseLeave={(e) => {
                if (!ach.highlight) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }
              }}
            >
              <div style={{
                fontSize: "1.2rem",
                color: ach.highlight ? "var(--primary)" : "var(--text-muted)",
                fontWeight: 800,
                background: ach.highlight ? "var(--bg-card)" : "var(--bg-alt)",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {ach.year.slice(2)}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                  {ach.highlight && (
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "var(--primary)",
                      padding: "3px 12px",
                      borderRadius: "100px",
                    }}>
                      International
                    </span>
                  )}
                  {ach.level === "nasional" && (
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "var(--accent-teal)",
                      padding: "3px 12px",
                      borderRadius: "100px",
                    }}>
                      Nasional
                    </span>
                  )}
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>{ach.title}</h3>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 400 }}>{ach.role}</p>
              </div>
              <div style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textAlign: "right",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}>
                {ach.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #achievements [style*="grid-template-columns: 56px"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
