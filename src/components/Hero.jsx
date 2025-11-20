import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-white/10">
              MERN Stack • Full‑Stack Developer • Fresher
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Saikumar Dusa</span>
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I build modern, responsive web applications using MongoDB, Express, React, and Node.js.
              I love crafting clean UIs, scalable APIs, and seamless end‑to‑end experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-white hover:bg-white/20 transition"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-slate-200 hover:bg-white/5 transition"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-56 sm:w-64 md:w-72 lg:w-80">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 ring-1 ring-white/10 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.25),transparent_40%)]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <span className="text-4xl font-bold text-white">SD</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 backdrop-blur">
              Open to work
            </div>
            <div className="absolute -top-4 -right-4 hidden sm:block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 backdrop-blur">
              Remote • On‑site
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
