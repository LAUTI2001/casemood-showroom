'use client';

import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AestheticFloatingMosaicProps {
  products: ShowroomProduct[];
}

export function AestheticFloatingMosaic({ products }: AestheticFloatingMosaicProps) {
  // Use up to 10 aesthetic products for the floating wall
  const displayItems = products.slice(0, 10);
  if (displayItems.length < 4) return null;

  // Visual tilt angles and staggered offsets for the Pela-style floating mosaic
  const floatStyles = [
    { rotate: '-rotate-3 sm:-rotate-6', translate: 'translate-y-2 sm:translate-y-6', glow: 'from-amber-400/20' },
    { rotate: 'rotate-4 sm:rotate-6', translate: '-translate-y-3 sm:-translate-y-6', glow: 'from-rose-500/20' },
    { rotate: '-rotate-2 sm:-rotate-4', translate: 'translate-y-4 sm:translate-y-8', glow: 'from-teal-400/20' },
    { rotate: 'rotate-3 sm:rotate-5', translate: '-translate-y-2 sm:-translate-y-4', glow: 'from-purple-500/20' },
    { rotate: '-rotate-4 sm:-rotate-6', translate: 'translate-y-3 sm:translate-y-7', glow: 'from-orange-400/20' },
    { rotate: 'rotate-2 sm:rotate-4', translate: '-translate-y-4 sm:-translate-y-8', glow: 'from-pink-400/20' },
    { rotate: '-rotate-3 sm:-rotate-5', translate: 'translate-y-2 sm:translate-y-5', glow: 'from-blue-400/20' },
    { rotate: 'rotate-4 sm:rotate-6', translate: '-translate-y-3 sm:-translate-y-6', glow: 'from-emerald-400/20' },
    { rotate: '-rotate-2 sm:-rotate-3', translate: 'translate-y-4 sm:translate-y-7', glow: 'from-yellow-400/20' },
    { rotate: 'rotate-3 sm:rotate-5', translate: '-translate-y-2 sm:-translate-y-5', glow: 'from-fuchsia-400/20' },
  ];

  return (
    <section id="colecciones" className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] overflow-hidden select-none border-b border-white/10">
      {/* Dynamic Background Studio Radial */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-radial from-purple-900/15 via-pink-600/10 to-transparent blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-300 backdrop-blur-md mb-3 shadow-lg shadow-pink-500/10">
            <Sparkles className="h-3.5 w-3.5 text-pink-300" />
            <span>Mural de Estilos · Pela & Editorial Vibe</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Aesthetic <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent">Floating Wall</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-lg font-medium">
            Texturas, relieves 3D y paletas que marcan tendencia. Elegí la que mejor resuene con tu día.
          </p>
        </div>

        {/* Staggered Organic Floating Mosaic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center py-6 sm:py-10">
          {displayItems.map((product, idx) => {
            const config = floatStyles[idx % floatStyles.length];
            const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(product.name);

            return (
              <a
                key={product.id + idx}
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center transition-all duration-500 hover:z-30 hover:scale-110 ${config.rotate} ${config.translate}`}
              >
                {/* Floating Case Card */}
                <div className="relative aspect-[3/4] w-full max-w-[190px] sm:max-w-[220px] overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-b from-white/[0.08] to-transparent p-4 sm:p-5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-pink-500/20">
                  {/* Subtle Rim Highlight */}
                  <div className={`pointer-events-none absolute inset-0 bg-radial ${config.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                  <div className="relative h-full w-full">
                    <Image
                      src={optimizeCloudinaryUrl(imgSrc, 600)}
                      alt={product.displayName}
                      fill
                      sizes="(min-width: 1024px) 200px, 150px"
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Micro Tag Badge */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 border border-white/20 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-200 backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:border-amber-300 group-hover:text-amber-300 transition-all">
                    {product.displayName}
                  </div>
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver en Tienda</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-white/10 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Explorar Colección Completa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
