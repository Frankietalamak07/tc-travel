import React from 'react';
import { Home, CheckCircle, ExternalLink, Building } from 'lucide-react';

export const BookingPromo: React.FC = () => {
  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-deep-ocean text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-teal-900/30 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-widest uppercase text-sm">
                <Home size={18} />
                <span>Trusted Real Estate Partner</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                Make the Philippines <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    Your Home.
                </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
                Whether you're looking for a vacation rental, a long-term condominium lease, or an investment property, we've partnered with the best in the business.
            </p>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-2 rounded-lg">
                        <CheckCircle className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">Verified Listings</h4>
                        <p className="text-slate-400 text-sm">Every property is personally vetted for quality and safety.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-2 rounded-lg">
                        <CheckCircle className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">Seamless Transactions</h4>
                        <p className="text-slate-400 text-sm">Professional brokers handling your paperwork end-to-end.</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a 
                    href="https://hippohomesph.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-deep-ocean font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] transform hover:-translate-y-1"
                >
                    Visit HippoHomes PH <ExternalLink size={20} />
                </a>
                <a 
                    href="https://hippohomesph.com/forRent/cblf8-pPL32-len/r4t3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-teal-500/50 hover:border-teal-400 text-teal-400 hover:text-teal-300 font-bold rounded-xl transition-all hover:bg-teal-500/10 transform hover:-translate-y-1"
                >
                    View Full Rent Units <Building size={20} />
                </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
                * Redirects to our trusted partner website for advance bookings and property inquiries.
            </p>
          </div>

          {/* 3D Visual Representation */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-4 shadow-2xl transform rotate-y-12 transition-transform duration-700 hover:rotate-y-0">
                {/* Simulated Interface of HippoHomes */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                    <img 
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 
                        alt="Luxury Home" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    
                    {/* Floating UI Card */}
                    <div className="absolute top-8 left-8 right-8 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-4 w-24 bg-slate-200 rounded"></div>
                            <div className="h-8 w-8 bg-teal-500 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 w-full bg-slate-100 rounded"></div>
                            <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                        </div>
                        <div className="mt-6 flex gap-4">
                             <div className="h-10 w-full bg-deep-ocean rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                Book Viewing
                             </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-6 right-6 bg-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                        HippoHomes PH
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};