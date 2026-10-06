'use client';

import Image from 'next/image';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.47L4 29l7.72-1.876A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.75c-1.94 0-3.75-.552-5.283-1.505l-.379-.232-4.583 1.114 1.15-4.463-.248-.394A9.71 9.71 0 0 1 5.25 15c0-5.937 4.813-10.75 10.751-10.75S26.75 9.063 26.75 15 21.938 24.75 16.001 24.75Zm5.86-8.06c-.32-.16-1.895-.936-2.19-1.042-.294-.107-.508-.16-.722.16-.213.32-.828 1.042-1.016 1.256-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.144.32-.374.481-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.525-.54-.722-.55l-.615-.011c-.213 0-.56.08-.854.4-.294.32-1.12 1.095-1.12 2.67s1.147 3.096 1.307 3.31c.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.775 2.163-1.523.267-.747.267-1.388.187-1.523-.08-.134-.294-.213-.614-.373Z" />
    </svg>
  );
}

export function AvantGardeNavbar() {
  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl select-none">
      <div className="flex items-center justify-between rounded-full border border-white/20 bg-[#1A121E]/80 px-3.5 sm:px-6 py-2.5 backdrop-blur-2xl shadow-[0_12px_45px_rgba(0,0,0,0.8)] transition-all hover:border-pink-400/40">
        {/* Left: Mascot & Brand Mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border-2 border-amber-300 bg-white p-0.5 shadow-md shadow-amber-400/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Image
              src="/brand/logo-cool.jpeg"
              alt="CaseMood Icon"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-black tracking-tight text-white group-hover:text-amber-300 transition-colors uppercase">
              CASE MOOD
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-pink-400 leading-none">
              Showroom Oficial
            </span>
          </div>
        </a>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
          <a href="#mural" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Novedades
          </a>
          <a href="#carrusel-doble" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Colección
          </a>
          <a href="#atmospheres" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Colores
          </a>
          <a href="#escultura-3d" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Protección 3D
          </a>
        </nav>

        {/* Right: Discrete Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-emerald-300 transition-all active:scale-95"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-300 via-pink-400 to-rose-400 px-4 sm:px-5 py-2 text-xs font-black text-slate-950 shadow-lg shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Tienda</span>
          </a>
        </div>
      </div>
    </header>
  );
}
