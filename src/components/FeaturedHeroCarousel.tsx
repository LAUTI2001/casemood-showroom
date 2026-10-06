'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ChevronLeft, ChevronRight, ShoppingBag, ExternalLink } from 'lucide-react';
import { ProductLightboxModal } from './ProductLightboxModal';
import type { ShowroomProduct } from '../types';

interface FeaturedHeroCarouselProps {
  products: ShowroomProduct[];
  onOpenModal?: (product: ShowroomProduct) => void;
}

export function FeaturedHeroCarousel({ products, onOpenModal }: FeaturedHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalProduct, setModalProduct] = useState<ShowroomProduct | null>(null);

  const featured = products.filter((p) => p.isFeatured).slice(0, 5);
  const items = featured.length > 0 ? featured : products.slice(0, 3);

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [items.length, isPaused]);

  if (items.length === 0) return null;

  const current = items[currentIndex];
  const image = current.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

  function handleOpen(prod: ShowroomProduct) {
    if (onOpenModal) onOpenModal(prod);
    else setModalProduct(prod);
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-3xl border border-brand-yellow/30 bg-gradient-to-r from-brand-card via-[#202937] to-brand-card p-6 sm:p-8 shadow-2xl shadow-brand-yellow/5 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-yellow">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Diseño Destacado</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {current.displayName}
            </h3>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-lg">
              {current.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={current.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-brand-yellow px-5 py-2.5 text-xs font-black text-brand-bg shadow-md transition-all hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Ver en Tienda Oficial</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>

              <button
                type="button"
                onClick={() => handleOpen(current)}
                className="rounded-xl border border-brand-border bg-brand-bg px-4 py-2.5 text-xs font-bold text-white transition-all hover:border-brand-yellow hover:text-brand-yellow active:scale-95"
              >
                Ver Galería Completa
              </button>
            </div>
          </div>

          {/* Right Column: Large Showcase Image */}
          <div className="md:col-span-5 flex justify-center">
            <div
              onClick={() => handleOpen(current)}
              className="relative h-64 w-64 sm:h-72 sm:w-72 cursor-pointer overflow-hidden rounded-2xl bg-white p-4 shadow-xl transition-all duration-500 hover:scale-105"
            >
              <Image
                src={image}
                alt={current.displayName}
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation Bullets & Arrows */}
        {items.length > 1 && (
          <div className="mt-6 flex items-center justify-between border-t border-brand-border/40 pt-4">
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-brand-yellow' : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir al diseño destacado ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-border bg-brand-bg text-brand-muted hover:border-brand-yellow hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-border bg-brand-bg text-brand-muted hover:border-brand-yellow hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <ProductLightboxModal
        product={modalProduct}
        open={Boolean(modalProduct)}
        onClose={() => setModalProduct(null)}
      />
    </>
  );
}
