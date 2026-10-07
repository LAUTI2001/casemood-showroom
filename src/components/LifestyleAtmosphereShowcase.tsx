'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const LIFESTYLE_PHOTOS = [
  {
    src: '/lifestyle/lifestyle-1.jpg',
    alt: 'Lifestyle CaseMood - Colección en Mano',
    span: 'lg:col-span-4 lg:row-span-2',
    aspect: 'aspect-[9/16]',
    rotate: '-rotate-1 sm:-rotate-2',
    glow: 'from-amber-500/20 via-pink-500/10 to-transparent',
  },
  {
    src: '/lifestyle/lifestyle-2.jpg',
    alt: 'Lifestyle CaseMood - Estilo Parisienne',
    span: 'lg:col-span-4',
    aspect: 'aspect-[9/15]',
    rotate: 'rotate-1 sm:rotate-2',
    glow: 'from-rose-500/20 via-purple-500/10 to-transparent',
  },
  {
    src: '/lifestyle/lifestyle-3.jpg',
    alt: 'Lifestyle CaseMood - Playa y Océano',
    span: 'lg:col-span-4',
    aspect: 'aspect-[9/15]',
    rotate: '-rotate-2 sm:-rotate-3',
    glow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    src: '/lifestyle/lifestyle-4.jpg',
    alt: 'Lifestyle CaseMood - Noche y Estrellas',
    span: 'lg:col-span-4',
    aspect: 'aspect-[9/15]',
    rotate: 'rotate-2 sm:rotate-3',
    glow: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    src: '/lifestyle/lifestyle-5.jpg',
    alt: 'Lifestyle CaseMood - Mood Urbano & Café',
    span: 'lg:col-span-8',
    aspect: 'aspect-[16/10] sm:aspect-[16/9]',
    rotate: '-rotate-1 sm:rotate-1',
    glow: 'from-amber-500/20 via-rose-500/10 to-transparent',
  },
];

export function LifestyleAtmosphereShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#100B13] overflow-hidden select-none border-b border-white/10">
      {/* Dynamic Background Fluid Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[500px] bg-radial from-pink-500/15 via-amber-500/10 to-transparent blur-[160px] animate-blob-1" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-radial from-purple-600/15 via-transparent to-transparent blur-[140px] animate-blob-2" />

      <div className="relative mx-auto max-w-7xl">
        {/* Editorial Atmosphere Gallery Grid (Zero Links, Zero Names, Pure Visual Mood) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {LIFESTYLE_PHOTOS.map((photo, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={photo.src}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative overflow-hidden rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent p-2 sm:p-3.5 border border-white/15 backdrop-blur-2xl shadow-2xl transition-all duration-700 hover:z-30 hover:scale-[1.03] hover:border-white/30 ${photo.span} ${photo.rotate}`}
              >
                {/* Chromatic Ambient Rim Light on Hover */}
                <div
                  className={`pointer-events-none absolute -inset-10 bg-radial ${photo.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
                />

                {/* Main Large Visual Frame */}
                <div className={`relative ${photo.aspect} w-full overflow-hidden rounded-[30px] sm:rounded-[40px] bg-slate-950`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 600px, 90vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter group-hover:brightness-105"
                    priority={idx < 2}
                  />

                  {/* Subtle Grain & Vignette Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
