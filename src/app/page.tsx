import FloatingSkillsBackground from "./components/FloatingSkillsBackground";
import HeroOverlay from "./components/HeroOverlay";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />
      <div className="relative">
        <FloatingSkillsBackground />
        <HeroOverlay />
      </div>
    </main>
  );
}
