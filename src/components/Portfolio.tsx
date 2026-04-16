"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./LanguageProvider";
import {
  portfolioLinks2026,
  portfolioLinks2025,
  portfolioLinks2024,
  tiktokLinks2023,
  tiktokLinks2022,
  travelContent,
  foodiesContent,
  personalBrandingContent,
  tvPortfolio,
} from "@/data/portfolio";

type Tab =
  | "2026"
  | "2025"
  | "2024"
  | "tiktok2023"
  | "tiktok2022"
  | "travel"
  | "foodies"
  | "branding"
  | "tv";

type Platform = "instagram" | "tiktok" | "mixed";

const tabGroups: {
  label: string;
  tabs: { id: Tab; label: string; platform: Platform }[];
}[] = [
  {
    label: "Brand Work",
    tabs: [
      { id: "2026", label: "2026 IG", platform: "instagram" },
      { id: "2025", label: "2025 IG", platform: "instagram" },
      { id: "2024", label: "2024 IG", platform: "instagram" },
      { id: "tiktok2023", label: "2023 TikTok", platform: "tiktok" },
      { id: "tiktok2022", label: "2022 TikTok", platform: "tiktok" },
    ],
  },
  {
    label: "Personal Project",
    tabs: [
      { id: "travel", label: "Travel", platform: "mixed" },
      { id: "foodies", label: "Foodies", platform: "instagram" },
      { id: "branding", label: "Personal Branding", platform: "instagram" },
      { id: "tv", label: "TV Portfolio", platform: "instagram" },
    ],
  },
];

const allTabs = tabGroups.flatMap((g) => g.tabs);

const dataMap: Record<Tab, string[]> = {
  "2026": portfolioLinks2026,
  "2025": portfolioLinks2025,
  "2024": portfolioLinks2024,
  tiktok2023: tiktokLinks2023,
  tiktok2022: tiktokLinks2022,
  travel: travelContent,
  foodies: foodiesContent,
  branding: personalBrandingContent,
  tv: tvPortfolio,
};

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
    <div
      style={{
        position: "relative",
        aspectRatio: "9/16",
        borderRadius: "20px",
        overflow: "hidden",
        background: "var(--bg-card2)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
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
    <div
      style={{
        position: "relative",
        aspectRatio: "9/16",
        borderRadius: "20px",
        overflow: "hidden",
        background: "var(--bg-card2)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
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
  const isMobile = useIsMobile();
  const defaultCount = isMobile ? 4 : 12;
  const { locale } = useLanguage();

  const [activeTab, setActiveTab] = useState<Tab>("2026");
  const [visibleCount, setVisibleCount] = useState(defaultCount);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const currentTab = allTabs.find((t) => t.id === activeTab);
  const currentPlatform = currentTab?.platform ?? "instagram";
  const links = dataMap[activeTab];
  const visibleLinks = links.slice(0, visibleCount);
  const hasMore = visibleCount < links.length;
  const localizedTabGroups = [
    {
      label: locale === "id" ? "Karya Brand" : "Brand Work",
      tabs: [
        { id: "2026" as const, label: "2026 IG", platform: "instagram" as const },
        { id: "2025" as const, label: "2025 IG", platform: "instagram" as const },
        { id: "2024" as const, label: "2024 IG", platform: "instagram" as const },
        {
          id: "tiktok2023" as const,
          label: "2023 TikTok",
          platform: "tiktok" as const,
        },
        {
          id: "tiktok2022" as const,
          label: "2022 TikTok",
          platform: "tiktok" as const,
        },
      ],
    },
    {
      label: locale === "id" ? "Proyek Personal" : "Personal Project",
      tabs: [
        {
          id: "travel" as const,
          label: locale === "id" ? "Travel" : "Travel",
          platform: "mixed" as const,
        },
        {
          id: "foodies" as const,
          label: locale === "id" ? "Kuliner" : "Foodies",
          platform: "instagram" as const,
        },
        {
          id: "branding" as const,
          label: locale === "id" ? "Personal Branding" : "Personal Branding",
          platform: "instagram" as const,
        },
        {
          id: "tv" as const,
          label: locale === "id" ? "Portofolio TV" : "TV Portfolio",
          platform: "instagram" as const,
        },
      ],
    },
  ];

  const handleTabChange = useCallback(
    (tab: Tab) => {
      setActiveTab(tab);
      setVisibleCount(isMobile ? 4 : 12);
    },
    [isMobile],
  );

  return (
    <section
      id="portfolio"
      style={{
        padding: "80px 20px",
        background: "var(--bg-alt)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "32px" }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>
            {locale === "id" ? "Karya" : "Work"}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            {locale === "id" ? "Portofolio" : "Content"}{" "}
            <span style={{ color: "var(--primary)" }}>
              {locale === "id" ? "Konten" : "Portfolio"}
            </span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              fontWeight: 400,
            }}
          >
            {locale === "id"
              ? `${links.length} karya tersedia di tab ini.`
              : `${links.length} works available in this tab.`}
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          {localizedTabGroups.map((group) => (
            <div
              key={group.label}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {group.label}
              </span>
              <div
                className="portfolio-tabs"
                style={{
                  display: "flex",
                  gap: "4px",
                  background: "var(--pill-bg)",
                  padding: "4px",
                  borderRadius: "14px",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                  flexShrink: 1,
                  minWidth: 0,
                }}
              >
                {group.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    style={{
                      padding: "8px 14px",
                      background:
                        activeTab === tab.id
                          ? "var(--pill-active-bg)"
                          : "transparent",
                      border: "none",
                      color:
                        activeTab === tab.id
                          ? "var(--pill-active-text)"
                          : "var(--text-muted)",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      borderRadius: "10px",
                      fontWeight: activeTab === tab.id ? 700 : 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab.label}
                    <span
                      style={{
                        fontSize: "0.6rem",
                        opacity: 0.7,
                        background:
                          activeTab === tab.id
                            ? "rgba(255,255,255,0.15)"
                            : "var(--border)",
                        padding: "2px 6px",
                        borderRadius: "100px",
                      }}
                    >
                      {dataMap[tab.id].length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {visibleLinks.map((url, i) => (
            <motion.div
              key={`${activeTab}-${url}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
            >
              {(currentPlatform === "mixed"
                ? url.includes("tiktok.com")
                  ? "tiktok"
                  : "instagram"
                : currentPlatform) === "instagram" ? (
                <InstagramEmbed url={url} />
              ) : (
                <TikTokEmbed url={url} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Show All / Load More */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={() => setVisibleCount(links.length)}
              style={{
                padding: "14px 36px",
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
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(232, 80, 58, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {locale === "id"
                ? `Tampilkan Semua (${links.length - visibleCount} lagi)`
                : `Show All (${links.length - visibleCount} more)`}
            </button>
          </div>
        )}

        {/* Collapse button when expanded beyond default */}
        {!hasMore && visibleCount > defaultCount && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
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
              {locale === "id" ? "Tampilkan Lebih Sedikit" : "Show Less"}
            </button>
          </div>
        )}

        <p
          style={{
            marginTop: "24px",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          {currentPlatform === "mixed"
            ? "Content is pulled directly from Instagram & TikTok."
            : currentPlatform === "instagram"
              ? "Content is pulled directly from Instagram."
              : "Content is pulled directly from TikTok"}
        </p>
      </div>

      <style>{`
        .portfolio-tabs::-webkit-scrollbar { display: none; }
        .portfolio-tabs { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
