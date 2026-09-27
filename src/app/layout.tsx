import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingMobileDock } from '../components/FloatingMobileDock';

export const metadata: Metadata = {
  metadataBase: new URL('https://casemood.pages.dev'),
  title: 'Case Mood · Showroom Oficial | Fundas y Accesorios para Celular',
  description: 'Descubrí los diseños exclusivos de Case Mood. Fundas con personalidad, protección contra caídas y calce exacto para iPhone y Samsung. Compra directa en tienda online o por WhatsApp.',
  keywords: ['fundas de celular', 'case mood', 'fundas iphone', 'fundas samsung', 'cases argentina'],
  authors: [{ name: 'Case Mood' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Case Mood · Showroom Oficial de Fundas',
    description: 'Viste tu celular con la vibra y el estilo que va con vos. Colección exclusiva Case Mood.',
    url: 'https://casemood.pages.dev',
    siteName: 'Case Mood Showroom',
    images: [
      {
        url: '/brand/logo-wordmark.jpeg',
        width: 800,
        height: 600,
        alt: 'Case Mood Showroom',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingMobileDock />
      </body>
    </html>
  );
}
