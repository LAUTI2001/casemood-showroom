import type { Metadata } from 'next';
import './globals.css';
import { AvantGardeNavbar } from '../components/AvantGardeNavbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://casemood.pages.dev'),
  title: 'Case Mood · Showroom Oficial de Autor | Experiencia Artística',
  description: 'Explorá los diseños exclusivos y de autor de Case Mood. Fundas con personalidad, estampas psicodélicas, protección contra caídas y calce de alta precisión.',
  keywords: ['fundas de celular', 'case mood', 'fundas de diseño', 'cases argentina', 'diseño de autor'],
  authors: [{ name: 'Case Mood' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Case Mood · Showroom de Vanguardia',
    description: 'Vestí tu celular con la vibra, el color y el arte que va con vos. Colección exclusiva Case Mood.',
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
      <body className="min-h-screen flex flex-col bg-[#140E17] text-[#FDFBF7] antialiased selection:bg-pink-500 selection:text-white">
        <AvantGardeNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
