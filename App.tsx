
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { TeamEquipment } from './components/TeamEquipment';
import { Testimonials } from './components/Testimonials';
import { Packages } from './components/Packages';
import { Locations } from './components/Locations';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PageTemplate } from './components/PageTemplate';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'inicio' | 'fisioterapia' | 'rehabilitacion' | 'quiropractica' | 'masajes'>('inicio');

  const renderContent = () => {
    switch (currentPage) {
      case 'fisioterapia':
        return <PageTemplate name="Fisioterapia" onBack={() => setCurrentPage('inicio')} />;
      case 'rehabilitacion':
        return <PageTemplate name="Rehabilitación" onBack={() => setCurrentPage('inicio')} />;
      case 'quiropractica':
        return <PageTemplate name="Quiropráctica" onBack={() => setCurrentPage('inicio')} />;
      case 'masajes':
        return <PageTemplate name="Masajes" onBack={() => setCurrentPage('inicio')} />;
      default:
        return (
          <>
            <section id="inicio">
              <Hero />
            </section>
            <section id="servicios">
              <Services />
            </section>
            <section id="conocenos">
              <Stats />
            </section>
            <TeamEquipment />
            <section id="reseñas">
              <Testimonials />
            </section>
            <Packages />
            <section id="contactos">
              <Locations />
            </section>
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
