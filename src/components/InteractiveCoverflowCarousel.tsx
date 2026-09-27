'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  MessageCircle,
  Eye,
  Flame,
  Zap,
} from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface InteractiveCoverflowCarouselProps {
  products: ShowroomProduct[];
}

export function InteractiveCoverflowCarousel({ products }: InteractiveCoverflowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const validProducts = products.filter((p) => p.images && p.images.length > 0);

  const nextSlide = useCallback(() => {
    if (validProducts.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % validProducts.length);
    setActiveAngleIndex(0);
  }, [validProducts.length]);

  const prevSlide = useCallback(() => {
    if (validProducts.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + validProducts.length) % validProducts.length);
    setActiveAngleIndex(0);
  }, [validProducts.length]);

  // Autoplay rotation every 4.5s
  useEffect(() => {
    if (validProducts.length <= 1 || isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [validProducts.length, isPaused, nextSlide]);

  if (validProducts.length === 0) return null;

  const currentProduct = validProducts[currentIndex];
  const images = currentProduct.images.length > 0
    ? currentProduct.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const storeUrl = getEcommerceProductUrl(currentProduct.name);
  const whatsappUrl = createWhatsAppConsultUrl(currentProduct.displayName || currentProduct.name);

  // Compute 5 visible slides for coverflow effect [-2, -1, 0, 1, 2]
  const getVisibleIndex = (offset: number) => {
    const total = validProducts.length;
    return (currentIndex + offset + total) % total;
  };

  const prevProduct2 = validProducts[getVisibleIndex(-2)];
  const prevProduct = validProducts[getVisibleIndex(-1)];
  const nextProduct = validProducts[getVisibleIndex(1)];
  const nextProduct2 = validProducts[getVisibleIndex(2)];

  function handleTouchStart(e: React.TouchEvent) {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    setIsPaused(false);
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
      touchStartX.current = null;
    }
  }

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#121721] via-[#161c28] to-[#121721] border-y border-brand-border/40 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Psychedelic Glow Orb */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] rounded-full bg-gradient-to-tr from-brand-yellow/30 via-purple-600/30 to-pink-500/30 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand-yellow mb-3 backdrop-blur-md">
          <Zap className="h-3.5 w-3.5 text-brand-yellow animate-bounce-subtle" />
          <span>Carrusel 3D · Diseños en Movimiento</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
          Deslizá y Explorá el <span className="text-brand-yellow">Lookbook 3D</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-brand-muted max-w-lg">
          Tocá las flechas o deslizá para descubrir la colección completa de fundas Case Mood.
        </p>
      </div>

      {/* 3D Coverflow Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
        {/* Far Left Slide (-2) - Hidden on small mobile */}
        {prevProduct2 && (
          <div
            onClick={() => setCurrentIndex(getVisibleIndex(-2))}
            className="absolute left-0 sm:left-4 lg:left-8 z-10 hidden md:block cursor-pointer opacity-25 scale-75 blur-[1px] transition-all duration-500 hover:opacity-50 hover:scale-80 -rotate-12"
          >
            <div className="relative h-48 w-36 lg:h-64 lg:w-48 overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <Image
                src={prevProduct2.images[0]}
                alt={prevProduct2.displayName}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        )}

        {/* Left Slide (-1) */}
        {prevProduct && (
          <div
            onClick={prevSlide}
            className="absolute left-2 sm:left-12 lg:left-24 z-20 cursor-pointer opacity-50 sm:opacity-60 scale-85 sm:scale-90 transition-all duration-500 hover:opacity-90 hover:scale-95 -rotate-6"
          >
            <div className="relative h-56 w-40 sm:h-72 sm:w-52 lg:h-80 lg:w-60 overflow-hidden rounded-2xl bg-white p-3 shadow-2xl">
              <Image
                src={prevProduct.images[0]}
                alt={prevProduct.displayName}
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-brand-bg/20 hover:bg-transparent transition-colors" />
            </div>
            <p className="mt-2 text-center text-xs font-black uppercase tracking-wider text-slate-300 truncate max-w-[150px] mx-auto">
              {prevProduct.displayName}
            </p>
          </div>
        )}

        {/* Center Active Slide (0) */}
        <div className="relative z-30 flex flex-col items-center scale-100 sm:scale-105 transition-all duration-500">
          <div className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[440px] lg:w-[330px] overflow-hidden rounded-3xl bg-white p-5 sm:p-7 shadow-2xl shadow-brand-yellow/15 border-2 border-brand-yellow/50 animate-float-tilt">
            {/* Dynamic Angle Crossfade */}
            {images.map((src, i) => {
              const isCurrent = i === activeAngleIndex;
              return (
                <div
                  key={src + i}
                  className={`absolute inset-0 p-5 sm:p-7 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${currentProduct.displayName} - foto ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 330px, (min-width: 640px) 290px, 210px"
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              );
            })}

            {/* In-Card Angle Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAngleIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeAngleIndex ? 'w-4 bg-brand-yellow' : 'w-2 bg-slate-500 hover:bg-slate-300'
                    }`}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Slide (1) */}
        {nextProduct && (
          <div
            onClick={nextSlide}
            className="absolute right-2 sm:right-12 lg:right-24 z-20 cursor-pointer opacity-50 sm:opacity-60 scale-85 sm:scale-90 transition-all duration-500 hover:opacity-90 hover:scale-95 rotate-6"
          >
            <div className="relative h-56 w-40 sm:h-72 sm:w-52 lg:h-80 lg:w-60 overflow-hidden rounded-2xl bg-white p-3 shadow-2xl">
              <Image
                src={nextProduct.images[0]}
                alt={nextProduct.displayName}
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-brand-bg/20 hover:bg-transparent transition-colors" />
            </div>
            <p className="mt-2 text-center text-xs font-black uppercase tracking-wider text-slate-300 truncate max-w-[150px] mx-auto">
              {nextProduct.displayName}
            </p>
          </div>
        )}

        {/* Far Right Slide (2) - Hidden on small mobile */}
        {nextProduct2 && (
          <div
            onClick={() => setCurrentIndex(getVisibleIndex(2))}
            className="absolute right-0 sm:right-4 lg:right-8 z-10 hidden md:block cursor-pointer opacity-25 scale-75 blur-[1px] transition-all duration-500 hover:opacity-50 hover:scale-80 rotate-12"
          >
            <div className="relative h-48 w-36 lg:h-64 lg:w-48 overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <Image
                src={nextProduct2.images[0]}
                alt={nextProduct2.displayName}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        )}

        {/* Navigation Arrow Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1 sm:left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white border border-brand-yellow/30 backdrop-blur-md shadow-2xl hover:bg-brand-yellow hover:text-brand-bg hover:scale-110 active:scale-95 transition-all"
          aria-label="Diseño anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1 sm:right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white border border-brand-yellow/30 backdrop-blur-md shadow-2xl hover:bg-brand-yellow hover:text-brand-bg hover:scale-110 active:scale-95 transition-all"
          aria-label="Diseño siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Active Design Info & CTAs */}
      <div className="relative z-10 max-w-xl mx-auto text-center mt-8 space-y-3">
        <div className="inline-block rounded-full bg-brand-yellow/15 border border-brand-yellow/40 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-brand-yellow">
          {currentProduct.category}
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight drop-shadow-md">
          {currentProduct.displayName}
        </h3>

        <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-medium">
          {currentProduct.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-brand-yellow px-6 py-3 text-xs sm:text-sm font-black text-brand-bg shadow-xl shadow-brand-yellow/20 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver en Tienda Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl glass-panel px-5 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Thumbnail Bar Below Carousel */}
      <div className="relative z-10 max-w-4xl mx-auto mt-10 overflow-x-auto py-2 mask-fade-edges scrollbar-none">
        <div className="flex items-center justify-center gap-2.5 min-w-max px-4">
          {validProducts.map((p, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={p.id + idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setActiveAngleIndex(0);
                }}
                className={`group relative h-14 w-12 sm:h-16 sm:w-14 flex-shrink-0 overflow-hidden rounded-xl bg-white p-1 transition-all duration-300 ${
                  isActive
                    ? 'ring-2 ring-brand-yellow scale-110 shadow-lg shadow-brand-yellow/30'
                    : 'opacity-40 hover:opacity-80 hover:scale-105'
                }`}
                aria-label={`Seleccionar diseño ${p.displayName}`}
              >
                <Image
                  src={p.images[0]}
                  alt={p.displayName}
                  fill
                  className="object-contain p-1"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
