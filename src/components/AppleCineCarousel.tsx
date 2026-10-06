'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause, ShoppingBag, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import type { ShowroomProduct } from '../types';

interface AppleCineCarouselProps {
  products: ShowroomProduct[];
}

export function AppleCineCarousel({ products: initialProducts }: AppleCineCarouselProps) {
  const { texts, products: contextProducts } = useShowroomConfig();
  const products = contextProducts.length > 0 ? contextProducts : initialProducts;

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
              <span>{texts.cineBadge || 'Highlights de Temporada'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {texts.cineTitle || 'Los Más Elegidos'}
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
                  <span>Ver en Tienda</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>Consultar WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Giant Artwork Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[440px] lg:w-[330px] overflow-hidden rounded-3xl bg-white p-5 sm:p-7 shadow-2xl shadow-black/80 border-2 border-white/20 transition-transform duration-700 hover:scale-105">
                <Image
                  src={current.images[0]}
                  alt={current.displayName}
                  fill
                  sizes="(min-width: 1024px) 330px, 280px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar & Play/Pause Controller */}
          <div className="mt-8 sm:mt-12 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              {cineProducts.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-10 sm:w-14 bg-brand-yellow shadow-md shadow-brand-yellow/30'
                      : 'w-2 sm:w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al diseño ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pausar rotación' : 'Reproducir rotación'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
