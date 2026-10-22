"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="reveal fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-2.5 backdrop-blur">
        <Link href="/" className="font-mono text-sm text-white/70">
          {profile.handle}
        </Link>
        <ul className="flex gap-4 text-sm sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  isActive(l.href)
                    ? "border-b border-white pb-0.5 text-white"
                    : "text-white/50 transition hover:text-white"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
