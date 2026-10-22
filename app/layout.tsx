import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/portfolio";
import "./globals.css";
import "./animations.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-intro="playing" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${syne.variable} bg-grid min-h-screen overflow-x-hidden bg-black font-[family-name:var(--font-grotesk)] text-white antialiased`}
      >
        <IntroSplash />
        <Navbar />
        <main className="mx-auto max-w-5xl px-5 pb-20 pt-28">{children}</main>
        <footer className="pb-8 text-center font-mono text-xs text-white/30">
          © 2026 {profile.name}
        </footer>
      </body>
    </html>
  );
}
