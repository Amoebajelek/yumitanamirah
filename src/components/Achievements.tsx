"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/data/portfolio";

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2017"];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Achievements() {
  const isMobile = useIsMobile();
  const defaultCount = isMobile ? 5 : achievements.length;

  const [activeYear, setActiveYear] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(defaultCount);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeYear === "all"
    ? achievements
    : achievements.filter(a => a.year === activeYear);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleYearChange = (y: string) => {
    setActiveYear(y);
    setVisibleCount(isMobile ? 5 : achievements.length);
  };

  return (
    <section id="achievements" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Recognition</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Achievements &
            <br />
            <span style={{ color: "var(--primary)" }}>Certificates</span>
          </h2>
        </motion.div>

        {/* Year filter */}
        <div className="achievement-tabs" style={{
          display: "flex",
          gap: "6px",
          marginBottom: "32px",
          background: "var(--pill-bg)",
          padding: "4px",
          borderRadius: "16px",
          width: "fit-content",
          maxWidth: "100%",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}>
          {["all", ...years].map((y) => (
            <button
              key={y}
              onClick={() => handleYearChange(y)}
              style={{
                padding: "8px 18px",
                background: activeYear === y ? "var(--pill-active-bg)" : "transparent",
                border: "none",
                color: activeYear === y ? "var(--pill-active-text)" : "var(--text-muted)",
                fontSize: "0.8rem",
                cursor: "pointer",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                transition: "all 0.2s ease",
                borderRadius: "12px",
                fontWeight: activeYear === y ? 700 : 500,
                whiteSpace: "nowrap",
              }}
            >
              {y === "all" ? "All" : y}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gap: "10px" }}>
          {visibleItems.map((ach, i) => (
            <motion.div
              key={`${activeYear}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              className="achievement-card"
              style={{
                background: ach.highlight ? "var(--badge-bg)" : ach.award ? "rgba(245, 158, 11, 0.05)" : ach.level === "nasional" ? "rgba(14, 165, 116, 0.05)" : "var(--bg-card)",
                border: `1px solid ${ach.highlight ? "var(--primary)" : ach.award ? "var(--accent-orange)" : ach.level === "nasional" ? "var(--accent-teal)" : "var(--border)"}`,
                padding: "20px 24px",
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "16px",
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
                  e.currentTarget.style.borderColor = ach.level === "nasional" ? "var(--accent-teal)" : "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }
              }}
            >
              <div style={{
                fontSize: "1.1rem",
                color: ach.highlight ? "var(--primary)" : "var(--text-muted)",
                fontWeight: 800,
                background: ach.highlight ? "var(--bg-card)" : "var(--bg-alt)",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                {ach.year.slice(2)}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                  {ach.highlight && (
                    <span style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "var(--primary)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      flexShrink: 0,
                    }}>
                      International
                    </span>
                  )}
                  {ach.level === "nasional" && (
                    <span style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "var(--accent-teal)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      flexShrink: 0,
                    }}>
                      Nasional
                    </span>
                  )}
                  {ach.award && (
                    <span style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "var(--accent-orange)",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      flexShrink: 0,
                    }}>
                      Award
                    </span>
                  )}
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.3 }}>{ach.title}</h3>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 400, lineHeight: 1.4 }}>{ach.role}</p>
              </div>
              <div className="achievement-date" style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textAlign: "right",
                whiteSpace: "nowrap",
                fontWeight: 500,
                flexShrink: 0,
              }}>
                {ach.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button
              onClick={() => setVisibleCount(filtered.length)}
              style={{
                padding: "12px 32px",
                background: "var(--primary)",
                border: "none",
                color: "#fff",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderRadius: "100px",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(232, 80, 58, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Show All ({filtered.length - visibleCount} more)
            </button>
          </div>
        )}

        {/* Collapse */}
        {!hasMore && visibleCount > defaultCount && filtered.length > defaultCount && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button
              onClick={() => setVisibleCount(defaultCount)}
              style={{
                padding: "12px 32px",
                background: "transparent",
                border: "2px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderRadius: "100px",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      <style>{`
        .achievement-tabs::-webkit-scrollbar { display: none; }
        .achievement-tabs { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 767px) {
          .achievement-card { grid-template-columns: 40px 1fr !important; gap: 10px !important; padding: 14px !important; }
          .achievement-card > div:first-child { width: 40px !important; height: 40px !important; font-size: 0.95rem !important; }
          .achievement-date { grid-column: 1 / -1; text-align: left !important; font-size: 0.7rem !important; }
          .achievement-tabs { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
