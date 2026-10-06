import {
  fetchLiveShowroomProducts,
  fetchLiveShowroomSwatches,
  fetchLiveShowroomTexts,
  fetchLiveShowroomSections,
} from '../data/products';
import { ShowroomConfigProvider } from '../context/ShowroomConfigContext';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { AppleKeynoteHero } from '../components/AppleKeynoteHero';
import { TorrasStoryCards } from '../components/TorrasStoryCards';
import { AestheticFloatingMosaic } from '../components/AestheticFloatingMosaic';
import { SpotlightShowcase } from '../components/SpotlightShowcase';
import { StudioMoodSwitcher } from '../components/StudioMoodSwitcher';
import { InteractiveCoverflowCarousel } from '../components/InteractiveCoverflowCarousel';
import { AboutSection } from '../components/AboutSection';

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

        {/* 1. Monumental TORRAS / Keynote Hero Section */}
        {sections.hero !== false && (
          <AppleKeynoteHero products={products} />
        )}

        {/* 2. TORRAS Engineering Story Cards (Protection Composed, Control Refined, Soft/Grip) */}
        <TorrasStoryCards />

        {/* 3. Aesthetic Floating Cases Mosaic (Pela Style) */}
        <AestheticFloatingMosaic products={products} />

        {/* 4. Spotlight Novedades (Visuales Gigantes, Selector Ágil & Ángulos) */}
        {sections.spotlight !== false && (
          <div id="novedades" className="scroll-mt-12 w-full">
            <SpotlightShowcase products={products} />
          </div>
        )}

        {/* 5. Studio Mood Switcher (Finish & Colors) */}
        {sections.studio !== false && (
          <div id="studio" className="scroll-mt-12 w-full">
            <StudioMoodSwitcher products={products} initialSwatches={swatches} />
          </div>
        )}

        {/* 6. Carrusel 3D Coverflow Interactivo */}
        {sections.coverflow !== false && (
          <div id="carrusel" className="scroll-mt-12 w-full">
            <InteractiveCoverflowCarousel products={products} />
          </div>
        )}

        {/* 7. Historia / Sobre CaseMood (Opcional) */}
        {sections.about && (
          <div id="sobre-nosotros" className="scroll-mt-12 w-full">
            <AboutSection />
          </div>
        )}
      </div>
    </ShowroomConfigProvider>
  );
}
