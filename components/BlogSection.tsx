import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { MapPin, ArrowUpRight, X, Calendar, User, ChevronLeft } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Surfing the Cloud 9',
    location: 'Siargao',
    excerpt: 'Discover why Siargao is the surfing capital of the Philippines and a haven for digital nomads.',
    imageUrl: 'https://images.unsplash.com/photo-1534954784422-04c30c330df7?q=80&w=800&auto=format&fit=crop',
    tags: ['Adventure', 'Surfing'],
    author: 'Elena Cruz',
    publicationDate: 'October 12, 2024',
    content: `
      <p>Siargao has long been known as the surfing capital of the Philippines, but it has recently evolved into much more than just a destination for wave riders. The famous Cloud 9 break offers some of the most consistent thick, hollow tubes in the world.</p>
      
      <h3>The Vibe</h3>
      <p>Beyond the surf, the island vibe is unmatched. Digital nomads have flocked here for the reliable connectivity in cafes, the healthy smoothie bowls, and the community of like-minded creatives. It is a place where time seems to slow down.</p>
      
      <h3>Best Time to Visit</h3>
      <p>For surfers, the peak swell season is from September to November. However, for general beach-goers, the dry season from March to September offers sunny days perfect for island hopping to Guyam, Daku, and Naked Island.</p>
      
      <h3>Where to Eat</h3>
      <p>Don't miss out on Kermit for the best pizza in town, or Shaka for their famous power bowls. The nightlife comes alive on General Luna's main strip, rotating between different bars each night of the week.</p>
    `
  },
  {
    id: '2',
    title: 'Hidden Lagoons of El Nido',
    location: 'Palawan',
    excerpt: 'A guide to the secret beaches and limestone karsts that make El Nido a world wonder.',
    imageUrl: 'https://images.unsplash.com/photo-1552550130-9b360a0058be?q=80&w=800&auto=format&fit=crop',
    tags: ['Nature', 'Luxury'],
    author: 'Marco Santos',
    publicationDate: 'November 05, 2024',
    content: `
      <p>El Nido, Palawan, consistently ranks as one of the most beautiful island destinations in the world. Its dramatic limestone cliffs towering over crystal-clear turquoise waters create a landscape that feels almost prehistoric.</p>
      
      <h3>Big Lagoon vs. Small Lagoon</h3>
      <p>While both are iconic, the Big Lagoon offers a grand, sweeping entrance that takes your breath away. You can kayak through the emerald waters surrounded by massive karst formations. The Small Lagoon, accessible through a small opening, offers a more intimate and quiet experience.</p>
      
      <h3>Secret Beaches</h3>
      <p>Ask your boatman to take you to Secret Beach. To enter, you must swim through a small hole in the rock wall. Inside, you'll find a pristine strip of sand completely enclosed by cliffs—a true hidden paradise.</p>
      
      <p>For a luxury experience, consider staying at one of the private island resorts which offer exclusive access to private coves and impeccable service.</p>
    `
  },
  {
    id: '3',
    title: 'Chocolate Hills Mystery',
    location: 'Bohol',
    excerpt: 'Exploring the geological masterpiece of Bohol and the tiny Tarsiers.',
    imageUrl: 'https://images.unsplash.com/photo-1590494165203-d2d0963a75f8?q=80&w=800&auto=format&fit=crop',
    tags: ['Hiking', 'History'],
    author: 'Sarah Jenkins',
    publicationDate: 'December 10, 2024',
    content: `
      <p>Bohol offers a unique mix of nature and history. The Chocolate Hills are a geological mystery comprising over 1,260 conical hills that turn brown during the dry season, resembling chocolate kisses.</p>
      
      <h3>The Tarsiers</h3>
      <p>Bohol is also home to the Philippine Tarsier, one of the world's smallest primates. Visiting the Tarsier Sanctuary ensures you see these delicate creatures in a protected environment without disturbing their natural habitat.</p>
      
      <h3>River Cruise</h3>
      <p>No trip to Bohol is complete without the Loboc River Cruise. Enjoy a buffet lunch of local Filipino delicacies while floating down the serene green river, serenaded by local musicians. It's a relaxing break from the hiking and exploration.</p>
      
      <p>End your day at Alona Beach in Panglao for a stunning sunset and fresh seafood dinner by the shore.</p>
    `
  },
   {
    id: '4',
    title: 'Urban Jungle: BGC',
    location: 'Metro Manila',
    excerpt: 'The modern face of Manila. High-end dining, street art, and nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1518552683074-bb1f592c7325?q=80&w=800&auto=format&fit=crop',
    tags: ['City', 'Lifestyle'],
    author: 'Frank Joven',
    publicationDate: 'January 15, 2025',
    content: `
      <p>Bonifacio Global City (BGC) represents the modern, cosmopolitan face of the Philippines. It is a walkable city filled with vibrant street art, high-end shopping, and a culinary scene that rivals any major global metropolis.</p>
      
      <h3>Art & Culture</h3>
      <p>BGC is an open-air museum. Walk around High Street and the surrounding blocks to discover massive murals by international and local artists. The Mind Museum offers a world-class science experience perfect for families.</p>
      
      <h3>Dining & Nightlife</h3>
      <p>From the speakeasies like The Back Room to the rooftop bars offering panoramic views of the skyline, BGC's nightlife is electric. For foodies, the choices range from authentic Filipino fusion to Michelin-star quality international cuisine.</p>
      
      <p>It is the perfect base for exploring Metro Manila, offering a clean, safe, and exciting environment with easy access to the airport and other business districts.</p>
    `
  },
];

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-ocean mb-4">Journals from Paradise</h2>
            <p className="text-slate-600 text-lg">Curated stories from the archipelago. Click on a card to read the full story.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="group relative h-[450px] perspective-1000 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                    {/* Card Inner - The Flipping/3D Element */}
                    <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:-translate-y-4 group-hover:rotate-x-2">
                        
                        {/* Image Layer */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                             <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                             />
                        </div>

                        {/* Content Layer */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-z-10">
                            <div className="flex gap-2 mb-3">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-teal-300 transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center text-slate-300 text-sm mb-4">
                                <MapPin size={14} className="mr-1" /> {post.location}
                            </div>
                            
                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-300">
                                <p className="text-slate-200 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 translate-y-4 group-hover:translate-y-0">
                                Read Article <ArrowUpRight size={16} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Blog Post Detail View Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-white animate-in slide-in-from-bottom-10 duration-300">
           {/* Close Button */}
           <button 
             onClick={() => setSelectedPost(null)}
             className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full hover:bg-white/20 text-white transition-colors shadow-lg"
             aria-label="Close modal"
           >
             <X size={24} />
           </button>

           {/* Hero Image */}
           <div className="relative h-[50vh] w-full">
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-deep-ocean/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                <div className="container mx-auto max-w-4xl">
                   <div className="flex gap-2 mb-6">
                      {selectedPost.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-tropical-teal px-3 py-1 rounded-full shadow-lg">
                              {tag}
                          </span>
                      ))}
                   </div>
                   <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight drop-shadow-lg">
                     {selectedPost.title}
                   </h1>
                   
                   <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-200 font-medium">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <User size={16} className="text-tropical-teal" /> <span>{selectedPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <Calendar size={16} className="text-tropical-teal" /> <span>{selectedPost.publicationDate}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <MapPin size={16} className="text-tropical-teal" /> <span>{selectedPost.location}</span>
                      </div>
                   </div>
                </div>
              </div>
           </div>

           {/* Content */}
           <div className="container mx-auto px-6 py-16">
              <div className="max-w-3xl mx-auto">
                 <div 
                    className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-deep-ocean prose-a:text-tropical-teal hover:prose-a:text-teal-600 prose-img:rounded-xl prose-strong:text-deep-ocean first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-tropical-teal leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                 />
                 
                 <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="group flex items-center gap-2 text-slate-500 hover:text-tropical-teal font-bold transition-colors"
                    >
                      <span className="p-2 rounded-full bg-slate-100 group-hover:bg-teal-50 transition-colors">
                        <ChevronLeft size={20} />
                      </span>
                      Back to Journals
                    </button>
                    
                    <div className="text-slate-400 text-sm italic">
                        Explore more of the Philippines
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};