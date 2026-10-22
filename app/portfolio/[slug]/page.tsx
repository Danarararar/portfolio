import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl">
      <Link href="/portfolio" className="text-sm text-white/50 hover:text-white">
        ← Back
      </Link>
      <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-white/60">{project.description}</p>
      {project.image && (
  <div
    className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-cover bg-top"
    style={{ backgroundImage: `url(${project.image})` }}
  />
)}

      <h2 className="mt-8 font-semibold">Technologies Used</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>

      <h2 className="mt-8 font-semibold">Key Features</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="mt-8 flex gap-3 text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-white px-4 py-2 font-medium text-black">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-4 py-2">
            Source Code
          </a>
        )}
      </div>
    </article>
  );
}
