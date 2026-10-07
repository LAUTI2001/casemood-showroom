'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sparkles, ChevronDown, Compass, ShieldCheck, Heart, Zap } from 'lucide-react';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import { optimizeCloudinaryUrl } from '../lib/cloudinaryUrl';
import type { ShowroomProduct } from '../types';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.47L4 29l7.72-1.876A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.75c-1.94 0-3.75-.552-5.283-1.505l-.379-.232-4.583 1.114 1.15-4.463-.248-.394A9.71 9.71 0 0 1 5.25 15c0-5.937 4.813-10.75 10.751-10.75S26.75 9.063 26.75 15 21.938 24.75 16.001 24.75Zm5.86-8.06c-.32-.16-1.895-.936-2.19-1.042-.294-.107-.508-.16-.722.16-.213.32-.828 1.042-1.016 1.256-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.481-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.525-.54-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.095-1.12 2.67s1.147 3.096 1.307 3.31c.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.523.267-.747.267-1.388.187-1.523-.08-.134-.294-.213-.614-.373Z" />
    </svg>
  );
}

// 12 Curated Surtidas for the Interactive Giant Spotlight & Quick Tray
interface SpotlightHeroItem {
  name: string;
  category: string;
  moodColor: string;
  glowColor: string;
  badge: string;
  tagline: string;
}

const SPOTLIGHT_SURTIDAS: SpotlightHeroItem[] = [
  {
    name: 'AURORA',
    category: 'Aesthetic',
    moodColor: '#F5C518',
    glowColor: 'from-amber-400/40 via-pink-500/30 to-purple-600/10',
    badge: '✨ Destacada',
    tagline: 'Destellos etéreos y gradientes pastel',
  },
  {
    name: 'CHERRY',
    category: 'Pop & Vibes',
    moodColor: '#E11D48',
    glowColor: 'from-rose-500/45 via-red-600/30 to-amber-500/10',
    badge: '🍒 Más Pedida',
    tagline: 'Cerezas ilustradas y frescura pop',
  },
  {
    name: 'WINE ROYALE',
    category: 'Velvet & Luxe',
    moodColor: '#881337',
    glowColor: 'from-rose-900/50 via-red-700/35 to-purple-950/20',
    badge: '🍷 Elegancia',
    tagline: 'Borgoña profundo y acabado satinado',
  },
  {
    name: 'SURF',
    category: 'Urban & Vibes',
    moodColor: '#00A896',
    glowColor: 'from-teal-500/40 via-cyan-500/30 to-blue-600/10',
    badge: '🌊 Buena Vibra',
    tagline: 'Vibra de playa y libertad costera',
  },
  {
    name: 'WILD',
    category: 'Streetwear',
    moodColor: '#D97706',
    glowColor: 'from-amber-600/45 via-orange-600/35 to-yellow-600/10',
    badge: '🐆 Animal Print',
    tagline: 'Tonos terrosos y textura de alto agarre',
  },
  {
    name: 'BAHIA',
    category: 'Naturaleza',
    moodColor: '#3B82F6',
    glowColor: 'from-blue-500/40 via-indigo-500/30 to-cyan-400/10',
    badge: '🐚 Inspiración Marina',
    tagline: 'Estampas marinas y ondas oceánicas',
  },
  {
    name: 'CRYSTAL FLEUR',
    category: 'Aesthetic',
    moodColor: '#EC4899',
    glowColor: 'from-pink-400/45 via-rose-500/30 to-indigo-500/10',
    badge: '🌸 Relieve Botánico',
    tagline: 'Transparencia de alta densidad con flores',
  },
  {
    name: 'WAVE WITHE',
    category: 'Minimalista',
    moodColor: '#E2E8F0',
    glowColor: 'from-slate-200/35 via-slate-400/20 to-transparent',
    badge: '🤍 Relieve 3D',
    tagline: 'Ondas marfil ergonómicas ultra-resistentes',
  },
  {
    name: 'SPARK ROSA',
    category: 'Pop & Vibes',
    moodColor: '#F43F5E',
    glowColor: 'from-fuchsia-500/45 via-pink-600/30 to-amber-400/10',
    badge: '⚡ Chispas Neón',
    tagline: 'Destellos holográficos para resaltar tu outfit',
  },
  {
    name: 'STICKERS',
    category: 'Pop & Vibes',
    moodColor: '#A855F7',
    glowColor: 'from-purple-500/45 via-pink-500/30 to-cyan-500/10',
    badge: '🎨 Scrapbook Pop',
    tagline: 'Collage icónico con personajes urbanos',
  },
  {
    name: 'STREET',
    category: 'Streetwear',
    moodColor: '#64748B',
    glowColor: 'from-slate-500/40 via-purple-900/30 to-transparent',
    badge: '🛹 Streetwear Bold',
    tagline: 'Identidad urbana con marco anti-impacto',
  },
  {
    name: 'UNIVERSO',
    category: 'Aesthetic',
    moodColor: '#6366F1',
    glowColor: 'from-indigo-600/45 via-purple-600/35 to-pink-500/10',
    badge: '✨ Estrellas & Cosmos',
    tagline: 'Constelaciones con profundidad galáctica',
  },
];

