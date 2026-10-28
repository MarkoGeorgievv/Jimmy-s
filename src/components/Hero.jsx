import heroBackground from "../assets/barbershop.jpg";

import { business } from "../data/business";
function Hero({ text }) {
  return (
    <section
      className="relative isolate bg-neutral-900 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />
      <div className="mx-auto flex min-h-[70svh] max-w-6xl items-center justify-center px-4 pb-14 pt-32 sm:px-12 sm:pb-24 sm:pt-44">
        <div className="w-full min-w-0 max-w-3xl text-center">
          <h1 className="text-[clamp(2rem,6.5vw,4.5rem)] font-bold leading-tight tracking-tight">
            {text.heroLine1}
            <br />
            {text.heroLine2}
          </h1>

          <div className="hero-actions mx-auto mt-8 grid w-full max-w-sm gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {text.servicesLink}
            </a>

            <a
              href="#location"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 bg-black/20 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/15"
            >
              {text.findUs}
            </a>
            {business.phone && (
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-brand bg-black/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand"
              >
                {text.contact}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
