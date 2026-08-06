import React from 'react';

// Wir definieren ein Interface für unsere Feature-Struktur (Best Practice in TS)
interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800/80 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-zinc-900 overflow-hidden">
      {/* Subtiler Glow-Effekt im Hintergrund beim Hovern */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Nummerierung */}
      <div className="text-sm font-mono text-amber-500/70 mb-6 tracking-widest font-semibold">
        // {number}
      </div>
      
      {/* Titel */}
      <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-amber-400 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Beschreibung */}
      <p className="text-zinc-400 text-sm font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Features: React.FC = () => {
  const gymFeatures = [
    {
      number: '01',
      title: 'High-End Equipment',
      description: 'Trainiere an den weltweit führenden Geräten von Biostrength und Eleiko. Maximale Biomechanik für deine maximale Performance.',
    },
    {
      number: '02',
      title: 'Smart Zone Coaching',
      description: 'Kein Rätselraten mehr. Unsere Trainer erstellen KI-gestützte, datenbasierte Trainings- und Kinaesthetics-Pläne exakt für deinen Körper.',
    },
    {
      number: '03',
      title: 'Premium Regeneration',
      description: 'Nach dem Workout wartet unsere Recovery-Area: Kryokammern, finnische Saunen und Sportmassagen für die perfekte Erholung.',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sektions-Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
              Warum wir anders sind
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Das nächste Level des <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Body-Engineerings.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm md:text-right leading-relaxed text-sm">
            Wir haben das klassische Fitnessstudio-Konzept aufgebrochen und durch wissenschaftliche Ansätze und puren Premium-Komfort ersetzt.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {gymFeatures.map((feature) => (
            <FeatureCard 
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;