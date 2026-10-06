'use client';

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
    <section className="relative w-full py-16 sm:py-24 bg-[#0E0911] overflow-hidden select-none border-b border-white/10 mask-fade-edges">
      {/* Row 1: Leftward Infinite Flow */}
      <div className="flex overflow-hidden py-3">
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
      <div className="flex overflow-hidden py-3">
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
