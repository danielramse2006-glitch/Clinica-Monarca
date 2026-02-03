
import React from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('inicio')}
        >
          <img src="imagenes/logo.jpg" alt="Logo Monarca" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-neon font-black text-xl tracking-tighter">MONARCA</span>
            <span className="text-zinc-500 text-[8px] tracking-[0.2em] font-bold">FISIO & REHAB</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest">
          <button 
            onClick={() => onNavigate('fisioterapia')} 
            className={`${currentPage === 'fisioterapia' ? 'text-neon' : 'text-zinc-400'} hover:text-neon transition-colors`}
          >
            Fisioterapia
          </button>
          <button 
            onClick={() => onNavigate('rehabilitacion')} 
            className={`${currentPage === 'rehabilitacion' ? 'text-neon' : 'text-zinc-400'} hover:text-neon transition-colors`}
          >
            Rehabilitación
          </button>
          <button 
            onClick={() => onNavigate('quiropractica')} 
            className={`${currentPage === 'quiropractica' ? 'text-neon' : 'text-zinc-400'} hover:text-neon transition-colors`}
          >
            Quiropráctica
          </button>
          <button 
            onClick={() => onNavigate('masajes')} 
            className={`${currentPage === 'masajes' ? 'text-neon' : 'text-zinc-400'} hover:text-neon transition-colors`}
          >
            Masajes
          </button>
          <a 
            href="#agendar" 
            className="bg-neon text-black px-5 py-2 rounded-sm hover:scale-105 transition-transform"
          >
            Fomenpe
          </a>
        </div>
      </div>
    </nav>
  );
};
