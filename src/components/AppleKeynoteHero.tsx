'use client';

import Image from 'next/image';
import { ShoppingBag, ExternalLink, MessageCircle, ChevronDown } from 'lucide-react';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AppleKeynoteHeroProps {
  products: ShowroomProduct[];
}

export function AppleKeynoteHero({ products }: AppleKeynoteHeroProps) {
  const heroCases = products.slice(0, 3);
  const mainHeroCase = heroCases[0] || products[0];

  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] w-full flex flex-col justify-between items-center pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-[#0A0D14] select-none">
      {/* Studio Lighting Radial Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[500px] bg-radial from-brand-yellow/15 via-purple-600/10 to-transparent blur-[90px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[900px] h-[300px] sm:h-[400px] bg-radial from-sky-500/10 via-transparent to-transparent blur-[100px] sm:blur-[140px]" />

      {/* Subtle Giant Background Typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <span className="text-[24vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          CASEMOOD
        </span>
      </div>

      {/* Header Eyebrow & Brand Duo Medallion */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Mascots & Logo Trio */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          {/* Mascot Cool */}
          <div className="relative h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-brand-yellow/60 bg-white p-0.5 shadow-lg shadow-brand-yellow/20 animate-float-tilt">
            <Image src="/brand/logo-cool.jpeg" alt="Case Mood Cool" fill className="object-cover rounded-full" priority />
          </div>
          {/* Wordmark Center */}
          <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-white/40 bg-white p-1 shadow-xl">
            <Image src="/brand/logo-wordmark.jpeg" alt="Case Mood Wordmark" fill className="object-cover rounded-full" priority />
          </div>
          {/* Mascot Cute */}
          <div className="relative h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-brand-sky/60 bg-white p-0.5 shadow-lg shadow-brand-sky/20 animate-float-tilt-reverse">
            <Image src="/brand/logo-cute.jpeg" alt="Case Mood Cute" fill className="object-cover rounded-full" priority />
          </div>
        </div>

        {/* Apple-style pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-slate-200 backdrop-blur-xl mb-3">
          <span className="flex h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
          <span>Nueva Colección de Diseños</span>
        </div>

        {/* Master Keynote Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight">
          CaseMood.
        </h1>
        <p className="mt-2 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-brand-yellow to-slate-300 max-w-3xl leading-tight">
          Diseñadas para destacar. Construidas para proteger.
        </p>
        <p className="mt-2 sm:mt-4 text-xs sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed px-2">
          Vestí tu celular con fundas de impacto visual, calce milimétrico y protección integral contra caídas.
        </p>

        {/* Apple-style Pill Actions */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-8 py-3.5 text-xs sm:text-sm font-black text-brand-bg shadow-lg shadow-brand-yellow/20 transition-all duration-300 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Comprar en Tienda Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-400 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 3D Studio Floating Case Area (Optimized for Mobile & Desktop) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center my-6 sm:my-10">
        {/* Mobile: 1 Prominent Clean Centerpiece */}
        <div className="sm:hidden relative flex items-center justify-center">
          <div className="relative aspect-[3/4] h-72 w-52 overflow-hidden rounded-3xl bg-white p-5 shadow-2xl shadow-black/80 border border-white/20 animate-float-tilt">
            <Image
              src={mainHeroCase?.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'}
              alt={mainHeroCase?.displayName || 'Case Mood Hero'}
              fill
              className="object-contain p-2"
              priority
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-yellow">
              {mainHeroCase?.displayName || 'Diseño Exclusivo'}
            </div>
          </div>
        </div>

        {/* Tablet / Desktop: 3D 3-Case Fan */}
        <div className="hidden sm:flex relative items-center justify-center w-full h-[400px] lg:h-[480px]">
          {heroCases.map((product, i) => {
            const isCenter = i === 0;
            const isLeft = i === 1;
            const isRight = i === 2;

            let transformClass = 'z-20 scale-100 sm:scale-105';
            if (isLeft) transformClass = 'z-10 -translate-x-36 lg:-translate-x-44 -rotate-12 scale-90 opacity-80';
            if (isRight) transformClass = 'z-10 translate-x-36 lg:translate-x-44 rotate-12 scale-90 opacity-80';

            const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

            return (
              <div
                key={product.name + i}
                className={`absolute transition-all duration-700 hover:z-30 hover:scale-110 hover:opacity-100 ${transformClass}`}
              >
                <div className="relative aspect-[3/4] sm:h-84 sm:w-60 lg:h-96 lg:w-68 overflow-hidden rounded-3xl bg-white sm:p-6 shadow-2xl shadow-black/80 border border-white/20">
                  <Image
                    src={imgSrc}
                    alt={product.displayName}
                    fill
                    className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  {isCenter && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-yellow">
                      {product.displayName}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-semibold animate-bounce-subtle">
        <span>Explorá la Colección</span>
        <ChevronDown className="h-4 w-4 text-brand-yellow" />
      </div>
    </section>
  );
}
