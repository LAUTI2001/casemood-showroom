import {
  fetchLiveShowroomProducts,
  fetchLiveShowroomSwatches,
  fetchLiveShowroomTexts,
  fetchLiveShowroomSections,
} from '../data/products';
import { ShowroomConfigProvider } from '../context/ShowroomConfigContext';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { AppleKeynoteHero } from '../components/AppleKeynoteHero';
import { SpotlightShowcase } from '../components/SpotlightShowcase';
import { StudioMoodSwitcher } from '../components/StudioMoodSwitcher';
import { InteractiveCoverflowCarousel } from '../components/InteractiveCoverflowCarousel';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

export const revalidate = 60;

export default async function ShowroomPage() {
  const [products, swatches, texts, sections] = await Promise.all([
    fetchLiveShowroomProducts(),
    fetchLiveShowroomSwatches(),
    fetchLiveShowroomTexts(),
    fetchLiveShowroomSections(),
  ]);

  return (
    <ShowroomConfigProvider
      initialTexts={texts}
      initialSwatches={swatches}
      initialProducts={products}
    >
      <div className="flex flex-col w-full bg-[#0A0D14] min-h-screen text-white">
        {/* Scroll Progress Glow Bar */}
        <ScrollProgressBar />

        {/* 1. Monumental Hero Section */}
        {sections.hero !== false && (
          <AppleKeynoteHero products={products} />
        )}

        {/* 2. Spotlight Novedades (Visuales Gigantes, Selector Ágil & Ángulos) */}
        {sections.spotlight !== false && (
          <div id="novedades" className="scroll-mt-12 w-full">
            <SpotlightShowcase products={products} />
          </div>
        )}

        {/* 3. Studio Mood Switcher (Finish & Colors) */}
        {sections.studio !== false && (
          <div id="studio" className="scroll-mt-12 w-full">
            <StudioMoodSwitcher products={products} initialSwatches={swatches} />
          </div>
        )}

        {/* 4. Carrusel 3D Coverflow Interactivo */}
        {sections.coverflow !== false && (
          <div id="carrusel" className="scroll-mt-12 w-full">
            <InteractiveCoverflowCarousel products={products} />
          </div>
        )}

        {/* 5. Historia / Sobre CaseMood (Opcional) */}
        {sections.about && (
          <div id="sobre-nosotros" className="scroll-mt-12 w-full">
            <AboutSection />
          </div>
        )}

        {/* 6. Footer con Enlace Directo a la Tienda */}
        <Footer />
      </div>
    </ShowroomConfigProvider>
  );
}
