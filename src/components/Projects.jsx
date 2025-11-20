import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Task Manager",
    desc: "A MERN app to create, update, and track tasks with filters and auth.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    demo: "#",
    code: "#",
  },
  {
    title: "E‑Commerce API",
    desc: "Node.js and Express REST API with products, carts, and orders.",
    tech: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Site",
    desc: "Responsive personal portfolio built with React and Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-white mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 flex-1">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-white/5 px-2 py-1 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={p.code} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition" target="_blank" rel="noreferrer">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
