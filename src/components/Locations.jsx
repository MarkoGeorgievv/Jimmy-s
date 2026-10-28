import { business } from "../data/business";

const { coordinates } = business;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;

export default function Locations({ text, language }) {
  return (
    <section id="location" aria-labelledby="location-title" className="border-t border-neutral-100 bg-neutral-50/50 px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          {text.locationsLabel}
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="location-title" className="text-3xl font-bold sm:text-4xl">{text.locationsTitle}</h2>
            <address className="mt-4 not-italic leading-relaxed text-stone-600">{text.locationAddress}</address>
          </div>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full shrink-0 sm:w-fit items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            {text.directions}
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-lg shadow-neutral-900/5">
          <iframe
            key={language}
            title={text.mapTitle}
            src={`https://maps.google.com/maps?q=${coordinates}&z=17&t=m&hl=${language}&output=embed`}
            width="100%"
            height="480"
            className="block h-[clamp(280px,55vw,480px)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded text-sm text-brand underline underline-offset-4 hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
          {text.openMap}
        </a>
      </div>
    </section>
  );
}
