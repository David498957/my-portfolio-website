import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState, type FormEvent, type ChangeEvent } from "react";
interface FormState {
  name: string;
  email: string;
  message: string;
}
const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSent(false);
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to your backend / form service (Formspree, Resend, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-md border border-white/5 bg-white/[0.06] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400";
  const label =
    "text-[10px] font-semibold uppercase tracking-widest text-zinc-300";

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
    >
      <div>
        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
          LET&apos;S
          <span className="block text-violet-400/80">CREATE</span>
          TOGETHER
        </h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
          Currently accepting new projects . Reach out if you want to build
          something exceptional.
        </p>
        <ul className="mt-8 space-y-3 text-xs text-zinc-300">
          <li className="flex items-center gap-3">
            <Mail size={14} className="text-zinc-400" />
            <a
              href="mailto:chimdidavids@gmail.com"
              className="hover:text-violet-300"
            >
              chimdidavids@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={14} className="text-zinc-400" />
            <a href="tel:+2348022485635" className="hover:text-violet-300">
              08022485635
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={14} className="text-zinc-400" />
            Lagos, Remote
          </li>
        </ul>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur sm:p-8"
      >
        <label className="block">
          <span className={label}>Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            placeholder="Enter your name"
            className={field}
          />
        </label>
        <label className="mt-5 block">
          <span className={label}>Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
            className={field}
          />
        </label>
        <label className="mt-5 block">
          <span className={label}>Message</span>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project"
            className={`${field} resize-none`}
          />
        </label>
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-violet-500/80 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
        >
          Submit
        </button>
        <p
          aria-live="polite"
          className="mt-3 min-h-[1rem] text-center text-xs text-emerald-300"
        >
          {sent ? "Message sent. I'll be in touch soon." : ""}
        </p>
      </form>
    </section>
  );
};
export default Contact;
