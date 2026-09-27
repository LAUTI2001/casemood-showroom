'use client';

import Image from 'next/image';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import type { ShowroomProduct } from '../types';

interface AppleBentoGridProps {
  products: ShowroomProduct[];
}

export function AppleBentoGrid({ products }: AppleBentoGridProps) {
  const bentoItems = [
    {
      badge: 'Serie Exclusiva',
      badgeColor: 'text-rose-400',
      title: 'Velvet & Luxe',
      description: 'Textura de seda al tacto con tonos borgoña y plata de distinción absoluta.',
      gradient: 'from-[#2D121B] via-[#1A0C13] to-[#0E070B]',
      border: 'border-rose-500/20 hover:border-rose-500/50',
      btnHover: 'group-hover:bg-rose-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg',
    },
    {
      badge: 'Relieve Táctil 3D',
      badgeColor: 'text-brand-yellow',
      title: 'Wave Series',
      description: 'Ondulaciones ergonómicas que se adaptan naturalmente a la palma de tu mano.',
      gradient: 'from-[#1E2738] via-[#131924] to-[#0A0E17]',
      border: 'border-brand-yellow/20 hover:border-brand-yellow/50',
      btnHover: 'group-hover:bg-brand-yellow group-hover:text-brand-bg',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786810926/casemood-productos/shrpehsaz9cw0rgnh50s.jpg',
    },
    {
      badge: 'Streetwear Culture',
      badgeColor: 'text-orange-400',
      title: 'Wild & Street',
      description: 'Estampas audaces inspiradas en la moda urbana y la cultura sneaker.',
      gradient: 'from-[#261B12] via-[#18110B] to-[#0D0906]',
      border: 'border-orange-500/20 hover:border-orange-500/50',
      btnHover: 'group-hover:bg-orange-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790532048/casemood-productos/jwhlja54dgdfcn2plhq2.jpg',
    },
    {
      badge: 'Pop & Aesthetics',
      badgeColor: 'text-pink-400',
      title: 'Pop Vibes',
      description: 'Chispas de energía fucsia, cerezas y destellos para iluminar cada foto frente al espejo.',
      gradient: 'from-[#2E122A] via-[#1A0B18] to-[#0E060D]',
      border: 'border-pink-500/20 hover:border-pink-500/50',
      btnHover: 'group-hover:bg-pink-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061991/casemood-productos/u7gah6fum5tgdrdczpjf.jpg',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#0B0F17] overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Bento Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 mb-3">
            <Layers className="h-3.5 w-3.5 text-brand-yellow" />
            <span>Colecciones Insignia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Diseñadas para cada <span className="text-brand-yellow">Mood</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-lg">
            Cuatro líneas conceptuales con acabados exclusivos creados para transformar tu celular en una extensión de tu estilo.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {bentoItems.map((item, i) => (
            <div
              key={item.title + i}
              className={`group relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-br ${item.gradient} p-6 sm:p-10 border ${item.border} shadow-2xl flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all duration-500`}
            >
              {/* Header Text */}
              <div className="relative z-10 space-y-2">
                <span className={`text-xs font-extrabold uppercase tracking-widest ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Responsive Artwork Container */}
              {/* Mobile: Centered in flow */}
              <div className="md:hidden relative my-4 h-48 w-full flex items-center justify-center">
                <div className="relative h-44 w-36 overflow-hidden rounded-2xl bg-white/5 p-2 backdrop-blur-sm border border-white/10">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    sizes="180px"
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Desktop: Asymmetric Floating Artwork */}
              <div className="hidden md:block absolute -right-6 -bottom-8 h-72 w-56 lg:h-80 lg:w-64 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  sizes="260px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Bottom CTA Button */}
              <div className="relative z-10 mt-4 sm:mt-6">
                <a
                  href={CASEMOOD_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all ${item.btnHover} w-full sm:w-auto`}
                >
                  <span>Explorar Colección</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
