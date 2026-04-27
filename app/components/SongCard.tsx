"use client";

import { useEffect, useRef } from "react";

export type Song = {
  title: string;
  path: string;
  desc: string;
};

type Props = {
  song: Song;
  index: number;
  isDark: boolean;
  borderClass: string;
  surfaceStrongClass: string;
  tagClass: string;
  subtleTextClass: string;
  mutedTextClass: string;
  registerAudio: (index: number, el: HTMLAudioElement | null) => void;
  onPlay: (index: number) => void;
};

export default function SongCard({
  song,
  index,
  isDark,
  borderClass,
  surfaceStrongClass,
  tagClass,
  subtleTextClass,
  mutedTextClass,
  registerAudio,
  onPlay,
}: Props) {
  const localAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    registerAudio(index, localAudioRef.current);
    return () => registerAudio(index, null);
  }, [index, registerAudio]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md transition
      duration-300 will-change-transform
      hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/40
      active:scale-[0.99]
      motion-reduce:transform-none motion-reduce:transition-none
      ${borderClass} ${surfaceStrongClass}`}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={`text-base font-semibold tracking-tight ${
                isDark ? "text-zinc-100" : "text-zinc-950"
              }`}
            >
              {song.title}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${mutedTextClass}`}>
              {song.desc}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] ${tagClass} ${subtleTextClass}`}
          >
            MP3
          </span>
        </div>

        <div
          className={`mt-4 rounded-xl border p-3 ${borderClass} ${
            isDark ? "bg-zinc-950/30" : "bg-white/70"
          }`}
        >
          <audio
            controls
            playsInline
            preload="none"
            ref={localAudioRef}
            onPlay={() => onPlay(index)}
            className="w-full"
          >
            <source src={song.path} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

