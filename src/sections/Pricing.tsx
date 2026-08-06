import React from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'DAY PASS',
      price: '5€',
      period: 'pro Tag',
      description: 'Ideal für Flexibilität und Spontaneität ohne feste Bindung.',
      features: [
        'Zugang zum gesamten Fitnessbereich',
        'Nutzung der Duschen & Umkleiden',
        '1x Hydro-Jet Wassermassage',
        'Kostenloses WLAN',
      ],
      ctaText: 'Tagespass Holen',
    },
    {
      name: 'PRO ATHLETE',
      price: '50€',
      period: 'pro Monat',
      description: 'Unser Bestseller für volle Performance und volle Flexibilität.',
      highlighted: true,
      features: [
        '24/7 Zugang zu allen Open-Gym Bereichen',
        'Alle Kurse inklusive (Hyrox, Yoga, Kickboxen)',
        'Unbegrenzt Wassermassagen & Sauna',
        'KI-gestützte Trainings- & Erholungsanalyse',
        'Monatlich kündbar',
      ],
      ctaText: 'Jetzt Starten',
    },
    {
      name: 'VIP PERFORMANCE',
      price: '95€',
      period: 'pro Monat',
      description: 'Das All-Inclusive Paket für maximale Ergebnisse und Betreuung.',
      features: [
        'Alle Leistungen aus PRO ATHLETE',
        '2x Personal Training Sessions pro Monat',
        'Maßgeschneiderter Ernährungsplan',
        'Kostenlose Handtücher & Protein-Shakes',
        'Gast-Zugang (1 Person pro Woche)',
      ],
      ctaText: 'VIP Mitglied Werden',
    },
  ];

  return (
    <section id="preise" className="py-24 bg-[#0A0A0A] w-full border-t border-[#232323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] block mb-2">
            TRANSPARENT & FLEXIBEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight mb-4">
            WÄHLE DEIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF6A2A]">PERFORMANCE-ABO</span>
          </h2>
          <p className="text-[#7A7A7A] text-sm font-light leading-relaxed">
            Keine versteckten Gebühren. Volle Transparenz ab Tag 1. Jederzeit anpassbar.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#232323]/80 border-2 border-[#00E5FF] shadow-xl shadow-[#00E5FF]/10 scale-105 z-10'
                  : 'bg-[#232323]/30 border border-[#7A7A7A]/20 hover:border-[#7A7A7A]/50'
              }`}
            >
              {/* Highlight Tag */}
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6A2A] text-[#F5F5F5] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  POPULÄRSTE WAHL
                </span>
              )}

              <div>
                {/* Plan Title & Price */}
                <div className="mb-6">
                  <h3 className="text-lg font-black text-[#F5F5F5] uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#7A7A7A] text-xs font-light min-h-[36px]">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#F5F5F5]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#7A7A7A] font-light">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8 border-t border-[#7A7A7A]/20 pt-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-xs text-[#F5F5F5]/90">
                      {/* Orangefarbenes Häkchen-Icon */}
                      <svg 
                        className="w-4 h-4 text-[#FF6A2A] shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Orange Aufleuchtender CTA Button */}
              <a
                href="#probetraining"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 bg-[#FF6A2A] hover:bg-[#FF6A2A]/90 text-[#F5F5F5] shadow-lg shadow-[#FF6A2A]/20 hover:shadow-[#FF6A2A]/40 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;