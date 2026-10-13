export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-Y786NJQZV0";

export type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __portfolioAnalyticsConfigured?: boolean;
  }
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || window.__portfolioAnalyticsConfigured) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.__portfolioAnalyticsConfigured = true;
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  const gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  gtag("event", name, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}
