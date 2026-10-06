'use client';

import Image from 'next/image';
import { ShoppingBag, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import type { ShowroomProduct } from '../types';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.47L4 29l7.72-1.876A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.75c-1.94 0-3.75-.552-5.283-1.505l-.379-.232-4.583 1.114 1.15-4.463-.248-.394A9.71 9.71 0 0 1 5.25 15c0-5.937 4.813-10.75 10.751-10.75S26.75 9.063 26.75 15 21.938 24.75 16.001 24.75Zm5.86-8.06c-.32-.16-1.895-.936-2.19-1.042-.294-.107-.508-.16-.722.16-.213.32-.828 1.042-1.016 1.256-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.481-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.525-.54-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.095-1.12 2.67s1.147 3.096 1.307 3.31c.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.523.267-.747.267-1.388.187-1.523-.08-.134-.294-.213-.614-.373Z" />
    </svg>
  );
}

interface AppleKeynoteHeroProps {
  products: ShowroomProduct[];
}

export function AppleKeynoteHero({ products: initialProducts }: AppleKeynoteHeroProps) {
  const { texts, products: contextProducts } = useShowroomConfig();
  const products = contextProducts.length > 0 ? contextProducts : initialProducts;
  const heroCases = products.slice(0, 3);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[96vh] w-full flex flex-col justify-between items-center pt-8 sm:pt-14 pb-10 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-[#0A0D14] select-none">
      {/* Studio Lighting Radial Glows & Aurora Keynote Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[380px] sm:w-[900px] h-[380px] sm:h-[550px] bg-radial from-amber-400/20 via-purple-600/15 to-transparent blur-[80px] sm:blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] sm:w-[950px] h-[300px] sm:h-[450px] bg-radial from-sky-500/15 via-transparent to-transparent blur-[90px] sm:blur-[150px]" />

      {/* Subtle Giant Background Metallic Typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <span className="text-[26vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          CASEMOOD
        </span>
      </div>

      {/* Header Eyebrow & Brand Duo Medallion */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Mascots & Logo Trio */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          {/* Mascot Cool */}
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full border-2 border-brand-yellow bg-white p-0.5 shadow-lg shadow-brand-yellow/30 animate-float-tilt">
            <Image src="/brand/logo-cool.jpeg" alt="Case Mood Cool" fill className="object-cover rounded-full" priority />
          </div>
          {/* Wordmark Center */}
          <div className="relative h-13 w-13 sm:h-16 sm:w-16 rounded-full border-2 border-white/60 bg-white p-1 shadow-xl">
            <Image src="/brand/logo-wordmark.jpeg" alt="Case Mood Wordmark" fill className="object-cover rounded-full" priority />
          </div>
          {/* Mascot Cute */}
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full border-2 border-brand-sky bg-white p-0.5 shadow-lg shadow-brand-sky/30 animate-float-tilt-reverse">
            <Image src="/brand/logo-cute.jpeg" alt="Case Mood Cute" fill className="object-cover rounded-full" priority />
          </div>
        </div>

        {/* Torras / Apple-style Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-xl mb-3 shadow-lg shadow-amber-400/10">
          <Sparkles className="h-3 w-3 text-amber-300 animate-spin-slow" />
          <span>{texts.heroBadge || 'Elevated Protection for What Lies Ahead'}</span>
          <Sparkles className="h-3 w-3 text-amber-300 animate-spin-slow" />
        </div>

        {/* Monumental Keynote Headline (AIR PRO / CASE MOOD PRO Aesthetic) */}
        <h1 className="text-5xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none">
          CASE MOOD <span className="bg-gradient-to-r from-amber-300 via-white to-slate-400 bg-clip-text text-transparent">PRO</span>
        </h1>

        <p className="mt-3 sm:mt-5 text-xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-slate-300 max-w-3xl leading-tight">
          {texts.heroHeadline1 || 'Diseñadas para destacar.'}{' '}
          <span className="text-amber-400">{texts.heroHeadline2 || 'Construidas para proteger.'}</span>
        </p>

        <p className="mt-2 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-xl font-medium leading-relaxed px-2">
          {texts.heroDescription ||
            'Vestí tu celular con fundas de impacto visual, calce milimétrico y protección integral contra caídas.'}
        </p>

        {/* Apple-style Pill Actions */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-amber-400 px-8 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-amber-400/30 transition-all duration-300 hover:bg-amber-300 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{texts.heroCtaStore || 'Ir a la Tienda Oficial'}</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-400 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 3D Studio Floating Case Fan (Vibrant on BOTH Mobile & Desktop) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center my-6 sm:my-10 h-[300px] sm:h-[420px] lg:h-[480px]">
        {heroCases.map((product, i) => {
          const isCenter = i === 0;
          const isLeft = i === 1;
          const isRight = i === 2;

          let transformClass = 'z-20 scale-100 sm:scale-105';
          if (isLeft) {
            transformClass = 'z-10 -translate-x-20 sm:-translate-x-36 lg:-translate-x-44 -rotate-12 scale-85 sm:scale-90 opacity-70 sm:opacity-85';
          }
          if (isRight) {
            transformClass = 'z-10 translate-x-20 sm:translate-x-36 lg:translate-x-44 rotate-12 scale-85 sm:scale-90 opacity-70 sm:opacity-85';
          }

          const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

          return (
            <div
              key={product.name + i}
              className={`absolute transition-all duration-700 hover:z-30 hover:scale-110 hover:opacity-100 ${transformClass}`}
            >
              <div className="relative aspect-[3/4] h-60 w-42 sm:h-84 sm:w-60 lg:h-96 lg:w-68 overflow-hidden rounded-3xl bg-white p-4 sm:p-6 shadow-2xl shadow-black/90 border-2 border-white/30">
                <Image
                  src={optimizeCloudinaryUrl(imgSrc, 800)}
                  alt={product.displayName}
                  fill
                  className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                  priority
                />
                {isCenter && (
                  <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/90 border border-amber-400/50 backdrop-blur-md px-3 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-lg">
                    {product.displayName}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-semibold animate-bounce-subtle">
        <span>Explorá la Colección</span>
        <ChevronDown className="h-4 w-4 text-amber-400" />
      </div>
    </section>
  );
}
