import FloatingSkillsBackground from "../components/FloatingSkillsBackground";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import AboutMe from '@/components/AboutMe';
import GitHubCommitCalendar from "@/components/GitHubCommitCalendar";
import GitHubSummary from "@/components/GitHubSummary";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative h-screen pt-16">
        <FloatingSkillsBackground />
        <HeroOverlay />
      </div>
      <AboutMe />
      <GitHubSummary />
      <div className="hidden md:block">
        <GitHubCommitCalendar />
      </div>
      <Timeline />
      <Footer />
    </main>
  );
}
