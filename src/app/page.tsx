import FloatingSkillsBackground from "../components/FloatingSkillsBackground";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import Education from "../components/Education";
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <main className="flex flex-col h-screen pt-16">
      <Navbar />
      <div className="relative flex-grow">
        <FloatingSkillsBackground />
        <HeroOverlay />
        <AboutMe />
      </div>
    </main>
  );
}
