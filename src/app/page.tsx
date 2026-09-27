import { fetchLiveShowroomProducts, fetchLiveShowroomSwatches } from '../data/products';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { AppleKeynoteHero } from '../components/AppleKeynoteHero';
import { StudioMoodSwitcher } from '../components/StudioMoodSwitcher';
import { InteractiveHotspotShowcase } from '../components/InteractiveHotspotShowcase';
import { AppleBentoGrid } from '../components/AppleBentoGrid';
import { AppleCineCarousel } from '../components/AppleCineCarousel';
import { InteractiveCoverflowCarousel } from '../components/InteractiveCoverflowCarousel';
import { PsychedelicMarquee } from '../components/PsychedelicMarquee';
import { LookbookStream } from '../components/LookbookStream';
import { AboutSection } from '../components/AboutSection';

export const revalidate = 60;

export default async function ShowroomPage() {
  const [products, swatches] = await Promise.all([
    fetchLiveShowroomProducts(),
    fetchLiveShowroomSwatches(),
  ]);

  return (
    <div className="flex flex-col w-full bg-[#0A0D14]">
      {/* Scroll Progress Glow Bar */}
      <ScrollProgressBar />

      {/* 1. Apple Keynote Billboard Hero */}
      <AppleKeynoteHero products={products} />

      {/* 2. Apple Studio Finish & Color Switcher */}
      <div id="studio" className="scroll-mt-12 w-full">
        <StudioMoodSwitcher products={products} initialSwatches={swatches} />
      </div>

      {/* 3. Apple Engineering & Protection Hotspots */}
      <div id="detalles" className="scroll-mt-12 w-full">
        <InteractiveHotspotShowcase product={products[0]} />
      </div>

      {/* 4. Apple 2x2 Bento Collection Grid */}
      <div id="colecciones" className="scroll-mt-12 w-full">
        <AppleBentoGrid products={products} />
      </div>

      {/* 5. Apple Highlights Cinematic Panoramic Carousel */}
      <div id="destacados" className="scroll-mt-12 w-full">
        <AppleCineCarousel products={products} />
      </div>

      {/* 6. Interactive 3D Coverflow Slider */}
      <div id="carrusel" className="scroll-mt-12 w-full">
        <InteractiveCoverflowCarousel products={products} />
      </div>

      {/* 7. Infinite Kinetic Ribbon */}
      <PsychedelicMarquee products={products} />

      {/* 8. Full-Screen Giant Case Showcase Feed (No counts / No clutter) */}
      <div id="galeria" className="scroll-mt-12 w-full">
        <LookbookStream initialProducts={products} />
      </div>

      {/* 9. Brand Identity Story */}
      <AboutSection />
    </div>
  );
}
