import React from 'react';
import { ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 ring-2 ring-yellow-500/40 shadow-lg" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold tracking-wide uppercase text-sm">Ashapura</span>
              <span className="text-xs text-white/70 tracking-widest">JEWELLERS</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collections" className="text-white/80 hover:text-white transition">Collections</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+91-00000-00000" className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white text-sm">
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
            <a href="#visit" className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white text-sm">
              <MapPin className="h-4 w-4" />
              <span>Visit</span>
            </a>
            <button className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium hover:bg-white/90 transition shadow">
              <ShoppingBag className="h-4 w-4" />
              Browse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
