import { gallery } from "../data/gallery.js";

function Gallery({ text }) {
  return (
    <section id="gallery" className="border-t border-neutral-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          {text.galleryLabel}
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          {text.galleryTitle}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="aspect-3/4 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50"
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={`${text.haircutPhoto} ${photo.id}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-4 text-center text-sm text-stone-600">
                  {text.photoSoon}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
