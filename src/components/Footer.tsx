import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] border-t border-[#232323] w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Haupt-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Spalte 1: Brand & Socials */}
          <div className="space-y-4 md:col-span-1">
            <a href="#" className="text-xl font-black uppercase tracking-wider text-[#F5F5F5] block">
              SIMPLE<span className="text-[#FF6A2A]">PAGE</span>
            </a>
            <p className="text-xs text-[#7A7A7A] font-light leading-relaxed">
              High-End Fitness equipment, datenbasierte Trainingsansätze und erstklassige Recovery für dein nächstes Level.
            </p>
            
            {/* Social Icons mit echten Markenfarben */}
            <div className="flex items-center gap-3 pt-2">
              
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white shadow-lg shadow-[#FD1D1D]/20 hover:shadow-[#FD1D1D]/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-lg shadow-[#FF0000]/20 hover:shadow-[#FF0000]/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-9 h-9 rounded-xl bg-[#010101] border border-[#25F4EE]/40 flex items-center justify-center text-white shadow-lg shadow-[#FE2C55]/20 hover:shadow-[#25F4EE]/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current text-[#F5F5F5]" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.53-1.33 2.53-.01.99.46 1.97 1.25 2.57.87.67 2.05.8 3.08.43.95-.33 1.69-1.1 1.99-2.07.13-.5.17-1.03.16-1.55.02-5.38.01-10.75.02-16.13z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-[#7A7A7A]">
              <li><a href="#features" className="hover:text-[#00E5FF] transition-colors">Features</a></li>
              <li><a href="#courses" className="hover:text-[#00E5FF] transition-colors">Kurse</a></li>
              <li><a href="#preise" className="hover:text-[#00E5FF] transition-colors">Preise & Abos</a></li>
              <li><a href="#probetraining" className="hover:text-[#00E5FF] transition-colors">Probetraining</a></li>
            </ul>
          </div>

          {/* Spalte 3: Öffnungszeiten & Kontakt */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
              ÖFFNUNGSZEITEN
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-[#7A7A7A]">
              <li className="flex justify-between">
                <span>Open Gym:</span>
                <span className="text-[#F5F5F5] font-medium">24 / 7</span>
              </li>
              <li className="flex justify-between">
                <span>Personal Coaching:</span>
                <span className="text-[#F5F5F5] font-medium">06:00 - 22:00</span>
              </li>
              <li className="pt-2 text-[11px] text-[#FF6A2A]">
                &bull; Support &amp; Empfang besetzt
              </li>
            </ul>
          </div>

          {/* Spalte 4: Rechtliches & Impressum */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
              RECHTLICHES
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-[#7A7A7A]">
              <li>
                <a href="#impressum" className="hover:text-[#FF6A2A] transition-colors font-medium text-[#F5F5F5]">
                  Impressum &rarr;
                </a>
              </li>
              <li><a href="#datenschutz" className="hover:text-[#00E5FF] transition-colors">Datenschutzerklärung</a></li>
              <li><a href="#agb" className="hover:text-[#00E5FF] transition-colors">AGB</a></li>
              <li><a href="#cookies" className="hover:text-[#00E5FF] transition-colors">Cookie-Einstellungen</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#7A7A7A]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#7A7A7A] font-light">
          <p>&copy; {currentYear} SIMPLEPAGE. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-[#FF6A2A]">&hearts;</span> for Peak Performance
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;