"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" style={{ padding: "120px 40px", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>Expertise</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
            Technical <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Skills</em>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                padding: "24px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                cursor: "default",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.5)" }}
            >
              <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.3 }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
