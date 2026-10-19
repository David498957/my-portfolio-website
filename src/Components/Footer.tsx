import { SOCIALS } from "../utils/navLinks";

const Footer: React.FC = () => {
  return (
    <footer className="rounded-t-3xl bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <a
          href="#top"
          className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          DEV DAVID
        </a>
        <p className="text-[11px] uppercase tracking-wider text-zinc-500">
          © {new Date().getFullYear()} DEV DAVID — Frontend Developer
        </p>
        <ul className="flex flex-wrap gap-6">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-xs font-semibold text-zinc-300 transition hover:text-violet-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
