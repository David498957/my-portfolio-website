import { accentText, accentTag } from "../utils/style";
import { SKILLS } from "../utils/skill";

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14 text-center">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
          Core Competencies
        </h2>
        <div className="mx-auto mt-3 h-px w-12 bg-violet-300/40" />
      </div>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {SKILLS.map((s) => (
          <article
            key={s.title}
            className={`rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07] ${s.offset}`}
          >
            <span className={accentText[s.accent]}>{s.icon}</span>
            <h3 className="mt-4 text-xl font-bold text-zinc-100">{s.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              {s.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <li
                  key={t}
                  className={`rounded border px-2 py-0.5 text-[10px] font-medium ${accentTag[s.accent]}`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Expertise;
