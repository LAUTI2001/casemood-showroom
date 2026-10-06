'use client';

import Image from 'next/image';
import { Shield, Sparkles, Layers, Eye, Zap, CheckCircle2 } from 'lucide-react';
import { useShowroomConfig } from '../context/ShowroomConfigContext';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';

export function TorrasStoryCards() {
  const { texts } = useShowroomConfig();

  return (
    <section id="detalles" className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090C12] overflow-hidden select-none border-b border-white/10">
      {/* Cinematic Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-radial from-amber-500/10 via-purple-600/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] bg-radial from-sky-500/10 via-transparent to-transparent blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header - TORRAS Keynote Editorial Style */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-md mb-4 shadow-lg shadow-black/40">
            <Shield className="h-3.5 w-3.5 text-amber-400" />
            <span>{texts.hotspotsBadge || 'Ingeniería de Protección · TORRAS Aesthetics'}</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Protection, <span className="bg-gradient-to-r from-amber-300 via-white to-slate-400 bg-clip-text text-transparent">Composed.</span>
          </h2>

          <p className="mt-4 text-base sm:text-2xl font-bold text-slate-300 max-w-2xl leading-relaxed">
            Every line is engineered for impact. Built to protect. Designed to belong.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-lg">
            Combinamos polímeros de alta absorción, bisel de cámara milimétrico y acabados táctiles para una experiencia sin concesiones.
          </p>
        </div>

        {/* Feature 1: Monumental Macro Hero Card (Raised Camera Lip & Perimeter Bumper) */}
        <div className="group relative mb-8 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-[#141923] via-[#0E121B] to-[#0A0D14] p-6 sm:p-12 lg:p-16 shadow-2xl shadow-black/80 transition-all duration-500 hover:border-amber-400/40">
          {/* Subtle grid mesh background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Technical Bullet Points */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-amber-300">
                <Sparkles className="h-3 w-3" />
                <span>Bisel de Cámara Elevado</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Lentes blindados. <br />
                <span className="text-slate-400">Cero contacto con superficies.</span>
              </h3>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-medium">
                Un anillo perimetral de 1.5mm rodea el módulo fotográfico, garantizando que los cristales nunca toquen mesas, escritorios o pisos al apoyar el celular boca arriba.
              </p>

              {/* Technical Spec Tags */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>1.5mm Labio</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">Protección perimetral de cámara</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Polímero TPU</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">Amortiguación perimetral 360°</p>
                </div>
              </div>
            </div>

            {/* Right: Close-up High-Res Case Render / Visual */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-3xl bg-gradient-to-tr from-white/[0.05] via-white/[0.08] to-transparent p-6 border border-white/15 shadow-2xl flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                <div className="relative h-full w-full">
                  <Image
                    src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg', 900)}
                    alt="Bisel de Cámara Elevado CaseMood"
                    fill
                    sizes="(min-width: 1024px) 450px, 90vw"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Visual Halo Indicator */}
                <div className="absolute top-10 right-12 flex items-center gap-2 rounded-full bg-black/80 border border-amber-400/50 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-amber-300 shadow-xl">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                  <span>Anillo 1.5mm Blindado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Corner Shock Airbag & Tactile Response (Image 4 inspired) */}
        <div className="group relative mb-8 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-[#111622] via-[#0D111A] to-[#0A0D14] p-6 sm:p-12 shadow-2xl shadow-black/80 transition-all duration-500 hover:border-purple-400/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Close-up Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-3xl bg-gradient-to-tr from-white/[0.05] via-purple-500/[0.08] to-transparent p-6 border border-white/15 shadow-2xl flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                <div className="relative h-full w-full">
                  <Image
                    src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1790528313/casemood-productos/n1tddsj227h0fzpr2vjs.jpg', 900)}
                    alt="Control Refined Esquinas Anti-Impacto"
                    fill
                    sizes="(min-width: 1024px) 450px, 90vw"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-black/80 border border-purple-400/50 backdrop-blur-md px-3.5 py-1 text-[10px] font-bold text-purple-300 shadow-xl">
                  <Zap className="h-3 w-3 text-purple-400" />
                  <span>Dual Corner Airbags</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Text */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 border border-purple-500/30 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-purple-300">
                <Layers className="h-3 w-3" />
                <span>Control, Refined</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Precision in every <br />
                <span className="text-purple-300">interaction.</span>
              </h3>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-medium">
                Botoneras moldeadas con respuesta táctil instantánea y esquinas reforzadas que disipan el 90% de la energía de impacto al caer sobre superficies duras.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Botones independientes con tacto nítido tipo clic original</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Micro-cámaras de aire internas en las cuatro esquinas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 3 & 4: Dual Photographic Cards (Image 5 inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card A: Soft Where It Matters */}
          <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-[#131822] to-[#0A0D14] p-6 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-pink-400/40">
            <div className="space-y-3">
              <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-pink-400/30 bg-pink-500/10 text-pink-300">
                Interior Care
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Soft Where It Matters.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Interior diseñado para no rayar la espalda de vidrio de tu teléfono, evitando marcas por fricción o polvo acumulado.
              </p>
            </div>

            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/[0.04] p-4 flex items-center justify-center border border-white/10">
              <Image
                src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1787061064/casemood-productos/vrjw7aie7lpdmuybmljo.jpg', 600)}
                alt="Soft Where It Matters CaseMood"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>Soft-touch interno</span>
              <span className="text-pink-300 font-bold">100% Anti-Rayas</span>
            </div>
          </div>

          {/* Card B: Grip with Confidence */}
          <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-[#131822] to-[#0A0D14] p-6 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-emerald-400/40">
            <div className="space-y-3">
              <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                Ergonomía Diaria
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Grip with Confidence.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Contornos con textura micro-grabada que previenen resbalones accidentales de la mano o bolsillos resbaladizos.
              </p>
            </div>

            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/[0.04] p-4 flex items-center justify-center border border-white/10">
              <Image
                src={optimizeCloudinaryUrl('https://res.cloudinary.com/tehmhtfm/image/upload/v1786833176/casemood-productos/gosnhrr7ekyli5hswcos.jpg', 600)}
                alt="Grip with Confidence CaseMood Wave"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>Agarre ergonómico</span>
              <span className="text-emerald-300 font-bold">Cero Deslices</span>
            </div>
          </div>
        </div>

        {/* Bottom Store Link Pill */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-amber-400 hover:scale-105 active:scale-95 shadow-xl"
          >
            <Eye className="h-4 w-4 text-amber-400" />
            <span>Ver toda la colección en la Tienda Oficial</span>
          </a>
        </div>
      </div>
    </section>
  );
}
