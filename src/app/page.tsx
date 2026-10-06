import {
  fetchLiveShowroomProducts,
  fetchLiveShowroomSwatches,
  fetchLiveShowroomTexts,
  fetchLiveShowroomSections,
} from '../data/products';
import { ShowroomConfigProvider } from '../context/ShowroomConfigContext';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { TorrasKeynoteHero } from '../components/TorrasKeynoteHero';
import { TorrasHorizontalMacroSlider } from '../components/TorrasHorizontalMacroSlider';
import { InteractiveLayerExploder } from '../components/InteractiveLayerExploder';
import { PelaFloatingWall } from '../components/PelaFloatingWall';
import { AestheticKineticMarquee } from '../components/AestheticKineticMarquee';
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
      <div className="flex flex-col w-full bg-[#06080D] min-h-screen text-white overflow-x-hidden">
        {/* Scroll Progress Glow Bar */}
        <ScrollProgressBar />

        {/* 1. Monumental AIR PRO Keynote Hero (Image 3 inspired) */}
        {sections.hero !== false && (
          <TorrasKeynoteHero products={products} />
        )}

        {/* 2. Macro Engineering Horizontal Snap Slider (Images 2, 4, 5 inspired) */}
        <TorrasHorizontalMacroSlider />

        {/* 3. Interactive 3D Layer Exploder (Disruptive Innovation) */}
        <InteractiveLayerExploder />

        {/* 4. Pela Floating Cases Wall Matrix (Image 1 inspired) */}
        <PelaFloatingWall products={products} />

        {/* 5. Infinite Kinetic Marquee Stream */}
        <AestheticKineticMarquee products={products} />

        {/* 6. Studio Color & Finish Switcher */}
        {sections.studio !== false && (
          <div id="studio" className="scroll-mt-20 w-full">
            <StudioMoodSwitcher products={products} initialSwatches={swatches} />
          </div>
        )}

        {/* 7. Carrusel 3D Coverflow Interactivo */}
        {sections.coverflow !== false && (
          <div id="carrusel" className="scroll-mt-20 w-full">
            <InteractiveCoverflowCarousel products={products} />
          </div>
        )}

        {/* 8. Historia / Sobre CaseMood (Opcional) */}
        {sections.about && (
          <div id="sobre-nosotros" className="scroll-mt-20 w-full">
            <AboutSection />
          </div>
        )}
      </div>
    </ShowroomConfigProvider>
  );
}
