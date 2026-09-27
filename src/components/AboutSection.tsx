import Image from 'next/image';
import { Shield, Sparkles, Layers, Zap, Heart } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: Shield,
      title: 'Protección Grado Superior',
      desc: 'Bordes elevados que cuidan la pantalla y el lente de la cámara contra caídas y rayones.',
    },
    {
      icon: Layers,
      title: 'Materiales Premium',
      desc: 'TPU flexible con placa de policarbonato rígida para absorción óptima de impactos.',
    },
    {
      icon: Zap,
      title: 'Calce y Botoneras Exactas',
      desc: 'Acceso perfecto a puertos de carga, parlantes y respuesta suave al tacto de los botones.',
    },
    {
      icon: Sparkles,
      title: 'Impresión Ultra HD',
      desc: 'Colores vibrantes que no se borran, no se rayan ni se ponen amarillos con el uso.',
    },
  ];

  return (
    <section id="sobre-nosotros" className="relative overflow-hidden py-14 sm:py-20 border-t border-brand-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Story & Mascot Duo */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky/15 border border-brand-sky/30 px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-sky">
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span>Conocé Case Mood</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Más que una funda, la{' '}
              <span className="text-brand-yellow">personalidad</span> de tu teléfono.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
              Nacimos para romper con las fundas genéricas y aburridas. Traemos accesorios
              que combinan moda, resistencia extrema y una vibra fresca para que lleves tu teléfono
              siempre protegido con el estilo que te representa.
            </p>

            {/* Duo Mascots Box */}
            <div className="flex items-center gap-4 rounded-2xl border border-brand-border/80 bg-brand-card p-4">
              <div className="flex -space-x-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-brand-yellow bg-white">
                  <Image src="/brand/logo-cool.jpeg" alt="Mascota Cool" fill className="object-cover" />
                </div>
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-brand-sky bg-white">
                  <Image src="/brand/logo-cute.jpeg" alt="Mascota Cute" fill className="object-cover" />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-white">Creado con pasión por el detalle</p>
                <p className="text-[11px] text-brand-muted">Seguinos en Instagram <span className="text-brand-yellow font-bold">@casemood__</span></p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Quality Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-brand-border/70 bg-brand-card p-5 transition-all hover:border-brand-yellow/50 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-extrabold text-white">{p.title}</h4>
                  <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
