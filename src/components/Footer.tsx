import Image from 'next/image';
import { MessageCircle, ShoppingBag, Heart, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { CASEMOOD_INSTAGRAM, CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';

export function Footer() {
  return (
    <footer className="border-t border-brand-border/60 bg-brand-bg-deep text-brand-muted pb-20 sm:pb-8 pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-brand-border/40">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-yellow/80 bg-white">
                <Image src="/brand/logo-cool.jpeg" alt="Case Mood Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">CASE MOOD</span>
            </div>
            <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
              Showroom oficial de fundas y accesorios premium para celular.
              Calidad, protección y diseño para acompañar tu estilo todos los días.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={CASEMOOD_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-4 py-2.5 text-xs font-bold text-white hover:border-brand-yellow hover:text-brand-yellow transition-all"
            >
              <InstagramIcon className="h-4 w-4 text-rose-400" />
              <span>@casemood__</span>
            </a>

            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-4 py-2.5 text-xs font-bold text-white hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href={CASEMOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-brand-yellow px-4 py-2.5 text-xs font-black text-brand-bg hover:bg-brand-yellow-hover transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Ir a la Tienda</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-brand-muted">
          <p>© {new Date().getFullYear()} Case Mood. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="h-3 w-3 text-brand-red fill-current" /> para potenciar tu estilo
          </p>
        </div>
      </div>
    </footer>
  );
}
