function About({ text }) {
  return (
    <section
      id="about"
      className="border-t border-neutral-100 bg-neutral-50/50 px-4 py-14 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {text.aboutLabel}
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            {text.aboutTitle}
          </h2>

          <p className="mt-6 leading-relaxed text-stone-600">
            {text.aboutDescription}
          </p>

          <p className="mt-4 leading-relaxed text-stone-600">
            {text.aboutPlaceholder}
          </p>
        </div>

        <div className="relative isolate mx-auto aspect-square w-full max-w-lg">
          <div className="absolute left-0 top-0 flex h-3/4 w-3/4 items-center justify-center rounded-2xl border border-stone-200 bg-neutral-50 p-4">
            <p className="text-center text-sm text-stone-600">{text.shopPhoto}</p>
          </div>

          <div className="absolute bottom-0 right-0 z-10 flex h-2/3 w-2/3 items-center justify-center rounded-2xl border border-stone-200 bg-white p-4 shadow-lg shadow-neutral-900/5 ring-8 ring-white">
            <p className="text-center text-sm text-stone-600">{text.barberPhoto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
