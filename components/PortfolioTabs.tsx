"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { certificates, projects, skills } from "@/data/portfolio";

const tabs = ["Projects", "Certificates", "Tech Stack"] as const;
type Tab = (typeof tabs)[number];

export default function PortfolioTabs() {
  const [active, setActive] = useState<Tab>("Projects");

  return (
    <div>
      <div className="mx-auto mb-10 grid max-w-xl grid-cols-3 rounded-full border border-white/10 bg-white/[0.03] p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full py-2 text-sm transition ${
              active === t ? "bg-white/15 text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {active === "Projects" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      {active === "Certificates" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-semibold">{c.title}</p>
              <p className="mt-1 text-sm text-white/50">{c.issuer}</p>
            </div>
          ))}
        </div>
      )}

      {active === "Tech Stack" && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="font-medium">{s.name}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{s.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
