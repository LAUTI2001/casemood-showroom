'use client';

import Image from 'next/image';
import { Sparkles, ShoppingBag, MessageCircle, ShieldCheck, Truck, Heart } from 'lucide-react';
import { FeaturedHeroCarousel } from './FeaturedHeroCarousel';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface HeroSectionProps {
  products: ShowroomProduct[];
  onOpenModal?: (product: ShowroomProduct) => void;
}

export function HeroSection({ products, onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
      {/* Background Decorative Radial Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl bg-radial-glow opacity-60" />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 bg-radial-blue opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Floating Mascots & Brand Header */}
        <div className="flex flex-col items-center text-center">
          {/* Mascot Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
            {/* Mascot Cool (Sunglasses) */}
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 animate-float-slow transition-transform hover:scale-110">
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-brand-yellow/80 shadow-lg shadow-brand-yellow/20 bg-white">
                <Image
                  src="/brand/logo-cool.jpeg"
                  alt="Case Mood Mascot Cool - Con anteojos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-black text-brand-bg shadow-xs">
                😎
              </span>
            </div>

            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
              <span className="text-xs font-black uppercase tracking-wider text-brand-yellow">
                Showroom Oficial · Case Mood
              </span>
            </div>

            {/* Mascot Cute (Flower) */}
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 animate-float-reverse transition-transform hover:scale-110">
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-brand-sky/80 shadow-lg shadow-brand-sky/20 bg-white">
                <Image
                  src="/brand/logo-cute.jpeg"
                  alt="Case Mood Mascot Cute - Con flor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-sky text-[10px] font-black text-brand-bg shadow-xs">
                🌸
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Viste tu celular con la{' '}
            <span className="relative inline-block text-brand-yellow">
              vibra y estilo
              <svg
                className="absolute -bottom-1 left-0 w-full text-brand-yellow/40"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path d="M0 3 Q 50 6 100 3" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{' '}
            que va con vos.
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-brand-muted leading-relaxed">
            Descubrí nuestra vidriera digital con diseños exclusivos, materiales premium de alta
            resistencia y calce perfecto. Elegí tu favorito y conseguilo en nuestra tienda oficial.
          </p>

          {/* Main Action Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CASEMOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-brand-yellow px-6 py-3 text-sm font-black text-brand-bg shadow-xl shadow-brand-yellow/25 transition-all hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span>Ir a la Tienda Online</span>
            </a>

            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-brand-border bg-brand-card/80 px-5 py-3 text-xs font-bold text-white backdrop-blur-md transition-all hover:border-brand-yellow hover:text-brand-yellow active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>Consultas por WhatsApp</span>
            </a>
          </div>

          {/* Pillars Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] font-semibold text-brand-muted">
            <div className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 text-brand-yellow" />
              <span>Envíos a todo el país con Andreani</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Garantía de Calce Exacto</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-brand-red" />
              <span>@casemood__ en Instagram</span>
            </div>
          </div>
        </div>

        {/* Featured Hero Carousel */}
        <div className="mt-12">
          <FeaturedHeroCarousel products={products} onOpenModal={onOpenModal} />
        </div>
      </div>
    </section>
  );
}
