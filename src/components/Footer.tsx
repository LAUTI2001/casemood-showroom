'use client';

import Image from 'next/image';
import { MessageCircle, ShoppingBag, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { CASEMOOD_INSTAGRAM, CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0810] text-slate-400 pb-20 sm:pb-12 pt-14 select-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-amber-300 bg-white p-0.5 shadow-lg shadow-amber-400/20">
                <Image src="/brand/logo-cool.jpeg" alt="Case Mood Logo" fill className="object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-black text-white tracking-tight">CASE MOOD</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">Artisan Showroom</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-medium">
              Obras de arte digitales y fundas de diseño exclusivo para celular. Protección de grado superior, calce milimétrico y estética de vanguardia.
            </p>
          </div>

          {/* Action Links Column */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={CASEMOOD_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-white hover:border-pink-400 hover:text-pink-300 transition-all"
            >
              <InstagramIcon className="h-4 w-4 text-pink-400" />
              <span>@casemood__</span>
            </a>

            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-white hover:border-emerald-400 hover:text-emerald-300 transition-all"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href={CASEMOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 px-6 py-3 text-xs font-black text-slate-950 hover:scale-105 transition-all shadow-lg shadow-pink-500/20"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Tienda Oficial</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Case Mood. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5 text-slate-400 font-bold">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Diseño de autor & Arte en movimiento</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