interface PsychedelicArtHeroProps {
  products: ShowroomProduct[];
}

export function PsychedelicArtHero({ products }: PsychedelicArtHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Auto-cycle through surtidas if user is not hovering
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SPOTLIGHT_SURTIDAS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeSpotlight = SPOTLIGHT_SURTIDAS[activeIdx] || SPOTLIGHT_SURTIDAS[0];

  // Match corresponding product from catalog
  const currentProduct =
    products.find((p) => p.name.toUpperCase() === activeSpotlight.name.toUpperCase()) ||
    products.find((p) => p.displayName.toUpperCase().includes(activeSpotlight.name.toUpperCase())) ||
    products[0];

  const currentImage =
    currentProduct?.images && currentProduct.images.length > 0
      ? currentProduct.images[0]
      : 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 18, y: y * 18 });
  }

  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
    setIsAutoPlaying(true);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] sm:min-h-screen w-full flex flex-col justify-between items-center pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-8 overflow-hidden bg-[#140E17] select-none perspective-1000"
    >
      {/* Dynamic Background Fluid Glow Reactive to Active Case */}
      <div
        className={`pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1300px] h-[600px] sm:h-[900px] rounded-full bg-radial ${activeSpotlight.glowColor} blur-[180px] sm:blur-[220px] transition-all duration-1000`}
      />

      {/* ========================================================= */}
      {/* 🌟 GIGANTIC ATMOSPHERIC BACKGROUND POSTERS (MAXI LIFESTYLE) 🌟 */}
      {/* ========================================================= */}

      {/* Giant Background Lifestyle 1 (Left Backing - Huge Scale) */}
      <div className="pointer-events-none absolute top-16 -left-20 sm:-left-10 lg:left-4 z-0 w-64 sm:w-[480px] lg:w-[620px] aspect-[3/4] sm:aspect-[4/5] rounded-[48px] sm:rounded-[64px] overflow-hidden border-2 border-white/20 bg-white/[0.04] backdrop-blur-xl -rotate-6 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-45 sm:opacity-65 lg:opacity-80 animate-float-1">
        <Image
          src="/lifestyle/lifestyle-1.jpg"
          alt="CaseMood Atmosphere Left"
          fill
          sizes="(min-width: 1024px) 620px, 350px"
          className="object-cover filter contrast-110 saturate-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Giant Background Lifestyle 6 (Right Backing - Huge Scale) */}
      <div className="pointer-events-none absolute top-24 -right-20 sm:-right-10 lg:right-4 z-0 w-64 sm:w-[480px] lg:w-[620px] aspect-[3/4] sm:aspect-[4/5] rounded-[48px] sm:rounded-[64px] overflow-hidden border-2 border-white/20 bg-white/[0.04] backdrop-blur-xl rotate-6 shadow-[0_30px_90px_rgba(0,0,0,0.85)] opacity-45 sm:opacity-65 lg:opacity-80 animate-float-2">
        <Image
          src="/lifestyle/lifestyle-6.jpg"
          alt="CaseMood Atmosphere Right"
          fill
          sizes="(min-width: 1024px) 620px, 350px"
          className="object-cover filter contrast-110 saturate-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>



      {/* Main Title & Editorial Statement */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-slate-200 backdrop-blur-2xl shadow-xl mb-3 sm:mb-5">
          <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-spin-slow" />
          <span>Colección Oficial · Fundas de Diseño</span>
          <Sparkles className="h-3.5 w-3.5 text-pink-300 animate-spin-slow" />
        </div>

        {/* Monumental Headline */}
        <h1 className="font-display text-6xl sm:text-9xl lg:text-[10.5rem] font-black tracking-tight text-white leading-none">
          CASE<span className="animate-pastel-text italic font-normal">MOOD</span>
        </h1>

        <p className="mt-3 sm:mt-5 text-sm sm:text-2xl font-bold text-slate-200 max-w-2xl leading-relaxed">
          Diseñadas para destacar tu estilo y proteger tu celular contra caídas todos los días.
        </p>

        {/* Liquid Action CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none">
          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-300 via-pink-400 to-rose-400 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-slate-950 shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Ir a la Tienda Oficial</span>
          </a>

          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-emerald-400 hover:text-emerald-300 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 🌟 LA FUNDA GIGANTE & ESCENARIO DE SURTIDAS INTERACTIVO 🌟 */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-6 sm:my-10 flex flex-col items-center">
        {/* Giant Case 3D Stage with Interactive Floating Stickers */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          style={{
            transform: `rotateY(${parallax.x}deg) rotateX(${-parallax.y}deg)`,
            transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
          className="relative flex items-center justify-center h-[400px] sm:h-[540px] lg:h-[600px] w-full max-w-lg mx-auto transform-style-3d group"
        >
          {/* Floating Hologram Rim Light */}
          <div
            style={{
              boxShadow: `0 40px 100px -10px ${activeSpotlight.moodColor}70`,
            }}
            className="absolute inset-x-6 inset-y-4 rounded-[60px] transition-all duration-700 pointer-events-none"
          />

          {/* Floating Sticker 1: Shockproof (Top Left) */}
          <div className="absolute -top-4 -left-6 sm:-left-16 z-30 flex items-center gap-1.5 rounded-full bg-slate-950/95 border border-white/30 px-3.5 py-1.5 text-[11px] font-black uppercase text-amber-300 backdrop-blur-xl shadow-2xl -rotate-12 transition-transform duration-300 hover:scale-110">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
            <span>Anti-Shock 360°</span>
          </div>

          {/* Floating Sticker 2: Premium Grip (Top Right) */}
          <div className="absolute -top-2 -right-6 sm:-right-16 z-30 flex items-center gap-1.5 rounded-full bg-slate-950/95 border border-white/30 px-3.5 py-1.5 text-[11px] font-black uppercase text-pink-300 backdrop-blur-xl shadow-2xl rotate-12 transition-transform duration-300 hover:scale-110">
            <Zap className="h-3.5 w-3.5 text-pink-300" />
            <span>Soft-Touch Grip</span>
          </div>

          {/* Floating Sticker 3: Calce Milimétrico (Bottom Left) */}
          <div className="absolute -bottom-4 -left-4 sm:-left-12 z-30 hidden sm:flex items-center gap-1.5 rounded-full bg-slate-950/95 border border-white/30 px-3.5 py-1.5 text-[11px] font-black uppercase text-emerald-300 backdrop-blur-xl shadow-2xl rotate-6 transition-transform duration-300 hover:scale-110">
            <Compass className="h-3.5 w-3.5 text-emerald-300" />
            <span>Calce Milimétrico</span>
          </div>

          {/* Floating Sticker 4: Edición Oficial (Bottom Right) */}
          <div className="absolute -bottom-2 -right-4 sm:-right-12 z-30 hidden sm:flex items-center gap-1.5 rounded-full bg-slate-950/95 border border-white/30 px-3.5 py-1.5 text-[11px] font-black uppercase text-purple-300 backdrop-blur-xl shadow-2xl -rotate-6 transition-transform duration-300 hover:scale-110">
            <Heart className="h-3.5 w-3.5 text-purple-300" />
            <span>{activeSpotlight.badge}</span>
          </div>

          {/* THE MONUMENTAL GIANT PHONE CASE DISPLAY (Solid Luxury Porcelain Frame - Zero White Artifacts) */}
          <div className="relative aspect-[3/4] h-[360px] sm:h-[490px] lg:h-[540px] w-[260px] sm:w-[360px] lg:w-[400px] overflow-hidden rounded-[48px] sm:rounded-[60px] bg-gradient-to-b from-[#FDFBF7] via-[#F6F2EC] to-[#EFEAE2] p-6 sm:p-9 border-4 border-white/70 shadow-[0_35px_100px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-700 hover:scale-105">
            {/* Animated Glossy Sheen Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            {/* Giant Phone Case Image */}
            <div className="relative h-full w-full">
              <Image
                key={activeSpotlight.name}
                src={optimizeCloudinaryUrl(currentImage, 1100)}
                alt={`Funda Gigante CaseMood - ${activeSpotlight.name}`}
                fill
                priority
                className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] transition-all duration-500 animate-fade-in"
              />
            </div>

            {/* Floating Model Badge in Case Base */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/95 border border-white/25 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 shadow-2xl backdrop-blur-md">
              {currentProduct?.displayName || activeSpotlight.name}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EXPANDED SURTIDAS SELECTOR (12 Fundas con Mini-Preview Tray) */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 w-full px-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-200">
              Colección Surtida · Tocá para cambiar en vivo ({SPOTLIGHT_SURTIDAS.length} Modelos)
            </span>
          </div>

          {/* Interactive Mini-Case Thumbnails Gallery Tray */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto max-w-5xl w-full py-3 px-2 sm:px-4 no-scrollbar">
            {SPOTLIGHT_SURTIDAS.map((item, idx) => {
              const isSel = idx === activeIdx;
              const prod = products.find((p) => p.name.toUpperCase() === item.name.toUpperCase()) || products[0];
              const thumbImg = prod?.images?.[0] || 'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg';

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative flex flex-col items-center rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shrink-0 transition-all duration-300 border cursor-pointer ${
                    isSel
                      ? 'bg-white/20 border-amber-300 scale-110 shadow-xl shadow-amber-400/20'
                      : 'bg-black/50 border-white/15 hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <div className="relative aspect-[3/4] h-14 w-11 sm:h-20 sm:w-15 rounded-xl sm:rounded-2xl bg-[#FAF8F5] p-1 flex items-center justify-center overflow-hidden">
                    <Image
                      src={optimizeCloudinaryUrl(thumbImg, 200)}
                      alt={item.name}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-black uppercase mt-1 tracking-tight ${isSel ? 'text-amber-300' : 'text-slate-300 group-hover:text-white'}`}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            {activeSpotlight.tagline} · <span className="text-amber-300 font-bold">{activeSpotlight.badge}</span>
          </p>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 flex flex-col items-center gap-1 text-slate-400 text-xs font-bold animate-bounce-subtle mt-4">
        <span>Explorá la Colección</span>
        <ChevronDown className="h-4 w-4 text-pink-400" />
      </div>
    </section>
  );
}
