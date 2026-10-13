"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import {
  gsap,
  prefersReducedMotion,
  registerScrollPlugins,
  ScrollTrigger,
} from "@/lib/scroll";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    registerScrollPlugins();

    if (prefersReducedMotion()) {
      document.documentElement.classList.remove("lenis");
      return;
    }

    const lenis = new Lenis({
      duration: 0.95,
      smoothWheel: true,
      touchMultiplier: 1.15,
      // Keep native scroll position in sync so ScrollTrigger pins don't trap the page.
      autoRaf: false,
    });

    document.documentElement.classList.add("lenis");
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        lenis.stop();
        document.documentElement.classList.remove("lenis");
      } else {
        lenis.start();
        document.documentElement.classList.add("lenis");
        refresh();
      }
    };
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}
