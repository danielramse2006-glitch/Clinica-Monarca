
import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl font-black italic mb-6">TESTIMONIALES</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            Más de 5,000 pacientes han confiado en nosotros. Conoce sus experiencias y cómo hemos ayudado a mejorar su calidad de vida.
          </p>
          <div className="flex space-x-2">
            <div className="w-8 h-2 bg-neon rounded-full"></div>
            <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
            <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[2.5rem] relative">
            <span className="text-neon text-8xl absolute top-8 left-8 opacity-20 font-serif">“</span>
            <div className="relative z-10">
              <p className="text-xl text-zinc-300 italic mb-10 leading-relaxed">
                "Excelente servicio y atención personalizada. La rehabilitación post-lesión me ayudó a volver a mis actividades deportivas en tiempo récord."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg">Roberto Hernández</h4>
                  <p className="text-neon text-xs font-bold tracking-widest uppercase">Rehabilitación Deportiva</p>
                </div>
                <div className="flex text-neon">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle floating circle element */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-neon/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};
