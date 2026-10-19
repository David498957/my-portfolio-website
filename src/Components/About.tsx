import { IMAGES } from "../utils/images";
import Img from "./Img";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
    >
      <div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
          The Architect
          <br />
          behind the pixels.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">
          Driven by a philosophy of functional minimalism, I merge deep
          engineering practices with cutting-edge visual design. Operating in
          the void between logic and emotion to build interfaces that feel
          alive.
        </p>
        <dl className="mt-8 flex gap-10">
          <div>
            <dt className="order-2 mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
              Years experience
            </dt>
            <dd className="-order-1 text-2xl font-bold text-violet-300">1+</dd>
          </div>
          <div>
            <dt className="order-2 mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
              Projects shipped
            </dt>
            <dd className="-order-1 text-2xl font-bold text-emerald-300">2</dd>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:ml-auto">
        {/* offset outline frame */}
        <div className="absolute -bottom-4 -left-4 h-full w-full border border-white/10" />
        <Img
          src={IMAGES.about}
          alt="Working at the desk"
          className="relative aspect-[4/5] w-full object-cover grayscale"
        />
      </div>
    </section>
  );
};
export default About;
