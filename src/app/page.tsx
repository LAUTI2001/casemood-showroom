import { fetchLiveShowroomProducts } from '../data/products';
import { PsychedelicHero } from '../components/PsychedelicHero';
import { PsychedelicMarquee } from '../components/PsychedelicMarquee';
import { LookbookStream } from '../components/LookbookStream';
import { ArtisticMosaicSection } from '../components/ArtisticMosaicSection';
import { AboutSection } from '../components/AboutSection';

export const revalidate = 60;

export default async function ShowroomPage() {
  const products = await fetchLiveShowroomProducts();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Psychedelic Hero with Mascots, Wordmark and 3D Case Fan */}
      <PsychedelicHero products={products} />

      {/* 2. Infinite Kinetic Marquee Stream with Giant Phone Cases */}
      <PsychedelicMarquee products={products} />

      {/* 3. Full-Screen Giant Case Showcase Feed (Zero prices / Zero clutter) */}
      <div id="galeria" className="scroll-mt-12 w-full">
        <LookbookStream initialProducts={products} />
      </div>

      {/* 4. Artistic Mosaic Wall */}
      <ArtisticMosaicSection products={products} />

      {/* 5. About the Brand & Quality Story */}
      <AboutSection />
    </div>
  );
}
