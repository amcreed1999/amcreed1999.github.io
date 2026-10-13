"use client";

import { useEffect, useRef } from "react";
import { capabilityStages } from "@/lib/portfolio-data";
import {
  canUsePinnedScroll,
  chapterScrollEnd,
  chapterSnap,
  destroyTimeline,
  gsap,
  pinScrubTimeline,
} from "@/lib/scroll";

const HOLD = 1.65;
const TRANSITION = 1.15;

export default function CapabilityMap() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !canUsePinnedScroll()) return;

    const layers = gsap.utils.toArray<HTMLElement>(stage.querySelectorAll("[data-cap-layer]"));
    if (!layers.length) return;

    gsap.set(layers, { opacity: 0, y: 40, scale: 0.97 });
    gsap.set(layers[0], { opacity: 1, y: 0, scale: 1 });
    layers.forEach((layer) => {
      gsap.set(layer.querySelectorAll("li"), { opacity: 0, y: 12 });
    });
    gsap.set(layers[0].querySelectorAll("li"), { opacity: 1, y: 0 });

    const tl = pinScrubTimeline({
      trigger: stage,
      pin: stage,
      scrub: true,
      end: chapterScrollEnd(layers.length, 1.4),
      snap: chapterSnap(),
    });

    tl.addLabel("step-0");
    tl.to({}, { duration: HOLD });

    layers.forEach((layer, index) => {
      if (index === 0) return;
      const prev = layers[index - 1];
      const at = tl.duration();
      tl.to(
        prev,
        { opacity: 0, y: -28, scale: 0.97, duration: TRANSITION, ease: "power2.inOut" },
        at,
      );
      tl.fromTo(
        layer,
        { opacity: 0, y: 44, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: TRANSITION, ease: "power2.out" },
        at + 0.18,
      );
      tl.fromTo(
        layer.querySelectorAll("li"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.06, duration: TRANSITION * 0.55, ease: "power2.out" },
        at + 0.3,
      );
      tl.addLabel(`step-${index}`);
      tl.to({}, { duration: HOLD });
    });

    return () => destroyTimeline(tl);
  }, []);

  return (
    <section
      id="capabilities"
      className="capability-section capability-scroll"
      aria-labelledby="capability-title"
    >
      <div className="section-shell">
        <div className="section-intro capability-intro">
          <p className="eyebrow">How I lead the work</p>
          <h2 id="capability-title">Architecture through operation.</h2>
          <p>
            Backend design, AWS platforms, reliability practices and the team
            delivering them — applied AI only where it earns its place in
            production.
          </p>
        </div>
      </div>

      <div ref={stageRef} className="capability-stage-pin">
        <div className="capability-map capability-map-scroll section-shell" aria-label="Capability stages">
          {capabilityStages.map((stage, index) => (
            <div
              key={stage.index}
              className={`capability-stage capability-step-${index + 1}`}
              data-cap-layer
            >
              <div className="capability-stage-head">
                <span className="capability-number">{stage.index}</span>
                <span>Operating layer</span>
              </div>
              <div className="capability-stage-copy">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
              <ul className="capability-tools" aria-label={`${stage.title} tools and practices`}>
                {stage.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell">
        <div className="capability-note">
          <span className="note-mark" aria-hidden="true">↳</span>
          <p>
            At FreightCyber: web, mobile and backend services on AWS — Terraform,
            observability and engineering standards that keep a 13-person team
            shipping reliably.
          </p>
        </div>
      </div>
    </section>
  );
}
