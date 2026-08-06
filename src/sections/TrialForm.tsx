import React, { useState } from 'react';

export const TrialForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'hyrox',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kann die Formular-Logik / API-Call integriert werden
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="probetraining" className="py-24 bg-[#0A0A0A] w-full border-t border-[#232323]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A2A] block mb-2">
            STARTE DEINE EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight mb-4">
            
            <span className="text-[#F5F5F5]">KOSTENLOSES </span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF6A2A]">
              PROBETRAINING
            </span>
          </h2>
          <p className="text-[#7A7A7A] text-sm font-light leading-relaxed max-w-xl mx-auto">
            Sichere dir dein unverbindliches Probetraining. Wähle deinen Wunschkurs oder teste unsere Open-Gym Area inklusive Recovery-Bereich.
          </p>
        </div>

        {/* Formular Card */}
        <div className="bg-[#232323]/30 border border-[#7A7A7A]/20 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/40 rounded-full flex items-center justify-center text-2xl mb-6">
                &check;
              </div>
              <h3 className="text-2xl font-black text-[#F5F5F5] uppercase tracking-wide mb-2">
                ANFRAGE ERFOLGREICH!
              </h3>
              <p className="text-[#7A7A7A] text-sm font-light max-w-md mb-8">
                Vielen Dank, <span className="text-[#F5F5F5] font-semibold">{formData.name}</span>. Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden zur Bestätigung deines Termins.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold uppercase tracking-widest text-[#FF6A2A] hover:underline"
              >
                Weitere Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] placeholder-[#7A7A7A]/50 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                {/* E-Mail */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] placeholder-[#7A7A7A]/50 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                {/* Telefonnummer */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 4567890"
                    className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] placeholder-[#7A7A7A]/50 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                {/* Kurskategorie */}
                <div>
                  <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                    Interessiert an *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#00E5FF] transition-colors cursor-pointer"
                  >
                    <option value="hyrox">HYROX & Functional</option>
                    <option value="pilates">Pilates & Core Strength</option>
                    <option value="yoga">Yoga (Mobility & Recovery)</option>
                    <option value="kickboxen">Kickboxen & Combat</option>
                    <option value="opengym">Freies Training (Open Gym)</option>
                  </select>
                </div>

              </div>

              {/* Wunschdatum */}
              <div>
                <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                  Wunschdatum *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
              </div>

              {/* Nachricht / Anmerkungen */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F5] mb-2">
                  Anmerkungen oder Zielddefinition (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hast du bereits Vorerfahrungen oder bestimmte Fitnessziele?"
                  className="w-full bg-[#0A0A0A] border border-[#7A7A7A]/30 rounded-xl px-4 py-3.5 text-xs text-[#F5F5F5] placeholder-[#7A7A7A]/50 focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#FF6A2A] hover:bg-[#FF6A2A]/90 text-[#F5F5F5] font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-[#FF6A2A]/20 hover:shadow-[#FF6A2A]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Jetzt Probetraining Anfragen
              </button>

              <p className="text-center text-[10px] text-[#7A7A7A] mt-4">
                Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten einverstanden.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default TrialForm;