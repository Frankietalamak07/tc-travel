import React from 'react';
import { Target, Heart, Globe, Map } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-deep-ocean overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1482164338250-480bd45c7423?q=80&w=2576&auto=format&fit=crop" 
          alt="Philippines Scenery" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-deep-ocean/95 to-deep-ocean"></div>
        {/* Abstract Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f5f5dc 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-beige/10 border border-sand-beige/20 text-sand-beige text-xs font-bold uppercase tracking-widest mb-6">
                    <Map size={12} />
                    <span>Who We Are</span>
                </div>

                <h2 className="text-sand-beige font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Bridging the World to the <br/>
                    <span className="text-tropical-teal">Pearl of the Orient</span>
                </h2>
                
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                    <p>
                        <span className="text-white font-semibold">TC Travel Asia</span> was born from a simple yet profound desire: to showcase the unparalleled beauty of the Philippines to the world. 
                        We believe that travel is not just about visiting a place; it's about connecting with its soul, its people, and its stories.
                    </p>
                    <p>
                        Our mission is to provide an authentic, premium, and seamless travel experience. From AI-curated itineraries that uncover hidden gems 
                        to our trusted partnership with <strong className="text-sand-beige">HippoHomes PH</strong> for secure accommodations, we are your dedicated companion in exploring these 7,641 islands.
                    </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                    <div className="h-px bg-slate-700 flex-1"></div>
                    <span className="font-serif italic text-slate-500">Mabuhay!</span>
                </div>
            </div>
            
            {/* Features Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <Globe className="text-sand-beige w-10 h-10 mb-6" />
                    <h3 className="text-white font-bold text-xl mb-3">Global Reach</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Welcoming travelers from every corner of the globe to our pristine shores with world-class service.</p>
                 </div>
                 
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 md:translate-y-8">
                    <Heart className="text-sand-beige w-10 h-10 mb-6" />
                    <h3 className="text-white font-bold text-xl mb-3">Local Heart</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Deeply rooted in Filipino hospitality, ensuring every interaction feels like coming home.</p>
                 </div>
                 
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <Target className="text-sand-beige w-10 h-10 mb-6" />
                    <h3 className="text-white font-bold text-xl mb-3">Curated Quality</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">We rigorously vet every destination and property to ensure your safety and satisfaction.</p>
                 </div>

                 {/* Decorative Image Card */}
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl md:translate-y-8 h-64 md:h-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1548291616-e55598ba9c12?q=80&w=800&auto=format&fit=crop" 
                        alt="Filipino Culture" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent flex items-end p-6">
                        <span className="text-white font-serif italic text-lg">"It's more fun in the Philippines"</span>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};