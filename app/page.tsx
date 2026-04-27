"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  Atom,
  Braces,
  Code,
  Palette,
  Wind,
  Layers,
  GraduationCap,
  BadgeCheck,
  GitFork,
  Users,
  Send,
} from "lucide-react";
import Navbar from "./components/Navbar";
import SongCard, { type Song } from "./components/SongCard";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const songAudioRefs = useRef<Array<HTMLAudioElement | null>>([]);

  const styles = useMemo(() => {
    const isDark = theme === "dark";
    return {
      isDark,
      page: isDark
        ? "bg-zinc-950 text-zinc-100"
        : "bg-zinc-50 text-zinc-950",
      mutedText: isDark ? "text-zinc-300" : "text-zinc-700",
      subtleText: isDark ? "text-zinc-400" : "text-zinc-600",
      border: isDark ? "border-white/10" : "border-zinc-900/10",
      surface: isDark ? "bg-white/5" : "bg-zinc-900/5",
      surfaceStrong: isDark ? "bg-zinc-900/60" : "bg-white/70",
      chip: isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-zinc-900/10",
      tag: isDark ? "bg-zinc-950/30 border-white/10" : "bg-white/70 border-zinc-900/10",
    };
  }, [theme]);

  const mysongs: Song[] = [
    {
      title: "Hero",
      path: "/my-songs/Hero.mp3",
      desc: "Blaze/Area-75 respresented/BandLab-Record/mixing-Blaze",
    },
  ];

  const registerAudio = useCallback(
    (index: number, el: HTMLAudioElement | null) => {
      songAudioRefs.current[index] = el;
    },
    [],
  );

  const handleSongPlay = (playingIndex: number) => {
    for (let i = 0; i < songAudioRefs.current.length; i++) {
      if (i === playingIndex) continue;
      const el = songAudioRefs.current[i];
      if (el && !el.paused) el.pause();
    }
  };

  return (
    <main
      className={`min-h-svh pb-[env(safe-area-inset-bottom)] transition-colors duration-300 ${styles.page}`}
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          isDark={styles.isDark}
          borderClass={styles.border}
          surfaceClass={styles.surface}
          mutedTextClass={styles.mutedText}
          subtleTextClass={styles.subtleText}
        />

        <section className="mt-10 grid gap-10 sm:mt-16 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <p className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${styles.chip} ${styles.mutedText}`}>
              Computer Science Student • Future Web Developer
            </p>
            <h1 className="text-emerald-500 text-3xl font-bold sm:text-5xl">
              Sai Si Thu Htun
            </h1>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-5xl md:text-6xl">
              Hello Everyone,Nice to meet you
            </h1>
            <p className="mt-3 text-lg font-semibold text-zinc-200 md:text-xl">
              Computer Science Student &amp; Aspiring Web Developer
            </p>
            <p className={`mt-4 max-w-2xl text-pretty ${styles.mutedText}`}>
              I’m a Computer Science student passionate about full‑stack development. I enjoy turning ideas into
              polished, accessible products—one well‑crafted component at a time.
            </p>
            <p className={`mt-2 max-w-2xl text-pretty ${styles.mutedText}`}>
              I am passionate about music and playing guitar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-center text-sm font-medium text-emerald-950 hover:bg-emerald-400 sm:w-auto"
              >
                View My Work
              </a>
              <a
                href="mailto:saisithuhtun2021@gmail.com"
                className="w-full rounded-xl border border-emerald-500/40 bg-transparent px-5 py-3 text-center text-sm font-medium text-emerald-100 hover:border-emerald-400/70 hover:bg-emerald-500/10 sm:w-auto"
              >
                Contact Me
              </a>
            </div>

            <div className={`mt-8 flex flex-wrap gap-2 text-xs ${styles.subtleText}`}>
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((t) => (
                <span key={t} className={`rounded-full border px-3 py-1 ${styles.chip}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white/10 to-transparent p-6 ${styles.border}`}>
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
              <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-200" : "text-zinc-900"}`}>Currently</p>
              <p className={`mt-2 text-sm ${styles.mutedText}`}>
                Studying CS, sharpening web fundamentals, and building real projects to prepare for a web development
                career.
              </p>
              <div className="mt-6 grid gap-3">
                <div className={`rounded-xl border p-4 ${styles.border} ${styles.tag}`}>
                  <p className={`text-xs ${styles.subtleText}`}>Focus</p>
                  <p className={`mt-1 text-sm ${styles.isDark ? "text-zinc-200" : "text-zinc-900"}`}>
                    UI engineering, APIs, and clean architecture
                  </p>
                </div>
                <div className={`rounded-xl border p-4 ${styles.border} ${styles.tag}`}>
                  <p className={`text-xs ${styles.subtleText}`}>Goal</p>
                  <p className={`mt-1 text-sm ${styles.isDark ? "text-zinc-200" : "text-zinc-900"}`}>
                    Ship professional-grade web apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="mt-16">
          <h2 className="text-lg font-semibold">My Tech Stack</h2>
          <p className={`mt-2 max-w-3xl text-sm ${styles.subtleText}`}>
            Technologies I use to build modern, responsive web apps.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "HTML5", desc: "Semantic structure & accessible markup", Icon: Code },
              { title: "CSS3", desc: "Responsive layouts, animations, modern UI", Icon: Palette },
              { title: "JavaScript", desc: "Interactive experiences & app logic", Icon: Braces },
              { title: "React", desc: "Component-driven UI development", Icon: Atom },
              { title: "Next.js", desc: "Routing, rendering, and production-ready apps", Icon: Layers },
              { title: "Tailwind CSS", desc: "Utility-first styling with speed", Icon: Wind },
            ].map((t) => (
              <div
                key={t.title}
                className={`rounded-2xl border p-5 transition-colors hover:border-emerald-400/50 ${styles.border} ${styles.surfaceStrong}`}
              >
                <p className="flex items-center gap-2 text-sm font-medium text-zinc-100">
                  <t.Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  {t.title}
                </p>
                <p className={`mt-2 text-sm ${styles.mutedText}`}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20">
          <h2 className="text-lg font-semibold">About</h2>
          <p className={`mt-3 max-w-3xl ${styles.mutedText}`}>
            I’m a Computer Science student currently on break, and I’m focusing 100% on mastering modern web
            development. I love building clean, responsive interfaces and improving my skills through real projects
            every day. Outside of coding, I’m a guitar player and a vocalist—music keeps me disciplined, consistent,
            and creative.
          </p>
        </section>

        <section id="education" className="mt-16">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className={`rounded-2xl border p-5 backdrop-blur-md ${styles.border} ${styles.surface}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className={`flex items-center gap-2 text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>
                  <GraduationCap className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  Computer Science (Degree)
                </p>
                <span
                  className={`rounded-full border px-3 py-1 text-xs ${styles.tag} ${
                    styles.isDark ? "text-emerald-200" : "text-emerald-800"
                  }`}
                >
                  Currently studying
                </span>
              </div>
              <p className={`mt-2 text-sm ${styles.mutedText}`}>
                I’m currently pursuing my Computer Science degree and using my break to focus fully on modern web
                development.
              </p>
            </div>
          </div>
        </section>

        <section id="learning-path" className="mt-16">
          <h2 className="text-lg font-semibold">Learning Path</h2>
          <p className={`mt-2 max-w-3xl text-sm ${styles.subtleText}`}>
            What I’ve completed and what I’m focusing on next.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "HTML / CSS", status: "Completed", tone: "done" as const },
              { title: "Next.js Basic", status: "In progress", tone: "progress" as const },
              { title: "JavaScript Logic", status: "Next step", tone: "next" as const },
            ].map((step) => {
              const badge =
                step.tone === "done"
                  ? styles.isDark
                    ? "bg-emerald-500/15 text-emerald-200 border-emerald-400/25"
                    : "bg-emerald-600/10 text-emerald-800 border-emerald-600/20"
                  : step.tone === "progress"
                    ? styles.isDark
                      ? "bg-indigo-500/15 text-indigo-200 border-indigo-400/25"
                      : "bg-indigo-600/10 text-indigo-800 border-indigo-600/20"
                    : styles.isDark
                      ? "bg-zinc-500/10 text-zinc-200 border-white/10"
                      : "bg-zinc-900/5 text-zinc-700 border-zinc-900/10";

              return (
                <div
                  key={step.title}
                  className={`rounded-2xl border p-5 backdrop-blur-md transition hover:border-emerald-400/40 ${styles.border} ${styles.surface}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>{step.title}</p>
                    <span className={`rounded-full border px-3 py-1 text-xs ${badge}`}>{step.status}</span>
                  </div>
                  <p className={`mt-2 text-sm ${styles.mutedText}`}>
                    {step.tone === "done"
                      ? "Strong fundamentals in structure and styling."
                      : step.tone === "progress"
                        ? "Building pages, components, and real apps."
                        : "Next focus: problem-solving, algorithms, and clean logic."}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="journey" className="mt-16">
          <h2 className="text-lg font-semibold">My Journey</h2>
          <p className={`mt-2 max-w-3xl text-sm ${styles.subtleText}`}>
            A quick timeline of my education and certificates.
          </p>

          <div className="mt-6">
            {[
              {
                title: "Computer Science Student",
                subtitle: "Education",
                desc: "Studying computer science and building web projects alongside my coursework.",
                Icon: GraduationCap,
              },
              {
                title: "Certificate",
                subtitle: "Chinese Language",
                desc: "Successfully completed in Elementary Chinese Skills(HNL Chinese Language Center)",
                Icon: BadgeCheck,
              },
              {
                title: "Certificate",
                subtitle: "Diploma in English",
                desc: "Successfully completed Diplopma in English course(Mandalay University of Foreign Languages)",
                Icon: BadgeCheck,
              },
            ].map((item, idx) => (
              <div key={`${item.title}-${idx}`} className="relative pl-10">
                <div
                  className={`absolute left-4 top-0 h-full w-px ${styles.isDark ? "bg-white/10" : "bg-zinc-900/10"}`}
                  aria-hidden="true"
                />

                <div
                  className={`absolute left-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full border ${styles.border} ${styles.isDark ? "bg-zinc-950/40" : "bg-white/70"
                    }`}
                  aria-hidden="true"
                >
                  <item.Icon className="h-3.5 w-3.5 text-emerald-400" />
                </div>

                <div className="pb-6">
                  <div className={`rounded-2xl border p-5 backdrop-blur-md ${styles.border} ${styles.surface}`}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>
                        {item.title}
                      </p>
                      <span className={`rounded-full border px-3 py-1 text-xs ${styles.tag} ${styles.subtleText}`}>
                        {item.subtitle}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm ${styles.mutedText}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Next.js", Icon: Layers },
              { title: "Tailwind", Icon: Wind },
              { title: "JavaScript", Icon: Braces },
              { title: "HTML", Icon: Code },
              { title: "CSS", Icon: Palette },
            ].map((s) => (
              <div
                key={s.title}
                className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm backdrop-blur-md transition hover:border-emerald-400/40 ${styles.border} ${styles.surface}`}
              >
                <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-70" />
                <p className={`flex items-center gap-3 text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${styles.isDark ? "bg-zinc-950/30 border-white/10" : "bg-white/70 border-zinc-900/10"
                      }`}
                  >
                    <s.Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </span>
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Featured Projects</h2>
              <p className={`mt-2 max-w-3xl text-sm ${styles.subtleText}`}>
                A few projects I’m especially proud of. (Replace these with your real work.)
              </p>
            </div>
            <a
              className={`text-sm ${styles.mutedText} ${styles.isDark ? "hover:text-white" : "hover:text-zinc-950"}`}
              href="#projects"
            >
              View all →
            </a>
          </div>
            
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personal Portfolio",
                desc: "A fast, responsive portfolio with dark/light mode, glassmorphism, and clean sections.",
                tags: ["Next.js", "Tailwind", "UI"],
                href: "#",
              },
              {
                title: "E-commerce UI",
                desc: "A modern e-commerce interface with product cards, clean layout, and responsive design.",
                tags: ["UI", "Tailwind", "Responsive"],
                href: "#",
              },
              {
                title: "Music App Dashboard",
                desc: "A clean dashboard UI for playlists, recently played tracks, and music analytics.",
                tags: ["Dashboard", "UI", "JavaScript"],
                href: "#",
              },
            ].map((p) => (
              <div
                key={p.title}
                className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md transition hover:border-emerald-400/40 ${styles.border} ${styles.surface}`}
              >
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

                <div
                  className={`relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl border ${styles.border} ${styles.isDark ? "bg-zinc-950/30" : "bg-white/70"
                    }`}
                  aria-hidden="true"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/15" />
                  <div className={`absolute bottom-2 left-2 rounded-lg border px-2 py-1 text-[11px] ${styles.tag} ${styles.subtleText}`}>
                    Image placeholder
                  </div>
                </div>

                <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>{p.title}</p>
                <p className={`mt-2 text-sm ${styles.mutedText}`}>{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={`rounded-full border px-3 py-1 text-xs ${styles.tag} ${styles.mutedText}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={p.href}
                    className={`inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${styles.border} ${styles.isDark
                        ? "bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/20"
                        : "bg-emerald-600/10 text-emerald-800 hover:bg-emerald-600/15"
                      }`}
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="my-songs" className="mt-16 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">My Original Music</h2>
              <p className={`mt-2 max-w-3xl text-sm ${styles.subtleText}`}>
                A few tracks I made—tap a card to play.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mysongs.map((song, index) => (
              <SongCard
                key={`${song.title}-${index}`}
                song={song}
                index={index}
                isDark={styles.isDark}
                borderClass={styles.border}
                surfaceStrongClass={styles.surfaceStrong}
                tagClass={styles.tag}
                subtleTextClass={styles.subtleText}
                mutedTextClass={styles.mutedText}
                registerAudio={registerAudio}
                onPlay={handleSongPlay}
              />
            ))}
          </div>
        </section>
            
        <section id="projects" className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold">Projects</h2>
              <p className={`mt-2 text-sm ${styles.subtleText}`}>
                A selection of projects that highlight my UI skills, problem‑solving, and clean front‑end
                development.
              </p>
            </div>
            <a
              className={`text-sm ${styles.mutedText} ${styles.isDark ? "hover:text-white" : "hover:text-zinc-950"}`}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub →
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Portfolio Landing Page",
                desc: "A dark, responsive landing page built with Next.js + Tailwind.",
                tags: ["Next.js", "Tailwind", "TypeScript"],
              },
              {
                title: "Task Tracker App",
                desc: "CRUD app with clean UI, filters, and local persistence or API backend.",
                tags: ["React", "REST", "UI"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border bg-gradient-to-b from-white/5 to-transparent p-5 ${styles.border} ${styles.surface}`}
              >
                <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>{p.title}</p>
                <p className={`mt-2 text-sm ${styles.mutedText}`}>{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full border px-3 py-1 text-xs ${styles.tag} ${styles.mutedText}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <div className={`rounded-2xl border p-6 ${styles.border} ${styles.surface}`}>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className={`mt-2 text-sm ${styles.mutedText}`}>
              Want to work together? Reach out and I’ll respond soon.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-1.5">
                  <label className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:opacity-70 ${styles.border} ${styles.isDark
                      ? "bg-zinc-950/30 text-zinc-100 placeholder:text-zinc-400 focus:border-emerald-400/50"
                      : "bg-white/70 text-zinc-950 placeholder:text-zinc-600 focus:border-emerald-600/40"
                      }`}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:opacity-70 ${styles.border} ${styles.isDark
                      ? "bg-zinc-950/30 text-zinc-100 placeholder:text-zinc-400 focus:border-emerald-400/50"
                      : "bg-white/70 text-zinc-950 placeholder:text-zinc-600 focus:border-emerald-600/40"
                      }`}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:opacity-70 ${styles.border} ${styles.isDark
                      ? "bg-zinc-950/30 text-zinc-100 placeholder:text-zinc-400 focus:border-emerald-400/50"
                      : "bg-white/70 text-zinc-950 placeholder:text-zinc-600 focus:border-emerald-600/40"
                      }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-colors duration-300 ${styles.border} ${styles.isDark
                    ? "bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/20"
                    : "bg-emerald-600/10 text-emerald-800 hover:bg-emerald-600/15"
                    }`}
                >
                  Send Message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>
                    Socials
                  </p>
                  <p className={`mt-2 text-sm ${styles.mutedText}`}>
                    Feel free to connect with me here.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      { label: "GitHub", href: "#", Icon: GitFork },
                      { label: "Facebook", href: "#", Icon: Users },
                      { label: "Telegram", href: "#", Icon: Send },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors duration-300 ${styles.border} ${styles.isDark
                          ? "bg-zinc-950/20 text-zinc-100 hover:bg-zinc-950/30"
                          : "bg-white/70 text-zinc-950 hover:bg-white"
                          }`}
                      >
                        <s.Icon
                          className={`h-4 w-4 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.55)] transition-transform group-hover:scale-110`}
                          aria-hidden="true"
                        />
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl border p-5 ${styles.border} ${styles.tag}`}>
                  <p className={`text-sm font-medium ${styles.isDark ? "text-zinc-100" : "text-zinc-950"}`}>Quick contact</p>
                  <p className={`mt-2 text-sm ${styles.mutedText}`}>
                    Email: <a
                      className={`${styles.isDark ? "text-emerald-200 hover:text-emerald-100" : "text-emerald-800 hover:text-emerald-900"}`}
                      href="mailto:you@example.com"
                    >
                      saisithuhtun2021@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={`mt-16 border-t pt-8 text-sm ${styles.border} ${styles.subtleText}`}>
          @2026 Sai Si Thu Htun.Built with passion and code.
        </footer>
      </div>
    </main>
  );
}