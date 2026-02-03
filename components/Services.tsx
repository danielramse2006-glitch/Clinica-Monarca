
import React from 'react';

const services = [
  {
    icon: "💪",
    title: "FISIOTERAPIA AVANZADA",
    desc: "Tratamientos personalizados de rehabilitación con equipo de última generación.",
  },
  {
    icon: "⚡",
    title: "REHABILITACIÓN POST-LESIÓN",
    desc: "Recuperación completa con seguimiento especializado y terapias manuales.",
  },
  {
    icon: "🦴",
    title: "AJUSTE QUIROPRÁCTICO",
    desc: "Alineación vertebral profesional para alivio del dolor y mejor postura.",
  },
  {
    icon: "🧘",
    title: "MASAJE DESCONTRACTURANTE",
    desc: "Liberación de tensión muscular profunda con técnicas especializadas.",
  },
  {
    icon: "🔌",
    title: "ELECTROESTIMULACIÓN TENS",
    desc: "Tecnología TENS para recuperación muscular y alivio del dolor.",
  },
  {
    icon: "👑",
    title: "SERVICIO PREMIUM",
    desc: "Experiencia completa: ajuste + sillón Recovery + suspensión vertical.",
    highlight: true
  }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-6xl font-black mb-8 italic">SERVICIOS</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Contamos con los tratamientos más avanzados en fisioterapia y rehabilitación. 
            Nuestro equipo de especialistas está comprometido con tu recuperación y bienestar.
          </p>
          <div className="flex gap-4">
             <div className="flex-1 glass-card p-4 rounded-xl flex items-center space-x-3">
               <span className="text-neon">🦴</span>
               <span className="text-xs font-bold text-neon uppercase">Rehabilitación CIMA</span>
             </div>
             <div className="flex-1 glass-card p-4 rounded-xl flex items-center space-x-3">
               <span className="text-neon">👑</span>
               <span className="text-xs font-bold text-neon uppercase">Ajuste Quiropráctico</span>
             </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl transition-all duration-300 group ${s.highlight ? 'bg-neon/10 border border-neon shadow-[0_0_20px_rgba(223,255,0,0.1)]' : 'bg-zinc-900/50 border border-zinc-800 hover:border-neon/40'}`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              {s.highlight && <button className="mt-6 bg-neon text-black text-[10px] font-black px-4 py-1 rounded uppercase">Premium</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
