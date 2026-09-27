'use client';

import Image from 'next/image';
import { Sparkles, ArrowDown, ShoppingBag, ExternalLink, Zap, Star } from 'lucide-react';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface PsychedelicHeroProps {
  products: ShowroomProduct[];
}

export function PsychedelicHero({ products }: PsychedelicHeroProps) {
  const showcaseProducts = products.slice(0, 3);

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col justify-between items-center pt-8 pb-12 px-4 sm:px-8 overflow-hidden animate-aurora select-none">
      {/* Background Giant Stylized Wireframe Typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <span className="text-[18vw] font-black tracking-tighter text-stroke-hollow select-none whitespace-nowrap leading-none">
          CASE MOOD
        </span>
      </div>

      {/* Floating Mascots with Holographic Neon Rings */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col items-center text-center mt-4">
        {/* Mascot Centerpiece & Wordmark */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Neon Aura behind logo */}
          <div className="absolute h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-gradient-to-tr from-brand-yellow via-purple-500 to-brand-sky opacity-40 blur-2xl animate-pulse-glow" />

          {/* Left Mascot (Cool 😎) */}
          <div className="relative -mr-3 sm:-mr-4 z-20 h-16 w-16 sm:h-24 sm:w-24 animate-float-tilt">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 sm:border-3 border-brand-yellow shadow-xl shadow-brand-yellow/30 bg-white">
              <Image src="/brand/logo-cool.jpeg" alt="Mascota Cool" fill className="object-cover" priority />
            </div>
            <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-xs font-black text-brand-bg shadow-md">
              😎
            </span>
          </div>

          {/* Wordmark Center Medallion */}
          <div className="relative z-10 mx-1 sm:mx-3 h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 sm:border-3 border-white/80 bg-white shadow-2xl transition-transform hover:scale-110">
            <Image src="/brand/logo-wordmark.jpeg" alt="Case Mood Wordmark" fill className="object-cover" priority />
          </div>

          {/* Right Mascot (Cute 🌸) */}
          <div className="relative -ml-3 sm:-ml-4 z-20 h-16 w-16 sm:h-24 sm:w-24 animate-float-tilt-reverse">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 sm:border-3 border-brand-sky shadow-xl shadow-brand-sky/30 bg-white">
              <Image src="/brand/logo-cute.jpeg" alt="Mascota Cute" fill className="object-cover" priority />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-sky text-xs font-black text-brand-bg shadow-md">
              🌸
            </span>
          </div>
        </div>

        {/* Badge Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/15 px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-brand-yellow/10">
          <Sparkles className="h-4 w-4 text-brand-yellow animate-spin-slow" />
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Galería Psicodélica de Diseños
          </span>
          <Sparkles className="h-4 w-4 text-brand-yellow animate-spin-slow" />
        </div>

        {/* Main Psychedelic Headline */}
        <h1 className="mt-4 text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-5xl">
          ARTE PURO EN CADA{' '}
          <span className="relative inline-block text-brand-yellow drop-shadow-[0_0_35px_rgba(245,197,24,0.4)]">
            FUNDA
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-xl text-brand-muted max-w-2xl leading-relaxed font-medium">
          Diseños de alto impacto visual, colores vibrantes y la estética rebelde de Case Mood.
          Deslizá y sumergite en la colección completa.
        </p>

        {/* Action Button to Store */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-brand-yellow px-7 py-3.5 text-xs sm:text-sm font-black text-brand-bg shadow-2xl shadow-brand-yellow/30 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Tienda Online Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href="#galeria"
            className="flex items-center gap-2 rounded-2xl glass-panel px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:border-brand-yellow hover:text-brand-yellow active:scale-95 transition-all"
          >
            <Zap className="h-4 w-4 text-brand-yellow" />
            <span>Ver Todas las Fundas</span>
          </a>
        </div>
      </div>

      {/* Floating 3D Fan / Trio of Giant Phone Cases */}
      {showcaseProducts.length > 0 && (
        <div className="relative z-10 w-full max-w-5xl mt-10 mb-4 flex items-center justify-center">
          <div className="relative flex items-center justify-center h-72 sm:h-96 w-full">
            {showcaseProducts.map((p, i) => {
              const img = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
              const isCenter = i === 1 || (showcaseProducts.length === 1);
              const isLeft = i === 0 && !isCenter;
              const isRight = i === 2;

              let transformClass = 'z-20 scale-105 sm:scale-110 shadow-2xl shadow-brand-yellow/20';
              if (isLeft) transformClass = 'z-10 -rotate-12 -translate-x-16 sm:-translate-x-32 scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500';
              if (isRight) transformClass = 'z-10 rotate-12 translate-x-16 sm:translate-x-32 scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500';

              return (
                <div
                  key={p.name + i}
                  className={`absolute h-56 w-44 sm:h-80 sm:w-60 rounded-3xl bg-white p-4 sm:p-5 shadow-2xl transition-all duration-700 cursor-pointer ${transformClass}`}
                  onClick={() => {
                    const el = document.getElementById(p.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {/* Glowing border outline */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-brand-yellow/40 pointer-events-none" />
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={p.displayName}
                      fill
                      sizes="300px"
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-2 inset-x-2 rounded-xl bg-slate-950/80 backdrop-blur-md py-1 text-center">
                    <p className="text-[10px] font-black text-brand-yellow uppercase tracking-wider truncate px-2">
                      {p.displayName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Down Scroll Indicator */}
      <a
        href="#galeria"
        className="relative z-20 flex flex-col items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand-muted hover:text-brand-yellow transition-colors animate-bounce-subtle mt-4"
      >
        <span>Deslizá hacia el infinito</span>
        <ArrowDown className="h-4 w-4 text-brand-yellow" />
      </a>
    </section>
  );
}
