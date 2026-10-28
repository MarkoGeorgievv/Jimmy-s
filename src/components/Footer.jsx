import logo from "../assets/jimmys-logo.png";
import { business } from "../data/business";

function Footer({ text }) {
  return (
    <footer className="border-t border-neutral-700 bg-neutral-800 text-white px-4 py-5 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center text-center">
        <a href="#top" aria-label={text.home} className="col-start-2 row-start-1 justify-self-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-light">
          <img src={logo} width="1222" height="1287" alt="Jimmy’s" loading="lazy" className="h-20 w-auto object-contain sm:h-24" />
        </a>
        <a href={business.phoneHref} className="col-span-3 row-start-2 inline-flex min-h-11 items-center gap-2 justify-self-end whitespace-nowrap rounded-lg py-2 text-sm font-semibold tracking-wide text-neutral-200 transition-colors hover:text-brand-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-light sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92z" />
          </svg>
          {business.phone}
        </a>
        <p className="col-span-3 mt-3 w-full border-t border-neutral-600 pt-3 text-xs text-neutral-300">
          © 2026 Jimmy’s. {text.rights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
