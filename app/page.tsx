import Link from "next/link";
import LanyardCard from "@/components/LanyardCard";
import Typewriter from "@/components/Typewriter";
import { profile, skills } from "@/data/portfolio";

const phrases = [
  "Informatics Engineering @ ITS",
  "OSN-P Informatics Finalist",
  "AI & Cloud Enthusiast",
];

const delay = (s: number) => ({ animationDelay: `${s}s` });

export default function Home() {
  return (
    <section className="grid items-center gap-6 md:grid-cols-2">
      <div className="py-6 md:py-20">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-white/40" style={delay(0.1)}>
          ◆ Informatics & Intelligent Systems
        </p>
        <h1 className="reveal font-display mt-4 text-5xl font-extrabold leading-[0.95] sm:text-7xl" style={delay(0.25)}>
          Vision
          <span className="block text-white/40">Engineer</span>
        </h1>
        <p className="reveal mt-6 h-6 font-mono text-sm text-white/70" style={delay(0.45)}>
          <Typewriter phrases={phrases} />
        </p>
        <p className="reveal mt-4 max-w-md text-sm text-white/60" style={delay(0.6)}>
          {profile.tagline}
        </p>
        <div className="reveal mt-5 flex flex-wrap gap-2" style={delay(0.75)}>
          {skills.slice(0, 4).map((s) => (
            <span key={s.name} className="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-white/60">
              {s.name}
            </span>
          ))}
        </div>
        <div className="reveal mt-8 flex gap-3" style={delay(0.9)}>
          <Link href="/portfolio" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80">
            View Projects
          </Link>
          <Link href="/contact" className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
            Contact Me
          </Link>
        </div>
        <p className="reveal mt-10 font-mono text-xs text-white/30" style={delay(1.1)}>
        
        </p>
      </div>

      <div className="reveal" style={delay(0.4)}>
        <LanyardCard />
      </div>
    </section>
  );
}
