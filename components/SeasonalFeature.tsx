import React from 'react';
import { Star, Calendar, MapPin, ExternalLink } from 'lucide-react';

export const SeasonalFeature: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900 text-white border-b border-white/10">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518552683074-bb1f592c7325?q=80&w=2670&auto=format&fit=crop"
          alt="Manila Night Background"
          className="w-full h-full object-cover opacity-20 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <Star size={12} fill="currentColor" />
              <span>Recommended for Holidays</span>
            </div>
            
            <div>
                <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-none mb-2">
                Metro <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 drop-shadow-lg">
                    Manila
                </span>
                </h2>
                <h3 className="text-2xl text-slate-300 font-light tracking-wide">
                Christmas & New Year Capital
                </h3>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg border-l-2 border-red-500/50 pl-6">
              Experience the world's longest Christmas season. From the dazzling Ayala Triangle Lights to the grand fireworks of SM Mall of Asia and the vibrant nightlife of BGC. 
              <br/><br/>
              Celebrate New Year's Eve in the Pearl of the Orient with world-class shopping, dining, and festivities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                    href="https://hippohomesph.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transform hover:-translate-y-1"
                >
                    Book Holiday Stay <ExternalLink size={18} />
                </a>
                <div className="flex items-center gap-4 text-sm text-slate-400 px-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-red-400" /> Dec - Jan '25
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-red-400" /> BGC & Makati
                    </div>
                </div>
            </div>
          </div>

          {/* 3D Image Composition */}
          <div className="lg:w-1/2 w-full perspective-1000 relative">
             {/* Decorative glowing orb */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[80px] pointer-events-none"></div>

             {/* Main Card */}
             <div className="group relative transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d cursor-pointer">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1518552683074-bb1f592c7325?q=80&w=2574&auto=format&fit=crop" 
                    alt="Manila Skyline Night - Festive Lights" 
                    className="w-full h-[500px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Elements on Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-z-20 text-center">
                     <p className="font-serif italic text-3xl text-white mb-2 drop-shadow-lg">"The City of Lights"</p>
                     <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Floating "Book Now" Badge - Pseudo 3D */}
                <div className="absolute -right-8 top-12 bg-white/95 backdrop-blur text-slate-900 p-5 rounded-2xl shadow-xl transform translate-z-30 rotate-6 group-hover:rotate-0 transition-all duration-500 border border-slate-200 text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Countdown to</span>
                    <span className="block text-3xl font-extrabold text-red-600 leading-none">2025</span>
                    <span className="block text-xs font-medium text-slate-400 mt-1">in Manila</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};