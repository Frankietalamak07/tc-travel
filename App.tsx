import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SeasonalFeature } from './components/SeasonalFeature';
import { BlogSection } from './components/BlogSection';
import { BookingPromo } from './components/BookingPromo';
import { Testimonials } from './components/Testimonials';
import { AIGuide } from './components/AIGuide';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const handleNavigation = (section: Section) => {
    setActiveSection(section);
    // Smooth scroll handling
    if (section === Section.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-tropical-teal selection:text-white overflow-x-hidden">
      <SEO 
        title="TC Travel Asia | Premium Philippines Travel & AI Planner"
        description="Experience the Philippines like never before. Use our AI travel planner for custom itineraries and discover trusted long-term stay options with HippoHomes PH."
        keywords="Philippines Travel, AI Travel Planner, HippoHomes PH, Boracay, Palawan, Siargao, Luxury Real Estate Philippines, Travel Blog, BGC Condo For Rent"
        image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
      />

      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main>
        <div id={Section.HOME}>
            <Hero onStart={() => handleNavigation(Section.BLOG)} />
        </div>
        
        {/* New Promotional Section for Holidays */}
        <SeasonalFeature />
        
        <div id={Section.BLOG}>
            <BlogSection />
        </div>

        <div id={Section.BOOKING}>
            <BookingPromo />
        </div>

        <Testimonials />

        <div id={Section.AI_GUIDE}>
            <AIGuide />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;