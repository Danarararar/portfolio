"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/portfolio";

export default function LanyardCard() {
  const boxRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ropeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const card = cardRef.current;
    const rope = ropeRef.current;
    if (!box || !card || !rope) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    const p = { x: 0, y: 0, vx: 0, vy: 0, ready: false };
    let raf = 0;

    const draw = (ax: number, ay: number) => {
      const dx = p.x - ax;
      const dy = p.y - ay;
      const dist = Math.hypot(dx, dy);
      const deg = (Math.atan2(-dx, dy) * 180) / Math.PI;
      rope.style.height = `${dist}px`;
      rope.style.transform = `translate(${ax}px, ${ay}px) translateX(-50%) rotate(${deg}deg)`;
      card.style.transform = `translate(${p.x}px, ${p.y}px) translateX(-50%) rotate(${deg}deg)`;
    };

    const tick = () => {
      const r = box.getBoundingClientRect();
      const ax = r.width / 2;
      const ay = -140; // tali mulai dari atas halaman
      const len = Math.min(300, r.height * 0.55) + 140;

      if (!p.ready) {
        p.x = ax + 60;
        p.y = ay + len * 0.9;
        p.ready = true;
      }

      if (reduce) {
        p.x = ax;
        p.y = ay + len;
        draw(ax, ay);
        return;
      }

      p.vy += 0.5; // gravitasi
      if (pointer.active) {
        p.vx += (pointer.x - r.left - p.x) * 0.0025; // tarik ke kursor
        p.vy += (pointer.y - r.top - p.y) * 0.0025;
      }
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;

      // tali tidak boleh lebih panjang dari len
      const dx = p.x - ax;
      const dy = p.y - ay;
      const dist = Math.hypot(dx, dy) || 1;
      if (dist > len) {
        const nx = dx / dist;
        const ny = dy / dist;
        p.x = ax + nx * len;
        p.y = ay + ny * len;
        const radial = p.vx * nx + p.vy * ny;
        if (radial > 0) {
          p.vx -= radial * nx;
          p.vy -= radial * ny;
        }
      }

      draw(ax, ay);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div ref={boxRef} className="relative h-[420px] w-full md:h-[560px]" aria-hidden="true">
      <div
        ref={ropeRef}
        className="absolute left-0 top-0 w-3 origin-top overflow-hidden bg-neutral-900 text-center font-mono text-[8px] leading-3 tracking-widest text-white/60"
      >
        <div className="[writing-mode:vertical-rl] mx-auto whitespace-nowrap">
          {"DANAR DEV · ".repeat(12)}
        </div>
      </div>

      <div ref={cardRef} className="absolute left-0 top-0 w-44 origin-top md:w-56">
        <span className="absolute -top-2 left-1/2 h-4 w-7 -translate-x-1/2 rounded-sm bg-neutral-800" />
        <div className="rounded-xl bg-neutral-100 p-2.5 shadow-2xl">
          <div className="relative h-56 overflow-hidden rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-900 md:h-72">
            <div className="font-display absolute inset-0 grid place-items-center text-5xl font-extrabold text-black/40">
              {initials}
            </div>
            {/* taruh foto di public/photo.jpg, otomatis muncul menutupi inisial */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/photo.jpg)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
