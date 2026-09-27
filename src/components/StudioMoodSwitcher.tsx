'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Sparkles, Check } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import { DEFAULT_SWATCH_CONFIGS } from '../data/products';
import type { ShowroomProduct, ShowroomSwatchConfig } from '../types';

interface StudioMoodSwitcherProps {
  products: ShowroomProduct[];
  initialSwatches?: ShowroomSwatchConfig[];
}

export function StudioMoodSwitcher({ products, initialSwatches }: StudioMoodSwitcherProps) {
  const [swatches, setSwatches] = useState<ShowroomSwatchConfig[]>(
    initialSwatches && initialSwatches.length > 0 ? initialSwatches : DEFAULT_SWATCH_CONFIGS
  );
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  // Client-side live sync with Admin settings
  useEffect(() => {
    fetch('https://casemood.pages.dev/api/settings')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const raw = data?.settings?.showroom_swatches_config;
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
              const activeList = parsed.filter((s: ShowroomSwatchConfig) => s && s.enabled !== false);
              if (activeList.length > 0) {
                setSwatches(activeList);
              }
            }
          } catch {
            // keep existing swatches on parse error
          }
        }
      })
      .catch(() => {});
  }, []);

  const safeIdx = selectedIdx < swatches.length ? selectedIdx : 0;
  const activeSwatch = swatches[safeIdx] || DEFAULT_SWATCH_CONFIGS[0];

  // Target product name linked to this color swatch
  const targetProductName = (activeSwatch.productName || activeSwatch.name || '').trim();

  // Find matching product in catalog
  const matchingProduct = products.find(
    (p) => p.name.trim().toUpperCase() === targetProductName.toUpperCase()
  ) || products.find(
    (p) => p.displayName?.trim().toUpperCase() === targetProductName.toUpperCase()
  ) || products[0];

  const images = matchingProduct?.images && matchingProduct.images.length > 0
    ? matchingProduct.images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const storeUrl = getEcommerceProductUrl(matchingProduct?.name || targetProductName);
  const whatsappUrl = createWhatsAppConsultUrl(matchingProduct?.displayName || matchingProduct?.name || activeSwatch.label);

  const glowStyle = activeSwatch.colorHex
    ? {
        background: `radial-gradient(circle, ${activeSwatch.colorHex}35 0%, ${activeSwatch.colorHex}15 45%, transparent 70%)`,
      }
    : undefined;

  return (
    <section className="relative w-full py-16 sm:py-28 px-4 sm:px-8 bg-[#0D111A] overflow-hidden border-b border-white/10 select-none">
      {/* Studio Backdrop Dynamic Light Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70 transition-all duration-700">
        <div
          className="h-[360px] w-[360px] sm:h-[720px] sm:w-[720px] rounded-full blur-[90px] sm:blur-[140px] transition-all duration-700"
          style={glowStyle}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Apple-style Studio Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md mb-3">
          <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
          <span>Case Mood Studio · Selector de Acabados &amp; Colores</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Elegí tu <span style={{ color: activeSwatch.colorHex || '#F5C518' }}>{activeSwatch.label}</span>
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-400 max-w-md px-2">
          {activeSwatch.tagline}
        </p>

        {/* Central Giant Studio Case */}
        <div className="relative my-8 sm:my-14 flex flex-col items-center justify-center">
          <div className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[450px] lg:w-[340px] overflow-hidden rounded-3xl bg-white p-5 sm:p-8 shadow-2xl shadow-black/80 border border-white/15 transition-all duration-700 hover:scale-[1.03]">
            {images.map((src, i) => {
              const isCurrent = i === activeAngleIdx;
              return (
                <div
                  key={src + i}
                  className={`absolute inset-0 p-5 sm:p-8 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${matchingProduct?.displayName || targetProductName} - ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 340px, 260px"
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
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md">
            <span
              className="h-2.5 w-2.5 rounded-full border border-white/40 shadow-xs"
              style={{ backgroundColor: activeSwatch.colorHex }}
            />
            <span className="font-bold text-white">{matchingProduct?.name || targetProductName}</span>
            <span className="text-slate-400">·</span>
            <span>{activeSwatch.finishName}</span>
          </div>
        </div>

        {/* Apple-style Color Swatches Bar */}
        <div className="w-full max-w-xl flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 sm:mb-4">
            Explorá los acabados
          </span>

          <div className="flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap px-2">
            {swatches.map((swatch, idx) => {
              const isSelected = idx === safeIdx;
              return (
                <button
                  key={swatch.id || swatch.name + idx}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setActiveAngleIdx(0);
                  }}
                  className={`group relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'scale-115 ring-2 ring-white shadow-lg shadow-black'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: swatch.colorHex }}
                  aria-label={`Seleccionar acabado ${swatch.label}`}
                >
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white drop-shadow-md stroke-[3]" />
                  )}
                  {/* Tooltip on hover */}
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 hidden sm:block">
                    {swatch.label} ({swatch.productName || swatch.name})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action CTAs for Active Finish */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3 text-xs sm:text-sm font-black text-brand-bg shadow-lg shadow-brand-yellow/20 hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ver {matchingProduct?.name || targetProductName} en Tienda</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-400 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Consultar Disponibilidad</span>
          </a>
        </div>
      </div>
    </section>
  );
}

