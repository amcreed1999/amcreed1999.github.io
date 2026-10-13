"use client";

import { useCallback, useEffect, useRef } from "react";
import DataCore from "./DataCore";
import { hiringThesis } from "@/lib/portfolio-data";
import {
  canUsePinnedScroll,
  prefersReducedMotion,
  registerScrollPlugins,
  ScrollTrigger,
} from "@/lib/scroll";

export default function HeroSystem() {
  const introRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const updateProgress = useCallback((progress: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const reducedMotion = prefersReducedMotion();

    stage.style.setProperty("--story-progress", progress.toFixed(4));
    stage.querySelectorAll<HTMLElement>("[data-core-scene]").forEach((scene) => {
      const start = Number(scene.dataset.start ?? 0);
      const end = Number(scene.dataset.end ?? 1);
      const center = (start + end) / 2;
      const halfRange = Math.max((end - start) / 2, 0.01);
      const opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress - center) / halfRange));
      const direction = progress < center ? 1 : -1;
      scene.style.opacity = opacity.toFixed(3);
      scene.style.transform = `translate3d(0, ${direction * (1 - opacity) * 28}px, 0)`;
      scene.style.pointerEvents = reducedMotion || opacity > 0.72 ? "auto" : "none";
      scene.toggleAttribute("aria-hidden", !reducedMotion && opacity < 0.1);
      scene.querySelectorAll<HTMLElement>("a, button").forEach((control) => {
        control.tabIndex = reducedMotion || opacity > 0.72 ? 0 : -1;
      });
    });
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    if (!intro || prefersReducedMotion()) return;

    const animations = Array.from(
      intro.querySelectorAll<HTMLElement>("[data-hero-item]"),
    ).map((item, index) =>
      item.animate(
        [
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 720,
          delay: 90 + index * 105,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        },
      ),
    );

    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    registerScrollPlugins();

    const syncFromBounds = () => {
      const bounds = story.getBoundingClientRect();
      const distance = Math.max(story.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -bounds.top / distance));
      updateProgress(progress);
    };

    if (!canUsePinnedScroll()) {
      syncFromBounds();
      window.addEventListener("scroll", syncFromBounds, { passive: true });
      window.addEventListener("resize", syncFromBounds);
      return () => {
        window.removeEventListener("scroll", syncFromBounds);
        window.removeEventListener("resize", syncFromBounds);
      };
    }

    const trigger = ScrollTrigger.create({
      trigger: story,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => updateProgress(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, [updateProgress]);

  return (
    <section ref={storyRef} id="top" className="hero hero-core-story">
      <div ref={stageRef} className="hero-sticky">
        <DataCore storyRef={storyRef} />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true" />

        <div ref={introRef} className="hero-shell section-shell" data-core-scene data-start="-0.16" data-end="0.16">
        <div data-hero-item className="hero-kicker">
          <span>Engineering Team Lead</span>
          <span>Melbourne / Australia</span>
          <span className="hero-status"><i /> Core online</span>
        </div>

        <div className="hero-copy">
          <p data-hero-item className="eyebrow hero-eyebrow">
            Technical leadership · AWS platforms · Reliability
          </p>
          <h1 data-hero-item>
            <span>Software systems</span>
            <span>that hold up</span>
            <span className="hero-line-accent">in production.</span>
          </h1>
        </div>

        <div data-hero-item className="hero-lower">
          <p className="hero-lede">
            I&apos;m Adam Creed. I lead a 13-person engineering team at FreightCyber
            and stay hands-on with AWS architecture, distributed backends and
            reliability — applied AI second, where it earns its place. {hiringThesis}
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#work"
              data-analytics-event="primary_cta_click"
              data-analytics-label="Explore my work"
            >
              Explore my work
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/adam-creed/"
              target="_blank"
              rel="noreferrer"
              data-analytics-event="profile_click"
              data-analytics-label="LinkedIn from hero"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div data-hero-item className="hero-telemetry" aria-hidden="true">
          <span>ROLE / TECHNICAL LEADERSHIP</span>
          <span>FOCUS / AWS PLATFORMS</span>
          <span>MODE / HANDS-ON</span>
          <span>SCROLL TO DECONSTRUCT ↓</span>
        </div>
        </div>

        <CoreScene index="01" title="Fewer recurring bugs." start="0.12" end="0.40" align="right">
          Stronger testing, observability and root-cause discipline so the team
          spends less time firefighting and more time shipping.
        </CoreScene>
        <CoreScene index="02" title="Work that survives failure." start="0.35" end="0.65" align="left">
          Distributed workflows separate the request from the work — retries,
          isolation and reconciliation keep financial and operational jobs recoverable.
        </CoreScene>
        <CoreScene index="03" title="Architecture the team can run." start="0.60" end="0.88" align="right">
          Technical direction only counts when it stays tied to production
          feedback and the people accountable for both.
        </CoreScene>

        <div className="core-finale section-shell" data-core-scene data-start="0.80" data-end="1.20" aria-hidden="true">
          <p className="eyebrow">The operating principle</p>
          <h2>Production software that holds under pressure.</h2>
          <a className="button core-finale-link" href="#work">
            See the evidence <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="core-progress" aria-hidden="true">
          <span>CORE / 00</span>
          <div><i /></div>
          <span>04 / PROOF</span>
        </div>
      </div>
    </section>
  );
}

function CoreScene({
  index,
  title,
  start,
  end,
  align,
  children,
}: {
  index: string;
  title: string;
  start: string;
  end: string;
  align: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <article
      className={`core-scene core-scene-${align} section-shell`}
      data-core-scene
      data-start={start}
      data-end={end}
      aria-hidden="true"
    >
      <div className="core-scene-copy">
        <span className="core-scene-index">PHASE / {index}</span>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </article>
  );
}
