'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Plus } from 'lucide-react';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import type { ShowroomProduct } from '../types';

interface InteractiveHotspotShowcaseProps {
  product?: ShowroomProduct;
}

export function InteractiveHotspotShowcase({ product }: InteractiveHotspotShowcaseProps) {
  const { texts } = useShowroomConfig();
  const [activeHotspotId, setActiveHotspotId] = useState<number>(1);

  const hotspots = [
    {
      id: 1,
      shortLabel: 'Cámara',
      topPercent: 22,
      leftPercent: 32,
      title: texts.hotspot1Title || 'Bordes de Cámara Elevados',
      subtitle: 'Protección Integral de Cámara',
      description:
        texts.hotspot1Desc ||
        'El marco biselado de 1.8mm evita que los lentes toquen superficies y se rayen al apoyar el celular.',
      icon: '📸',
    },
    {
      id: 2,
      shortLabel: 'Air-Cushion',
      topPercent: 12,
      leftPercent: 82,
      title: texts.hotspot2Title || 'TPU Anti-Shock Perimetral',
      subtitle: 'Absorción de Impactos 360°',
      description:
        texts.hotspot2Desc ||
        'Bumper perimetral con micro-cámaras de aire que disipan la fuerza de caídas de hasta 2 metros.',
      icon: '🛡️',
    },
    {
      id: 3,
      shortLabel: 'Calce',
      topPercent: 54,
      leftPercent: 48,
      title: texts.hotspot3Title || 'Calce y Botoneras Milimétricas',
      subtitle: 'Corte Láser & Acceso Total',
      description:
        texts.hotspot3Desc ||
        'Corte láser exacto con respuesta táctil suave y acceso libre a puertos de carga y parlantes.',
      icon: '⚡',
    },
    {
      id: 4,
      shortLabel: 'Color HD',
      topPercent: 82,
      leftPercent: 70,
      title: texts.hotspot4Title || 'Impresión Ultra HD Anti-Desgaste',
      subtitle: 'Fidelidad de Color Permanente',
      description:
        texts.hotspot4Desc ||
        'Tintas curadas UV que no se decoloran, no se rayan ni se ponen amarillas con el uso diario.',
      icon: '🎨',
    },
  ];

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];
  const caseImg =
    product?.images[0] ||
    'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg';

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#090C12] overflow-hidden border-b border-white/10 select-none">
      {/* Ambient Halo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-brand-yellow/10 blur-[120px] sm:blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1 text-xs font-semibold text-brand-yellow mb-3">
            <Shield className="h-3.5 w-3.5" />
            <span>{texts.hotspotsBadge || 'Ingeniería & Detalle'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {texts.hotspotsTitle || 'Cada milímetro cuenta.'}
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-xl">
            {texts.hotspotsSubtitle ||
              'Tocá los puntos interactivos sobre la funda para descubrir cómo combinamos estética con protección militar.'}
          </p>
        </div>

        {/* Mobile Quick Selector Tabs */}
        <div className="lg:hidden flex items-center justify-center gap-2 flex-wrap mb-6">
          {hotspots.map((h) => {
            const isCurrent = h.id === activeHotspotId;
            return (
              <button
                key={h.id}
                type="button"
                onClick={() => setActiveHotspotId(h.id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-brand-yellow text-brand-bg shadow-md shadow-brand-yellow/20'
                    : 'bg-white/5 border border-white/10 text-slate-300'
                }`}
              >
                <span>{h.icon}</span>
                <span>{h.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Giant Case with Pulsing Hotspots */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative aspect-[3/4] h-72 w-52 sm:h-96 sm:w-72 lg:h-[500px] lg:w-[370px] overflow-hidden rounded-3xl bg-white p-5 sm:p-8 shadow-2xl shadow-black/90 border border-white/20">
              <div className="relative h-full w-full">
                <Image
                  src={caseImg}
                  alt="Case Mood Engineering"
                  fill
                  sizes="370px"
                  className="object-contain p-2"
                />

                {/* Pulsing Hotspot Pins */}
                {hotspots.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspotId;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      className={`group absolute -translate-x-1/2 -translate-y-1/2 z-30 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300 ${
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
                        <Plus className="h-3.5 w-3.5 stroke-[3]" />
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

            {/* Mobile: Prominent Active Feature Card directly below case */}
            <div className="lg:hidden w-full max-w-sm mt-6 rounded-2xl bg-white/10 border border-brand-yellow/40 p-5 shadow-xl">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-2xl">{activeHotspot.icon}</span>
                <div>
                  <h3 className="text-sm font-black text-brand-yellow">
                    {activeHotspot.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-300">
                    {activeHotspot.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                {activeHotspot.description}
              </p>
            </div>
          </div>

          {/* Right: Desktop Feature Details Cards (4-row list) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3.5">
            {hotspots.map((hotspot) => {
              const isActive = hotspot.id === activeHotspotId;
              return (
                <div
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                    isActive
                      ? 'bg-white/10 border-brand-yellow/60 shadow-xl shadow-brand-yellow/5 translate-x-1'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl sm:text-2xl">{hotspot.icon}</span>
                    <div>
                      <h3 className={`text-base font-black tracking-tight ${isActive ? 'text-brand-yellow' : 'text-white'}`}>
                        {hotspot.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400">
                        {hotspot.subtitle}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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
