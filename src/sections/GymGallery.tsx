import React, { useState, useEffect } from 'react';

interface SubFeature {
  name: string;
  image: string;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  badge: string;
  subImages?: SubFeature[];
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "OPEN GYM AREA",
    category: "High-End Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    description: "Freihantelbereich, Custom Racks und Maschinen der neuesten Generation für maximalen Muskelaufbau.",
    badge: "24/7 Access",
  },
  {
    id: 2,
    title: "PERFORMANCE KURSE",
    category: "Group & Combat",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    description: "Dynamische Gruppen-Workouts: Von HYROX über Kickboxen bis hin zu intensivem Functional Training.",
    badge: "Coached Sessions",
  },
  {
    id: 3,
    title: "RECOVERY & SPA",
    category: "Regeneration",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    description: "Hydro-Jet Wassermassagen, finnische Sauna und Kältebecken für schnelle Erholung nach dem Workout.",
    badge: "Premium Wellness",
    // Präzise zugeschnittene Unsplash-Bilder für die 3 Wellness-Bereiche
    subImages: [
      {
        name: "Wassermassage",
        image: "/public/images/wassermassage.png",
      },
      {
        name: "Finnische Sauna",
        image: "/public/images/finsauna.png",
      },
      {
        name: "Kältebecken",
        image: "/public/images/Kältebecken.png",
      },
    ],
  },
];

export const GymGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeSubImage, setActiveSubImage] = useState<string>('');

  // Modal per ESC-Taste schließen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setActiveSubImage(item.subImages ? item.subImages[0].image : item.image);
  };

  return (
    <section id="gallery" className="py-20 bg-[#0A0A0A] w-full border-b border-[#232323] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] block mb-2">
              STUDIO EINBLICKE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              ERLEBE DAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF6A2A]">GYM</span>
            </h2>
          </div>
          <p className="text-[#7A7A7A] text-xs sm:text-sm font-light max-w-md leading-relaxed">
            State-of-the-Art Training trifft auf erstklassige Regeneration. Klicke auf eine Zone, um die Detailansicht zu öffnen.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#121212] border border-[#232323] hover:border-[#00E5FF]/50 transition-all duration-500 flex flex-col justify-end min-h-[420px] cursor-pointer shadow-xl"
            >
              {/* Split-Gitter für Recovery vs. Standard-Cover für andere */}
              {item.subImages ? (
                <div className="absolute inset-0 grid grid-cols-3 gap-0.5 opacity-70 group-hover:opacity-90 transition-opacity duration-700">
                  {item.subImages.map((sub, idx) => (
                    <div key={idx} className="relative h-full w-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${sub.image}')` }}
                      />
                      <div className="absolute bottom-3 left-0 right-0 text-center z-10 px-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 px-1.5 py-0.5 rounded backdrop-blur-md border border-[#7A7A7A]/30 block truncate">
                          {sub.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              )}

              {/* Dunkles Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

              {/* Top Badge & Zoom Icon */}
              <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                <span className="bg-[#0A0A0A]/80 backdrop-blur-md text-[#00E5FF] border border-[#00E5FF]/30 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {item.badge}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/80 border border-[#7A7A7A]/30 flex items-center justify-center text-[#F5F5F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6A2A]">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#F5F5F5] uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7A7A7A] font-light leading-relaxed group-hover:text-[#F5F5F5]/90 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Card */}
          <div 
            className="relative max-w-4xl w-full bg-[#121212] border border-[#00E5FF]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0A0A0A]/80 border border-[#7A7A7A]/30 text-[#F5F5F5] flex items-center justify-center hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors"
              aria-label="Schließen"
            >
              &#x2715;
            </button>

            {/* Enlarged Image Container */}
            <div className="relative h-64 sm:h-[450px] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src={activeSubImage}
                alt={selectedImage.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Sub-Images Selector für Recovery */}
            {selectedImage.subImages && (
              <div className="bg-[#0A0A0A] p-4 flex gap-3 overflow-x-auto border-t border-[#232323]">
                {selectedImage.subImages.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSubImage(sub.image)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                      activeSubImage === sub.image
                        ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]'
                        : 'border-[#7A7A7A]/30 text-[#7A7A7A] hover:text-[#F5F5F5]'
                    }`}
                  >
                    <img src={sub.image} alt={sub.name} className="w-8 h-8 rounded-lg object-cover" />
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Modal Info Footer */}
            <div className="p-6 sm:p-8 bg-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#232323]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A2A] block mb-1">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-black text-[#F5F5F5] uppercase tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-[#7A7A7A] font-light mt-2 max-w-xl">
                  {selectedImage.description}
                </p>
              </div>
              <a
                href="#probetraining"
                onClick={() => setSelectedImage(null)}
                className="bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 text-center whitespace-nowrap"
              >
                Bereich Testen
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default GymGallery;