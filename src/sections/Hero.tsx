import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const tagline = "EVOLUTIONIZE YOUR TRAINING";
  const targetRef = useRef<HTMLDivElement>(null);

  // Verfolgt den Scroll-Fortschritt in der Hero-Sektion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={targetRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-16"
    >
      {/* Hintergrundbild mit dunklem Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale contrast-125 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center mt-8">
        
        {/* Buchstabe-für-Buchstabe Scroll-Animation */}
        <div className="flex flex-wrap justify-center overflow-hidden mb-6 py-2">
          {tagline.split("").map((letter, index) => {
            const delayOffset = index * 0.015;
            
            const y = useTransform(
              scrollYProgress, 
              [0 + delayOffset, 0.4 + delayOffset], 
              [0, -100]
            );

            const opacity = useTransform(
              scrollYProgress, 
              [0 + delayOffset, 0.35 + delayOffset], 
              [1, 0]
            );

            const rotateX = useTransform(
              scrollYProgress, 
              [0 + delayOffset, 0.4 + delayOffset], 
              [0, 90]
            );

            return (
              <motion.span
                key={index}
                style={{ y, opacity, rotateX }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.025,
                  ease: "easeOut",
                }}
                className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A2A] inline-block transform-gpu ${
                  letter === " " ? "mr-2" : ""
                }`}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>

        {/* Haupt-Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight mb-8">
          <span className="block text-[#7A7A7A] drop-shadow-md">
            GRENZEN SIND NUR
          </span>
          <span className="block text-[#FF6A2A] relative inline-block animate-pulse-glow">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2A] via-[#FF8A50] to-[#FF6A2A]/80 drop-shadow-[0_0_25px_rgba(255,106,42,0.8)]">
              EINE ILLUSION.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-[#F5F5F5]/80 text-sm sm:text-base font-light leading-relaxed mb-12">
          Erlebe High-End Equipment, maßgeschneiderte Trainingspläne und eine Community, die dich aufs nächste Level hebt. Jetzt Mitglied werden.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#probetraining"
            className="w-full sm:w-auto bg-[#FF6A2A] hover:bg-[#FF6A2A]/90 text-[#F5F5F5] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-[#FF6A2A]/30 hover:shadow-[#FF6A2A]/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Kostenloses Probetraining
          </a>
          <a
            href="#preise"
            className="w-full sm:w-auto bg-[#232323]/60 hover:bg-[#232323] text-[#F5F5F5] border border-[#7A7A7A]/40 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
          >
            Preise ansehen
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;