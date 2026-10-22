"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // tunggu intro selesai sebelum mulai mengetik
  useEffect(() => {
    const playing = document.documentElement.dataset.intro === "playing";
    const id = setTimeout(() => setStarted(true), playing ? 4000 : 600);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!started) return;
    const full = phrases[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text === "") delay = 350;

    const id = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [started, text, deleting, index, phrases]);

  return (
    <span>
      {text}
      <span className="caret h-4 align-middle">&nbsp;</span>
    </span>
  );
}
