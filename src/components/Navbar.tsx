'use client';

import Image from 'next/image';
import { ShoppingBag, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { CASEMOOD_INSTAGRAM, CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border/60 bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-brand-yellow/80 bg-white shadow-xs transition-transform group-hover:scale-105">
            <Image
              src="/brand/logo-cool.jpeg"
              alt="Case Mood Logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white group-hover:text-brand-yellow transition-colors">
              CASE MOOD
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-yellow leading-none">
              Showroom
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
          <a href="#studio" className="hover:text-brand-yellow transition-colors">
            Studio
          </a>
          <a href="#detalles" className="hover:text-brand-yellow transition-colors">
            Detalles
          </a>
          <a href="#colecciones" className="hover:text-brand-yellow transition-colors">
            Colecciones
          </a>
          <a href="#galeria" className="hover:text-brand-yellow transition-colors">
            Galería
          </a>
          <a
            href={CASEMOOD_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
          >
            <InstagramIcon className="h-3.5 w-3.5 text-rose-400" />
            <span>@casemood__</span>
          </a>
        </nav>

        {/* Right CTA Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={createGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-brand-border bg-brand-card px-3.5 py-2 text-xs font-bold text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href={CASEMOOD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-brand-yellow px-4 py-2 text-xs font-black text-brand-bg shadow-sm transition-all hover:bg-brand-yellow-hover hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Tienda Online</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  );
}
