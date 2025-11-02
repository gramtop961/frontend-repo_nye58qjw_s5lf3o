import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            Crafting trust since 1995
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Ashapura Jewellers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
              Gold & Silver Craftsmanship
            </span>
          </h1>

          <p className="mt-4 text-lg text-white/80">
            Fine ornaments, coins, biscuits and vessels — meticulously designed in pure gold and silver. Discover timeless pieces for every occasion.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#collections" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-white/90 transition shadow">
              Explore Collections
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="hidden sm:flex items-center gap-6 text-white/80">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Hallmarked purity</span>
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4" /> Trusted pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
