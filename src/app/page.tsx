import FloatingSkillsBackground from "../components/FloatingSkillsBackground";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import AboutMe from '@/components/AboutMe';
import GitHubSummary from "@/components/GitHubSummary";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative h-screen pt-16" id="hero">
        <FloatingSkillsBackground />
        <HeroOverlay />
      </div>
      <section id="about">
        <AboutMe />
      </section>
      <section id="summary">
        <GitHubSummary />
      </section>
      <Projects />
      <section id="timeline">
        <Timeline />
      </section>
      <Footer />
    </main>
  );
}
