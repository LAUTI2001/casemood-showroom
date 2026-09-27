'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowDown, Compass } from 'lucide-react';
import { GiantProductShowcase } from './GiantProductShowcase';
import { fetchLiveShowroomProducts } from '../data/products';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface LookbookStreamProps {
  initialProducts: ShowroomProduct[];
}

export function LookbookStream({ initialProducts }: LookbookStreamProps) {
  const [products, setProducts] = useState<ShowroomProduct[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchLiveShowroomProducts()
      .then((data) => {
        if (data && data.length > 0) setProducts(data);
      })
      .catch(() => {});
  }, []);

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
          <span>Case Mood · Galería de Diseños</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
          CaseMood, <span className="text-brand-yellow">vestí tu celular con estilo &amp; protección</span>
        </h1>

        <p className="mt-4 text-sm sm:text-lg text-brand-muted max-w-xl leading-relaxed">
          Deslizá y descubrí en pantalla completa cada una de nuestras estampas exclusivas.
          Diseños a pleno con toda la personalidad de Case Mood.
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

      {/* Giant Full-Screen Cases Stream: One design after another (No counts) */}
      <div className="w-full">
        {filtered.map((product, idx) => (
          <GiantProductShowcase
            key={product.id || product.name}
            product={product}
            index={idx}
          />
        ))}
      </div>

      {/* Bottom Floating Lookbook Nav CTA */}
      <div className="py-16 text-center bg-brand-bg-deep border-t border-brand-border/40 px-4">
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          ¿Te gustó algún diseño?
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
          Podés conseguirlo directamente ingresando a nuestra tienda online oficial.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-brand-yellow px-7 py-3.5 text-xs sm:text-sm font-black text-brand-bg shadow-xl shadow-brand-yellow/20 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            Ir a la Tienda Online Oficial
          </a>
        </div>
      </div>
    </div>
  );
}
