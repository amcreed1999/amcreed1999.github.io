"use client";

import { useEffect, useRef } from "react";
import {
  easeOutQuart,
  gsap,
  isDesktopScroll,
  prefersReducedMotion,
  registerScrollPlugins,
} from "@/lib/scroll";

const terms = ["Architecture", "Reliability", "Delivery"];

export default function EngineeringEquation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    registerScrollPlugins();
    const termsEls = section.querySelectorAll<HTMLElement>("[data-equation-term]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        termsEls,
        { opacity: 0.25, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          ease: easeOutQuart,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 35%",
            scrub: isDesktopScroll() ? 0.4 : false,
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="engineering-equation"
      className="equation-section"
      aria-label="Engineering approach"
    >
      <div className="section-shell equation-meta">
        <span>How the work connects</span>
        <span>One system / end to end</span>
      </div>

      <div className="equation-line section-shell">
        {terms.map((term) => (
          <span className="equation-term" key={term} data-equation-term>
            <strong>{term}</strong>
            <i aria-hidden="true">+</i>
          </span>
        ))}
        <span className="equation-term equation-result" data-equation-term>
          <i aria-hidden="true">=</i>
          <strong>Production software</strong>
        </span>
      </div>
    </section>
  );
}
