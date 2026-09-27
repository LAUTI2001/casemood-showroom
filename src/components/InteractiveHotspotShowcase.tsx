'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Plus, CheckCircle2, Eye, Zap, Layers, Compass } from 'lucide-react';
import type { ShowroomProduct } from '../types';

interface InteractiveHotspotShowcaseProps {
  product?: ShowroomProduct;
}

interface HotspotItem {
  id: number;
  topPercent: number;
  leftPercent: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const HOTSPOTS: HotspotItem[] = [
  {
    id: 1,
    topPercent: 22,
    leftPercent: 32,
    title: 'Bisel Elevado de 1.5mm',
    subtitle: 'Protección Integral de Cámara',
    description: 'El marco sobresale milimétricamente para evitar que los lentes rocen o se rayen al apoyar el celular en cualquier superficie.',
    icon: '📸',
  },
  {
    id: 2,
    topPercent: 12,
    leftPercent: 82,
    title: 'Esquinas Air-Cushion',
    subtitle: 'Absorción de Impactos 360°',
    description: 'Micro-cámaras de aire perimetrales que disipan la fuerza de caídas de hasta 2 metros protegiendo la pantalla y el chasis.',
    icon: '🛡️',
  },
  {
    id: 3,
    topPercent: 54,
    leftPercent: 48,
    title: 'Impresión Ultra-HD UV',
    subtitle: 'Fidelidad de Color Permanente',
    description: 'Pigmentos curados bajo luz ultravioleta. Los colores mantienen su brillo y saturación intactos, sin desteñirse ni descascararse.',
    icon: '🎨',
  },
  {
    id: 4,
    topPercent: 82,
    leftPercent: 70,
    title: 'Textura Soft-Touch Ergonómica',
    subtitle: 'Agarre Seguro & Anti-Huellas',
    description: 'Acabado suave al tacto que no resbala de las manos ni acumula marcas de dedos o transpiración.',
    icon: '✨',
  },
];

export function InteractiveHotspotShowcase({ product }: InteractiveHotspotShowcaseProps) {
  const [activeHotspotId, setActiveHotspotId] = useState<number>(1);

  const activeHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId) || HOTSPOTS[0];
  const caseImg = product?.images[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg';

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-[#090C12] overflow-hidden border-b border-white/10 select-none">
      {/* Ambient Halo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-yellow/10 blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold text-brand-yellow mb-3">
            <Shield className="h-3.5 w-3.5" />
            <span>Ingeniería &amp; Detalle</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Cada milímetro tiene un <span className="text-brand-yellow">propósito</span>
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-slate-400 max-w-xl">
            Tocá los puntos interactivos sobre la funda para descubrir cómo combinamos arte de vanguardia con protección militar.
          </p>
        </div>

        {/* Interactive Layout: Case on Left, Feature Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Giant Case with Pulsing Hotspots */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative aspect-[3/4] h-84 w-60 sm:h-[480px] sm:w-[350px] lg:h-[540px] lg:w-[390px] overflow-hidden rounded-3xl bg-white p-6 sm:p-10 shadow-2xl shadow-black/90 border border-white/20">
              <div className="relative h-full w-full">
                <Image
                  src={caseImg}
                  alt="Case Mood Engineering"
                  fill
                  sizes="400px"
                  className="object-contain p-2"
                />

                {/* Pulsing Hotspot Pins */}
                {HOTSPOTS.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspotId;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      className={`group absolute -translate-x-1/2 -translate-y-1/2 z-30 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-yellow text-brand-bg scale-110 shadow-xl shadow-brand-yellow/50 ring-4 ring-brand-yellow/30'
                          : 'bg-slate-950/85 text-white hover:bg-brand-yellow hover:text-brand-bg hover:scale-105 border border-white/40 shadow-lg'
                      }`}
                      style={{
                        top: `${hotspot.topPercent}%`,
                        left: `${hotspot.leftPercent}%`,
                      }}
                      aria-label={hotspot.title}
                    >
                      {isActive ? (
                        <span className="text-xs font-black">{hotspot.icon}</span>
                      ) : (
                        <Plus className="h-4 w-4 stroke-[3]" />
                      )}

                      {/* Ping Animation Ring */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-ping opacity-75" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Feature Details Cards (Apple-style list) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {HOTSPOTS.map((hotspot) => {
              const isActive = hotspot.id === activeHotspotId;
              return (
                <div
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                    isActive
                      ? 'bg-white/10 border-brand-yellow/60 shadow-xl shadow-brand-yellow/5 translate-x-1'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl sm:text-2xl">{hotspot.icon}</span>
                    <div>
                      <h3 className={`text-base sm:text-lg font-black tracking-tight ${isActive ? 'text-brand-yellow' : 'text-white'}`}>
                        {hotspot.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400">
                        {hotspot.subtitle}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal animate-fadeIn">
                      {hotspot.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
