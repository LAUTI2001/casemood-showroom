'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag, ZoomIn } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { createWhatsAppConsultUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.47L4 29l7.72-1.876A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.75c-1.94 0-3.75-.552-5.283-1.505l-.379-.232-4.583 1.114 1.15-4.463-.248-.394A9.71 9.71 0 0 1 5.25 15c0-5.937 4.813-10.75 10.751-10.75S26.75 9.063 26.75 15 21.938 24.75 16.001 24.75Zm5.86-8.06c-.32-.16-1.895-.936-2.19-1.042-.294-.107-.508-.16-.722.16-.213.32-.828 1.042-1.016 1.256-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.481-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.525-.54-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.095-1.12 2.67s1.147 3.096 1.307 3.31c.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.523.267-.747.267-1.388.187-1.523-.08-.134-.294-.213-.614-.373Z" />
    </svg>
  );
}

export function SpotlightShowcase({ products }: { products: ShowroomProduct[] }) {
  // Use up to 8 featured products
  const featured = products.filter((p) => p.isFeatured || p.isNew).slice(0, 8);
  const items = featured.length > 0 ? featured : products.slice(0, 8);

  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const current = items[activeIndex] || items[0];
  if (!current) return null;

  const currentImages = current.images && current.images.length > 0
    ? current.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const activePhoto = currentImages[photoIndex] || currentImages[0];

  function selectProduct(idx: number) {
    setActiveIndex(idx);
    setPhotoIndex(0);
  }

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0D14]">
      {/* Dynamic Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-purple-600/15 blur-[120px] transition-all duration-700" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Ribbon */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
            <span>Novedades & Diseños Exclusivos</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Spotlight <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">CaseMood</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 max-w-md mx-auto">
            Visuales en alta definición, detalles al milímetro y las fundas más elegidas.
          </p>
        </div>

        {/* Quick Horizontal Selector (Pills) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none mb-8">
          {items.map((p, idx) => {
            const isSel = idx === activeIndex;
            return (
              <button
                key={p.id + '-' + idx}
                type="button"
                onClick={() => selectProduct(idx)}
                className={`flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold transition-all shrink-0 select-none ${
                  isSel
                    ? 'bg-white text-black shadow-lg shadow-purple-500/20 scale-105 border border-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {p.isNew && (
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                )}
                <span>{p.displayName || p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Monumental Visual Display Card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-2xl">
          {/* Left / Center: Giant Case Visual & Multi-Angle Thumbnails */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Main Stage Image */}
            <div
              onClick={() => setZoomOpen(true)}
              className="group relative h-[380px] sm:h-[480px] w-full max-w-[340px] sm:max-w-[420px] cursor-zoom-in overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 p-4 sm:p-8 flex items-center justify-center transition-all duration-500 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <Image
                src={optimizeCloudinaryUrl(activePhoto, 1200)}
                alt={current.displayName || current.name}
                fill
                priority
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105 select-none"
              />
              <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10">
                <ZoomIn className="h-4 w-4" />
              </span>
            </div>

            {/* Thumbnail Angle Selectors (if product has multiple photos) */}
            {currentImages.length > 1 && (
              <div className="mt-4 flex items-center gap-2.5 overflow-x-auto p-1">
                {currentImages.map((img, pIdx) => {
                  const isCurPhoto = pIdx === photoIndex;
                  return (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setPhotoIndex(pIdx)}
                      className={`relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border transition-all ${
                        isCurPhoto
                          ? 'border-purple-400 ring-2 ring-purple-400/40 scale-105 bg-white/10'
                          : 'border-white/10 bg-white/5 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={optimizeCloudinaryUrl(img, 200)}
                        alt={`Ángulo ${pIdx + 1}`}
                        fill
                        sizes="60px"
                        className="object-contain p-1"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: Product Details & Snappy Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 w-fit mx-auto lg:mx-0">
              <span>{current.category || 'Funda Premium'}</span>
              {current.isNew && <span>· Novedad</span>}
            </div>

            <h3 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              {current.displayName || current.name}
            </h3>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
              {current.description ||
                `Diseño exclusivo ${current.name} con protección reforzada y calce exacto.`}
            </p>

            {/* Price Tag */}
            {current.price > 0 && (
              <div className="mt-4 flex items-baseline justify-center lg:justify-start gap-2">
                <span className="text-2xl sm:text-3xl font-black text-amber-300">
                  ${current.price.toLocaleString('es-AR')}
                </span>
                <span className="text-xs text-white/50 font-medium">precio oficial</span>
              </div>
            )}

            {/* Model Pills (preview up to 5) */}
            {current.models && current.models.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                <span className="text-[10px] uppercase font-bold text-white/40 mr-1">Modelos:</span>
                {current.models.slice(0, 5).map((m) => (
                  <span
                    key={m}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-white/80"
                  >
                    {m}
                  </span>
                ))}
                {current.models.length > 5 && (
                  <span className="text-[10px] text-white/50">+{current.models.length - 5} más</span>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={current.storeUrl}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-black shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Ver en Tienda Oficial</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={createWhatsAppConsultUrl(current.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>Consultar</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomOpen && (
        <div
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md select-none"
        >
          <div className="relative h-[85vh] w-[90vw] max-w-4xl">
            <Image
              src={optimizeCloudinaryUrl(activePhoto, 1800)}
              alt={current.displayName || current.name}
              fill
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white text-lg font-bold backdrop-blur-md"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
