'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, ExternalLink, Sparkles, Smartphone, Check } from 'lucide-react';
import { createWhatsAppConsultUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface ProductLightboxModalProps {
  product: ShowroomProduct | null;
  open: boolean;
  onClose: () => void;
}

export function ProductLightboxModal({ product, open, onClose }: ProductLightboxModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedModel(product.models[0] || '');
    }
  }, [product]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (!product || product.images.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % product.images.length);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose, product]);

  if (!open || !product) return null;

  const images = product.images.length > 0 ? product.images : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];
  const currentImage = images[activeImageIndex] || images[0];

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      // Next image
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -45) {
      // Prev image
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  }

  const whatsappUrl = createWhatsAppConsultUrl(product.displayName || product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#12161E]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-brand-border bg-brand-card shadow-2xl animate-page-fade my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-brand-bg-deep/80 text-white/80 backdrop-blur-xs transition-all hover:bg-brand-yellow hover:text-brand-bg hover:scale-105 active:scale-95"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Multi-angle HD Gallery */}
          <div className="md:col-span-7 bg-[#19212D] p-5 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-border/60">
            <div
              className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white p-4 flex items-center justify-center select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {product.isNew && (
                <span className="absolute left-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-brand-bg-deep/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-yellow shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  Nuevo
                </span>
              )}

              <div className="relative h-full w-full">
                <Image
                  src={currentImage}
                  alt={`${product.displayName} - foto ${activeImageIndex + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-contain transition-all duration-300"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-xs transition-transform hover:scale-110 active:scale-95"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-xs transition-transform hover:scale-110 active:scale-95"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto py-1">
                {images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition-all ${
                      i === activeImageIndex
                        ? 'border-brand-yellow shadow-md scale-105'
                        : 'border-brand-border/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Miniatura ${i + 1}`}
                      fill
                      sizes="56px"
                      className="object-contain p-0.5"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Conversion CTAs */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="inline-block rounded-md bg-brand-yellow/15 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-yellow">
                  {product.category}
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {product.displayName}
                </h2>
              </div>

              {/* Price Banner */}
              <div className="rounded-2xl border border-brand-border/80 bg-brand-bg-deep/70 p-4">
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider">Precio en Tienda Oficial</p>
                <p className="mt-1 text-3xl font-black text-brand-yellow">
                  ${product.price.toLocaleString('es-AR')}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-brand-muted">
                {product.description}
              </p>

              {/* Compatible Models Selector */}
              {product.models && product.models.length > 0 && (
                <div className="space-y-2 pt-2">
                  <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    <Smartphone className="h-3.5 w-3.5 text-brand-yellow" />
                    <span>Seleccioná tu modelo:</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                    {product.models.map((m) => {
                      const isSelected = selectedModel === m;
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setSelectedModel(m)}
                          className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-all ${
                            isSelected
                              ? 'border-brand-yellow bg-brand-yellow text-brand-bg shadow-sm'
                              : 'border-brand-border bg-brand-bg text-brand-muted hover:border-brand-yellow/60 hover:text-white'
                          }`}
                        >
                          {m}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Actions Buttons */}
            <div className="space-y-3 pt-4 border-t border-brand-border/60">
              {/* Primary: Ecommerce Store Link */}
              <a
                href={product.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-5 py-3.5 text-sm font-black text-brand-bg shadow-lg shadow-brand-yellow/20 transition-all hover:bg-brand-yellow-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                <span>Comprar en Tienda Oficial</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              {/* Secondary: WhatsApp Direct Consult */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-xs font-bold text-emerald-400 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/80 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
