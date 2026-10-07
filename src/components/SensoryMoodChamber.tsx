'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Check, Palette } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface MoodChamberOption {
  id: string;
  name: string;
  moodTitle: string;
  productName: string;
  tagline: string;
  paletteHex: string[];
  gradientBg: string;
  glowColor: string;
}

const MOOD_CHAMBER_OPTIONS: MoodChamberOption[] = [
  {
    id: 'pastel-dream',
    name: 'Pastel Dream',
    moodTitle: 'Rosa, Lavanda & Reflejos',
    productName: 'AURORA',
    tagline: 'Tonos suaves y destellos pastel para darle frescura a tu teléfono.',
    paletteHex: ['#F472B6', '#FDE047', '#C084FC', '#6EE7B7'],
    gradientBg: 'from-pink-950/40 via-purple-950/30 to-[#140E17]',
    glowColor: 'rgba(244, 114, 182, 0.35)',
  },
  {
    id: 'wine-royale',
    name: 'Wine Royale',
    moodTitle: 'Borgoña Profundo & Satinado',
    productName: 'WINE ROYALE',
    tagline: 'Elegancia en tono vino tinto con acabado satinado anti-marcas.',
    paletteHex: ['#881337', '#BE123C', '#F5C518', '#FDA4AF'],
    gradientBg: 'from-rose-950/50 via-red-950/30 to-[#140E17]',
    glowColor: 'rgba(190, 18, 60, 0.4)',
  },
  {
    id: 'terracotta-wild',
    name: 'Wild & Earth',
    moodTitle: 'Mostaza, Ocre & Terracota',
    productName: 'WILD',
    tagline: 'Estampados cálidos y terrosos con textura antideslizante.',
    paletteHex: ['#D97706', '#92400E', '#FBBF24', '#78350F'],
    gradientBg: 'from-amber-950/50 via-orange-950/30 to-[#140E17]',
    glowColor: 'rgba(217, 119, 6, 0.35)',
  },
  {
    id: 'wave-minimal',
    name: 'Wave 3D',
    moodTitle: 'Negro Carbón & Relieve Táctil',
    productName: 'WAVE BLACK',
    tagline: 'Ondulaciones ergonómicas que se adaptan naturalmente a la mano.',
    paletteHex: ['#1E293B', '#334155', '#F5C518', '#0F172A'],
    gradientBg: 'from-slate-900/60 via-slate-950/40 to-[#140E17]',
    glowColor: 'rgba(245, 197, 24, 0.25)',
  },
];

interface SensoryMoodChamberProps {
  products: ShowroomProduct[];
}

export function SensoryMoodChamber({ products }: SensoryMoodChamberProps) {
  const [selectedMoodIdx, setSelectedMoodIdx] = useState(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  const activeMood = MOOD_CHAMBER_OPTIONS[selectedMoodIdx] || MOOD_CHAMBER_OPTIONS[0];

  // Match corresponding product from catalog
  const currentProduct =
    products.find((p) => p.name.toUpperCase() === activeMood.productName.toUpperCase()) ||
    products.find((p) => p.displayName.toUpperCase().includes(activeMood.productName.toUpperCase())) ||
    products[0];

  const images = currentProduct?.images && currentProduct.images.length > 0
    ? currentProduct.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const storeUrl = getEcommerceProductUrl(currentProduct?.name || activeMood.productName);
  const whatsappUrl = createWhatsAppConsultUrl(currentProduct?.displayName || activeMood.name);

  return (
    <section
      id="atmospheres"
      className={`relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ${activeMood.gradientBg} overflow-hidden select-none border-b border-white/10 transition-all duration-1000`}
    >
      {/* Liquid Ambient Light Reactive Orb */}
      <div
        style={{ backgroundColor: activeMood.glowColor }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] rounded-full blur-[180px] transition-all duration-1000 opacity-60"
      />

      {/* ========================================================= */}
      {/* 🌟 GIGANTIC ATMOSPHERIC BACKGROUND LIFESTYLE POSTER 🌟 */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute bottom-10 -right-16 sm:right-6 lg:right-12 z-0 w-64 sm:w-[480px] lg:w-[600px] aspect-[4/5] rounded-[52px] overflow-hidden border-2 border-white/15 bg-white/[0.04] backdrop-blur-xl rotate-6 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-40 sm:opacity-65 lg:opacity-75">
        <Image
          src="/lifestyle/lifestyle-10.jpg"
          alt="CaseMood Atmosphere Cherry Street"
          fill
          sizes="(min-width: 1024px) 600px, 320px"
          className="object-cover filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-black uppercase tracking-wider text-slate-200 backdrop-blur-2xl mb-4 shadow-xl">
          <Palette className="h-3.5 w-3.5 text-amber-300" />
          <span>Selector de Colores & Acabados</span>
        </div>

        <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
          Encontrá tu <span className="animate-pastel-text italic font-normal">{activeMood.name}</span>
        </h2>

        <p className="mt-3 text-xs sm:text-lg text-slate-200 max-w-lg font-medium">
          {activeMood.tagline}
        </p>

        {/* Central Giant Phone Case with Reactive Ambient Backlight and Porcelain Frame */}
        <div className="relative my-10 sm:my-16 flex flex-col items-center">
          <div className="relative aspect-[3/4] h-80 w-56 sm:h-[460px] sm:w-[340px] lg:h-[500px] lg:w-[370px] overflow-hidden rounded-[44px] sm:rounded-[56px] bg-gradient-to-b from-[#FDFBF7] via-[#F6F2EC] to-[#EFEAE2] p-6 sm:p-8 backdrop-blur-2xl border-4 border-white/70 shadow-[0_35px_100px_rgba(0,0,0,0.95)] transition-all duration-700 hover:scale-105">
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
                      src={optimizeCloudinaryUrl(src, 900)}
                      alt={`${currentProduct?.displayName} - Foto ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 370px, 280px"
                      className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                      priority
                    />
                  </div>
                </div>
              );
            })}

            {/* Angle Dots inside Card */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAngleIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeAngleIdx ? 'w-5 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white'
                    }`}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Color Swatch Dots */}
          <div className="mt-4 flex items-center gap-2">
            {activeMood.paletteHex.map((hex, pIdx) => (
              <span
                key={pIdx}
                style={{ backgroundColor: hex }}
                className="h-3 w-3 rounded-full border border-black/30 shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl p-2 rounded-full bg-black/40 border border-white/15 backdrop-blur-2xl">
          {MOOD_CHAMBER_OPTIONS.map((mood, idx) => {
            const isSel = idx === selectedMoodIdx;

            return (
              <button
                key={mood.id}
                type="button"
                onClick={() => {
                  setSelectedMoodIdx(idx);
                  setActiveAngleIdx(0);
                }}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  isSel
                    ? 'bg-white text-slate-950 shadow-xl scale-105'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                <span
                  style={{ backgroundColor: mood.paletteHex[0] }}
                  className="h-2.5 w-2.5 rounded-full"
                />
                <span>{mood.name}</span>
                {isSel && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 px-8 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver {currentProduct?.displayName || activeMood.productName} en Tienda</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-xl hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-300 transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
