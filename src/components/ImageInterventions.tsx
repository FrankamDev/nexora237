import { useState } from "react";

const images = [
  {
    src: "/i4.jpg",
    title: "Traitement d'une chambre",
    category: "Désinsectisation",
  },
  {
    src: "./i3.jpg",
    title: "Traitement d'une cuisine",
    category: "Désinfection",
  },
  {
    src: "/i4.jpg",
    title: "Traitement d'un salon",
    category: "Désinsectisation",
  },
  {
    src: "/i3.jpg",
    title: "Intervention dans une maison",
    category: "Dératisation",
  },
  {
    src: "/i1.jpg",
    title: "Traitement d'un bureau",
    category: "Désinfection",
  },
  {
    src: "/i2.jpg",
    title: "Traitement d'un appartement",
    category: "Désinsectisation",
  },
];

const ImageInterventions = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Nos interventions
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Découvrez notre travail
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Quelques exemples de nos interventions de désinfection,
            désinsectisation et dératisation.
          </p>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/3] text-left"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

              {/* Informations */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2.5 py-1 mb-2 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-medium backdrop-blur-sm">
                  {image.category}
                </span>

                <h3 className="text-white font-semibold text-lg">
                  {image.title}
                </h3>
              </div>

              {/* Icône zoom */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Intervention"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ImageInterventions;