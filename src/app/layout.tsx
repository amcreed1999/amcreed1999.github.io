import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amcreed1999.github.io"),
  title: "Adam Creed · Engineering Team Lead",
  description:
    "Hands-on Engineering Team Lead building distributed AWS platforms and reliable backends in Melbourne — applied AI where it earns its place.",
  openGraph: {
    title: "Adam Creed · Engineering Team Lead",
    description:
      "Hands-on technical leadership for AWS platforms, distributed backends and production reliability — applied AI second.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Adam Creed · Engineering Team Lead",
    description:
      "Hands-on technical leadership for AWS platforms, distributed backends and production reliability — applied AI second.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe4",
  colorScheme: "only light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Analytics />
      </body>
    </html>
  );
}
