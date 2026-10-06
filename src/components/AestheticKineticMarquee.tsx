'use client';

import Image from 'next/image';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AestheticKineticMarqueeProps {
  products: ShowroomProduct[];
}

export function AestheticKineticMarquee({ products }: AestheticKineticMarqueeProps) {
  const items = products.slice(0, 10);
  if (items.length === 0) return null;

  // Duplicate arrays for seamless infinite marquee loop
  const marqueeItemsRow1 = [...items, ...items];
  const marqueeItemsRow2 = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#07090F] overflow-hidden select-none border-b border-white/10 mask-fade-edges">
      {/* Editorial Floating Badge */}
      <div className="flex justify-center mb-8 sm:mb-10 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-xl shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Lookbook Stream · Diseños en Movimiento</span>
        </div>
      </div>

      {/* Row 1: Leftward Ticker */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-left flex gap-5 sm:gap-7 items-center">
          {marqueeItemsRow1.map((p, idx) => {
            const imgSrc = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(p.name);

            return (
              <a
                key={`r1-${p.id}-${idx}`}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.08] hover:scale-105 shrink-0"
              >
                <div className="relative h-20 w-16 sm:h-24 sm:w-20 overflow-hidden rounded-2xl bg-white/10 p-1">
                  <Image
                    src={optimizeCloudinaryUrl(imgSrc, 300)}
                    alt={p.displayName}
                    fill
                    className="object-contain p-1 drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                    {p.category}
                  </span>
                  <span className="text-base sm:text-lg font-black text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
                    {p.displayName}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-0.5">
                    <span>Ver funda</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Row 2: Rightward Ticker */}
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee-right flex gap-5 sm:gap-7 items-center">
          {marqueeItemsRow2.map((p, idx) => {
            const imgSrc = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(p.name);

            return (
              <a
                key={`r2-${p.id}-${idx}`}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-pink-400/50 hover:bg-white/[0.08] hover:scale-105 shrink-0"
              >
                <div className="relative h-20 w-16 sm:h-24 sm:w-20 overflow-hidden rounded-2xl bg-white/10 p-1">
                  <Image
                    src={optimizeCloudinaryUrl(imgSrc, 300)}
                    alt={p.displayName}
                    fill
                    className="object-contain p-1 drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-400">
                    {p.category}
                  </span>
                  <span className="text-base sm:text-lg font-black text-white uppercase tracking-tight group-hover:text-pink-300 transition-colors">
                    {p.displayName}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-0.5">
                    <span>Ver funda</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
