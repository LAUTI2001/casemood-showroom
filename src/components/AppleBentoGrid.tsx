'use client';

import Image from 'next/image';
import { Sparkles, ArrowUpRight, ShoppingBag, Layers, Flame, Star, Shield } from 'lucide-react';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AppleBentoGridProps {
  products: ShowroomProduct[];
}

export function AppleBentoGrid({ products }: AppleBentoGridProps) {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-[#0B0F17] overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Bento Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 mb-3">
            <Layers className="h-3.5 w-3.5 text-brand-yellow" />
            <span>Colecciones Insignia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Diseñadas para cada <span className="text-brand-yellow">Mood</span>
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-slate-400 max-w-lg">
            Cuatro líneas conceptuales con acabados exclusivos creados para transformar tu celular en una extensión de tu estilo.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bento Card 1: Velvet & Luxe */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2D121B] via-[#1A0C13] to-[#0E070B] p-8 sm:p-10 border border-rose-500/20 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-rose-500/50">
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-400">
                Serie Exclusiva
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Velvet &amp; Luxe
              </h3>
              <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                Textura de seda al tacto con tonos borgoña y plata de distinción absoluta.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <a
                href={CASEMOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all group-hover:bg-rose-500 group-hover:text-white"
              >
                <span>Explorar Colección</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Floating Case Art */}
            <div className="absolute -right-6 -bottom-8 h-64 w-52 sm:h-76 sm:w-60 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg"
                alt="Velvet & Luxe"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bento Card 2: Wave 3D Relief */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E2738] via-[#131924] to-[#0A0E17] p-8 sm:p-10 border border-brand-yellow/20 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-brand-yellow/50">
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">
                Relieve Táctil 3D
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Wave Series
              </h3>
              <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                Ondulaciones ergonómicas que se adaptan naturalmente a la palma de tu mano.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <a
                href={CASEMOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all group-hover:bg-brand-yellow group-hover:text-brand-bg"
              >
                <span>Explorar Colección</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Floating Case Art */}
            <div className="absolute -right-6 -bottom-8 h-64 w-52 sm:h-76 sm:w-60 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="https://res.cloudinary.com/tehmhtfm/image/upload/v1786810926/casemood-productos/shrpehsaz9cw0rgnh50s.jpg"
                alt="Wave Series"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bento Card 3: Street & Wild */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#261B12] via-[#18110B] to-[#0D0906] p-8 sm:p-10 border border-orange-500/20 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-orange-500/50">
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                Streetwear Culture
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Wild &amp; Street
              </h3>
              <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                Estampas audaces inspiradas en la moda urbana y la cultura sneaker.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <a
                href={CASEMOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all group-hover:bg-orange-500 group-hover:text-white"
              >
                <span>Explorar Colección</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Floating Case Art */}
            <div className="absolute -right-6 -bottom-8 h-64 w-52 sm:h-76 sm:w-60 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="https://res.cloudinary.com/tehmhtfm/image/upload/v1790532048/casemood-productos/jwhlja54dgdfcn2plhq2.jpg"
                alt="Wild & Street"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bento Card 4: Pop & Neon Vibes */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E122A] via-[#1A0B18] to-[#0E060D] p-8 sm:p-10 border border-pink-500/20 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-pink-500/50">
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
                Pop &amp; Aesthetics
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Pop Vibes
              </h3>
              <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                Chispas de energía fucsia, cerezas y destellos para iluminar cada foto frente al espejo.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <a
                href={CASEMOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all group-hover:bg-pink-500 group-hover:text-white"
              >
                <span>Explorar Colección</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Floating Case Art */}
            <div className="absolute -right-6 -bottom-8 h-64 w-52 sm:h-76 sm:w-60 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="https://res.cloudinary.com/tehmhtfm/image/upload/v1787061991/casemood-productos/u7gah6fum5tgdrdczpjf.jpg"
                alt="Pop Vibes"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
