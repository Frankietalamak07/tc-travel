import React from 'react';
import { Section } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
      {/* Background with Parallax Feel (via simple fixed positioning often used for this effect) */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-fixed transform scale-105"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2574&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/90 via-deep-ocean/40 to-transparent"></div>
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full animate-bounce duration-[3000ms] hidden md:block"></div>
      <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-tropical-teal/20 backdrop-blur-md rounded-full animate-pulse duration-[4000ms] hidden md:block"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="md:w-2/3 lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium animate-fade-in-up">
                <MapPin size={16} className="text-tropical-teal" />
                <span>Discover the Pearl of the Orient</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
                Unveil the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300 relative inline-block">
                    Philippines
                    {/* Pseudo-3D underline */}
                    <svg className="absolute w-full h-3 bottom-0 left-0 text-teal-500/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl backdrop-blur-sm">
                From the limestone cliffs of El Nido to the surfing waves of Siargao. 
                Experience a modern journey through 7,000+ islands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                    onClick={onStart}
                    className="group relative px-8 py-4 bg-white text-deep-ocean font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-1"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white group-hover:scale-105 transition-transform"></div>
                    <span className="relative flex items-center gap-2">
                        Start Exploration <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
                
                <button 
                    onClick={() => {
                        const el = document.getElementById(Section.BOOKING);
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                    Find a Home
                </button>
            </div>
        </div>
      </div>

      {/* 3D Floating Card (Visual flair on desktop) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block w-[600px] h-[700px] pointer-events-none">
          <div className="relative w-full h-full perspective-1000">
             <img 
                src="https://images.unsplash.com/photo-1531168556467-805ce7d04eda?q=80&w=1000&auto=format&fit=crop" 
                alt="Palawan"
                className="w-[400px] h-[550px] object-cover rounded-3xl shadow-2xl transform -rotate-y-12 rotate-z-6 border-8 border-white/20 ml-20"
             />
             <div className="absolute -bottom-10 left-0 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl transform rotate-y-12 max-w-xs">
                <h3 className="text-xl font-serif font-bold text-deep-ocean">Palawan</h3>
                <p className="text-sm text-slate-600 mt-2">Rated #1 Island in the World multiple times. A slice of heaven.</p>
             </div>
          </div>
      </div>
    </div>
  );
};
