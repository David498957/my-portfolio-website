import Img from "./Img";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../utils/images";
const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-6 px-6 pt-28 md:grid-cols-2 md:pt-0"
    >
      <div className="relative z-10 order-2 pb-16 md:order-1 md:pb-0">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Digital Artisan
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
          CREATIVE DESIGNER
          <span className="block text-violet-400">&amp; DEVELOPER</span>
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
          Architecting high-performance digital experiences where artistic
          expression meets relentless technical precision.
        </p>
        <a
          href="#work"
          className="mt-8 inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-200 transition hover:border-violet-400 hover:text-violet-300"
        >
          View work <ArrowRight size={12} />
        </a>
      </div>

      <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md">
          <Img
            src={IMAGES.hero}
            alt="Portrait"
            className="aspect-[4/5] w-full object-cover grayscale"
          />
          {/* fade the portrait into the page background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16161d] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#16161d]/60 via-transparent to-[#16161d]/40" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
