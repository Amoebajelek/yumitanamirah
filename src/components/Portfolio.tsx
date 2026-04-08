"use client";
import { useState, useEffect } from "react";
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

function InstagramEmbed({ url }: { url: string }) {
  const shortcode = extractIGShortcode(url);
  if (!shortcode) return null;

  // Use Instagram's oEmbed thumbnail approach via their CDN
  const thumbnailUrl = `https://www.instagram.com/p/${shortcode}/media/?size=m`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "var(--bg-card2)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        textDecoration: "none",
        transition: "border-color 0.3s, transform 0.3s",
        aspectRatio: "9/16",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Instagram iframe embed */}
      <iframe
        src={`https://www.instagram.com/reel/${shortcode}/embed/`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          inset: 0,
        }}
        scrolling="no"
        allowTransparency
        loading="lazy"
        title={`Instagram Reel ${shortcode}`}
      />
    </a>
  );
}

function TikTokEmbed({ url }: { url: string }) {
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
        background: "var(--bg-card2)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        textDecoration: "none",
        transition: "border-color 0.3s, transform 0.3s",
        aspectRatio: "9/16",
        position: "relative",
        gap: "12px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* TikTok icon */}
      <svg viewBox="0 0 24 24" width="40" height="40" fill="var(--gold)" opacity="0.7">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.18 8.18 0 004.77 1.52V6.95a4.84 4.84 0 01-1-.26z"/>
      </svg>
      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Watch on TikTok</span>
      <div style={{
        position: "absolute",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "0.65rem",
        color: "var(--text-muted)",
        background: "rgba(0,0,0,0.5)",
        padding: "4px 10px",
        whiteSpace: "nowrap",
        maxWidth: "90%",
        overflow: "hidden",
        textOverflow: "ellipsis",
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

  const currentPlatform = tabs.find(t => t.id === activeTab)?.platform ?? "instagram";
  const links = dataMap[activeTab];
  const visibleLinks = links.slice(0, visibleCount);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setVisibleCount(12);
  };

  return (
    <section id="portfolio" style={{ padding: "120px 40px", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "48px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Work</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, marginBottom: "8px" }}>
            Content <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Portfolio</em>
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
                padding: "8px 20px",
                background: activeTab === tab.id ? "var(--gold)" : "transparent",
                border: `1px solid ${activeTab === tab.id ? "var(--gold)" : "var(--border)"}`,
                color: activeTab === tab.id ? "var(--bg)" : "var(--text-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {tab.label}
              <span style={{
                marginLeft: "8px",
                fontSize: "0.65rem",
                opacity: 0.7,
                background: activeTab === tab.id ? "rgba(0,0,0,0.2)" : "rgba(201,168,76,0.1)",
                padding: "1px 5px",
              }}>
                {dataMap[tab.id].length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {visibleLinks.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
            >
              {currentPlatform === "instagram" ? (
                <InstagramEmbed url={url} />
              ) : (
                <TikTokEmbed url={url} />
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
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "DM Sans, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Load More ({links.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Additional note for Instagram accounts */}
        {currentPlatform === "instagram" && (
          <p style={{
            marginTop: "32px",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
          }}>
            💡 Konten memuat langsung dari Instagram. Klik konten untuk melihat di Instagram.
          </p>
        )}
      </div>
    </section>
  );
}
