import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-border bg-surface p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-hover hover:bg-surface-hover sm:p-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
      >
        <span className="relative">
          View website
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </a>
    </article>
  );
}
