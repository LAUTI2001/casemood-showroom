'use client';

import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface LiquidCoverflowStreamProps {
  products: ShowroomProduct[];
}

export function LiquidCoverflowStream({ products }: LiquidCoverflowStreamProps) {
  const items = products.slice(0, 10);
  if (items.length === 0) return null;

  // Duplicate arrays for infinite loop
  const topStream = [...items, ...items];
  const bottomStream = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <section id="carrusel-doble" className="relative w-full py-24 sm:py-36 bg-[#160F1A] overflow-hidden select-none border-b border-white/10 mask-fade-edges">
      {/* Background Liquid Plasma Glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[500px] bg-radial from-pink-600/20 via-rose-950/20 to-transparent blur-[140px] animate-blob-1" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-radial from-amber-500/20 via-orange-950/20 to-transparent blur-[140px] animate-blob-2" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-20 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-2xl shadow-xl mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Lookbook Líquido · Parallel Streams</span>
        </div>

        <h2 className="font-display text-4xl sm:text-7xl font-black text-white tracking-tight leading-tight">
          Colección en <span className="animate-pastel-text italic font-normal">Movimiento</span>
        </h2>

        <p className="mt-2 text-xs sm:text-base text-slate-300 max-w-lg font-medium">
          Dos corrientes paralelas de diseño que se cruzan continuamente en el espacio.
        </p>
      </div>

      {/* Stream 1: Leftward Infinite Flow */}
      <div className="flex overflow-hidden py-4">
        <div className="animate-marquee-left flex gap-6 sm:gap-8 items-center">
          {topStream.map((p, idx) => {
            const imgSrc = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(p.name);

            return (
              <a
                key={`top-${p.id}-${idx}`}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-between rounded-[32px] sm:rounded-[38px] border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-5 sm:p-7 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-pink-400 hover:scale-110 hover:z-30 w-56 sm:w-68 shrink-0 cursor-pointer"
              >
                {/* Case Render */}
                <div className="relative aspect-[3/4] h-48 w-36 sm:h-64 sm:w-48 overflow-hidden rounded-2xl bg-white/[0.06] p-4 flex items-center justify-center border border-white/10 my-2">
                  <Image
                    src={optimizeCloudinaryUrl(imgSrc, 400)}
                    alt={p.displayName}
                    fill
                    className="object-contain p-1 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Case Info */}
                <div className="w-full text-center space-y-1 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block">
                    {p.category}
                  </span>
                  <span className="font-display text-base sm:text-lg font-black text-white uppercase tracking-tight block group-hover:text-pink-300 transition-colors">
                    {p.displayName}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver en Tienda</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Stream 2: Rightward Infinite Flow */}
      <div className="flex overflow-hidden py-4">
        <div className="animate-marquee-right flex gap-6 sm:gap-8 items-center">
          {bottomStream.map((p, idx) => {
            const imgSrc = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(p.name);

            return (
              <a
                key={`bot-${p.id}-${idx}`}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-between rounded-[32px] sm:rounded-[38px] border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-5 sm:p-7 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-amber-400 hover:scale-110 hover:z-30 w-56 sm:w-68 shrink-0 cursor-pointer"
              >
                {/* Case Render */}
                <div className="relative aspect-[3/4] h-48 w-36 sm:h-64 sm:w-48 overflow-hidden rounded-2xl bg-white/[0.06] p-4 flex items-center justify-center border border-white/10 my-2">
                  <Image
                    src={optimizeCloudinaryUrl(imgSrc, 400)}
                    alt={p.displayName}
                    fill
                    className="object-contain p-1 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Case Info */}
                <div className="w-full text-center space-y-1 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 block">
                    {p.category}
                  </span>
                  <span className="font-display text-base sm:text-lg font-black text-white uppercase tracking-tight block group-hover:text-amber-300 transition-colors">
                    {p.displayName}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver en Tienda</span>
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
