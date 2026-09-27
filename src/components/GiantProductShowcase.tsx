'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, ExternalLink, MessageCircle, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface GiantProductShowcaseProps {
  product: ShowroomProduct;
  index: number;
  total: number;
}

export function GiantProductShowcase({ product, index, total }: GiantProductShowcaseProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const images = product.images && product.images.length > 0
    ? product.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

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

  const formattedIndex = String(index + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');
  const storeUrl = getEcommerceProductUrl(product.name);
  const whatsappUrl = createWhatsAppConsultUrl(product.displayName || product.name);

  return (
    <section
      id={product.id}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 sm:px-8 border-b border-brand-border/40 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[450px] w-[450px] sm:h-[600px] sm:w-[600px] rounded-full bg-brand-yellow/20 blur-[120px]" />
      </div>

      {/* Top Index & Category */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm sm:text-base font-extrabold text-brand-yellow tracking-widest">
            {formattedIndex} <span className="text-brand-muted">/ {formattedTotal}</span>
          </span>
          <span className="rounded-full bg-brand-bg-deep/80 border border-brand-border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-sky">
            {product.category}
          </span>
          {product.isNew && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-yellow">
              <Sparkles className="h-3 w-3" />
              Nuevo
            </span>
          )}
        </div>

        {/* Multi-angle indicator pills */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 bg-brand-bg-deep/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-border/60">
            <span className="text-[10px] font-semibold text-brand-muted mr-1">Ángulos:</span>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImageIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeImageIndex
                    ? 'w-5 bg-brand-yellow shadow-xs'
                    : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Giant Case Image Canvas */}
      <div className="relative z-10 w-full max-w-2xl flex-1 flex items-center justify-center my-2 sm:my-4">
        <div className="relative aspect-[3/4] sm:aspect-square w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:shadow-brand-yellow/10">
          {images.map((src, i) => {
            const isCurrent = i === activeImageIndex;
            return (
              <div
                key={src + i}
                className={`absolute inset-0 p-6 sm:p-8 transition-opacity duration-700 ease-in-out ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`${product.displayName} - foto ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 540px, (min-width: 640px) 460px, 90vw"
                    className="object-contain transition-transform duration-700 hover:scale-105"
                    priority={index === 0 && i === 0}
                  />
                </div>
              </div>
            );
          })}

          {/* Desktop Manual Carousel Chevrons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-xs opacity-0 hover:opacity-100 group-hover:opacity-80 transition-opacity hover:scale-110 active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-xs opacity-0 hover:opacity-100 group-hover:opacity-80 transition-opacity hover:scale-110 active:scale-95"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom Editorial Info & Minimalist CTAs */}
      <div className="relative z-10 w-full max-w-3xl text-center space-y-3 mt-2 sm:mt-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
          {product.displayName}
        </h2>

        <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
          {product.description}
        </p>


        {/* Minimalist Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-brand-yellow px-6 py-3 text-xs sm:text-sm font-black text-brand-bg shadow-xl shadow-brand-yellow/20 transition-all hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver en Tienda Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-brand-border bg-brand-bg-deep/80 px-5 py-3 text-xs sm:text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:border-emerald-400 hover:text-emerald-400 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
