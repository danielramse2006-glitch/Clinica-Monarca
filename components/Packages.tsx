
import React from 'react';

const packs = [
  { icon: "🦴", title: "Ajuste Quiropráctico Completo", price: "$400" },
  { icon: "🧘", title: "Terapia Física", price: "$400" },
  { icon: "💆", title: "Masaje Descontracturante", price: "$600" },
  { icon: "👑", title: "Servicio Premium", price: "$800", rec: true },
];

export const Packages: React.FC = () => {
  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black italic mb-4">NUESTROS PAQUETES</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Toca para ver detalles de cada servicio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((p, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-3xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${p.rec ? 'bg-zinc-900/40 border-neon/50 shadow-[0_0_30px_rgba(223,255,0,0.05)]' : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'}`}
            >
              <div className="flex items-center space-x-6">
                <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform">{p.icon}</span>
                <div>
                  <h3 className="text-2xl font-black italic leading-tight">{p.title}</h3>
                  {p.rec && <span className="inline-block mt-2 bg-neon text-black text-[9px] font-black px-3 py-1 rounded uppercase">Recomendado</span>}
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-neon">{p.price}</div>
                <div className="text-zinc-600 text-[10px] font-bold mt-1">MXN</div>
                <div className="mt-4 text-zinc-500 group-hover:text-neon transition-colors">⌄</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
