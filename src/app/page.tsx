import { CursorGlow } from "@/components/cursor-glow";
import { PortalRings } from "@/components/portal-hero";
import { Preloader } from "@/components/preloader";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Starfield } from "@/components/starfield";
import { projects } from "@/lib/projects";

const stack = ["TypeScript", "Next.js 16.3", "React 19.2", "Tailwind CSS 4", "Geist", "ESLint 9"];

export default function Home() {
  const marquee = [...stack, ...stack];

  return (
    <>
      <Preloader />
      <Starfield />
      <CursorGlow />

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
          <PortalRings />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p
              className="intro rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.3em] text-white/70 uppercase backdrop-blur"
              style={{ ["--d" as string]: "0s" }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-lime)] shadow-[0_0_10px_var(--neon-lime)]" />
              {projects.length} portals open
            </p>
            <h1
              className="intro text-[clamp(3rem,10vw,8rem)] leading-[0.95] font-semibold tracking-tight"
              style={{ ["--d" as string]: "0.1s" }}
            >
              <span className="neon-text inline-block">Nick Cam</span>
              <br />
              <span className="neon-text inline-block">Projects</span>
            </h1>
            <p
              className="intro max-w-xl text-balance text-base leading-relaxed text-white/75 [text-shadow:0_0_18px_#05060d,0_0_6px_#05060d] sm:text-lg"
              style={{ ["--d" as string]: "0.25s" }}
            >
              Websites rebuilt on a modern, fast and scalable Next.js stack, from
              WordPress migrations to brand-new builds.
            </p>
            <a
              href="#portals"
              className="intro group mt-2 inline-flex items-center gap-3 rounded-full border border-[var(--neon-cyan)]/60 bg-[var(--neon-cyan)]/10 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_-6px_var(--neon-cyan)] transition hover:bg-[var(--neon-cyan)]/20 hover:shadow-[0_0_44px_-4px_var(--neon-cyan)]"
              style={{ ["--d" as string]: "0.4s" }}
            >
              Explore the portals
              <span aria-hidden className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block" aria-hidden>
            <span className="intro block h-12 w-px bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" style={{ ["--d" as string]: "0.7s" }} />
          </div>
        </section>

        {/* MARQUEE */}
        <div
          className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur-sm"
          aria-hidden
        >
          <div className="marquee">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {marquee.map((s, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-8 px-4 text-sm font-medium tracking-[0.3em] text-white/50 uppercase">
                    {s}
                    <span className="h-1.5 w-1.5 rotate-45 bg-[var(--neon-magenta)] shadow-[0_0_10px_var(--neon-magenta)]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* PORTALS */}
        <section id="portals" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--neon-cyan)] uppercase">
              Selected work
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Every site is a <span className="neon-text">portal</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={(i % 3) * 0.12}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-white/10 py-14 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">Built with</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/55">{stack.join(" · ")}</p>
          <p className="mt-8 text-xs text-white/30">© {new Date().getFullYear()} Nick Cam Projects</p>
        </footer>
      </main>
    </>
  );
}
