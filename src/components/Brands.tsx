"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./LanguageProvider";

type BrandsProps = {
  logos: string[];
};

export default function Brands({ logos }: BrandsProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { locale } = useLanguage();
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section
      id="brands"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "96px 20px 72px",
        background:
          "radial-gradient(circle at top, color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 32%), linear-gradient(180deg, color-mix(in srgb, var(--bg) 30%, var(--hero-bg) 70%) 0%, color-mix(in srgb, var(--bg) 72%, var(--hero-bg) 28%) 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <span className="badge" style={{ marginBottom: "16px" }}>
              {locale === "id" ? "Kolaborasi Brand" : "Brand Collaborations"}
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "10px",
                color: "var(--hero-text)",
              }}
            >
              {locale === "id" ? "Brand yang Pernah" : "Brands I Have"}{" "}
              <span style={{ color: "var(--primary)" }}>
                {locale === "id" ? "Bekerja Sama" : "Worked With"}
              </span>
            </h2>
            <p
              style={{
                color: "var(--hero-text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              {locale === "id"
                ? "Kumpulan logo brand dan partner yang pernah bekerja sama dalam proyek konten, campaign, aktivasi, dan kolaborasi digital."
                : "A selection of brand and partner logos from content projects, campaigns, activations, and digital collaborations."}
            </p>
          </div>

          <div
            style={{
              minWidth: "150px",
              border: "1px solid var(--border)",
              borderRadius: "18px",
              padding: "14px 18px",
              background: "color-mix(in srgb, var(--bg-card) 88%, transparent)",
              boxShadow: "var(--shadow-card)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: "var(--primary)",
                marginBottom: "4px",
              }}
            >
              {locale === "id" ? "Total Logo" : "Total Logos"}
            </div>
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                lineHeight: 1,
                color: "var(--hero-text)",
              }}
            >
              {logos.length}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="brands-marquee-shell"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            border: "1px solid var(--hero-border)",
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--hero-bg-alt) 82%, var(--primary) 18%), color-mix(in srgb, var(--hero-bg) 74%, var(--bg-card) 26%))",
            boxShadow: "var(--shadow-card)",
            padding: "26px 0",
          }}
        >
          <div className="brands-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="brands-marquee-card"
                style={{
                  position: "relative",
                  flex: "0 0 220px",
                  height: "96px",
                  borderRadius: "22px",
                  border: "1px solid var(--hero-border)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  boxShadow: "var(--shadow-card)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Image
                  src={logo}
                  alt=""
                  fill
                  sizes="220px"
                  style={{
                    objectFit: "contain",
                    padding: "18px 24px",
                    filter: "grayscale(100%) contrast(1.05) brightness(1.08)",
                    transition: "filter 0.25s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .brands-marquee-shell::before,
        .brands-marquee-shell::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 96px;
          z-index: 2;
          pointer-events: none;
        }

        .brands-marquee-shell::before {
          left: 0;
          background: linear-gradient(90deg, color-mix(in srgb, var(--hero-bg) 92%, transparent) 0%, transparent 100%);
        }

        .brands-marquee-shell::after {
          right: 0;
          background: linear-gradient(270deg, color-mix(in srgb, var(--hero-bg) 92%, transparent) 0%, transparent 100%);
        }

        .brands-marquee-track {
          display: flex;
          align-items: center;
          gap: 18px;
          width: max-content;
          animation: brands-scroll 170s linear infinite;
          will-change: transform;
          padding: 0 18px;
        }

        .brands-marquee-card {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .brands-marquee-shell:hover .brands-marquee-track {
          animation-play-state: paused;
        }

        .brands-marquee-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--primary) 35%, var(--border));
          box-shadow: var(--shadow-card-hover);
        }

        .brands-marquee-shell:hover .brands-marquee-card img,
        .brands-marquee-card:hover img {
          filter: none;
        }

        @keyframes brands-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 7px));
          }
        }

        @media (max-width: 767px) {
          .brands-marquee-shell {
            padding: 18px 0 !important;
          }

          .brands-marquee-shell::before,
          .brands-marquee-shell::after {
            width: 42px;
          }

          .brands-marquee-track {
            animation-duration: 125s;
            gap: 10px;
            padding: 0 10px;
          }

          .brands-marquee-card {
            flex-basis: 156px !important;
            height: 74px !important;
          }
        }
      `}</style>
    </section>
  );
}
