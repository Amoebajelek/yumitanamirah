"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--hero-bg)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(255, 92, 53, 0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 92, 53, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "140px 20px 80px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: "20px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                background: "rgba(255, 92, 53, 0.12)",
                color: "var(--primary)",
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1px solid rgba(255, 92, 53, 0.2)",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>&#x1F44B;</span>
              Hello!
            </span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: "20px",
              color: "var(--hero-text)",
              letterSpacing: "-0.03em",
            }}
          >
            I&apos;m <span style={{ color: "var(--primary)" }}>Namirah</span>,
            <br />
            Content Creator
          </motion.h1>

          {/* Testimonial / tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-quote"
            style={{
              marginBottom: "32px",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                color: "var(--primary)",
                fontSize: "2rem",
                lineHeight: 1,
                fontWeight: 800,
              }}
            >
              &ldquo;
            </span>
            <div>
              <p
                style={{
                  color: "var(--hero-text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                Social Media Content Creator with 50+ brands served and 7M+
                total views. Turning stories into scroll-stopping content.
              </p>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      style={{
                        color: "var(--accent-orange)",
                        fontSize: "0.9rem",
                      }}
                    >
                      &#x2605;
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    color: "var(--hero-text-muted)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  Highly recommended
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-stats"
            style={{
              display: "flex",
              gap: "32px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--hero-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--hero-text-muted)",
                  fontWeight: 500,
                }}
              >
                Brands Served
              </div>
            </div>
            <div
              style={{
                width: "1px",
                background: "var(--hero-border)",
                alignSelf: "stretch",
              }}
            />
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--hero-text)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  7M+
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#fff",
                    background: "var(--primary)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                  }}
                >
                  Views
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--hero-text-muted)",
                  fontWeight: 500,
                }}
              >
                Total Reach
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hero-cta"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <a
              href="#portfolio"
              style={{
                padding: "14px 32px",
                background: "var(--primary)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 700,
                borderRadius: "100px",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(255, 92, 53, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Portfolio &#x2197;
            </a>
            <a
              href="#contact"
              style={{
                padding: "14px 32px",
                border: "1px solid var(--hero-border)",
                color: "var(--hero-text)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 700,
                borderRadius: "100px",
                transition: "all 0.2s ease",
                background: "transparent",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--hero-border)";
                e.currentTarget.style.color = "var(--hero-text)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Orange glow behind photo */}
          <div
            style={{
              position: "absolute",
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 92, 53, 0.25) 0%, rgba(255, 92, 53, 0.05) 60%, transparent 80%)",
              filter: "blur(30px)",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />

          {/* Photo container */}
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "3/4",
              borderRadius: "32px",
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg, var(--hero-bg-alt), #1a1a35)",
              border: "1px solid var(--hero-border)",
            }}
          >
            {/*
              GANTI DENGAN FOTO PROFIL:
              1. Taruh foto di /public/profile.jpg
              2. Uncomment tag <img> di bawah dan hapus placeholder div
            */}
            {/* <img src="/profile.jpg" alt="Yumita Namirah" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}

            {/* Placeholder — remove when photo is added */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, #1a1a35 0%, #0D0D1A 50%, var(--primary-dark) 100%)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "6rem",
                  fontWeight: 800,
                  color: "rgba(255, 92, 53, 0.15)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                YN
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  Yumita Namirah
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--hero-text-muted)",
                    fontWeight: 500,
                  }}
                >
                  @namirah.yumita
                </div>
              </div>
            </div>

            {/* Decorative border glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "32px",
                border: "1px solid rgba(255, 92, 53, 0.2)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            className="hero-floating-card"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "-10%",
              background: "rgba(13, 13, 26, 0.8)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--hero-border)",
              borderRadius: "16px",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "rgba(255, 92, 53, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
              }}
            >
              &#x1F3AC;
            </div>
            <div>
              <div
                style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}
              >
                10+
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--hero-text-muted)",
                  fontWeight: 500,
                }}
              >
                Accounts Managed
              </div>
            </div>
          </motion.div>

          {/* Floating badge top right */}
          <motion.div
            className="hero-floating-card"
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "5%",
              right: "-5%",
              background: "rgba(13, 13, 26, 0.8)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--hero-border)",
              borderRadius: "12px",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "1rem" }}>&#x1F30D;</span>
            <span
              style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}
            >
              World Scout Jamboree
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom social links */}
      <div
        className="hero-social-bar"
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "24px",
        }}
      >
        {[
          {
            label: "Instagram",
            url: "https://www.instagram.com/namirah.yumita",
          },
          { label: "TikTok", url: "https://www.tiktok.com/@namirah.yumita" },
          {
            label: "LinkedIn",
            url: "https://linkedin.com/in/andiyumitanamirah",
          },
        ].map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--hero-text-muted)",
              textDecoration: "none",
              fontSize: "0.78rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--hero-text-muted)")
            }
          >
            {social.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
            text-align: center;
            gap: 24px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
            max-width: 220px;
            margin: 0 auto;
          }
          .hero-floating-card { display: none !important; }
          .hero-social-bar { display: none !important; }
          .hero-stats { justify-content: center !important; }
          .hero-cta { justify-content: center !important; }
          .hero-quote { justify-content: center !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 48px 60px !important;
            text-align: center;
            gap: 32px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
            max-width: 300px;
            margin: 0 auto;
          }
          .hero-heading { font-size: 2.5rem !important; }
          .hero-grid > div:first-child { max-width: 100%; overflow-wrap: break-word; }
          .hero-floating-card { display: none !important; }
          .hero-social-bar { display: none !important; }
          .hero-stats { justify-content: center !important; }
          .hero-cta { justify-content: center !important; }
          .hero-quote { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
