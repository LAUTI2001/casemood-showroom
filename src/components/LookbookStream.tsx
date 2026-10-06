'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowDown, Compass } from 'lucide-react';
import { GiantProductShowcase } from './GiantProductShowcase';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface LookbookStreamProps {
  initialProducts: ShowroomProduct[];
}

export function LookbookStream({ initialProducts }: LookbookStreamProps) {
  const { texts, products: contextProducts } = useShowroomConfig();
  const products = contextProducts.length > 0 ? contextProducts : initialProducts;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return Array.from(set).sort();
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      return true;
    });
  }, [products, selectedCategory]);

  return (
    <div className="relative w-full">
      {/* Editorial Intro Banner */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-14 overflow-hidden">
        {/* Decorative Mascot Floaters */}
        <div className="absolute top-12 left-6 sm:left-16 h-16 w-16 sm:h-20 sm:w-20 animate-float-slow opacity-90 hidden sm:block">
          <div className="relative h-full w-full rounded-full border-2 border-brand-yellow/80 bg-white p-1 shadow-lg shadow-brand-yellow/20">
            <Image src="/brand/logo-cool.jpeg" alt="Mascota Cool" fill className="object-cover rounded-full" priority />
          </div>
        </div>

        <div className="absolute top-16 right-6 sm:right-16 h-16 w-16 sm:h-20 sm:w-20 animate-float-reverse opacity-90 hidden sm:block">
          <div className="relative h-full w-full rounded-full border-2 border-brand-sky/80 bg-white p-1 shadow-lg shadow-brand-sky/20">
            <Image src="/brand/logo-cute.jpeg" alt="Mascota Cute" fill className="object-cover rounded-full" priority />
          </div>
        </div>

        {/* Mascot duo for mobile */}
        <div className="flex items-center gap-3 mb-4 sm:hidden">
          <div className="relative h-12 w-12 rounded-full border-2 border-brand-yellow bg-white p-0.5 shadow-md">
            <Image src="/brand/logo-cool.jpeg" alt="Mascota Cool" fill className="object-cover rounded-full" priority />
          </div>
          <div className="relative h-12 w-12 rounded-full border-2 border-brand-sky bg-white p-0.5 shadow-md">
            <Image src="/brand/logo-cute.jpeg" alt="Mascota Cute" fill className="object-cover rounded-full" priority />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-brand-yellow mb-3 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{texts.lookbookBadge || 'Case Mood · Galería de Diseños'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
          CaseMood, <span className="text-brand-yellow">vestí tu celular con estilo &amp; protección</span>
        </h1>

        <p className="mt-4 text-sm sm:text-lg text-brand-muted max-w-xl leading-relaxed">
          {texts.lookbookTitle ||
            'Deslizá y descubrí en pantalla completa cada una de nuestras estampas exclusivas.'}
        </p>

        {/* Category Filter Pills (No counts) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-5 py-2.5 text-xs font-extrabold transition-all ${
              selectedCategory === null
                ? 'bg-brand-yellow text-brand-bg shadow-md scale-105'
                : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
            }`}
          >
            Todos los Diseños
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-extrabold transition-all ${
                  isSelected
                    ? 'bg-brand-yellow text-brand-bg shadow-md scale-105'
                    : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Scroll down prompt */}
        <div className="mt-10 flex flex-col items-center gap-2 text-xs font-bold text-brand-muted animate-bounce-subtle">
          <span>Deslizá hacia abajo</span>
          <ArrowDown className="h-4 w-4 text-brand-yellow" />
        </div>
      </section>

      {/* Giant Full-Screen Cases Stream */}
      <div className="space-y-16 sm:space-y-24 pb-20">
        {filtered.map((product, idx) => (
          <GiantProductShowcase key={product.id || product.name} product={product} index={idx} />
        ))}
      </div>

      {/* Final Catalog CTA */}
      <div className="mx-auto max-w-3xl px-4 py-12 text-center border-t border-brand-border/60">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/15 text-brand-yellow mb-4">
          <Compass className="h-6 w-6" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">¿Te gustó algún diseño?</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Descubrí la colección completa en la tienda oficial.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-black text-brand-bg hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-yellow/20"
          >
            <span>Explorar Tienda Completa</span>
          </a>
        </div>
      </div>
    </div>
  );
}
