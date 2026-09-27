'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause, ShoppingBag, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AppleCineCarouselProps {
  products: ShowroomProduct[];
}

export function AppleCineCarousel({ products }: AppleCineCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const cineProducts = products.filter((p) => p.images && p.images.length > 0).slice(0, 8);

  const nextSlide = useCallback(() => {
    if (cineProducts.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % cineProducts.length);
  }, [cineProducts.length]);

  const prevSlide = useCallback(() => {
    if (cineProducts.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + cineProducts.length) % cineProducts.length);
  }, [cineProducts.length]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || cineProducts.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, cineProducts.length, nextSlide]);

  if (cineProducts.length === 0) return null;

  const current = cineProducts[activeIndex];
  const storeUrl = getEcommerceProductUrl(current.name);
  const whatsappUrl = createWhatsAppConsultUrl(current.displayName || current.name);

  function handleTouchStart(e: React.TouchEvent) {
    setIsPlaying(false);
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff > 45) nextSlide();
      else if (diff < -45) prevSlide();
      touchStartX.current = null;
    }
  }

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#080B10] overflow-hidden border-b border-white/10 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Highlights de Temporada</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Los Más Elegidos
            </h2>
          </div>

          {/* Prev/Next Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Master Panoramic Billboard Card (Responsive Grid) */}
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#141B26] via-[#10151E] to-[#0A0D14] border border-white/15 p-6 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
          {/* Subtle Ambient Radial Light */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-brand-yellow/15 blur-[120px]" />

          {/* 2-Column Responsive Layout for Mobile & Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text & Actions */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div>
                <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-yellow border border-white/10 mb-3">
                  {current.category}
                </span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
                  {current.displayName}
                </h3>
              </div>

              <p className="text-sm sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {current.description}
              </p>

              {/* Apple CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 text-xs sm:text-sm font-black text-brand-bg shadow-xl shadow-brand-yellow/20 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Comprar en Tienda</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Giant Floating Hero Case */}
            <div className="lg:col-span-5 flex justify-center py-4">
              <div className="relative aspect-[3/4] h-64 w-48 sm:h-80 sm:w-60 lg:h-[420px] lg:w-[310px] overflow-hidden rounded-3xl bg-white p-5 sm:p-7 shadow-2xl shadow-black/80 border border-white/20 transition-all duration-700 hover:scale-105 animate-float-tilt">
                <div className="relative h-full w-full">
                  <Image
                    src={current.images[0]}
                    alt={current.displayName}
                    fill
                    sizes="(min-width: 1024px) 310px, 240px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Capsule Progress Bar Indicators (Apple TV+ Style) */}
          <div className="relative z-10 flex items-center gap-2.5 mt-8 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all mr-2 shrink-0"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>

            {cineProducts.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPlaying(false);
                  }}
                  className="group relative h-1.5 flex-1 rounded-full overflow-hidden bg-white/20 transition-all"
                  aria-label={`Ir al diseño ${i + 1}`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isActive ? 'bg-brand-yellow w-full' : 'w-0 group-hover:w-full group-hover:bg-white/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
