'use client';

import Image from 'next/image';
import type { ShowroomProduct } from '../types';

interface PsychedelicMarqueeProps {
  products: ShowroomProduct[];
}

export function PsychedelicMarquee({ products }: PsychedelicMarqueeProps) {
  const items = products.filter((p) => p.images && p.images.length > 0);
  if (items.length === 0) return null;

  // Duplicate for smooth seamless loop
  const loopProducts = [...items, ...items, ...items];

  const phrases = [
    'CASE MOOD',
    '★ ESTÉTICA JUVENIL ★',
    'DISEÑOS EXCLUSIVOS',
    '★ VIBRA PSICODÉLICA ★',
    'CALIDAD PREMIUM',
    '★ LOOKBOOK OFICIAL ★',
  ];
  const loopPhrases = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="relative w-full py-12 overflow-hidden select-none space-y-6">
      {/* Top Infinite Ribbon: Giant Phone Case Tiles */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-2">
        <div className="animate-marquee-left flex items-center gap-6">
          {loopProducts.map((p, i) => {
            const img = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            return (
              <div
                key={p.name + i}
                onClick={() => {
                  const el = document.getElementById(p.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative h-40 w-36 sm:h-52 sm:w-44 shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-yellow/20"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={img}
                    alt={p.displayName}
                    fill
                    sizes="200px"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 inset-x-2 rounded-xl bg-slate-950/80 backdrop-blur-md py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] font-black text-brand-yellow uppercase tracking-wider truncate px-1">
                    {p.displayName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Infinite Kinetic Typography Ribbon */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-3 bg-brand-bg-deep/80 border-y border-brand-yellow/20">
        <div className="animate-marquee-right flex items-center gap-8">
          {loopPhrases.map((phrase, i) => (
            <span
              key={phrase + i}
              className={`text-xl sm:text-2xl font-black uppercase tracking-widest whitespace-nowrap ${
                i % 2 === 0
                  ? 'text-brand-yellow drop-shadow-[0_0_15px_rgba(245,197,24,0.3)]'
                  : 'text-stroke-hollow text-white'
              }`}
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
