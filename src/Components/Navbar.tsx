import { useState } from "react";
import { NAV_LINKS } from "../utils/navLinks";
import { Menu, X } from "lucide-react";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#1a1a24]/70 px-5 py-3 backdrop-blur-xl sm:px-8"
      >
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-white sm:text-xl"
        >
          DEV DAVID
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l, i) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 ${
                  i === 0
                    ? "text-violet-300 underline underline-offset-4"
                    : "text-zinc-300"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-violet-500 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] transition hover:bg-violet-400 sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-zinc-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#1a1a24]/95 p-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-zinc-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md bg-violet-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Navbar;
