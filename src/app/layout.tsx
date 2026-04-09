import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeOverride from "@/components/ThemeOverride";

const title = "// Nathan Fant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: title,
  description:
    "Full-Stack Engineer and Quality Engineer specializing in TypeScript, React, Python, Playwright, and Vitest. OSS contributor. Hack Reactor 2025.",
  icons: {
    icon: "/nf_logo.png",
  },
  openGraph: {
    title: title,
    description: "Building full-stack systems and fixing real bugs in production codebases with proper test coverage.",
    url: "https://nathanfant.dev",
    siteName: "Nathan Fant",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased font-sans bg-bg text-text">
        <ThemeOverride />
        {children}
      </body>
    </html>
  );
}
