"use client";

import { useRef, type CSSProperties } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [c1, c2] = project.accent;

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 14}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-label={`${project.name} — view website`}
      className="portal-card group"
      style={{ "--c1": c1, "--c2": c2 } as CSSProperties}
    >
      <span className="portal-card__glare" aria-hidden />
      <span className="portal-card__orb" aria-hidden />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="portal-card__tag">{project.tag}</span>
      </div>

      <div className="relative mt-16 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">{project.description}</p>
      </div>

      <span className="relative mt-8 inline-flex items-center gap-3 text-sm font-medium text-white">
        <span className="portal-card__btn" aria-hidden>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </span>
        Enter portal
      </span>
    </a>
  );
}
