import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <section className="reveal mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mb-8 mt-3 text-sm text-white/50">
        Have something in mind? Send a message and let&apos;s connect.
      </p>
      <ContactForm />
      <h2 className="mb-3 mt-10 font-mono text-xs uppercase tracking-widest text-white/40">Connect with me</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:border-white/30">
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
