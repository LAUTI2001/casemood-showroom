'use client';

import Image from 'next/image';
import { Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';
import { getEcommerceProductUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface ArtisticMosaicSectionProps {
  products: ShowroomProduct[];
}

export function ArtisticMosaicSection({ products }: ArtisticMosaicSectionProps) {
  const mosaicItems = products.slice(0, 6);
  if (mosaicItems.length < 2) return null;

  return (
    <section className="relative py-20 px-4 sm:px-8 border-t border-brand-border/40 overflow-hidden bg-brand-bg-deep select-none">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky/40 bg-brand-sky/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-brand-sky mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Mosaico Editorial</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ESTILOS QUE <span className="text-brand-yellow">INSPIRAN</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted max-w-lg">
            Cada funda es una pieza de arte diseñada para resistir el día a día sin perder color ni brillo.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mosaicItems.map((p, i) => {
            const img = p.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';
            const storeUrl = getEcommerceProductUrl(p.name);

            return (
              <div
                key={p.name + i}
                className="group relative overflow-hidden rounded-3xl glass-panel p-6 flex flex-col justify-between transition-all duration-500 hover:border-brand-yellow/60 hover:shadow-2xl hover:shadow-brand-yellow/10"
              >
                <div className="relative aspect-square w-full rounded-2xl bg-white p-6 overflow-hidden shadow-inner mb-4 transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src={img}
                    alt={p.displayName}
                    fill
                    sizes="400px"
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-sky">
                      {p.category}
                    </span>
                    {p.isNew && (
                      <span className="text-[10px] font-black uppercase text-brand-yellow bg-brand-yellow/20 px-2 py-0.5 rounded-full">
                        Nuevo
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-white uppercase group-hover:text-brand-yellow transition-colors">
                    {p.displayName}
                  </h3>

                  <p className="text-xs text-brand-muted line-clamp-2">
                    {p.description}
                  </p>

                  <a
                    href={storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 pt-2 text-xs font-black text-brand-yellow hover:text-white transition-colors"
                  >
                    <span>Ver en Tienda Oficial</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
