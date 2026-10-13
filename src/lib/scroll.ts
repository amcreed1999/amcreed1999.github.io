"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export const easeOutExpo = "expo.out";
export const easeOutQuart = "power4.out";

export function registerScrollPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isDesktopScroll() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 768px)").matches;
}

export function canUsePinnedScroll() {
  return !prefersReducedMotion() && isDesktopScroll();
}

export function activeStepFromProgress(progress: number, count: number) {
  return Math.min(count - 1, Math.floor(progress * count));
}

export function syncActiveClass(
  elements: HTMLElement[],
  activeIndex: number,
  className = "is-active",
) {
  elements.forEach((element, index) => {
    element.classList.toggle(className, index === activeIndex);
  });
}

/** Scroll distance per chapter so each snap needs a deliberate wheel/trackpad gesture. */
export function chapterScrollEnd(stepCount: number, viewportFactor = 1.35) {
  return () => `+=${Math.max(stepCount, 1) * window.innerHeight * viewportFactor}`;
}

export function chapterSnap() {
  return {
    // Snap only forward/back to the next label — feels like “rescroll to move on”.
    snapTo: "labelsDirectional" as const,
    duration: { min: 0.18, max: 0.55 },
    delay: 0.05,
    ease: "power1.inOut",
    inertia: false,
  };
}

type PinScrubTimelineOptions = {
  trigger: Element;
  pin: Element;
  scrub?: number | boolean;
  end?: string | (() => string);
  snap?: ScrollTrigger.SnapVars | number | number[] | "labels" | "labelsDirectional";
  onUpdate?: (self: ScrollTrigger) => void;
};

export function pinScrubTimeline(options: PinScrubTimelineOptions) {
  registerScrollPlugins();
  const { trigger, pin, scrub = 0.5, end = "+=100%", snap, onUpdate } = options;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top top",
      end,
      pin,
      scrub,
      ...(snap !== undefined ? { snap } : {}),
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate,
    },
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return timeline;
}

export function destroyTimeline(timeline: gsap.core.Timeline) {
  timeline.scrollTrigger?.kill();
  timeline.kill();
}

export { gsap, ScrollTrigger };
