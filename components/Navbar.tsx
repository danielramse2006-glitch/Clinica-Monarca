
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20me%20gustaría%20agendar%20una%20cita.";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onNavigate('inicio')}
        >
          <img src="imagenes/logo.jpg" alt="Logo Monarca" className="h-12 w-auto object-contain rounded-full shadow-[0_0_15px_rgba(223,255,0,0.2)]" />
          <div className="flex flex-col leading-none">
            <span className="text-neon font-black text-xl tracking-tighter">MONARCA</span>
            <span className="text-zinc-500 text-[8px] tracking-[0.2em] font-bold">FISIO & REHAB</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest">
          {['fisioterapia', 'rehabilitacion', 'quiropractica', 'masajes'].map((page) => (
            <button 
              key={page}
              onClick={() => onNavigate(page)} 
              className={`${currentPage === page ? 'text-neon' : 'text-zinc-400'} hover:text-neon transition-colors relative group`}
            >
              {page}
              {currentPage === page && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon" />
              )}
            </button>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon text-black px-6 py-2 rounded-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(223,255,0,0.3)] font-black"
          >
            AGENDAR
          </a>
        </div>
      </div>
    </nav>
  );
};
