import Link from "next/link";
import { achievements, certificates, profile, projects } from "@/data/portfolio";

export default function About() {
  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Certificates", value: certificates.length },
    { label: "Achievements", value: achievements.length },
  ];

  return (
    <section className="reveal">
      <p className="font-mono text-xs uppercase tracking-widest text-white/40">About me</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
      <p className="mt-5 max-w-2xl text-white/60">{profile.bio}</p>

      <ul className="mt-6 space-y-1 text-sm text-white/70">
        {achievements.map((a) => (
          <li key={a}>• {a}</li>
        ))}
      </ul>

      <div className="mt-8 flex gap-3">
        <Link href="/portfolio" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
          View Projects
        </Link>
        <Link href="/contact" className="rounded-lg border border-white/20 px-4 py-2 text-sm">
          Contact
        </Link>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="mt-1 font-mono text-xs uppercase text-white/40">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
