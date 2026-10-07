'use client';

import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

export function AestheticKineticManifesto() {
  const manifestoItemsRow1 = [
    'CASEMOOD',
    'FUNDAS DE DISEÑO',
    'PROTECCIÓN CONTRA CAÍDAS',
    'CALCE MILIMÉTRICO',
    'ESTILO Y PERSONALIDAD',
    'EDICIONES ESPECIALES',
    'CALIDAD PREMIUM',
  ];

  const manifestoItemsRow2 = [
    'TEXTURAS SUAVES',
    'COLORES VIBRANTES',
    'SHOCK ABSORBING',
    'DISEÑOS EXCLUSIVOS',
    'CASE MOOD PRO',
    'BORDES REFORZADOS',
    'CERO RAYONES',
  ];

  const row1 = [...manifestoItemsRow1, ...manifestoItemsRow1, ...manifestoItemsRow1];
  const row2 = [...manifestoItemsRow2, ...manifestoItemsRow2, ...manifestoItemsRow2];

  return (
    <section className="relative w-full py-20 sm:py-36 bg-[#0E0911] overflow-hidden select-none border-b border-white/10 mask-fade-edges">
      {/* ========================================================= */}
      {/* 🌟 GIGANTIC ATMOSPHERIC BACKGROUND POSTERS (NEW EDITORIAL) 🌟 */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute -top-16 -left-12 sm:left-12 z-0 w-64 sm:w-[480px] lg:w-[580px] aspect-[3/4] rounded-[52px] overflow-hidden border-2 border-white/15 bg-white/[0.04] backdrop-blur-xl -rotate-12 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-40 sm:opacity-65">
        <Image
          src="/lifestyle/lifestyle-11.jpg"
          alt="CaseMood Atmosphere Floral Pocket"
          fill
          sizes="(min-width: 1024px) 580px, 300px"
          className="object-cover filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute -bottom-16 -right-12 sm:right-12 z-0 w-64 sm:w-[480px] lg:w-[580px] aspect-[3/4] rounded-[52px] overflow-hidden border-2 border-white/15 bg-white/[0.04] backdrop-blur-xl rotate-12 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-40 sm:opacity-65">
        <Image
          src="/lifestyle/lifestyle-12.jpg"
          alt="CaseMood Atmosphere Silver Butterflies"
          fill
          sizes="(min-width: 1024px) 580px, 300px"
          className="object-cover filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Row 1: Leftward Infinite Flow */}
      <div className="relative z-10 flex overflow-hidden py-3">
        <div className="animate-marquee-left flex gap-8 sm:gap-14 items-center whitespace-nowrap">
          {row1.map((text, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-display text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-rose-400 uppercase tracking-tight opacity-85 hover:opacity-100 transition-opacity">
                {text}
              </span>
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-300 animate-spin-slow shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Flow */}
      <div className="relative z-10 flex overflow-hidden py-3">
        <div className="animate-marquee-right flex gap-8 sm:gap-14 items-center whitespace-nowrap">
          {row2.map((text, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-display text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-pink-300 uppercase tracking-tight opacity-85 hover:opacity-100 transition-opacity">
                {text}
              </span>
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
