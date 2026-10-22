import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/30">
      <div className="relative mb-4 h-36 overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-transparent">
  <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white/40">
    {"</>"} {project.slug}
  </div>
  {project.image && (
    <div
      className="absolute inset-0 bg-cover bg-top"
      style={{ backgroundImage: `url(${project.image})` }}
    />
  )}
</div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 flex-1 text-sm text-white/60">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-xs text-white/60">
            {t}
          </span>
        ))}
      </div>
      <Link
        href={`/portfolio/${project.slug}`}
        className="mt-4 self-start rounded-lg border border-white/20 px-3 py-1.5 text-sm transition hover:bg-white hover:text-black"
      >
        Details →
      </Link>
    </article>
  );
}
