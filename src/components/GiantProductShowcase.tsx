'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, ExternalLink, MessageCircle, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface GiantProductShowcaseProps {
  product: ShowroomProduct;
  index: number;
}

// Alternating psychedelic color themes per case section
const COLOR_THEMES = [
  {
    glow: 'from-amber-500/25 via-purple-600/20 to-brand-sky/25',
    accentText: 'text-brand-yellow',
    badgeBorder: 'border-brand-yellow/50 bg-brand-yellow/15 text-brand-yellow',
    mascot: '😎',
  },
  {
    glow: 'from-purple-600/30 via-pink-500/25 to-amber-400/20',
    accentText: 'text-pink-400',
    badgeBorder: 'border-pink-500/50 bg-pink-500/15 text-pink-300',
    mascot: '🌸',
  },
  {
    glow: 'from-cyan-500/30 via-blue-600/20 to-purple-500/20',
    accentText: 'text-brand-sky',
    badgeBorder: 'border-sky-400/50 bg-sky-400/15 text-sky-300',
    mascot: '✨',
  },
  {
    glow: 'from-emerald-500/30 via-teal-500/20 to-amber-500/20',
    accentText: 'text-emerald-400',
    badgeBorder: 'border-emerald-400/50 bg-emerald-400/15 text-emerald-300',
    mascot: '🔥',
  },
];

export function GiantProductShowcase({ product, index }: GiantProductShowcaseProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const theme = COLOR_THEMES[index % COLOR_THEMES.length];
  const images = product.images && product.images.length > 0
    ? product.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto crossfade between angles every 3.5s
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  function handleTouchStart(e: React.TouchEvent) {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    setIsPaused(false);
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff > 40) {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else if (diff < -40) {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      touchStartX.current = null;
    }
  }

  const storeUrl = getEcommerceProductUrl(product.name);
  const whatsappUrl = createWhatsAppConsultUrl(product.displayName || product.name);

  return (
    <section
      ref={sectionRef}
      id={product.id}
      className={`relative min-h-[85vh] sm:min-h-screen w-full flex flex-col justify-between items-center py-10 sm:py-16 px-4 sm:px-8 border-b border-brand-border/40 overflow-hidden select-none transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Giant Artistic Aurora Flare */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div
          className={`h-[350px] w-[350px] sm:h-[700px] sm:w-[700px] rounded-full bg-gradient-to-tr ${theme.glow} blur-[100px] sm:blur-[140px] transition-transform duration-1000 ${
            isInView ? 'scale-100 opacity-90' : 'scale-75 opacity-40'
          }`}
        />
      </div>

      {/* Background Watermark Headline */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5 select-none">
        <span className="text-[18vw] sm:text-[20vw] font-black uppercase text-stroke-hollow whitespace-nowrap">
          {product.name}
        </span>
      </div>

      {/* Top Header Row: Category Badge & Angle Switcher */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className={`rounded-full border px-3.5 py-1 text-xs font-black uppercase tracking-wider ${theme.badgeBorder} shadow-lg shadow-black/30`}>
            {product.category}
          </span>

          <span className="text-sm sm:text-lg animate-bounce-subtle hidden sm:inline-block">
            {theme.mascot}
          </span>
        </div>

        {/* Multi-angle Pills */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 sm:gap-2 glass-panel px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-muted">Vistas:</span>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImageIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeImageIndex
                    ? 'w-5 sm:w-6 bg-brand-yellow shadow-md shadow-brand-yellow/40'
                    : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Giant Case Image Canvas (Center Stage) */}
      <div className="relative z-10 w-full max-w-3xl flex-1 flex items-center justify-center my-3 sm:my-4">
        <div
          className={`relative aspect-[3/4] sm:aspect-square w-full max-w-[280px] sm:max-w-[480px] lg:max-w-[560px] overflow-hidden rounded-3xl bg-white p-5 sm:p-10 shadow-2xl transition-all duration-700 hover:scale-[1.03] ${
            isInView ? 'scale-100 rotate-0' : 'scale-95'
          } animate-float-tilt`}
        >
          {/* Subtle Inner Glass Aura */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/90 via-transparent to-white/70" />

          {images.map((src, i) => {
            const isCurrent = i === activeImageIndex;
            return (
              <div
                key={src + i}
                className={`absolute inset-0 p-5 sm:p-10 transition-opacity duration-700 ease-in-out ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`${product.displayName} - foto ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 280px"
                    className="object-contain transition-transform duration-700 hover:scale-105"
                    priority={index === 0 && i === 0}
                  />
                </div>
              </div>
            );
          })}

          {/* Desktop Next/Prev Arrow Overlays */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur-md opacity-0 hover:opacity-100 group-hover:opacity-80 transition-all hover:scale-110 active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur-md opacity-0 hover:opacity-100 group-hover:opacity-80 transition-all hover:scale-110 active:scale-95"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom Editorial Presentation & Action Links */}
      <div className="relative z-10 w-full max-w-3xl text-center space-y-2.5 mt-3 sm:mt-4">
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] break-words">
          {product.displayName}
        </h2>

        <p className="text-xs sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed font-medium px-2">
          {product.description}
        </p>

        {/* Action Buttons (Full-width on mobile, side-by-side on desktop) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-xs sm:text-sm font-black text-brand-bg shadow-2xl shadow-brand-yellow/25 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver en Tienda Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full glass-panel px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-200 hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
