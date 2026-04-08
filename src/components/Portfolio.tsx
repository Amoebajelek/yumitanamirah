"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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

/* ── Instagram Embed ── */
function InstagramEmbed({ url }: { url: string }) {
  const shortcode = extractIGShortcode(url);
  if (!shortcode) return null;

  return (
    <div style={{
      position: "relative",
      aspectRatio: "9/16",
      borderRadius: "16px",
      overflow: "hidden",
      background: "var(--bg-card2)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card)",
    }}>
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
        loading="lazy"
        title={`Instagram Reel ${shortcode}`}
      />
    </div>
  );
}

/* ── TikTok Embed using official embed.js ── */
function TikTokEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load TikTok embed script if not already loaded
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Re-process embeds when loaded or URL changes
    if (loaded && (window as unknown as Record<string, unknown>).tiktokEmbed) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).tiktokEmbed.lib.render(
        containerRef.current?.querySelectorAll(".tiktok-embed")
      );
    }
  }, [loaded, url]);

  return (
    <div
      ref={containerRef}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)",
        background: "var(--bg-card2)",
        minHeight: "500px",
      }}
    >
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id=""
        style={{
          maxWidth: "100%",
          minWidth: "100%",
          margin: 0,
        }}
      >
        <section style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "500px",
          gap: "12px",
        }}>
          <svg viewBox="0 0 24 24" width="40" height="40" fill="var(--primary)" opacity={0.4}>
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.18 8.18 0 004.77 1.52V6.95a4.84 4.84 0 01-1-.26z" />
          </svg>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            Loading TikTok...
          </a>
        </section>
      </blockquote>
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
          gridTemplateColumns: currentPlatform === "instagram"
            ? "repeat(auto-fill, minmax(280px, 1fr))"
            : "repeat(auto-fill, minmax(320px, 1fr))",
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
            ? "Konten memuat langsung dari Instagram."
            : "Konten memuat langsung dari TikTok."}
        </p>
      </div>
    </section>
  );
}
