'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, Shield, Layers, Eye, Zap } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import { CASEMOOD_STORE_URL } from '../lib/whatsapp';

interface MacroSlide {
  id: string;
  tag: string;
  tagColor: string;
  headline: string;
  subheadline: string;
  bottomCallout: string;
  description: string;
  imgSrc: string;
  specs: { label: string; value: string }[];
}

const MACRO_SLIDES: MacroSlide[] = [
  {
    id: 'protection-composed',
    tag: 'Bisel de Cámara',
    tagColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    headline: 'Protection, Composed.',
    subheadline: 'Every line is engineered for impact, then refined to preserve a remarkably slim profile.',
    bottomCallout: 'Built to protect. Designed to belong.',
    description: 'Anillo perimetral sobreelevado de 1.5mm que evita cualquier contacto directo de los lentes con superficies planas.',
    imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg',
    specs: [
      { label: 'Elevación de Lentes', value: '1.5 mm' },
      { label: 'Amortiguación', value: 'Perimetral 360°' },
    ],
  },
  {
    id: 'control-refined',
    tag: 'Impact Shield',
    tagColor: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
    headline: 'Control, Refined.',
    subheadline: 'Precision in every interaction.',
    bottomCallout: 'Dual-Airbag Upgrade.',
    description: 'Micro-cámaras de aire en las cuatro esquinas que disipan instantáneamente el vector de fuerza al caer.',
    imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1790528313/casemood-productos/n1tddsj227h0fzpr2vjs.jpg',
    specs: [
      { label: 'Estructura', value: 'Airbag Doble Capa' },
      { label: 'Botoneras', value: 'Clic Táctil Milimétrico' },
    ],
  },
  {
    id: 'soft-where-it-matters',
    tag: 'Cuidado Interior',
    tagColor: 'text-pink-400 border-pink-400/30 bg-pink-500/10',
    headline: 'Soft Where It Matters.',
    subheadline: 'Soft within. Protected throughout.',
    bottomCallout: 'Zero Micro-Scratches.',
    description: 'Capa interna de tacto de seda que acaricia la espalda de vidrio del teléfono, previniendo marcas por polvo y roce.',
    imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061064/casemood-productos/vrjw7aie7lpdmuybmljo.jpg',
    specs: [
      { label: 'Forro Interno', value: 'Soft-Touch Aterciopelado' },
      { label: 'Protección Vidrio', value: '100% Anti-Rayas' },
    ],
  },
  {
    id: 'grip-with-confidence',
    tag: 'Ergonomía',
    tagColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-500/10',
    headline: 'Grip with Confidence.',
    subheadline: 'Precision in Every Hold.',
    bottomCallout: 'Ergonomic Ribbed Grip.',
    description: 'Bordes con textura micro-grabada en diagonal que se adaptan naturalmente a la palma y anulan resbalones accidentales.',
    imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833176/casemood-productos/gosnhrr7ekyli5hswcos.jpg',
    specs: [
      { label: 'Agarre', value: 'Micro-Estrías Antideslizantes' },
      { label: 'Tacto', value: 'Mate Sin Huellas' },
    ],
  },
  {
    id: 'uv-chroma-perfection',
    tag: 'Impresión Ultra HD',
    tagColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-500/10',
    headline: 'Vibrant & Everlasting.',
    subheadline: 'Zero-Yellowing. High Chroma Brilliance.',
    bottomCallout: 'Multilayer UV Cured.',
    description: 'Polímeros con filtro anti-amarilleo y tintas curadas por luz UV que resisten la radiación solar y el uso continuo.',
    imgSrc: 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg',
    specs: [
      { label: 'Filtro UV', value: 'Anti-Amarilleo Grado A' },
      { label: 'Fidelidad de Color', value: 'Ultra HD 1200 DPI' },
    ],
  },
];

export function TorrasHorizontalMacroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollToIndex(idx: number) {
    setActiveIdx(idx);
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 350;
    scrollContainerRef.current.scrollTo({
      left: idx * (cardWidth + 24),
      behavior: 'smooth',
    });
  }

  function handlePrev() {
    const prev = Math.max(0, activeIdx - 1);
    scrollToIndex(prev);
  }

  function handleNext() {
    const next = Math.min(MACRO_SLIDES.length - 1, activeIdx + 1);
    scrollToIndex(next);
  }

  return (
    <section id="detalles" className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080B10] overflow-hidden select-none border-b border-white/10">
      {/* Background Neon Spotlight Glows */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-[500px] h-[500px] bg-radial from-orange-500/15 via-transparent to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-radial from-purple-600/15 via-transparent to-transparent blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Ribbon & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-xl">
              <Shield className="h-3.5 w-3.5 text-amber-400" />
              <span>Ingeniería en Primer Plano · Macro Story</span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Diseño que se <span className="animate-titanium">siente y protege.</span>
            </h2>

            <p className="text-xs sm:text-base text-slate-400 max-w-xl font-medium">
              Deslizá horizontalmente para descubrir cada detalle constructivo fotografiado en ultra alta definición.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-xl transition-all hover:bg-white/15 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Tarjeta anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === MACRO_SLIDES.length - 1}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-xl transition-all hover:bg-white/15 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Tarjeta siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap Track (Matching Reference Images 4 & 5) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {MACRO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIdx;

            return (
              <div
                key={slide.id}
                onClick={() => scrollToIndex(idx)}
                className={`group relative shrink-0 w-[88vw] sm:w-[580px] lg:w-[680px] snap-center overflow-hidden rounded-[36px] sm:rounded-[44px] border transition-all duration-500 bg-gradient-to-b from-[#131824] via-[#0E121B] to-[#080B10] p-6 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[500px] sm:min-h-[560px] cursor-pointer ${
                  isActive
                    ? 'border-white/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] scale-[1.01]'
                    : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/20'
                }`}
              >
                {/* Header of the Card */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border ${slide.tagColor}`}>
                      {slide.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      0{idx + 1} / 0{MACRO_SLIDES.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    {slide.headline}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-300 max-w-md">
                    {slide.subheadline}
                  </p>
                </div>

                {/* Central Macro Image Box (Matches TORRAS reference shots) */}
                <div className="relative my-4 aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-white/[0.04] to-transparent p-4 sm:p-6 border border-white/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src={optimizeCloudinaryUrl(slide.imgSrc, 900)}
                    alt={slide.headline}
                    fill
                    sizes="(min-width: 1024px) 650px, 90vw"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Visual bottom pill watermark */}
                  <div className="absolute bottom-3 left-4 rounded-full bg-black/80 border border-white/20 px-3 py-1 text-[10px] font-black text-white backdrop-blur-md">
                    {slide.bottomCallout}
                  </div>
                </div>

                {/* Bottom Technical Spec Pill Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                  {slide.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-md">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {spec.label}
                      </span>
                      <span className="block text-xs sm:text-sm font-extrabold text-amber-300 mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {MACRO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIdx ? 'w-8 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir a tarjeta ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
