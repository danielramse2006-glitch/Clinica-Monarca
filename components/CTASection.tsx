
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <div className="py-32 bg-black px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
         <svg width="400" height="400" viewBox="0 0 100 100">
            <path d="M50 5L65 35L95 50L65 65L50 95L35 65L5 50L35 35L50 5Z" fill="#DFFF00"/>
         </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-6 italic tracking-tighter">
          ¿LISTO PARA <span className="text-neon underline decoration-neon underline-offset-8">RECUPERARTE?</span>
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
          Agenda tu cita hoy y comienza tu camino hacia una mejor calidad de vida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-neon text-black px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-neon/20">
            AGENDAR AHORA
          </button>
          <button className="w-full sm:w-auto border-2 border-zinc-800 text-white px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-zinc-900 transition-colors">
            <span>📞</span>
            <span>LLAMAR</span>
          </button>
        </div>
      </div>
    </div>
  );
};
