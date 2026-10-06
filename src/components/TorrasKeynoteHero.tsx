'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, ExternalLink, Sparkles, ChevronDown } from 'lucide-react';
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

interface TorrasKeynoteHeroProps {
  products: ShowroomProduct[];
}

export function TorrasKeynoteHero({ products: initialProducts }: TorrasKeynoteHeroProps) {
  const { texts, products: contextProducts } = useShowroomConfig();
  const products = contextProducts.length > 0 ? contextProducts : initialProducts;

  // Selected hero product
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const heroProducts = products.slice(0, 6);
  const activeProduct = heroProducts[selectedCaseIdx] || heroProducts[0] || products[0];

  // 3D Parallax Tilt state
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 20, y: -y * 20 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const mainImage = activeProduct?.images?.[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg';

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] sm:min-h-screen w-full flex flex-col justify-between items-center pt-8 sm:pt-14 pb-10 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-[#06080D] select-none perspective-1000"
    >
      {/* Background Radial Glow & Dark Studio Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-radial from-orange-500/20 via-rose-600/15 to-transparent blur-[100px] sm:blur-[160px] animate-neon-rim" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[900px] h-[300px] bg-radial from-sky-500/10 to-transparent blur-[120px]" />

      {/* Top Eyebrow (Matching Reference Image 3) */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-300 backdrop-blur-2xl shadow-xl shadow-black/60 mb-3 sm:mb-4">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Elevated Protection for What Lies Ahead.</span>
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        </div>

        {/* Monumental Titanium 3D Headline (Matching Reference Image 3 "AIR PRO") */}
        <h1 className="text-6xl sm:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none animate-titanium uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          AIR PRO
        </h1>

        <p className="mt-2 sm:mt-4 text-xs sm:text-lg text-slate-400 max-w-xl font-medium leading-relaxed px-4">
          Every line is engineered for impact. Built to protect. Designed to belong.
        </p>

        {/* Action Pills */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-black text-black shadow-2xl shadow-white/20 transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ir a la Tienda Oficial</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-400 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 3D Floating Stage with Glowing Top Rim Light (Exact match to Image 3) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-6 sm:my-10">
        {/* Intense Curved Neon Rim Light Bar sitting right on top of the case curve */}
        <div className="relative w-64 sm:w-96 h-4 sm:h-6 -mb-3 sm:-mb-5 z-30 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-[3px] animate-neon-rim opacity-95" />

        {/* 3D Tilting Case Container */}
        <div
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[460px] lg:w-[350px] overflow-hidden rounded-[36px] bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent p-5 sm:p-8 border-2 border-white/20 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex items-center justify-center group"
        >
          {/* Subtle Ambient Reflection Sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-60" />

          {/* Active Phone Case Render */}
          <div className="relative h-full w-full">
            <Image
              src={optimizeCloudinaryUrl(mainImage, 1000)}
              alt={activeProduct?.displayName || 'CaseMood Air Pro'}
              fill
              priority
              sizes="(min-width: 1024px) 350px, 260px"
              className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Spec Badges on the Case */}
          <div className="absolute top-4 left-4 rounded-full bg-black/80 border border-white/20 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-amber-300 backdrop-blur-md">
            1.5mm Bezel
          </div>
          <div className="absolute bottom-4 right-4 rounded-full bg-black/80 border border-white/20 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-orange-400 backdrop-blur-md">
            Dual Airbags
          </div>
        </div>

        {/* Quick Model Selector Switcher Pills */}
        <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto max-w-full px-2 py-1 scrollbar-none">
          {heroProducts.map((p, idx) => {
            const isSel = idx === selectedCaseIdx;
            return (
              <button
                key={p.id + idx}
                type="button"
                onClick={() => setSelectedCaseIdx(idx)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all duration-300 whitespace-nowrap ${
                  isSel
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {p.displayName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-bold animate-bounce-subtle">
        <span>Deslizá para explorar la ingeniería</span>
        <ChevronDown className="h-4 w-4 text-amber-400" />
      </div>
    </section>
  );
}
