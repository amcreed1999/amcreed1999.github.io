"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";
import { initializeAnalytics, trackEvent } from "@/lib/analytics";

const sectionNames: Record<string, string> = {
  top: "hero",
  work: "selected_work",
  capabilities: "capabilities",
  journey: "career_journey",
  contact: "contact",
};

function cleanLabel(value: string | null | undefined) {
  return value?.replace(/\s+/g, " ").trim().slice(0, 100) || "unknown";
}

export default function Analytics() {
  useReportWebVitals((metric) => {
    trackEvent("web_vital", {
      metric_name: metric.name,
      metric_value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      metric_rating: metric.rating,
      non_interaction: true,
    });
  });

  useEffect(() => {
    initializeAnalytics();

    const viewedSections = new Set<string>();
    const scrollMilestones = new Set<number>();
    let engagedReaderSent = false;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = entry.target as HTMLElement;
          const sectionName = sectionNames[section.id] ?? section.id;
          if (!sectionName || viewedSections.has(sectionName)) continue;

          viewedSections.add(sectionName);
          trackEvent("section_view", {
            section_name: sectionName,
            section_order: Object.keys(sectionNames).indexOf(section.id) + 1,
          });
        }
      },
      { threshold: 0.45 },
    );

    Object.keys(sectionNames).forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);

      for (const milestone of [25, 50, 75, 90]) {
        if (percent >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          trackEvent("scroll_depth", {
            percent_scrolled: milestone,
            non_interaction: true,
          });
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("a, button");
      if (!interactive) return;

      const explicitEvent = interactive.dataset.analyticsEvent;
      const explicitLabel = interactive.dataset.analyticsLabel;
      if (explicitEvent) {
        trackEvent(explicitEvent, {
          item_name: cleanLabel(explicitLabel ?? interactive.textContent),
          link_url: interactive instanceof HTMLAnchorElement ? interactive.href : undefined,
        });
        return;
      }

      if (interactive.matches('[aria-label^="Read case study"]')) {
        trackEvent("case_study_open", {
          case_study: cleanLabel(interactive.getAttribute("aria-label")?.replace("Read case study:", "")),
          interaction_source: "diagram",
        });
        return;
      }

      if (interactive.classList.contains("case-link")) {
        const title = interactive.closest("article")?.querySelector("h3")?.textContent;
        trackEvent("case_study_open", {
          case_study: cleanLabel(title),
          interaction_source: "text_link",
        });
        return;
      }

      if (!(interactive instanceof HTMLAnchorElement)) return;
      const href = interactive.getAttribute("href") ?? "";

      if (href.startsWith("#")) {
        trackEvent("navigation_click", {
          destination: href.slice(1) || "top",
          link_text: cleanLabel(interactive.textContent),
        });
      }
    };

    const engagementTimer = window.setTimeout(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 100;
      if (percent >= 25 && !engagedReaderSent) {
        engagedReaderSent = true;
        trackEvent("engaged_reader", {
          engaged_time_seconds: 30,
          scroll_depth_at_event: Math.round(percent),
          non_interaction: true,
        });
      }
    }, 30_000);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    onScroll();

    return () => {
      sectionObserver.disconnect();
      window.clearTimeout(engagementTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
