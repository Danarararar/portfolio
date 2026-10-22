"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const words = [
  { text: "Welcome", delay: 0.9 },
  { text: "to", delay: 1.5 },
  { text: "my", delay: 1.6 },
  { text: "Portfolio", delay: 1.8 },
  { text: "Website", delay: 1.95 },
];

const icon = "h-5 w-5 text-white/80";

export default function IntroSplash() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLeaving(true);
      document.documentElement.dataset.intro = "done";
    }, 3400);
    const t2 = setTimeout(() => setVisible(false), 4300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="fade-in-up mb-6 flex gap-3" style={{ animationDelay: "0.2s" }}>
        {["code", "user", "globe"].map((name) => (
          <span key={name} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5">
            {name === "code" && (
              <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16" />
              </svg>
            )}
            {name === "user" && (
              <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
              </svg>
            )}
            {name === "globe" && (
              <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
            )}
          </span>
        ))}
      </div>

      <h1 className="font-display max-w-md px-6 text-center text-3xl font-extrabold leading-tight sm:text-5xl">
        {words.map((w) => (
          <span key={w.text} className="fade-in-up mr-3 inline-block" style={{ animationDelay: `${w.delay}s` }}>
            {w.text}
          </span>
        ))}
      </h1>

      <p
        className="fade-in-up mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-white/50"
        style={{ animationDelay: "2.4s" }}
      >
        {profile.handle}
      </p>
    </div>
  );
}
