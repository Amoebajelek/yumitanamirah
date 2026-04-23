import { readdirSync } from "node:fs";
import path from "node:path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  const brandsDir = path.join(process.cwd(), "public", "brands");
  const brandLogos = readdirSync(brandsDir)
    .filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/brands/${file}`);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Brands logos={brandLogos} />
      <Portfolio />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
