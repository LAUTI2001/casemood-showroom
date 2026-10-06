'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sparkles, ChevronDown, Compass, Heart } from 'lucide-react';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import type { ShowroomProduct } from '../types';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.47L4 29l7.72-1.876A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.75c-1.94 0-3.75-.552-5.283-1.505l-.379-.232-4.583 1.114 1.15-4.463-.248-.394A9.71 9.71 0 0 1 5.25 15c0-5.937 4.813-10.75 10.751-10.75S26.75 9.063 26.75 15 21.938 24.75 16.001 24.75Zm5.86-8.06c-.32-.16-1.895-.936-2.19-1.042-.294-.107-.508-.16-.722.16-.213.32-.828 1.042-1.016 1.256-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.481-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.525-.54-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.095-1.12 2.67s1.147 3.096 1.307 3.31c.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.523.267-.747.267-1.388.187-1.523-.08-.134-.294-.213-.614-.373Z" />
    </svg>
  );
}

interface PsychedelicArtHeroProps {
  products: ShowroomProduct[];
}

export function PsychedelicArtHero({ products }: PsychedelicArtHeroProps) {
  const heroCases = products.slice(0, 3);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 25, y: y * 25 });
  }

  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] sm:min-h-screen w-full flex flex-col justify-between items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-[#140E17] select-none perspective-1000"
    >
      {/* Liquid Mesh Background Orbs (Warm Pink, Terracotta, Mustard, Sage) */}
      <div className="pointer-events-none absolute top-10 left-10 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-pink-500/25 blur-[120px] sm:blur-[160px] animate-blob-1" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-amber-400/20 blur-[130px] sm:blur-[180px] animate-blob-2" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-emerald-600/15 blur-[140px] animate-blob-3" />

      {/* Floating Graphic Stamps / Stickers */}
      <div className="pointer-events-none absolute top-32 left-6 sm:left-16 z-20 hidden sm:flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/15 px-4 py-1.5 text-xs font-black uppercase text-pink-300 backdrop-blur-xl -rotate-6 shadow-xl animate-float-1">
        <Sparkles className="h-3.5 w-3.5 text-pink-300" />
        <span>100% Diseño de Autor</span>
      </div>

      <div className="pointer-events-none absolute top-40 right-6 sm:right-20 z-20 hidden sm:flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/15 px-4 py-1.5 text-xs font-black uppercase text-amber-300 backdrop-blur-xl rotate-6 shadow-xl animate-float-2">
        <Compass className="h-3.5 w-3.5 text-amber-300" />
        <span>Calce Milimétrico & Shock Proof</span>
      </div>

      {/* Main Title & Editorial Statement */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-slate-200 backdrop-blur-2xl shadow-xl mb-4 sm:mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-spin-slow" />
          <span>Manifiesto Visual · Edición de Vanguardia</span>
          <Sparkles className="h-3.5 w-3.5 text-pink-300 animate-spin-slow" />
        </div>

        {/* Monumental Avant-Garde Typography */}
        <h1 className="font-display text-5xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none">
          ARTE PARA <br />
          <span className="animate-pastel-text italic font-normal">LLEVAR.</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-2xl font-bold text-slate-200 max-w-2xl leading-relaxed">
          Fusionamos estampas psicodélicas, texturas táctiles y protección anti-impacto en piezas de diseño irrepetibles.
        </p>

        {/* Liquid Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-300 via-pink-400 to-rose-400 px-8 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Explorar Tienda Oficial</span>
          </a>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs sm:text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-300 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 3D Floating Triplet Orbit Stage with Cursor Parallax */}
      <div
        style={{
          transform: `rotateY(${parallax.x}deg) rotateX(${-parallax.y}deg)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center my-6 sm:my-10 h-[320px] sm:h-[440px] lg:h-[480px] transform-style-3d"
      >
        {heroCases.map((product, i) => {
          const isCenter = i === 0;
          const isLeft = i === 1;
          const isRight = i === 2;

          let transformClass = 'z-30 scale-100 sm:scale-110 shadow-[0_30px_70px_rgba(244,114,182,0.3)]';
          if (isLeft) {
            transformClass = 'z-20 -translate-x-20 sm:-translate-x-40 lg:-translate-x-52 -rotate-12 scale-85 sm:scale-95 opacity-80 sm:opacity-90 shadow-[0_20px_50px_rgba(245,197,24,0.25)]';
          }
          if (isRight) {
            transformClass = 'z-20 translate-x-20 sm:translate-x-40 lg:translate-x-52 rotate-12 scale-85 sm:scale-95 opacity-80 sm:opacity-90 shadow-[0_20px_50px_rgba(163,177,138,0.25)]';
          }

          const imgSrc = product.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

          return (
            <div
              key={product.name + i}
              className={`absolute transition-all duration-700 hover:z-40 hover:scale-115 hover:opacity-100 ${transformClass}`}
            >
              <div className="relative aspect-[3/4] h-64 w-44 sm:h-88 sm:w-64 lg:h-[410px] lg:w-[290px] overflow-hidden rounded-[36px] bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-transparent p-5 sm:p-7 backdrop-blur-2xl border-2 border-white/30 flex items-center justify-center">
                <Image
                  src={optimizeCloudinaryUrl(imgSrc, 800)}
                  alt={product.displayName}
                  fill
                  priority
                  className="object-contain p-2 drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-105"
                />

                {/* Floating Aesthetic Name Stamp */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/90 border border-white/25 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-xl backdrop-blur-md">
                  {product.displayName}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 text-slate-400 text-xs font-bold animate-bounce-subtle">
        <span>Sumergite en la Galería</span>
        <ChevronDown className="h-4 w-4 text-pink-400" />
      </div>
    </section>
  );
}
