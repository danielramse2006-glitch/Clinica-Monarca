
import React from 'react';

const stats = [
  { val: "+5,000", label: "PACIENTES ATENDIDOS" },
  { val: "98%", label: "SATISFACCIÓN" },
  { val: "10+", label: "AÑOS DE EXPERIENCIA" },
  { val: "2", label: "SUCURSALES" },
];

export const Stats: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black italic mb-4">CONÓCENOS</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Somos especialistas en fisioterapia y rehabilitación con más de 10 años de experiencia ayudando a nuestros pacientes a recuperar su calidad de vida.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl text-center group hover:border-neon transition-colors">
              <div className="text-5xl font-black text-neon mb-2 group-hover:scale-105 transition-transform">{s.val}</div>
              <div className="text-zinc-500 text-[10px] font-bold tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
               <h3 className="text-2xl font-bold flex items-center mb-6">
                 <span className="text-neon mr-4">🎗️</span> Nuestra Misión
               </h3>
               <p className="text-zinc-400 leading-relaxed italic">
                 Brindar atención de fisioterapia y rehabilitación de la más alta calidad, utilizando técnicas innovadoras y un enfoque personalizado para cada paciente. Nuestro objetivo es ayudarte a alcanzar tu máximo potencial físico.
               </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
               <h3 className="text-2xl font-bold flex items-center mb-6">
                 <span className="text-neon mr-4">👥</span> Nuestro Equipo
               </h3>
               <p className="text-zinc-400 leading-relaxed italic">
                 Contamos con un equipo de fisioterapeutas y quiroprácticos certificados, con amplia experiencia en rehabilitación deportiva, manejo del dolor y terapia manual especializada.
               </p>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="imagenes/instalaciones.jpg" 
              alt="Instalaciones" 
              className="rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-zinc-800 w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/clinic/800/600';
              }}
            />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-700">
               <p className="text-neon font-bold text-xs tracking-widest uppercase mb-1">Instalaciones</p>
               <p className="font-bold">Equipo de última generación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
