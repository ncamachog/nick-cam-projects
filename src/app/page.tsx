import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const stack = [
  "TypeScript",
  "Next.js 16.3",
  "React 19.2",
  "Tailwind CSS 4",
  "Geist",
  "ESLint 9",
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="bg-radial-fade pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]" />

      <main className="mx-auto flex max-w-5xl flex-col px-6 sm:px-8">
        <section className="flex flex-col items-center gap-6 pt-28 pb-20 text-center sm:pt-36 sm:pb-28">
          <p className="animate-fade-up text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Nick Cam Projects
          </p>
          <h1 className="animate-fade-up text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            From WordPress to Next.js
          </h1>
          <p className="animate-fade-up max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            A collection of websites migrated from WordPress to a modern,
            fast and scalable Next.js stack.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-5 pb-28 sm:grid-cols-2 sm:pb-32 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>

        <footer className="flex flex-col items-center gap-4 border-t border-border py-12 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Built with
          </p>
          <p className="max-w-md text-sm text-muted">
            {stack.join(" · ")}
          </p>
        </footer>
      </main>
    </div>
  );
}
