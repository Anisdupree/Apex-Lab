import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  badge: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Marc S.",
    role: "HYROX & Performance",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Das Equipment und die Community sind auf einem ganz anderen Level. Durch das datenbasierte Training konnte ich meine HYROX-Zeiten um 12 Minuten verbessern.",
    rating: 5,
    badge: "-12 Min HYROX Time"
  },
  {
    id: 2,
    name: "Elena R.",
    role: "Open Gym & Recovery",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    quote: "Endlich ein Studio, das Ästhetik und echten Sport perfekt kombiniert. Der Recovery-Bereich nach harten Leg Days ist für mich unersetzlich geworden.",
    rating: 5,
    badge: "Mitglied seit 1 Jahr"
  },
  {
    id: 3,
    name: "David K.",
    role: "Kinaesthetics & Strength",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Keine überfüllten Flächen, top gewartete Racks und Coaches, die genau wissen, was sie tun. Wer ernsthaft Ergebnisse will, ist hier richtig.",
    rating: 5,
    badge: "+15kg Bankdrücken"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Hintergrund-Glow-Effekte */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A2A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] block mb-2">
            ATHLETE STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight mb-4">
            ECHTE RESULTS. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF6A2A]">
              ECHTE PERFORMANCE.
            </span>
          </h2>
          <p className="text-[#7A7A7A] text-sm font-light leading-relaxed max-w-xl mx-auto">
            Erfahre, wie unsere Mitglieder ihre sportlichen Grenzen verschieben und neue Bestleistungen erreichen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#121212]/80 border border-[#232323] p-8 rounded-2xl relative flex flex-col justify-between hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Rating & Badge Header */}
                <div className="flex justify-between items-center mb-6">
                  {/* Sterne */}
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#FF6A2A]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Result Badge */}
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-[#00E5FF]/10 text-[#00E5FF] px-2.5 py-1 rounded-full border border-[#00E5FF]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Zitat */}
                <p className="text-xs sm:text-sm text-[#F5F5F5] font-light leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Profil-Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#232323]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#00E5FF]/30 group-hover:border-[#00E5FF] transition-colors"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#F5F5F5]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#7A7A7A]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof / Rating Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-[#121212]/50 border border-[#232323] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black text-[#F5F5F5]">4.9 / 5.0</div>
            <div className="text-xs text-[#7A7A7A]">
              Basierend auf <span className="text-[#F5F5F5] font-semibold">180+ Google Bewertungen</span>
            </div>
          </div>
          <a
            href="#probetraining"
            className="text-xs font-bold uppercase tracking-wider text-[#FF6A2A] hover:text-[#00E5FF] transition-colors flex items-center gap-1"
          >
            Werde Teil der Community &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;