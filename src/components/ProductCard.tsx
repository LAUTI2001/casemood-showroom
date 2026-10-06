'use client';

import { Sparkles, Star, ExternalLink, Maximize2, ShoppingBag } from 'lucide-react';
import { ProductImageCrossfade } from './ProductImageCrossfade';
import type { ShowroomProduct } from '../types';

interface ProductCardProps {
  product: ShowroomProduct;
  onOpenModal: (product: ShowroomProduct) => void;
  priority?: boolean;
}

export function ProductCard({ product, onOpenModal, priority = false }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60 hover:shadow-2xl hover:shadow-brand-yellow/10">
      <div>
        {/* Badges Top Bar */}
        <div className="relative">
          <ProductImageCrossfade
            images={product.images}
            alt={product.displayName}
            priority={priority}
          />

          {/* Quick Zoom Button Overlay */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal(product);
            }}
            className="absolute right-3 top-3 z-30 flex h-8.5 w-8.5 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur-xs opacity-0 transition-all group-hover:opacity-100 hover:bg-brand-yellow hover:text-brand-bg hover:scale-110 active:scale-95"
            aria-label="Ver fotos ampliadas"
            title="Ver fotos ampliadas"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* New / Featured Badges */}
          <div className="absolute left-3 top-3 z-20 flex flex-col gap-1 pointer-events-none">
            {product.isNew && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-bg-deep/90 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-yellow shadow-xs">
                <Sparkles className="h-2.5 w-2.5" />
                Nuevo
              </span>
            )}
            {product.isFeatured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-950 shadow-xs">
                <Star className="h-2.5 w-2.5 fill-current" />
                Top
              </span>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="mt-3.5 flex items-center gap-2">
          <span className="rounded-md bg-brand-bg-deep px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-sky">
            {product.category}
          </span>
        </div>

        <h3
          onClick={() => onOpenModal(product)}
          className="mt-2 text-base font-extrabold text-white transition-colors group-hover:text-brand-yellow cursor-pointer line-clamp-1"
        >
          {product.displayName}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs leading-relaxed text-brand-muted line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Footer / Store Link & Details */}
      <div className="mt-4 border-t border-brand-border/60 pt-3.5 flex items-center justify-between gap-3">
        <span className="text-[11px] font-bold text-brand-muted">
          Diseño Exclusivo
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-brand-muted hover:border-brand-yellow hover:text-white transition-all active:scale-95"
            title="Ver detalles y fotos"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-brand-yellow px-3.5 py-2 text-xs font-black text-brand-bg shadow-sm transition-all hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
            title="Ver en Tienda Oficial"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Ver en Tienda</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
}
