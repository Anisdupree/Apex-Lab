import React from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  intensity: string;
  description: string;
  image: string;
  tag?: string;
}

export const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: '01',
      title: 'HYROX & FUNCTIONAL',
      category: 'ATHLETIC LAB',
      intensity: 'HOCH',
      tag: 'BELIEBT',
      description: 'Kombination aus Kraft- und Ausdauerelementen auf Wettkampfniveau. Maximaler Kalorienverbrauch und funktionelle Leistungsfähigkeit.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'PILATES & CORE STRENGTH',
      category: 'BODY & CONTROL',
      intensity: 'MITTEL',
      description: 'Gezieltes Tiefenmuskulatur-Training für eine starke Körpermitte, verbesserte Haltung und maximale Rumpfstabilität.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '03',
      title: 'YOGA (MOBILITY & RECOVERY)',
      category: 'REGENERATION',
      intensity: 'SANFT',
      description: 'Geführte Mobility-Sessions, Faszientraining und Entspannung. Perfekt zur Verletzungsprävention und Muskelerholung.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '04',
      title: 'KICKBOXEN & COMBAT',
      category: 'STRIKING LAB',
      intensity: 'MAXIMAL',
      tag: 'HOT',
      description: 'High-Intensity Schlag- und Trittkombinationen am Sandsack. Verbrennt Kalorien, schärft die Reflexe und baut Stress ab.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="kurse" className="py-24 bg-[#0A0A0A] w-full border-t border-[#232323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] block mb-2">
              PRODUKTIVITÄT & PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              EXKLUSIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7A7A7A]">
                WORKOUT-LABS
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#7A7A7A] text-sm font-light leading-relaxed mb-3">
              Geführte Einheiten in Kleingruppen für optimale Betreuung. Nach dem Workout wartet unsere entspannende <strong>Wassermassagen- & Saunalounge</strong> auf dich.
            </p>
          </div>
        </div>

        {/* Course Grid (2 Spalten auf Tablet, 4 Spalten auf Large Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-[#232323]/40 border border-[#7A7A7A]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00E5FF] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Bildbereich */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                  
                  {/* Tag falls vorhanden */}
                  {course.tag && (
                    <span className="absolute top-3 right-3 bg-[#FF6A2A] text-[#F5F5F5] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-lg">
                      {course.tag}
                    </span>
                  )}

                  <span className="absolute bottom-2 left-3 text-[10px] font-mono text-[#00E5FF] tracking-widest">
                    //{course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-[#F5F5F5] uppercase tracking-wide mb-2 group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-xs font-light leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-[#232323] mt-2">
                <span className="text-[10px] font-bold text-[#7A7A7A] uppercase tracking-wider">
                  LEVEL: <span className="text-[#F5F5F5]">{course.intensity}</span>
                </span>
                <a 
                  href="#probetraining" 
                  className="text-xs font-bold text-[#00E5FF] group-hover:text-[#FF6A2A] transition-colors flex items-center gap-1 uppercase tracking-wider"
                >
                  Buchen <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;