const services = [
  { key: "haircut", paths: ["M14 14 36 36M14 34 36 12"], circles: [[11, 11, 6], [11, 37, 6]] },
  { key: "hairDry", paths: ["M12 12h15l10 5v10l-10 5H12a10 10 0 0 1 0-20Z", "M18 32v11h9l-3-11M37 18h7v8h-7M10 18v8M15 18v8"] },
  { key: "shave", paths: ["M9 8h30v10H9zM13 13h22M20 18v8h8v-8M21 26h6v17h-6z"] },
];

export default function Services({ text }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-neutral-100 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />{text.servicesLink}
            </p>
            <h2 id="services-title" className="text-3xl font-bold sm:text-4xl lg:text-5xl">{text.servicesTitle}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-stone-600">{text.servicesIntro}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.key} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7">
              <div className="mb-4 flex items-start">
                <div className="rounded-2xl bg-brand/5 p-4 text-brand">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true">
                    {service.paths.map((path) => <path key={path} d={path} />)}
                    {service.circles?.map(([cx, cy, r]) => <circle key={cy} cx={cx} cy={cy} r={r} />)}
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-stone-900">{text[service.key]}</h3>
              <p className="mt-3 leading-relaxed text-stone-600">{text[`${service.key}Description`]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
