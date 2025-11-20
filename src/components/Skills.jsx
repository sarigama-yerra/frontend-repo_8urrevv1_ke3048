import { Code2, Server, Database, Boxes } from "lucide-react";

export default function Skills() {
  const skills = [
    { icon: Code2, title: "Frontend", items: ["React", "Vite", "Redux", "Tailwind", "HTML5", "CSS3"] },
    { icon: Server, title: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT", "Auth"] },
    { icon: Database, title: "Database", items: ["MongoDB", "Mongoose", "Aggregation", "Indexes"] },
    { icon: Boxes, title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Figma"] },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-white mb-8">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/15 p-2 ring-1 ring-blue-500/30">
                  <Icon className="text-blue-300" size={20} />
                </div>
                <h3 className="font-medium text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {items.map((s) => (
                  <li key={s} className="rounded-lg bg-white/5 px-3 py-2">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
