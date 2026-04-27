"use client";

import { Moon, Sun } from "lucide-react";

type Props = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  isDark: boolean;
  borderClass: string;
  surfaceClass: string;
  mutedTextClass: string;
  subtleTextClass: string;
};

export default function Navbar({
  theme,
  onToggleTheme,
  isDark,
  borderClass,
  surfaceClass,
  mutedTextClass,
  subtleTextClass,
}: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
        <div className="leading-tight">
          <p className={`text-sm ${subtleTextClass}`}>Portfolio</p>
          <p className="font-semibold">Sai Si Thu Htun</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <nav className={`hidden gap-6 text-sm md:flex ${mutedTextClass}`}>
          <a className={isDark ? "hover:text-white" : "hover:text-zinc-950"} href="#about">
            About
          </a>
          <a className={isDark ? "hover:text-white" : "hover:text-zinc-950"} href="#skills">
            Skills
          </a>
          <a className={isDark ? "hover:text-white" : "hover:text-zinc-950"} href="#projects">
            Projects
          </a>
          <a className={isDark ? "hover:text-white" : "hover:text-zinc-950"} href="#contact">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors duration-300 hover:border-emerald-400/40 ${borderClass} ${surfaceClass}`}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          ) : (
            <Sun className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          )}
          <span className={mutedTextClass}>{theme === "dark" ? "Dark" : "Light"}</span>
          <span
            className={`relative ml-1 h-5 w-9 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-emerald-500/40" : "bg-zinc-900/15"
            }`}
            aria-hidden="true"
          >
            <span
              className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full will-change-transform transition-transform duration-300 ${
                theme === "dark"
                  ? "translate-x-4 bg-emerald-300"
                  : "translate-x-0 bg-zinc-900/60"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}

