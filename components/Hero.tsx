
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Logo gigante de fondo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 select-none pointer-events-none p-10">
        <img 
          src="imagenes/logo.jpg" 
          alt="Logo Background" 
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-10 flex justify-center">
          {/* Logo principal */}
          <img 
            src="imagenes/logo.jpg" 
            alt="Logo Central" 
            className="w-32 md:w-48 h-auto drop-shadow-[0_0_30px_rgba(223,255,0,0.3)]" 
          />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black italic mb-6 tracking-tighter leading-none">
          TU CUERPO. <br/><span className="text-neon">TU REINO.</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-2xl mb-12 font-medium tracking-tight">
          REHABILITACIÓN DE ÉLITE • RENDIMIENTO SUPREMO
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-neon text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(223,255,0,0.4)]">
            AGENDA TU SESIÓN
          </button>
          <button className="border-2 border-zinc-800 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:border-neon transition-colors">
            SERVICIOS
          </button>
        </div>
      </div>

      {/* Marcas de diseño minimalista */}
      <div className="absolute top-1/4 left-10 text-neon/20 font-black text-9xl">+</div>
      <div className="absolute bottom-1/4 right-10 text-neon/20 font-black text-9xl">+</div>
    </div>
  );
};
