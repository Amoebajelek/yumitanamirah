"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  portfolioLinks2026,
  portfolioLinks2025,
  portfolioLinks2024,
  tiktokLinks2023,
  tiktokLinks2022,
} from "@/data/portfolio";

type Tab = "2026" | "2025" | "2024" | "tiktok2023" | "tiktok2022";

const tabs: { id: Tab; label: string; platform: "instagram" | "tiktok" }[] = [
  { id: "2026", label: "2026 IG", platform: "instagram" },
  { id: "2025", label: "2025 IG", platform: "instagram" },
  { id: "2024", label: "2024 IG", platform: "instagram" },
  { id: "tiktok2023", label: "2023 TikTok", platform: "tiktok" },
  { id: "tiktok2022", label: "2022 TikTok", platform: "tiktok" },
];

const dataMap: Record<Tab, string[]> = {
  "2026": portfolioLinks2026,
  "2025": portfolioLinks2025,
  "2024": portfolioLinks2024,
  tiktok2023: tiktokLinks2023,
  tiktok2022: tiktokLinks2022,
};

function extractIGShortcode(url: string): string {
  const match = url.match(/reel\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : "";
}

/* ── Instagram card: cropped iframe + custom overlay ── */
function InstagramCard({ url, index }: { url: string; index: number }) {
  const shortcode = extractIGShortcode(url);
  if (!shortcode) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        position: "relative",
        aspectRatio: "9/16",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        background: "var(--bg-card2)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        e.currentTarget.style.boxShadow = "var(--shadow-glow)";
        e.currentTarget.style.borderColor = "var(--primary)";
        const play = e.currentTarget.querySelector("[data-play]") as HTMLElement;
        if (play) {
          play.style.transform = "translate(-50%, -50%) scale(1.15)";
          play.style.background = "rgba(212,160,23,0.7)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
        e.currentTarget.style.borderColor = "var(--border)";
        const play = e.currentTarget.querySelector("[data-play]") as HTMLElement;
        if (play) {
          play.style.transform = "translate(-50%, -50%) scale(1)";
          play.style.background = "rgba(0,0,0,0.5)";
        }
      }}
    >
      {/*
        Cropped iframe: scale up the embed and shift it so only the
        video thumbnail is visible. The header (~56px) and footer (~90px)
        of Instagram's embed chrome are pushed outside the overflow:hidden
        container.
      */}
      <div style={{
        position: "absolute",
        /* pull the iframe upward to hide the IG header */
        top: "-60px",
        left: 0,
        right: 0,
        /* make it taller to compensate for the shift + hide footer */
        bottom: "-100px",
        pointerEvents: "none",
      }}>
        <iframe
          src={`https://www.instagram.com/reel/${shortcode}/embed/`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          scrolling="no"
          loading="lazy"
          title={`Instagram Reel ${shortcode}`}
        />
      </div>

      {/* Click-capture overlay (sits on top of iframe) */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
      }} />

      {/* Bottom gradient */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "45%",
        background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 3,
      }} />

      {/* Play button */}
      <div
        data-play=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(255,255,255,0.3)",
          zIndex: 4,
          transition: "all 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <svg width="20" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M8 5.14v14l11-7-11-7z" />
        </svg>
      </div>

      {/* Bottom info */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 4,
        pointerEvents: "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="rgba(255,255,255,0.9)" />
          </svg>
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Reel</span>
        </div>
        <span style={{
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.55)",
          background: "rgba(0,0,0,0.35)",
          padding: "2px 8px",
          borderRadius: "4px",
        }}>
          #{index + 1}
        </span>
      </div>
    </a>
  );
}

/* ── TikTok card ── */
function TikTokCard({ url, index }: { url: string; index: number }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        aspectRatio: "9/16",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        background: "linear-gradient(160deg, var(--bg-card2) 0%, var(--bg-card) 100%)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        gap: "16px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        e.currentTarget.style.boxShadow = "var(--shadow-glow)";
        e.currentTarget.style.borderColor = "var(--primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute",
        top: "15%",
        right: "-20%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, var(--border) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-15%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "radial-gradient(circle, var(--border) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* TikTok icon */}
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "16px",
        background: "var(--bg)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="var(--primary)">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.18 8.18 0 004.77 1.52V6.95a4.84 4.84 0 01-1-.26z" />
        </svg>
      </div>

      <span style={{
        fontSize: "0.8rem",
        color: "var(--text-secondary)",
        fontWeight: 500,
        letterSpacing: "0.03em",
      }}>
        Watch on TikTok
      </span>

      <span style={{
        fontSize: "0.65rem",
        color: "var(--text-muted)",
        background: "var(--bg)",
        border: "1px solid var(--border)",
        padding: "4px 12px",
        borderRadius: "20px",
      }}>
        Video #{index + 1}
      </span>

      <div style={{
        position: "absolute",
        bottom: "16px",
        left: "16px",
        right: "16px",
        fontSize: "0.6rem",
        color: "var(--text-muted)",
        background: "var(--bg)",
        border: "1px solid var(--border)",
        padding: "6px 10px",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
      }}>
        {url.replace("https://", "")}
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("2026");
  const [visibleCount, setVisibleCount] = useState(12);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const currentTab = tabs.find(t => t.id === activeTab);
  const currentPlatform = currentTab?.platform ?? "instagram";
  const links = dataMap[activeTab];
  const visibleLinks = links.slice(0, visibleCount);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setVisibleCount(12);
  };

  return (
    <section id="portfolio" style={{
      padding: "120px 40px",
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "48px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>Work</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, marginBottom: "8px" }}>
            Content{" "}
            <em style={{
              fontStyle: "italic",
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Portfolio</em>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            {links.length} karya tersedia di tab ini
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                padding: "10px 22px",
                background: activeTab === tab.id ? "var(--gradient-1)" : "var(--bg-card)",
                border: `1px solid ${activeTab === tab.id ? "transparent" : "var(--border)"}`,
                color: activeTab === tab.id ? "#fff" : "var(--text-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "DM Sans, sans-serif",
                borderRadius: "10px",
                fontWeight: activeTab === tab.id ? 600 : 400,
                boxShadow: activeTab === tab.id ? "0 4px 16px rgba(212,160,23,0.25)" : "none",
              }}
            >
              {tab.label}
              <span style={{
                marginLeft: "8px",
                fontSize: "0.65rem",
                opacity: 0.8,
                background: activeTab === tab.id ? "rgba(255,255,255,0.2)" : "var(--border)",
                padding: "2px 7px",
                borderRadius: "5px",
              }}>
                {dataMap[tab.id].length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}>
          {visibleLinks.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
            >
              {currentPlatform === "instagram" ? (
                <InstagramCard url={url} index={i} />
              ) : (
                <TikTokCard url={url} index={i} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < links.length && (
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              style={{
                padding: "14px 48px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-hover)",
                color: "var(--text-secondary)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "DM Sans, sans-serif",
                borderRadius: "10px",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gradient-1)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(212,160,23,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-card)";
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Load More ({links.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <p style={{
          marginTop: "32px",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          paddingTop: "24px",
        }}>
          {currentPlatform === "instagram"
            ? "Klik untuk menonton langsung di Instagram."
            : "Klik untuk menonton langsung di TikTok."}
        </p>
      </div>
    </section>
  );
}
