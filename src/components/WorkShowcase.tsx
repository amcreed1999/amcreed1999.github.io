"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import CaseStudyDialog from "./CaseStudyDialog";
import TearCoupon from "./TearCoupon";
import { caseStudies, type CaseStudy } from "@/lib/portfolio-data";
import {
  canUsePinnedScroll,
  chapterScrollEnd,
  chapterSnap,
  destroyTimeline,
  gsap,
  pinScrubTimeline,
  syncActiveClass,
} from "@/lib/scroll";

const HOLD = 1.6;
const TRANSITION = 1.2;

export default function WorkShowcase() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const closeDialog = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin || !canUsePinnedScroll()) return;

    const chapters = gsap.utils.toArray<HTMLElement>(pin.querySelectorAll("[data-work-chapter]"));
    if (chapters.length < 2) return;

    gsap.set(chapters, {
      opacity: 0,
      y: 36,
      rotate: 1.2,
      scale: 0.97,
      pointerEvents: "none",
      transformOrigin: "50% 50%",
    });
    gsap.set(chapters[0], { opacity: 1, y: 0, rotate: 0, scale: 1, pointerEvents: "auto" });
    gsap.set(chapters[0].querySelectorAll("[data-signal-node]"), {
      opacity: 1,
      y: 0,
      scale: 1,
    });
    const firstPerforation = chapters[0].querySelector<HTMLElement>(".tear-coupon-perforation i");
    if (firstPerforation) gsap.set(firstPerforation, { scaleX: 1 });
    syncActiveClass(chapters, 0);

    const tl = pinScrubTimeline({
      trigger: pin,
      pin,
      scrub: true,
      end: chapterScrollEnd(chapters.length, 1.4),
      snap: chapterSnap(),
      onUpdate: () => {
        const label = tl.currentLabel() ?? "step-0";
        const active = Number(label.replace("step-", "")) || 0;
        syncActiveClass(chapters, Math.min(active, chapters.length - 1));
      },
    });

    tl.addLabel("step-0");
    tl.to({}, { duration: HOLD });

    chapters.forEach((chapter, index) => {
      if (index === 0) return;
      const prev = chapters[index - 1];
      const at = tl.duration();
      const nodes = chapter.querySelectorAll<HTMLElement>("[data-signal-node]");
      const perforation = chapter.querySelector<HTMLElement>(".tear-coupon-perforation i");

      tl.to(
        prev,
        {
          opacity: 0,
          y: -36,
          rotate: -1.4,
          scale: 0.97,
          pointerEvents: "none",
          duration: TRANSITION,
          ease: "power2.inOut",
        },
        at,
      );
      tl.fromTo(
        chapter,
        { opacity: 0, y: 44, rotate: 1.8, scale: 0.96, pointerEvents: "none" },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          pointerEvents: "auto",
          duration: TRANSITION,
          ease: "power2.out",
        },
        at + 0.2,
      );
      if (perforation) {
        tl.fromTo(
          perforation,
          { scaleX: 0 },
          { scaleX: 1, duration: TRANSITION * 0.7, ease: "power3.out" },
          at + 0.35,
        );
      }
      if (nodes.length) {
        gsap.set(nodes, { opacity: 0, y: 12, scale: 0.92 });
        tl.to(
          nodes,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: TRANSITION * 0.6,
            ease: "power3.out",
          },
          at + 0.4,
        );
      }
      tl.addLabel(`step-${index}`);
      tl.to({}, { duration: HOLD });
    });

    return () => destroyTimeline(tl);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="work-section work-scroll"
      aria-labelledby="work-title"
    >
      <div className="section-shell section-intro work-intro">
        <p className="eyebrow">Selected software work · 01—{String(caseStudies.length).padStart(2, "0")}</p>
        <h2 id="work-title">Systems carrying real operational weight.</h2>
        <p>
          FreightCyber platforms first: reliability, financial integrations and
          live operations. Then applied AI, and an independent product that moved
          real money.
        </p>
      </div>

      <div ref={pinRef} className="work-pin-stage">
        <div className="work-chapter-stage section-shell" aria-label="Case study chapters">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`work-chapter ${index % 2 ? "work-chapter-reverse" : ""}`}
              data-work-chapter
            >
              <TearCoupon
                stubId={`AC/WRK.${String(index + 1).padStart(2, "0")}`}
                label="CASE PACKET"
                tone="paper"
                className="work-tear"
              >
                <div className="case-row case-row-static is-visible">
                  <div className="case-chapter" aria-hidden="true">
                    <span>Chapter</span>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <i>{String(caseStudies.length).padStart(2, "0")}</i>
                  </div>
                  <button
                    type="button"
                    className="case-visual"
                    onClick={() => setSelected(study)}
                    aria-label={`Read case study: ${study.title}`}
                  >
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 767px) 100vw, 46vw"
                        className="case-image"
                      />
                    ) : (
                      <CaseSignal study={study} />
                    )}
                    <span className="case-open" aria-hidden="true">
                      Open case ↗
                    </span>
                  </button>

                  <div className="case-copy">
                    <div className="case-meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{study.category}</span>
                    </div>
                    <h3>{study.title}</h3>
                    <p>{study.summary}</p>
                    <div className="case-impact">
                      <strong>{study.impact}</strong>
                      <span>{study.impactLabel}</span>
                    </div>
                    <div className="tag-list" aria-label="Technologies">
                      {study.technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="text-link case-link"
                      onClick={() => setSelected(study)}
                    >
                      Read the case study <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </TearCoupon>
            </article>
          ))}
        </div>
      </div>

      {selected && <CaseStudyDialog study={selected} onClose={closeDialog} />}
    </section>
  );
}

function CaseSignal({ study }: { study: CaseStudy }) {
  return (
    <div className="case-signal" aria-hidden="true">
      <div className="case-signal-grid" />
      <div className="case-signal-track">
        <span className="case-signal-packet" />
      </div>
      {study.signal.map((step, index) => (
        <div
          key={step}
          className="case-signal-node"
          data-signal-node
          style={
            {
              "--signal-step": index,
              "--node-offset": `${(index % 2 ? 1 : -1) * 0.35}rem`,
            } as CSSProperties
          }
        >
          <span>0{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
