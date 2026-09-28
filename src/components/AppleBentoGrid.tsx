'use client';

import Image from 'next/image';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import type { ShowroomProduct } from '../types';

interface AppleBentoGridProps {
  products: ShowroomProduct[];
}

export function AppleBentoGrid({ products }: AppleBentoGridProps) {
  const { texts } = useShowroomConfig();

  const bentoItems = [
    {
      badge: 'Serie Exclusiva',
      badgeColor: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
      title: 'Velvet & Luxe',
      description: 'Textura de seda al tacto con tonos borgoña y plata de distinción absoluta.',
      gradient: 'from-[#3A1624] via-[#1E0C14] to-[#0E060A]',
      border: 'border-rose-500/30 hover:border-rose-500/60 shadow-rose-950/20',
      btnHover: 'group-hover:bg-rose-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg',
    },
    {
      badge: 'Relieve Táctil 3D',
      badgeColor: 'text-brand-yellow bg-brand-yellow/15 border-brand-yellow/30',
      title: 'Wave Series',
      description: 'Ondulaciones ergonómicas que se adaptan naturalmente a la palma de tu mano.',
      gradient: 'from-[#1E2B40] via-[#121B29] to-[#0A0E17]',
      border: 'border-brand-yellow/30 hover:border-brand-yellow/60 shadow-amber-950/20',
      btnHover: 'group-hover:bg-brand-yellow group-hover:text-brand-bg',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786810926/casemood-productos/shrpehsaz9cw0rgnh50s.jpg',
    },
    {
      badge: 'Streetwear Culture',
      badgeColor: 'text-orange-400 bg-orange-500/15 border-orange-500/30',
      title: 'Wild & Street',
      description: 'Estampas audaces inspiradas en la moda urbana y la cultura sneaker.',
      gradient: 'from-[#352214] via-[#1C120B] to-[#0D0805]',
      border: 'border-orange-500/30 hover:border-orange-500/60 shadow-orange-950/20',
      btnHover: 'group-hover:bg-orange-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790532048/casemood-productos/jwhlja54dgdfcn2plhq2.jpg',
    },
    {
      badge: 'Pop & Aesthetics',
      badgeColor: 'text-pink-400 bg-pink-500/15 border-pink-500/30',
      title: 'Pop Vibes',
      description: 'Chispas de energía fucsia, cerezas y destellos para iluminar cada foto frente al espejo.',
      gradient: 'from-[#3B1535] via-[#1F0A1C] to-[#0F050E]',
      border: 'border-pink-500/30 hover:border-pink-500/60 shadow-pink-950/20',
      btnHover: 'group-hover:bg-pink-500 group-hover:text-white',
      imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061991/casemood-productos/u7gah6fum5tgdrdczpjf.jpg',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#0B0F17] overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Bento Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-brand-yellow mb-3 shadow-lg shadow-brand-yellow/10">
            <Layers className="h-3.5 w-3.5" />
            <span>{texts.bentoBadge || 'Colecciones Insignia'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {texts.bentoTitle || 'Diseñadas para cada Mood'}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-400 max-w-lg">
            {texts.bentoSubtitle ||
              'Cuatro líneas conceptuales con acabados exclusivos creados para transformar tu celular en una extensión de tu estilo.'}
          </p>
        </div>

        {/* 2x2 Bento Grid with Floating Diagonal Artwork */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {bentoItems.map((item, i) => (
            <div
              key={item.title + i}
              className={`group relative overflow-hidden rounded-[30px] sm:rounded-[36px] bg-gradient-to-br ${item.gradient} p-6 sm:p-10 border ${item.border} shadow-2xl flex flex-col justify-between min-h-[360px] sm:min-h-[420px] transition-all duration-500`}
            >
              {/* Header Text */}
              <div className="relative z-10 space-y-2 max-w-[220px] sm:max-w-xs">
                <span className={`inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Floating Case Art (Overflowing & Beautiful on Both Mobile & Desktop) */}
              <div className="absolute -right-4 -bottom-6 sm:-right-6 sm:-bottom-8 h-56 w-44 sm:h-76 sm:w-60 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                <Image
                  src={optimizeCloudinaryUrl(item.imgSrc, 700)}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 240px, 180px"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Bottom CTA Button */}
              <div className="relative z-10 mt-6 sm:mt-8">
                <a
                  href={CASEMOOD_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all ${item.btnHover} border border-white/15`}
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
