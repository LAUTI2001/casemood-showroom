'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layers, Sparkles, Shield, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';

interface LayerSpec {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  offsetY: number;
  rotateZ: number;
}

const ART_LAYERS: LayerSpec[] = [
  {
    id: 1,
    title: 'Capa 1: Óleo & Pigmentos UV Curados',
    subtitle: 'Fidelidad cromática 1200 DPI y filtro anti-amarilleo',
    description: 'Tintas curadas por fotopolimerización UV multicapa que conservan la pureza del color, los rosas y mostazas intactos bajo el sol.',
    badge: 'Chroma Brilliance',
    badgeColor: 'text-pink-300 bg-pink-500/15 border-pink-400/30',
    offsetY: -95,
    rotateZ: -4,
  },
  {
    id: 2,
    title: 'Capa 2: Placa de Policarbonato Blindado',
    subtitle: 'Escudo rígido anti-torsión estructural',
    description: 'Blindaje de alta densidad que distribuye el impacto de caídas severas e impide que el cuerpo de la funda se doble o deforme.',
    badge: 'Grado Militar',
    badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    offsetY: -30,
    rotateZ: 2,
  },
  {
    id: 3,
    title: 'Capa 3: Chasis Flex TPU con Airbags',
    subtitle: 'Amortiguación perimetral y bisel de cámara 1.5mm',
    description: 'Polímero elástico con micro-cámaras de aire en las cuatro esquinas que disipan instantáneamente el golpe contra pisos duros.',
    badge: 'Dual Airbags',
    badgeColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
    offsetY: 35,
    rotateZ: -2,
  },
  {
    id: 4,
    title: 'Capa 4: Interior Soft-Touch Aterciopelado',
    subtitle: 'Cuidado milimétrico para la espalda de vidrio',
    description: 'Forro aterciopelado que abraza el teléfono con máxima suavidad, evitando rayaduras por fricción o polvo atrapado.',
    badge: '100% Anti-Rayas',
    badgeColor: 'text-purple-300 bg-purple-500/15 border-purple-400/30',
    offsetY: 100,
    rotateZ: 3,
  },
];

export function InteractiveLayerSculpture() {
  const [explosion, setExplosion] = useState(60); // 0 to 100%
  const [activeLayerId, setActiveLayerId] = useState(1);

  const activeLayer = ART_LAYERS.find((l) => l.id === activeLayerId) || ART_LAYERS[0];

  return (
    <section id="escultura-3d" className="relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#100B13] overflow-hidden select-none border-b border-white/10">
      {/* Dynamic Background Fluid Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-radial from-pink-500/15 via-amber-500/10 to-transparent blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-2xl mb-4 shadow-xl">
            <Layers className="h-3.5 w-3.5" />
            <span>Escultura & Despiece 3D · Engineering Art</span>
          </div>

          <h2 className="font-display text-4xl sm:text-7xl font-black text-white tracking-tight leading-tight">
            Anatomía de una <span className="animate-pastel-text italic font-normal">Obra Blindada</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-xl font-medium">
            Deslizá el control para separar la funda en sus 4 capas de protección o tocá cada nivel para inspeccionarlo en 3D.
          </p>
        </div>

        {/* 3D Exploder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: 3D Exploded Visual Stage */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[560px] relative perspective-1000">
            {/* Interactive Exploded Stack */}
            <div className="relative h-80 w-56 sm:h-[440px] sm:w-72 flex items-center justify-center transform-style-3d">
              {ART_LAYERS.map((layer) => {
                const isCurrent = layer.id === activeLayerId;
                const factor = explosion / 100;
                const currentOffsetY = layer.offsetY * factor;
                const currentRotateZ = layer.rotateZ * factor;
                const currentScale = 1 - Math.abs(layer.offsetY) * 0.0008 * factor;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    style={{
                      transform: `translateY(${currentOffsetY}px) rotateZ(${currentRotateZ}deg) scale(${currentScale})`,
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                      zIndex: isCurrent ? 40 : 30 - layer.id,
                    }}
                    className={`absolute cursor-pointer aspect-[3/4] h-72 w-48 sm:h-96 sm:w-64 rounded-[36px] overflow-hidden p-5 border transition-all duration-300 ${
                      isCurrent
                        ? 'border-amber-300 ring-4 ring-amber-400/30 shadow-[0_20px_50px_rgba(245,197,24,0.35)] bg-gradient-to-b from-white/20 to-white/5'
                        : 'border-white/20 bg-gradient-to-b from-white/10 to-transparent hover:border-white/40 shadow-2xl'
                    }`}
                  >
                    <Image
                      src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg', 700)}
                      alt={layer.title}
                      fill
                      className="object-contain p-2 drop-shadow-2xl"
                    />

                    {/* Layer Identifier Floating Badge */}
                    <div className="absolute top-4 left-4 rounded-full bg-black/85 border border-white/20 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-amber-300 backdrop-blur-md">
                      Capa 0{layer.id}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explosion Slider Control */}
            <div className="w-full max-w-sm mt-8 sm:mt-12 flex flex-col items-center gap-2 z-20">
              <div className="flex items-center justify-between w-full text-xs font-bold text-slate-400">
                <span>Ensamblada</span>
                <span className="text-amber-300 font-black">{explosion}% Expandida</span>
                <span>Desarmada</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={explosion}
                onChange={(e) => setExplosion(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-300"
              />
            </div>
          </div>

          {/* Right: Layer Info Details Card */}
          <div className="lg:col-span-5 space-y-4">
            {ART_LAYERS.map((layer) => {
              const isSelected = layer.id === activeLayerId;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`group relative rounded-[28px] border p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-amber-300 bg-gradient-to-r from-amber-400/15 via-white/[0.04] to-transparent shadow-xl shadow-amber-400/10'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full border ${layer.badgeColor}`}>
                      {layer.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Nivel 0{layer.id}
                    </span>
                  </div>

                  <h3 className="font-display mt-2 text-lg sm:text-xl font-black text-white tracking-tight">
                    {layer.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-medium">
                    {layer.description}
                  </p>

                  {isSelected && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-black text-amber-300">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Capa activa en el visor 3D</span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Store Link Pill */}
            <div className="pt-3">
              <a
                href={CASEMOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 px-6 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explorar todas las fundas en la Tienda Oficial</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
