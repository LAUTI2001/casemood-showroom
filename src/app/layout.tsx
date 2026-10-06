import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingMobileDock } from '../components/FloatingMobileDock';

export const metadata: Metadata = {
  metadataBase: new URL('https://casemood.pages.dev'),
  title: 'Case Mood · Showroom Oficial | Vidriera de Diseños',
  description: 'Explorá los diseños exclusivos de Case Mood. Fundas con personalidad, protección contra caídas y calce de alta precisión.',
  keywords: ['fundas de celular', 'case mood', 'fundas de diseño', 'cases argentina'],
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
