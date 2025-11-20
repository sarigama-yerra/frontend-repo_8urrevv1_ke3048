import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-blue-500/15 p-2 ring-1 ring-blue-500/30">
              <Mail className="text-blue-300" size={20} />
            </div>
            <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
          </div>

          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell me about your project or opportunity"
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-white hover:bg-blue-600 transition disabled:opacity-60"
              >
                <Send size={18} /> {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <span className="text-green-300">Thanks! I'll get back to you soon.</span>}
              {status === "error" && <span className="text-red-300">Something went wrong. Please try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
