'use client';

import { MessageCircle, ShoppingBag } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { CASEMOOD_INSTAGRAM, CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

export function FloatingMobileDock() {
  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <>
      {/* Mobile Floating Bottom Bar / Dock */}
      <div className="fixed bottom-4 inset-x-4 z-40 flex items-center justify-between gap-2 rounded-2xl border border-brand-border/80 bg-brand-bg-deep/90 p-2 backdrop-blur-lg shadow-2xl sm:hidden">
        {/* Instagram */}
        <a
          href={CASEMOOD_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md active:scale-95 shrink-0"
          aria-label="Instagram @casemood__"
          title="Instagram @casemood__"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>

        {/* WhatsApp Consult */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 active:scale-95 shrink-0"
          aria-label="Escribir por WhatsApp"
          title="WhatsApp Oficial"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        {/* Primary Tienda Online CTA */}
        <a
          href={CASEMOOD_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-yellow px-4 py-2.5 text-xs font-black text-brand-bg shadow-md active:scale-95"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Tienda Oficial</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2.5">
        <a
          href={CASEMOOD_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
          aria-label="Instagram @casemood__"
          title="Seguinos en Instagram"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500 px-4 py-3 text-xs font-black text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span>¿Dudas? Escribinos</span>
        </a>
      </div>
    </>
  );
}
