'use client';

import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { CASEMOOD_INSTAGRAM, CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

export function Navbar() {
  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl select-none">
      <div className="flex items-center justify-between rounded-full border border-white/15 bg-[#0A0D14]/80 px-3.5 sm:px-6 py-2.5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {/* Left: Brand Logo & Title Pill */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-amber-400/80 bg-white p-0.5 shadow-sm transition-transform group-hover:scale-110">
            <Image
              src="/brand/logo-cool.jpeg"
              alt="Case Mood Logo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
              CASE MOOD
            </span>
            <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-wider bg-amber-400/15 border border-amber-400/30 text-amber-300 px-2 py-0.5 rounded-full">
              PRO
            </span>
          </div>
        </a>

        {/* Center: Clean Nav Pills (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-slate-300">
          <a href="#detalles" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Ingeniería
          </a>
          <a href="#ingenieria" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Despiece 3D
          </a>
          <a href="#galeria" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Mural Flotante
          </a>
          <a href="#studio" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Studio Colors
          </a>
          <a href="#carrusel" className="px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all">
            Lookbook
          </a>
        </nav>

        {/* Right: Quick Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-2 text-xs font-bold text-white hover:bg-white/15 hover:border-emerald-400 hover:text-emerald-400 transition-all active:scale-95"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 sm:px-5 py-2 text-xs font-black text-black shadow-lg shadow-white/10 transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Tienda</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  );
}
