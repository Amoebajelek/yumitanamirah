"use client";
import { useState, useCallback } from "react";
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

function extractTikTokVideoId(url: string): string {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : "";
}

function InstagramEmbed({ url }: { url: string }) {
  const shortcode = extractIGShortcode(url);
  if (!shortcode) return null;

  return (
    <div style={{
      position: "relative",
      aspectRatio: "9/16",
      borderRadius: "20px",
      overflow: "hidden",
      background: "var(--bg-card2)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card)",
    }}>
      <iframe
        src={`https://www.instagram.com/reel/${shortcode}/embed/captioned/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fwww.example.com`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          inset: 0,
        }}
        scrolling="no"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Instagram Reel ${shortcode}`}
      />
    </div>
  );
}

function TikTokEmbed({ url }: { url: string }) {
  const videoId = extractTikTokVideoId(url);
  if (!videoId) return null;

  return (
    <div style={{
      position: "relative",
      aspectRatio: "9/16",
      borderRadius: "20px",
      overflow: "hidden",
      background: "var(--bg-card2)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card)",
    }}>
      <iframe
        src={`https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          inset: 0,
        }}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        title={`TikTok Video ${videoId}`}
      />
    </div>
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

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setVisibleCount(12);
  }, []);

  return (
    <section id="portfolio" style={{
      padding: "100px 40px",
      background: "var(--bg-alt)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>Work</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Content <span style={{ color: "var(--primary)" }}>Portfolio</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 400 }}>
            {links.length} karya tersedia di tab ini
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "36px",
          flexWrap: "wrap",
          background: "var(--pill-bg)",
          padding: "4px",
          borderRadius: "100px",
          width: "fit-content",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                padding: "10px 20px",
                background: activeTab === tab.id ? "var(--pill-active-bg)" : "transparent",
                border: "none",
                color: activeTab === tab.id ? "var(--pill-active-text)" : "var(--text-muted)",
                fontSize: "0.82rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderRadius: "100px",
                fontWeight: activeTab === tab.id ? 700 : 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {tab.label}
              <span style={{
                fontSize: "0.7rem",
                opacity: 0.7,
                background: activeTab === tab.id ? "rgba(255,255,255,0.15)" : "var(--border)",
                padding: "2px 8px",
                borderRadius: "100px",
              }}>
                {dataMap[tab.id].length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {visibleLinks.map((url, i) => (
            <motion.div
              key={`${activeTab}-${url}`}
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
                padding: "14px 40px",
                background: "var(--primary)",
                border: "none",
                color: "#fff",
                fontSize: "0.9rem",
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
              Load More ({links.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <p style={{
          marginTop: "32px",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          textAlign: "center",
        }}>
          {currentPlatform === "instagram"
            ? "Konten memuat langsung dari Instagram."
            : "Konten memuat langsung dari TikTok."}
        </p>
      </div>
    </section>
  );
}
