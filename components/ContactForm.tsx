"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:border-white/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea className={`${field} h-32`} placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80">
        Send Message
      </button>
    </form>
  );
}
