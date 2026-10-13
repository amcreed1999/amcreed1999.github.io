"use client";

import { useEffect, useRef } from "react";
import TearCoupon from "./TearCoupon";
import { impactMetrics } from "@/lib/portfolio-data";
import {
  canUsePinnedScroll,
  chapterScrollEnd,
  chapterSnap,
  destroyTimeline,
  gsap,
  pinScrubTimeline,
  syncActiveClass,
} from "@/lib/scroll";

const HOLD = 1.75;
const TRANSITION = 1.25;

export default function ImpactRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage || !canUsePinnedScroll()) return;

    const stubs = gsap.utils.toArray<HTMLElement>(stage.querySelectorAll("[data-impact-stub]"));
    if (!stubs.length) return;

    const perforations = stubs.map((stub) =>
      stub.querySelector<HTMLElement>(".tear-coupon-perforation i"),
    );
    const values = stubs.map((stub) => stub.querySelector<HTMLElement>(".impact-value"));
    const titles = stubs.map((stub) => stub.querySelectorAll<HTMLElement>("h3, p, .impact-index"));

    gsap.set(stubs, { opacity: 0, y: 56, rotate: 2.4, scale: 0.94, transformOrigin: "50% 80%" });
    gsap.set(perforations, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(values, { y: 18, opacity: 0.35 });
    gsap.set(titles, { y: 12, opacity: 0 });

    gsap.set(stubs[0], { opacity: 1, y: 0, rotate: 0, scale: 1 });
    gsap.set(perforations[0], { scaleX: 1 });
    gsap.set(values[0], { y: 0, opacity: 1 });
    gsap.set(titles[0], { y: 0, opacity: 1 });
    syncActiveClass(stubs, 0);

    const tl = pinScrubTimeline({
      trigger: section,
      pin: stage,
      scrub: true,
      end: chapterScrollEnd(stubs.length, 1.45),
      snap: chapterSnap(),
      onUpdate: () => {
        const label = tl.currentLabel() ?? "step-0";
        const active = Number(label.replace("step-", "")) || 0;
        syncActiveClass(stubs, Math.min(active, stubs.length - 1));
      },
    });

    tl.addLabel("step-0");
    tl.to({}, { duration: HOLD });

    stubs.forEach((stub, index) => {
      if (index === 0) return;
      const prev = stubs[index - 1];
      const at = tl.duration();

      tl.to(
        prev,
        {
          opacity: 0,
          y: -48,
          rotate: -2.2,
          scale: 0.95,
          duration: TRANSITION,
          ease: "power2.inOut",
        },
        at,
      );
      tl.to(perforations[index - 1], { scaleX: 0, duration: TRANSITION * 0.55, ease: "power2.in" }, at);
      tl.to(values[index - 1], { y: -14, opacity: 0, duration: TRANSITION * 0.55, ease: "power2.in" }, at);
      tl.to(titles[index - 1], { y: -10, opacity: 0, duration: TRANSITION * 0.45, stagger: 0.04 }, at);

      tl.fromTo(
        stub,
        { opacity: 0, y: 64, rotate: 3.2, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: TRANSITION,
          ease: "power2.out",
        },
        at + 0.2,
      );
      tl.fromTo(
        perforations[index],
        { scaleX: 0 },
        { scaleX: 1, duration: TRANSITION * 0.7, ease: "power3.out" },
        at + 0.35,
      );
      tl.fromTo(
        values[index],
        { y: 22, opacity: 0.2 },
        { y: 0, opacity: 1, duration: TRANSITION * 0.75, ease: "power3.out" },
        at + 0.4,
      );
      tl.fromTo(
        titles[index],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: TRANSITION * 0.65, stagger: 0.06, ease: "power2.out" },
        at + 0.48,
      );

      tl.addLabel(`step-${index}`);
      tl.to({}, { duration: HOLD });
    });

    return () => destroyTimeline(tl);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="impact-section impact-scroll"
      aria-labelledby="impact-title"
    >
      <div ref={stageRef} className="impact-stage">
        <div className="impact-stage-inner section-shell">
          <div className="section-intro impact-intro">
            <p className="eyebrow">Production outcomes</p>
            <h2 id="impact-title">Software measured by what changed.</h2>
            <p>
              Faster workflows, fewer recurring bugs and clearer operations — the
              results of architecture, testing and engineering discipline.
            </p>
          </div>

          <div className="impact-stub-rail" aria-label="Impact evidence stubs">
            {impactMetrics.map((metric, index) => {
              const stubId = `AC/IMP.0${index + 1}`;
              return (
                <div key={metric.label} className="impact-stub-slot" data-impact-stub>
                  <TearCoupon stubId={stubId} tone="paper" label="OUTCOME">
                    <span className="impact-index">0{index + 1}</span>
                    <strong className="impact-value">{metric.value}</strong>
                    <h3>{metric.label}</h3>
                    <p>{metric.context}</p>
                  </TearCoupon>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
