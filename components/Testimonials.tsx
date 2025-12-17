import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'Sydney, Australia',
    quote: "The AI planner suggested a hidden lagoon in El Nido that wasn't on any other blog. It was the absolute highlight of our trip! Highly recommend using the planner.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Mark & David',
    location: 'London, UK',
    quote: "Booking our month-long stay in BGC through the HippoHomes integration was seamless. We felt safe and secure the entire time.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    quote: "A visual masterpiece of a website that actually delivers. The Manila nightlife recommendations were spot on for New Year's Eve. Can't wait to return!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
                backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        ></div>

        {/* Soft Color Blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-tropical-teal/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse duration-[5000ms]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply"></div>
        
        {/* Abstract Topographic Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] text-deep-ocean" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 Q 25 50 50 75 T 100 0 V 100 H 0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-ocean mb-4">What Our Travelers Say</h2>
          <div className="h-1 w-24 bg-tropical-teal mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Real stories from explorers who discovered the magic of the Philippines with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
                key={testimonial.id} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-teal-50 transition-colors duration-300">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                   <div className="relative">
                        <div className="absolute inset-0 bg-tropical-teal rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10"
                        />
                   </div>
                   <div>
                        <h4 className="font-bold text-deep-ocean text-lg">{testimonial.name}</h4>
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider block">{testimonial.location}</span>
                        <div className="flex text-yellow-400 gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                   </div>
                </div>
                
                <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};