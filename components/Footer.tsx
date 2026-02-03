
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center space-x-4">
          <img src="imagenes/logo.jpg" alt="Logo Monarca" className="h-10 opacity-80" />
          <div className="flex flex-col leading-tight">
            <span className="text-neon font-black text-xl tracking-tighter">MONARCA</span>
            <span className="text-zinc-600 text-[8px] tracking-[0.2em] font-semibold uppercase">Fisio & Rehab</span>
          </div>
        </div>

        <div className="flex items-center space-x-8 text-zinc-500">
          <a href="#" className="hover:text-neon transition-colors text-sm font-bold uppercase tracking-widest">Instagram</a>
          <a href="#" className="hover:text-neon transition-colors text-sm font-bold uppercase tracking-widest">Facebook</a>
          <a href="#" className="hover:text-neon transition-colors text-sm font-bold uppercase tracking-widest">WhatsApp</a>
        </div>

        <div className="text-zinc-800 text-[9px] font-black tracking-widest text-center md:text-right uppercase">
          © 2026 MONARCA FISIO & REHAB. <br/>TU CUERPO ES TU REINO.
        </div>
      </div>
    </footer>
  );
};
