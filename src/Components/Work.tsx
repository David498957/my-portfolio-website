import Img from "./Img";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../utils/project";
const Work: React.FC = () => {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Selected Work
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-300 transition hover:text-violet-300"
        >
          View archive <ArrowUpRight size={12} />
        </a>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {PROJECTS.map((p) => (
          <a key={p.title} href="#" className={`group block ${p.offset}`}>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
              <Img
                src={p.image}
                alt={p.title}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400">{p.category}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-2 text-zinc-500 transition group-hover:text-violet-300"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Work;
