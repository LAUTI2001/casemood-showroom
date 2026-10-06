'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag, ZoomIn } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface PelaFloatingWallProps {
  products: ShowroomProduct[];
}

export function PelaFloatingWall({ products }: PelaFloatingWallProps) {
  const displayItems = products.slice(0, 12);
  const [selectedProduct, setSelectedProduct] = useState<ShowroomProduct | null>(null);

  // Staggered layout offsets for Pela-style organic lookbook wall
  const tileLayouts = [
    { span: 'col-span-1', rotate: '-rotate-2 sm:-rotate-4', translateY: 'translate-y-2', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-3 sm:rotate-6', translateY: '-translate-y-4', anim: 'animate-float-2' },
    { span: 'col-span-1', rotate: '-rotate-4 sm:-rotate-5', translateY: 'translate-y-3', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-2 sm:rotate-4', translateY: '-translate-y-2', anim: 'animate-float-2' },
    { span: 'col-span-1', rotate: '-rotate-3 sm:-rotate-6', translateY: 'translate-y-5', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-4 sm:rotate-5', translateY: '-translate-y-3', anim: 'animate-float-2' },
    { span: 'col-span-1', rotate: '-rotate-2 sm:-rotate-3', translateY: 'translate-y-2', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-3 sm:rotate-6', translateY: '-translate-y-4', anim: 'animate-float-2' },
    { span: 'col-span-1', rotate: '-rotate-4 sm:-rotate-5', translateY: 'translate-y-3', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-2 sm:rotate-4', translateY: '-translate-y-2', anim: 'animate-float-2' },
    { span: 'col-span-1', rotate: '-rotate-3 sm:-rotate-5', translateY: 'translate-y-4', anim: 'animate-float-1' },
    { span: 'col-span-1', rotate: 'rotate-4 sm:rotate-6', translateY: '-translate-y-3', anim: 'animate-float-2' },
  ];

  return (
    <section id="galeria" className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#06080D] overflow-hidden select-none border-b border-white/10">
      {/* Ambient Multi-Color Gradient Mesh */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[600px] bg-radial from-purple-800/15 via-pink-600/10 to-transparent blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-300 backdrop-blur-xl mb-3 shadow-lg shadow-pink-500/10">
            <Sparkles className="h-3.5 w-3.5 text-pink-300" />
            <span>Mural Flotante · Pela Aesthetic Wall</span>
          </div>

          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
            Infinite <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent">Moods</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-xl font-medium">
            Tocá cualquier funda para verla en detalle. Cada diseño es una obra visual única creada para destacar tu personalidad.
          </p>
        </div>

        {/* Floating Matrix Grid (Matches Reference Image 1) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center py-6">
          {displayItems.map((product, idx) => {
            const layout = tileLayouts[idx % tileLayouts.length];
            const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

            return (
              <div
                key={product.id + idx}
                onClick={() => setSelectedProduct(product)}
                className={`group relative flex flex-col items-center cursor-pointer transition-all duration-500 hover:z-30 hover:scale-110 ${layout.rotate} ${layout.translateY}`}
              >
                {/* Floating Rounded Case Card */}
                <div className="relative aspect-[3/4] w-full max-w-[210px] sm:max-w-[250px] overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-transparent p-4 sm:p-6 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 transition-all duration-500 group-hover:border-amber-400/60 group-hover:shadow-[0_20px_40px_rgba(245,197,24,0.2)]">
                  {/* Subtle hover specular sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative h-full w-full">
                    <Image
                      src={optimizeCloudinaryUrl(imgSrc, 700)}
                      alt={product.displayName}
                      fill
                      sizes="(min-width: 1024px) 250px, 180px"
                      className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Case Title Pill */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/85 border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-200 backdrop-blur-md group-hover:border-amber-400 group-hover:text-amber-300 transition-colors shadow-lg">
                    {product.displayName}
                  </div>

                  {/* Top Zoom Icon */}
                  <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Subtitle tag */}
                <span className="mt-2 text-[11px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span>Explorar diseño</span>
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Global CTA Pill */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-black text-black shadow-2xl shadow-white/20 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver Catálogo Completo en la Tienda Oficial</span>
          </a>
        </div>
      </div>

      {/* Lightbox Quick Inspector Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-b from-[#161B26] to-[#0A0D14] p-6 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 text-sm font-bold backdrop-blur-md"
            >
              ✕
            </button>

            <div className="relative aspect-[3/4] h-72 sm:h-96 w-full mx-auto my-4 flex items-center justify-center">
              <Image
                src={optimizeCloudinaryUrl(selectedProduct.images[0], 1200)}
                alt={selectedProduct.displayName}
                fill
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
              />
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="inline-block rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-xs font-black uppercase text-amber-300">
                {selectedProduct.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {selectedProduct.displayName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                {selectedProduct.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={selectedProduct.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs sm:text-sm font-black text-black shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-all"
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
