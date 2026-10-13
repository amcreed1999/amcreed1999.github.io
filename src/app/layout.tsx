import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amcreed1999.github.io"),
  title: "Adam Creed · Engineering Team Lead",
  description:
    "Adam Creed is a hands-on Engineering Team Lead building distributed AWS platforms, reliable backend systems and applied AI products.",
  openGraph: {
    title: "Adam Creed · Software Engineering Team Lead",
    description:
      "Hands-on technical leadership across distributed systems, AWS platforms, production reliability and applied AI.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Adam Creed · Software Engineering Team Lead",
    description:
      "Hands-on technical leadership across distributed systems, AWS platforms, production reliability and applied AI.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#171b1c" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
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
