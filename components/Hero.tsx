
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20me%20gustaría%20más%20información.";

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Logo gigante de fondo animado */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none p-10"
      >
        <img 
          src="imagenes/logo.jpg" 
          alt="Logo Background" 
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <motion.img 
            animate={{ 
              filter: ["drop-shadow(0 0 10px rgba(223,255,0,0.1))", "drop-shadow(0 0 30px rgba(223,255,0,0.4))", "drop-shadow(0 0 10px rgba(223,255,0,0.1))"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            src="imagenes/logo.jpg" 
            alt="Logo Central" 
            className="w-32 md:w-56 h-auto rounded-full" 
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-[10rem] font-black italic mb-6 tracking-tighter leading-[0.85] uppercase"
        >
          TU CUERPO. <br/><span className="text-neon">TU REINO.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 text-lg md:text-2xl mb-12 font-medium tracking-widest uppercase"
        >
          REHABILITACIÓN DE ÉLITE • RENDIMIENTO SUPREMO
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(223,255,0,0.5)] text-lg"
          >
            AGENDA TU SESIÓN
          </a>
          <button 
            onClick={() => document.getElementById('servicios')?.scrollIntoView({behavior: 'smooth'})}
            className="border-2 border-zinc-800 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:border-neon hover:bg-zinc-900 transition-all text-lg"
          >
            SERVICIOS
          </button>
        </motion.div>
      </div>

      {/* Elementos decorativos animados */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 text-neon/10 font-black text-[12rem] pointer-events-none"
      >+</motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 text-neon/10 font-black text-[12rem] pointer-events-none"
      >+</motion.div>
    </div>
  );
};
