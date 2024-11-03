import FloatingSkillsBackground from "../components/FloatingSkillsBackground";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import AboutMe from '@/components/AboutMe';
import GitHubDashboard from "@/components/GitHubDashboard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative h-screen">
        <FloatingSkillsBackground />
        <HeroOverlay />
      </div>
      <AboutMe />
      <GitHubDashboard />
      <GitHubDashboard />
    </main>
  );
}
