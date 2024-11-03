import FloatingSkillsBackground from "../components/FloatingSkillsBackground";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import AboutMe from '@/components/AboutMe';
import GitHubCommitCalendar from "@/components/GitHubCommitCalendar";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative h-screen pt-16">
        <FloatingSkillsBackground />
        <HeroOverlay />
      </div>
      <AboutMe />
      <GitHubCommitCalendar />
      <Timeline />
    </main>
  );
}
