
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex items-center space-x-6">
            <img src="imagenes/logo.jpg" alt="Logo Monarca" className="h-16 w-16 rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="flex flex-col leading-none">
              <span className="text-neon font-black text-3xl tracking-tighter italic">MONARCA</span>
              <span className="text-zinc-600 text-[10px] tracking-[0.3em] font-bold uppercase">Tu Cuerpo. Tu Reino.</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 text-zinc-500">
            <a href="https://wa.me/528991259003" className="hover:text-neon transition-colors text-xs font-black uppercase tracking-widest">WhatsApp</a>
            <a href="#" className="hover:text-neon transition-colors text-xs font-black uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-neon transition-colors text-xs font-black uppercase tracking-widest">Facebook</a>
            <a href="#" className="hover:text-neon transition-colors text-xs font-black uppercase tracking-widest">TikTok</a>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-zinc-800 text-[10px] font-black tracking-widest uppercase">
            © 2026 MONARCA FISIO & REHAB. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-neon/20 text-[10px] font-black tracking-widest uppercase italic">
            Diseñado para la Realeza del Fitness
          </p>
        </div>
      </div>
    </footer>
  );
};
