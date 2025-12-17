import React from 'react';
import { Facebook, Instagram, Twitter, Plane } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-ocean text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Plane className="text-tropical-teal" />
                    <span className="text-white font-serif font-bold text-xl">TC Travel Asia</span>
                </div>
                <p className="max-w-xs text-sm">Exploring the 7,641 islands of the Philippines, one story at a time.</p>
                <a href="https://www.tctravel.asia" className="text-xs text-teal-500 hover:text-teal-400 mt-2 block">www.tctravel.asia</a>
            </div>

            <div className="flex gap-6">
                <a href="#" className="hover:text-tropical-teal transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-tropical-teal transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-tropical-teal transition-colors"><Twitter size={20} /></a>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs flex flex-col gap-2">
            <p>&copy; {new Date().getFullYear()} TC Travel Asia. All rights reserved.</p>
            <p className="text-slate-500">Website by <span className="text-slate-400 font-semibold">Frank Joven Gurdiel</span></p>
            <p>
                Property services provided by our partner <a href="https://hippohomesph.com" className="text-teal-500 hover:underline">HippoHomes PH</a>.
            </p>
        </div>
      </div>
    </footer>
  );
};