export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm a MERN stack developer passionate about building performant web applications.
              I enjoy working across the stack — designing polished frontends and building robust backend APIs.
              I'm currently seeking an opportunity to kick‑start my career and contribute to a collaborative team.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="rounded-lg bg-white/5 px-3 py-2">JavaScript / TypeScript</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">React + Vite</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Node.js + Express</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">MongoDB + Mongoose</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">REST APIs</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Tailwind CSS</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium text-white">Quick Info</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-slate-300">
              <div>
                <dt className="text-slate-400 text-xs">Name</dt>
                <dd className="font-medium">Saikumar Dusa</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Role</dt>
                <dd className="font-medium">MERN Full‑Stack Developer (Fresher)</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Location</dt>
                <dd className="font-medium">India</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Availability</dt>
                <dd className="font-medium">Immediate</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
