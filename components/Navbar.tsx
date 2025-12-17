import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { Menu, X, Plane } from 'lucide-react';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HOME, label: 'Explore' },
    { id: Section.BLOG, label: 'Blog' },
    { id: Section.AI_GUIDE, label: 'AI Planner' },
    { id: Section.BOOKING, label: 'Book Stays', isPrimary: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-lg border-white/20 shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate(Section.HOME)}
        >
          <div className="bg-gradient-to-tr from-tropical-teal to-blue-500 p-2 rounded-lg transform transition-transform group-hover:rotate-12">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-deep-ocean' : 'text-white'}`}>
            TC<span className="text-tropical-teal">Travel</span>.asia
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-semibold tracking-wide transition-all ${
                link.isPrimary
                  ? 'bg-tropical-teal hover:bg-teal-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-0.5'
                  : isScrolled
                  ? 'text-slate-600 hover:text-tropical-teal'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-deep-ocean w-8 h-8" />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-deep-ocean' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-lg font-medium py-3 border-b border-gray-100 last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors ${
                link.isPrimary ? 'text-tropical-teal font-bold' : 'text-slate-700'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};