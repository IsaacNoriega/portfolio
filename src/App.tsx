import React from 'react';
import { BackgroundGlow } from './components/ui/BackgroundGlow';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-surface-base text-slate-200 font-sans antialiased selection:bg-brand-500/30 selection:text-white min-h-screen relative overflow-x-hidden">
      {/* Dynamic Ambient Background Animation */}
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 md:pt-32">
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
