'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface FloatingArtisanCollageProps {
  products: ShowroomProduct[];
}

export function FloatingArtisanCollage({ products }: FloatingArtisanCollageProps) {
  // Show 15 fundas for extensive variety
  const displayItems = products.slice(0, 15);
  const [selectedProduct, setSelectedProduct] = useState<ShowroomProduct | null>(null);

  // Artistic organic styling variations
  const cardThemes = [
    { bg: 'from-pink-500/20 via-rose-950/30 to-transparent', border: 'hover:border-pink-400', glow: 'bg-pink-500/30', rotate: '-rotate-2 sm:-rotate-3', badge: 'text-pink-300 bg-pink-500/15 border-pink-400/30' },
    { bg: 'from-amber-500/20 via-yellow-950/30 to-transparent', border: 'hover:border-amber-400', glow: 'bg-amber-500/30', rotate: 'rotate-2 sm:rotate-4', badge: 'text-amber-300 bg-amber-500/15 border-amber-400/30' },
    { bg: 'from-emerald-500/20 via-teal-950/30 to-transparent', border: 'hover:border-emerald-400', glow: 'bg-emerald-500/30', rotate: '-rotate-2 sm:-rotate-4', badge: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30' },
    { bg: 'from-purple-500/20 via-fuchsia-950/30 to-transparent', border: 'hover:border-purple-400', glow: 'bg-purple-500/30', rotate: 'rotate-2 sm:rotate-3', badge: 'text-purple-300 bg-purple-500/15 border-purple-400/30' },
    { bg: 'from-orange-500/20 via-amber-950/30 to-transparent', border: 'hover:border-orange-400', glow: 'bg-orange-500/30', rotate: '-rotate-3 sm:-rotate-4', badge: 'text-orange-300 bg-orange-500/15 border-orange-400/30' },
    { bg: 'from-cyan-500/20 via-blue-950/30 to-transparent', border: 'hover:border-cyan-400', glow: 'bg-cyan-500/30', rotate: 'rotate-2 sm:rotate-4', badge: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30' },
  ];

  return (
    <section id="mural" className="relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#120D15] overflow-hidden select-none border-b border-white/10">
      {/* Dynamic Background Fluid Orbs */}
      <div className="pointer-events-none absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full bg-pink-500/15 blur-[160px] animate-blob-1" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[700px] h-[700px] rounded-full bg-amber-400/15 blur-[180px] animate-blob-2" />

      {/* ========================================================= */}
      {/* 🌟 GIGANTIC ATMOSPHERIC BACKGROUND LIFESTYLE POSTERS 🌟 */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute top-12 -left-20 sm:-left-10 lg:left-2 z-0 w-64 sm:w-[480px] lg:w-[620px] aspect-[3/4] rounded-[52px] overflow-hidden border-2 border-white/15 bg-white/[0.04] backdrop-blur-xl -rotate-12 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-40 sm:opacity-65 lg:opacity-75">
        <Image
          src="/lifestyle/lifestyle-2.jpg"
          alt="Atmosphere Parisienne"
          fill
          sizes="(min-width: 1024px) 620px, 320px"
          className="object-cover filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute top-1/2 -right-20 sm:-right-10 lg:right-2 z-0 w-64 sm:w-[480px] lg:w-[620px] aspect-[3/4] rounded-[52px] overflow-hidden border-2 border-white/15 bg-white/[0.04] backdrop-blur-xl rotate-12 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-40 sm:opacity-65 lg:opacity-75">
        <Image
          src="/lifestyle/lifestyle-7.jpg"
          alt="Atmosphere Burgundy Stars"
          fill
          sizes="(min-width: 1024px) 620px, 320px"
          className="object-cover filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute bottom-20 -left-16 sm:left-4 z-0 w-60 sm:w-[420px] lg:w-[540px] aspect-[3/4] rounded-[48px] overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-md rotate-6 shadow-2xl opacity-35 sm:opacity-60">
        <Image
          src="/lifestyle/lifestyle-13.jpg"
          alt="Atmosphere Great Wave Desk"
          fill
          sizes="(min-width: 1024px) 540px, 300px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Giant Faded Artistic Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <span className="font-display text-[22vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          CASEMOOD
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-5 py-1.5 text-xs font-black uppercase tracking-wider text-pink-300 backdrop-blur-2xl mb-4 shadow-xl">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Colección Destacada · Diseños Exclusivos ({displayItems.length} Modelos)</span>
          </div>

          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
            Elegí tu <span className="animate-pastel-text italic font-normal">Estilo</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-lg font-medium">
            Fundas con personalidad propia, calce milimétrico y protección reforzada contra golpes.
          </p>
        </div>

        {/* Asymmetrical Floating Bento Collage with Weaved Lifestyle Atmosphere Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          {displayItems.map((product, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

            // Insert large lifestyle lookbook panels inside the grid flow
            const lifestyleInterleave =
              idx === 2
                ? { src: '/lifestyle/lifestyle-3.jpg', alt: 'Beach Sunset Shell Lookbook' }
                : idx === 7
                ? { src: '/lifestyle/lifestyle-8.jpg', alt: 'Summer Stripes Seaside' }
                : null;

            return (
              <div key={product.id + idx} className="contents">
                <div
                  onClick={() => setSelectedProduct(product)}
                  className={`group relative overflow-hidden rounded-[38px] sm:rounded-[48px] bg-gradient-to-b ${theme.bg} p-6 sm:p-8 border border-white/15 backdrop-blur-2xl shadow-2xl transition-all duration-700 hover:scale-105 hover:z-30 cursor-pointer ${theme.border} ${theme.rotate}`}
                >
                  {/* Chromatic Hover Halo */}
                  <div className={`pointer-events-none absolute -inset-10 rounded-full ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />

                  {/* Top Badge & Number */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <span className={`inline-block text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border ${theme.badge}`}>
                      {product.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Floating Central Phone Case with Luxury Porcelain Frame */}
                  <div className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-[280px] mx-auto overflow-hidden rounded-[30px] bg-gradient-to-b from-[#FAF8F5] to-[#F1EDE5] p-5 flex items-center justify-center border-2 border-white/40 shadow-[0_15px_35px_rgba(0,0,0,0.4)] my-3 transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={optimizeCloudinaryUrl(imgSrc, 700)}
                      alt={product.displayName}
                      fill
                      sizes="(min-width: 1024px) 280px, 220px"
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Title & Action Trigger */}
                  <div className="relative z-10 space-y-2 text-center pt-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
                      {product.displayName}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                      {product.description}
                    </p>

                    <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-black text-pink-300 group-hover:text-amber-300 transition-colors">
                      <span>Ver detalles</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>

                {/* Dispersed Grand Lifestyle Photo Card inside the Flow */}
                {lifestyleInterleave && (
                  <div className="group relative overflow-hidden rounded-[38px] sm:rounded-[48px] bg-gradient-to-b from-purple-500/20 via-pink-950/20 to-transparent p-3 sm:p-4 border border-white/20 backdrop-blur-2xl shadow-2xl rotate-2 sm:rotate-3 transition-all duration-700 hover:scale-105 hover:border-white/40">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[30px] sm:rounded-[40px] bg-slate-950">
                      <Image
                        src={lifestyleInterleave.src}
                        alt={lifestyleInterleave.alt}
                        fill
                        sizes="(min-width: 1024px) 450px, 90vw"
                        className="object-cover filter contrast-105 transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Store Link Pill */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-300 via-pink-400 to-rose-400 px-9 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-2xl shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver Catálogo Completo en la Tienda Oficial</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-2xl select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-b from-[#201524] to-[#120D15] p-6 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 text-sm font-bold backdrop-blur-md"
            >
              ✕
            </button>

            <div className="relative aspect-[3/4] h-72 sm:h-96 w-full mx-auto my-4 rounded-3xl bg-[#FAF8F5] p-6 flex items-center justify-center overflow-hidden border border-white/20">
              <Image
                src={optimizeCloudinaryUrl(selectedProduct.images[0], 1200)}
                alt={selectedProduct.displayName}
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="inline-block rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-xs font-black uppercase text-amber-300">
                {selectedProduct.category}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {selectedProduct.displayName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="pt-4 flex justify-center">
                <a
                  href={selectedProduct.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 px-8 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-pink-500/20 hover:scale-105 transition-all"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Ver en Tienda Oficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
