'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layers, Sparkles, Shield, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';
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
  opacity: number;
}

const LAYERS_DATA: LayerSpec[] = [
  {
    id: 1,
    title: 'Capa 1: Cristal & Tinta UV Ultra HD',
    subtitle: 'Impresión indeleble de alta fidelidad',
    description: 'Tintas curadas por fotopolimerización UV multicapa con filtro anti-amarilleo que garantiza colores nítidos y brillantes por años.',
    badge: '1200 DPI Chroma',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    offsetY: -90,
    rotateZ: -4,
    opacity: 1,
  },
  {
    id: 2,
    title: 'Capa 2: Placa de Policarbonato Blindado',
    subtitle: 'Escudo rígido anti-torsión',
    description: 'Estructura rígida de policarbonato de alta densidad que distribuye las cargas de impacto e impide que la funda se doble o deforme.',
    badge: 'Grado Militar',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    offsetY: -30,
    rotateZ: 2,
    opacity: 0.9,
  },
  {
    id: 3,
    title: 'Capa 3: Bumper TPU Shock-Absorbing',
    subtitle: 'Airbags en 4 esquinas y bisel 1.5mm',
    description: 'Polímero termoplástico flexible con micro-cámaras de aire perimetrales que amortiguan caídas severas de hasta 2 metros de altura.',
    badge: 'Dual Airbags',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    offsetY: 30,
    rotateZ: -2,
    opacity: 0.85,
  },
  {
    id: 4,
    title: 'Capa 4: Recubrimiento Interior Soft-Touch',
    subtitle: 'Protección absoluta para el vidrio trasero',
    description: 'Acabado suave tipo terciopelo que amortigua el contacto directo con la espalda del celular, anulando rayas por polvo o fricción diaria.',
    badge: '100% Anti-Rayas',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    offsetY: 90,
    rotateZ: 3,
    opacity: 0.75,
  },
];

export function InteractiveLayerExploder() {
  const [explosion, setExplosion] = useState(50); // 0 to 100%
  const [activeLayerId, setActiveLayerId] = useState(1);

  const activeLayer = LAYERS_DATA.find((l) => l.id === activeLayerId) || LAYERS_DATA[0];

  return (
    <section id="ingenieria" className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090C12] overflow-hidden select-none border-b border-white/10">
      {/* Dynamic Ambient Background Aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-radial from-amber-500/15 via-purple-600/10 to-transparent blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Ribbon */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-xl mb-3 shadow-lg shadow-amber-400/10">
            <Layers className="h-3.5 w-3.5" />
            <span>Despiece 3D Interactivo · Layer Exploder</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Anatomía de una funda <span className="animate-titanium">impenetrable</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-xl font-medium">
            Deslizá el control para separar la funda en sus 4 capas de ingeniería o tocá cada capa para ver su función.
          </p>
        </div>

        {/* 3D Exploder Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left / Center: 3D Exploded Visual Perspective Stage */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px] relative perspective-1000">
            {/* Interactive Exploded Stack */}
            <div className="relative h-80 w-56 sm:h-[420px] sm:w-72 flex items-center justify-center transform-style-3d">
              {LAYERS_DATA.map((layer) => {
                const isCurrent = layer.id === activeLayerId;
                const factor = explosion / 100;
                const currentOffsetY = layer.offsetY * factor;
                const currentRotateZ = layer.rotateZ * factor;
                const currentScale = 1 - Math.abs(layer.offsetY) * 0.001 * factor;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    style={{
                      transform: `translateY(${currentOffsetY}px) rotateZ(${currentRotateZ}deg) scale(${currentScale})`,
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease',
                      zIndex: isCurrent ? 40 : 30 - layer.id,
                    }}
                    className={`absolute cursor-pointer aspect-[3/4] h-72 w-48 sm:h-96 sm:w-64 rounded-3xl overflow-hidden p-4 border transition-all duration-300 ${
                      isCurrent
                        ? 'border-amber-400 ring-4 ring-amber-400/30 shadow-[0_20px_50px_rgba(245,197,24,0.3)] bg-gradient-to-b from-white/15 to-white/5'
                        : 'border-white/20 bg-gradient-to-b from-white/10 to-transparent hover:border-white/40 shadow-2xl'
                    }`}
                  >
                    <Image
                      src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg', 600)}
                      alt={layer.title}
                      fill
                      className="object-contain p-2 drop-shadow-2xl"
                    />

                    {/* Layer Identifier Floating Badge */}
                    <div className="absolute top-3 left-3 rounded-full bg-black/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      Capa 0{layer.id}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explosion Slider Control */}
            <div className="w-full max-w-sm mt-8 sm:mt-12 flex flex-col items-center gap-2 z-20">
              <div className="flex items-center justify-between w-full text-xs font-bold text-slate-400">
                <span>Ensamblada (0%)</span>
                <span className="text-amber-400 font-extrabold">{explosion}% Desarmada</span>
                <span>Expandida (100%)</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={explosion}
                onChange={(e) => setExplosion(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>

          {/* Right: Layer Info Details Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* List of 4 Interactive Layer Cards */}
            {LAYERS_DATA.map((layer) => {
              const isSelected = layer.id === activeLayerId;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`group relative rounded-[24px] sm:rounded-[28px] border p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-gradient-to-r from-amber-400/10 via-white/[0.04] to-transparent shadow-xl shadow-amber-400/10'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full border ${layer.badgeColor}`}>
                      {layer.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Paso 0{layer.id}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg sm:text-xl font-black text-white tracking-tight">
                    {layer.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-medium">
                    {layer.description}
                  </p>

                  {isSelected && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
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
                className="w-full flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-black text-black shadow-xl shadow-amber-400/20 hover:bg-amber-300 transition-all hover:scale-105 active:scale-95"
              >
                <span>Ver todas las fundas en la Tienda Oficial</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
