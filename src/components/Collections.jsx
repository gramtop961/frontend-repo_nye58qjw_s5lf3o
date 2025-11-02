import React from 'react';
import { Gem, Coins, Shield } from 'lucide-react';

const categories = [
  {
    title: 'Ornaments',
    description: 'Necklaces, bangles, earrings and rings in traditional and contemporary designs.',
    materials: ['Gold', 'Silver'],
    accent: 'from-yellow-300 to-amber-500',
    icon: Gem,
    image:
      'https://images.unsplash.com/photo-1549887534-1541e9323caa?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Coins',
    description: 'Investment-grade coins with assured purity and hallmarking.',
    materials: ['Gold', 'Silver'],
    accent: 'from-yellow-200 to-yellow-400',
    icon: Coins,
    image:
      'https://images.unsplash.com/photo-1610395219791-0a4e6f7b5c87?q=80&w=1913&auto=format&fit=crop',
  },
  {
    title: 'Biscuits',
    description: 'Bullion bars and biscuits suitable for gifting and investment.',
    materials: ['Gold', 'Silver'],
    accent: 'from-amber-300 to-yellow-500',
    icon: Shield,
    image:
      'https://images.unsplash.com/photo-1666214280430-90539a1996ce?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Vessels',
    description: 'Premium silverware and gold-plated utensils for auspicious occasions.',
    materials: ['Silver', 'Gold'],
    accent: 'from-zinc-200 to-slate-300',
    icon: Gem,
    image:
      'https://images.unsplash.com/photo-1587183233594-5b5828f8c1d6?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.12),rgba(0,0,0,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Our Collections</h2>
          <p className="mt-2 text-white/70">Explore crafted pieces in pure gold and silver — designed for everyday elegance and special moments.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article key={cat.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0">
                  <img src={cat.image} alt={cat.title} className="h-full w-full object-cover opacity-20 group-hover:opacity-25 transition" />
                </div>
                <div className="relative p-6 flex flex-col h-full">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r ${cat.accent} text-black shadow`}> 
                    <Icon className="h-3.5 w-3.5" />
                    {cat.title}
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{cat.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{cat.description}</p>
                  <div className="mt-auto pt-4 flex gap-2">
                    {cat.materials.map((m) => (
                      <span key={m} className="text-xs rounded-full border border-white/15 px-2.5 py-1 text-white/80 bg-white/5 backdrop-blur">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
