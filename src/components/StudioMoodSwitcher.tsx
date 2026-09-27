'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface StudioMoodSwitcherProps {
  products: ShowroomProduct[];
}

interface SwatchItem {
  name: string;
  label: string;
  finishName: string;
  colorHex: string;
  textColor: string;
  tagline: string;
  glowColor: string;
}

const SWATCH_CONFIGS: SwatchItem[] = [
  {
    name: 'AURORA',
    label: 'Aurora Glow',
    finishName: 'Gradiente Ácido & Pastel',
    colorHex: '#F5C518',
    textColor: 'text-amber-400',
    tagline: 'Reflejos etéreos que mutan de color según el ángulo de la luz.',
    glowColor: 'from-amber-500/20 via-yellow-400/15 to-transparent',
  },
  {
    name: 'WINE ROYALE',
    label: 'Wine Royale',
    finishName: 'Borgoña Aterciopelado',
    colorHex: '#722F37',
    textColor: 'text-rose-400',
    tagline: 'Profundidad cromática en vino tinto con acabado satinado anti-marcas.',
    glowColor: 'from-rose-900/30 via-red-600/20 to-transparent',
  },
  {
    name: 'WAVE BLACK',
    label: 'Wave Black',
    finishName: 'Negro Carbón 3D',
    colorHex: '#1E2430',
    textColor: 'text-slate-300',
    tagline: 'Relieve de ondas ergonómicas táctiles con absorción de impactos.',
    glowColor: 'from-slate-700/30 via-slate-900/40 to-transparent',
  },
  {
    name: 'SURF',
    label: 'Surf Coast',
    finishName: 'Turquesa Oceánico',
    colorHex: '#00A896',
    textColor: 'text-teal-400',
    tagline: 'Vibra costera playera con marco reforzado para aventuras cotidianas.',
    glowColor: 'from-teal-600/25 via-cyan-500/20 to-transparent',
  },
  {
    name: 'WILD',
    label: 'Wild Leopard',
    finishName: 'Ocre & Ébano Street',
    colorHex: '#C68B59',
    textColor: 'text-orange-400',
    tagline: 'Estampado animal print de alta fidelidad con protección perimetral.',
    glowColor: 'from-orange-700/25 via-amber-600/20 to-transparent',
  },
  {
    name: 'VELVET SILVER',
    label: 'Velvet Silver',
    finishName: 'Plata Metalizado Silk',
    colorHex: '#94A3B8',
    textColor: 'text-slate-200',
    tagline: 'Sensación de seda metalizada al tacto con esquinas reforzadas.',
    glowColor: 'from-slate-400/25 via-slate-600/20 to-transparent',
  },
  {
    name: 'SPARK ROSA',
    label: 'Spark Rosa',
    finishName: 'Fucsia Neón Holográfico',
    colorHex: '#EC4899',
    textColor: 'text-pink-400',
    tagline: 'Destellos de energía vibrante que resaltan sobre cualquier superficie.',
    glowColor: 'from-pink-600/30 via-purple-600/20 to-transparent',
  },
];

export function StudioMoodSwitcher({ products }: StudioMoodSwitcherProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  const activeSwatch = SWATCH_CONFIGS[selectedIdx];

  // Find matching product in catalog
  const matchingProduct = products.find(
    (p) => p.name.toUpperCase() === activeSwatch.name.toUpperCase()
  ) || products[0];

  const images = matchingProduct?.images && matchingProduct.images.length > 0
    ? matchingProduct.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const storeUrl = getEcommerceProductUrl(matchingProduct?.name || activeSwatch.name);
  const whatsappUrl = createWhatsAppConsultUrl(matchingProduct?.displayName || activeSwatch.name);

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-[#0D111A] overflow-hidden border-b border-white/10 select-none">
      {/* Studio Backdrop Light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60 transition-all duration-700">
        <div
          className={`h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-gradient-to-tr ${activeSwatch.glowColor} blur-[140px]`}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Apple-style Studio Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md mb-3">
          <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
          <span>Case Mood Studio · Selector de Acabados</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Elegí tu <span className={activeSwatch.textColor}>{activeSwatch.label}</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-md">
          {activeSwatch.tagline}
        </p>

        {/* Central Giant Studio Case */}
        <div className="relative my-10 sm:my-14 flex flex-col items-center justify-center">
          <div className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[450px] lg:w-[340px] overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-black/80 border border-white/15 transition-all duration-700 hover:scale-[1.03]">
            {images.map((src, i) => {
              const isCurrent = i === activeAngleIdx;
              return (
                <div
                  key={src + i}
                  className={`absolute inset-0 p-6 sm:p-8 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${matchingProduct?.displayName || activeSwatch.name} - ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 340px, 280px"
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              );
            })}

            {/* Angle Switcher inside Studio Card */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAngleIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeAngleIdx ? 'w-4 bg-brand-yellow' : 'w-2 bg-slate-500 hover:bg-slate-300'
                    }`}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Finish details pill below image */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300">
            <span
              className="h-2.5 w-2.5 rounded-full border border-white/40"
              style={{ backgroundColor: activeSwatch.colorHex }}
            />
            <span>{activeSwatch.finishName}</span>
          </div>
        </div>

        {/* Apple-style Color Swatches Bar */}
        <div className="w-full max-w-xl flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Explorá los acabados
          </span>

          <div className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap px-4">
            {SWATCH_CONFIGS.map((swatch, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setActiveAngleIdx(0);
                  }}
                  className={`group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'scale-115 ring-2 ring-white shadow-lg shadow-black'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: swatch.colorHex }}
                  aria-label={`Seleccionar acabado ${swatch.label}`}
                >
                  {isSelected && (
                    <Check className="h-4 w-4 text-white drop-shadow-md stroke-[3]" />
                  )}
                  {/* Tooltip on hover */}
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {swatch.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action CTAs for Active Finish */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 text-xs sm:text-sm font-black text-brand-bg shadow-lg shadow-brand-yellow/20 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver {activeSwatch.name} en Tienda</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar Disponibilidad</span>
          </a>
        </div>
      </div>
    </section>
  );
}
