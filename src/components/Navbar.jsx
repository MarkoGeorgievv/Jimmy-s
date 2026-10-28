import { useEffect, useState } from "react";
import logo from "../assets/jimmys-logo.png";

export default function Navbar({ language, onLanguageChange, text }) {
  const [hidden, setHidden] = useState(() => window.scrollY > 64);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar${hidden ? " is-hidden" : ""}`} inert={hidden}>
      <nav className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-12 lg:px-20" aria-label={text.language}>
        <a href="#top" aria-label={text.home} className="rounded focus-visible:outline-2 focus-visible:outline-brand">
          <img src={logo} width="1222" height="1287" alt="Jimmy’s" className="h-20 w-auto object-contain sm:h-28" />
        </a>
        <div className="flex shrink-0 items-center gap-2">
          {[{ code: "mk", label: "МК", name: "Македонски" }, { code: "en", label: "EN", name: "English" }].map(({ code, label, name }) => (
            <button key={code} type="button" lang={code} aria-label={name} aria-pressed={language === code}
              onClick={() => onLanguageChange(code)}
              className={`min-h-11 min-w-12 cursor-pointer rounded-lg border px-3 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${language === code ? "border-brand bg-brand text-white shadow-sm" : "border-stone-300 bg-white/80 text-stone-700 hover:border-brand hover:text-brand"}`}>
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
