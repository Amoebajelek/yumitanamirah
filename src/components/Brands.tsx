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

  return (
    <section
      id="brands"
      ref={ref}
      style={{
        padding: "80px 20px",
        background:
          "linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--bg-alt) 76%, transparent) 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "36px",
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
                marginBottom: "12px",
              }}
            >
              {locale === "id" ? "Brand yang Pernah" : "Brands I Have"}{" "}
              <span style={{ color: "var(--primary)" }}>
                {locale === "id" ? "Bekerja Sama" : "Worked With"}
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
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
              borderRadius: "20px",
              padding: "18px 22px",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: "var(--primary)",
                marginBottom: "6px",
              }}
            >
              {locale === "id" ? "Total Logo" : "Total Logos"}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {logos.length}
            </div>
          </div>
        </motion.div>

        <div
          className="brands-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: Math.min(index * 0.015, 0.45) }}
              style={{
                position: "relative",
                minHeight: "88px",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-card)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "radial-gradient(circle at top, color-mix(in srgb, var(--primary) 12%, transparent), transparent 58%)",
                  opacity: 0.8,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: "88px",
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={logo}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  style={{
                    objectFit: "contain",
                    padding: "18px",
                    filter: "grayscale(100%) contrast(1.05)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .brands-grid > div {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .brands-grid > div:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--primary) 35%, var(--border));
          box-shadow: var(--shadow-card-hover);
        }

        .brands-grid > div:hover img {
          filter: grayscale(0%) contrast(1);
        }

        @media (max-width: 1024px) {
          .brands-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .brands-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
