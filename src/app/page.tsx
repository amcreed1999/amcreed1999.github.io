import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSystem from "@/components/HeroSystem";
import EngineeringEquation from "@/components/EngineeringEquation";
import ImpactRail from "@/components/ImpactRail";
import WorkShowcase from "@/components/WorkShowcase";
import CapabilityMap from "@/components/CapabilityMap";
import CareerEvidence from "@/components/CareerEvidence";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <SmoothScroll>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSystem />
        <EngineeringEquation />
        <ImpactRail />
        <WorkShowcase />
        <CapabilityMap />
        <CareerEvidence />
      </main>
      <ContactFooter />
    </SmoothScroll>
  );
}
