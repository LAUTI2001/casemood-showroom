'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Sparkles, Check } from 'lucide-react';
import { createWhatsAppConsultUrl, getEcommerceProductUrl } from '../lib/whatsapp';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import { DEFAULT_SWATCH_CONFIGS } from '../data/products';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import type { ShowroomProduct, ShowroomSwatchConfig } from '../types';

interface StudioMoodSwitcherProps {
  products: ShowroomProduct[];
  initialSwatches?: ShowroomSwatchConfig[];
}

export function StudioMoodSwitcher({ products: initialProducts, initialSwatches }: StudioMoodSwitcherProps) {
  const { texts, swatches: contextSwatches, products: contextProducts } = useShowroomConfig();
  const products = contextProducts.length > 0 ? contextProducts : initialProducts;
  const swatches =
    contextSwatches && contextSwatches.length > 0
      ? contextSwatches
      : initialSwatches && initialSwatches.length > 0
        ? initialSwatches
        : DEFAULT_SWATCH_CONFIGS;

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  const safeIdx = selectedIdx < swatches.length ? selectedIdx : 0;
  const activeSwatch = swatches[safeIdx] || DEFAULT_SWATCH_CONFIGS[0];

  // Target product name linked to this color swatch
  const targetProductName = (activeSwatch.productName || activeSwatch.name || '').trim();

  // Find matching product in catalog
  const matchingProduct =
    products.find((p) => p.name.trim().toUpperCase() === targetProductName.toUpperCase()) ||
    products.find((p) => p.displayName?.trim().toUpperCase() === targetProductName.toUpperCase()) ||
    products[0];

  const images =
    matchingProduct?.images && matchingProduct.images.length > 0
      ? matchingProduct.images
      : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  const storeUrl = getEcommerceProductUrl(matchingProduct?.name || targetProductName);
  const whatsappUrl = createWhatsAppConsultUrl(
    matchingProduct?.displayName || matchingProduct?.name || activeSwatch.label
  );

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
          <span>{texts.studioBadge || 'Case Mood Studio · Selector de Acabados & Colores'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Elegí tu <span style={{ color: activeSwatch.colorHex || '#F5C518' }}>{activeSwatch.label}</span>
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-400 max-w-md px-2">
          {activeSwatch.tagline || texts.studioSubtitle}
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
                      src={optimizeCloudinaryUrl(src, 800)}
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
                    aria-label={`Ver ángulo ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Current Swatch Name & Finish Tag */}
          <div className="mt-4 flex flex-col items-center gap-1">
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {matchingProduct?.displayName || targetProductName}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Acabado: <strong className="text-slate-200">{activeSwatch.finishName}</strong>
            </span>
          </div>
        </div>

        {/* Apple Watch-style Magnetic Color Swatch Carousel */}
        <div className="w-full max-w-xl flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex-wrap">
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
                  className={`group relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'scale-115 ring-3 ring-white ring-offset-3 ring-offset-[#0D111A] shadow-lg shadow-white/20'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  aria-label={`Seleccionar acabado ${swatch.label}`}
                >
                  <span
                    className="h-full w-full rounded-full border border-black/20 shadow-inner"
                    style={{ backgroundColor: swatch.colorHex }}
                  />

                  {isSelected && <Check className="absolute h-5 w-5 text-white drop-shadow-md" strokeWidth={3} />}

                  {/* Tooltip on hover */}
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    {swatch.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Buttons for Selected Swatch */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-black text-slate-950 hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Ver en Tienda ({matchingProduct?.displayName || targetProductName})</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-400 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>Consultar Stock</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
