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
  const rows = [
    logos.filter((_, index) => index % 3 === 0),
    logos.filter((_, index) => index % 3 === 1),
    logos.filter((_, index) => index % 3 === 2),
  ].map((row) => [...row, ...row]);

  return (
    <section
      id="brands"
      ref={ref}
      style={{
        padding: "56px 20px",
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
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "24px",
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
                fontSize: "0.9rem",
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
                marginBottom: "4px",
              }}
            >
              {locale === "id" ? "Total Brand" : "Total Brands"}
            </div>
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                lineHeight: 1,
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
            borderRadius: "26px",
            border: "1px solid var(--border)",
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 88%, var(--primary) 12%), var(--bg-card))",
            boxShadow: "var(--shadow-card)",
            padding: "18px 0",
            display: "grid",
            gap: "14px",
          }}
        >
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`brands-marquee-lane ${
                rowIndex % 2 === 0 ? "is-left" : "is-right"
              }`}
              style={{
                paddingLeft: rowIndex === 1 ? "54px" : "0",
                paddingRight: rowIndex !== 1 ? "28px" : "0",
              }}
            >
              <div className="brands-marquee-track">
                {row.map((logo, index) => (
                  <div
                    key={`${rowIndex}-${logo}-${index}`}
                    className="brands-marquee-card"
                    style={{
                      position: "relative",
                      flex: "0 0 172px",
                      height: "74px",
                      borderRadius: "18px",
                      border: "1px solid var(--border)",
                      background:
                        "color-mix(in srgb, var(--bg-card) 94%, white 6%)",
                      boxShadow: "var(--shadow-card)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={logo}
                      alt=""
                      fill
                      sizes="172px"
                      style={{
                        objectFit: "contain",
                        padding: "14px 20px",
                        filter: "grayscale(100%) contrast(1.05)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
          background: linear-gradient(90deg, var(--bg) 0%, transparent 100%);
        }

        .brands-marquee-shell::after {
          right: 0;
          background: linear-gradient(270deg, var(--bg) 0%, transparent 100%);
        }

        .brands-marquee-lane {
          overflow: hidden;
        }

        .brands-marquee-track {
          display: flex;
          align-items: center;
          gap: 14px;
          width: max-content;
          animation: brands-scroll-left 220s linear infinite;
          will-change: transform;
          padding: 0 14px;
        }

        .brands-marquee-lane.is-right .brands-marquee-track {
          animation-name: brands-scroll-right;
          animation-duration: 240s;
        }

        .brands-marquee-shell:has(.brands-marquee-card:hover) .brands-marquee-track {
          animation-play-state: paused;
        }

        .brands-marquee-card {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .brands-marquee-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--primary) 35%, var(--border));
          box-shadow: var(--shadow-card-hover);
        }

        .brands-marquee-card:hover img {
          filter: grayscale(0%) contrast(1);
        }

        @keyframes brands-scroll-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 7px));
          }
        }

        @keyframes brands-scroll-right {
          from {
            transform: translateX(calc(-50% - 7px));
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 767px) {
          .brands-marquee-shell {
            padding: 14px 0 !important;
          }

          .brands-marquee-shell::before,
          .brands-marquee-shell::after {
            width: 42px;
          }

          .brands-marquee-lane {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .brands-marquee-track {
            animation-duration: 180s;
            gap: 10px;
            padding: 0 10px;
          }

          .brands-marquee-lane.is-right .brands-marquee-track {
            animation-duration: 200s;
          }

          .brands-marquee-card {
            flex-basis: 136px !important;
            height: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
