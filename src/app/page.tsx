import { fetchLiveShowroomProducts } from '../data/products';
import { PsychedelicHero } from '../components/PsychedelicHero';
import { InteractiveCoverflowCarousel } from '../components/InteractiveCoverflowCarousel';
import { PsychedelicMarquee } from '../components/PsychedelicMarquee';
import { LookbookStream } from '../components/LookbookStream';
import { ArtisticMosaicSection } from '../components/ArtisticMosaicSection';
import { AboutSection } from '../components/AboutSection';
import { ScrollProgressBar } from '../components/ScrollProgressBar';

export const revalidate = 60;

export default async function ShowroomPage() {
  const products = await fetchLiveShowroomProducts();

  return (
    <div className="flex flex-col w-full">
      {/* Scroll-linked progress glow bar */}
      <ScrollProgressBar />

      {/* 1. Psychedelic Hero with Mascots, Wordmark and 3D Case Fan */}
      <PsychedelicHero products={products} />

      {/* 2. Interactive 3D Coverflow Carousel (Swiping, Drag, Angle Previews) */}
      <div id="carrusel" className="scroll-mt-12 w-full">
        <InteractiveCoverflowCarousel products={products} />
      </div>

      {/* 3. Infinite Kinetic Marquee Stream with Giant Phone Cases in Motion */}
      <PsychedelicMarquee products={products} />

      {/* 4. Full-Screen Giant Case Showcase Feed (Zero counts / Zero prices / Zero clutter) */}
      <div id="galeria" className="scroll-mt-12 w-full">
        <LookbookStream initialProducts={products} />
      </div>

      {/* 5. Artistic Mosaic Wall */}
      <ArtisticMosaicSection products={products} />

      {/* 6. About the Brand & Quality Story */}
      <AboutSection />
    </div>
  );
}
