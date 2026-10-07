import {
  fetchLiveShowroomProducts,
  fetchLiveShowroomSwatches,
  fetchLiveShowroomTexts,
  fetchLiveShowroomSections,
} from '../data/products';
import { ShowroomConfigProvider } from '../context/ShowroomConfigContext';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { PsychedelicArtHero } from '../components/PsychedelicArtHero';
import { AestheticKineticManifesto } from '../components/AestheticKineticManifesto';
import { FloatingArtisanCollage } from '../components/FloatingArtisanCollage';
import { LiquidCoverflowStream } from '../components/LiquidCoverflowStream';
import { SensoryMoodChamber } from '../components/SensoryMoodChamber';
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
      <div className="flex flex-col w-full bg-[#140E17] min-h-screen text-[#FDFBF7] overflow-x-hidden animate-fluid-mesh">
        {/* Scroll Progress Glow Bar */}
        <ScrollProgressBar />

        {/* 1. Hero Principal con Fotos de Entorno Flotantes de Fondo (lifestyle-1 & lifestyle-6) */}
        {sections.hero !== false && (
          <PsychedelicArtHero products={products} />
        )}

        {/* 2. Manifiesto Cinético con Fotos de Entorno Flotantes de Fondo (lifestyle-2 & lifestyle-7) */}
        <AestheticKineticManifesto />

        {/* 3. Mural de Diseños con Fotos de Entorno Dispersadas (lifestyle-3, lifestyle-8 & lifestyle-4) */}
        <FloatingArtisanCollage products={products} />

        {/* 4. Lookbook Dinámico: Doble Carrusel con Fotos de Fondo (lifestyle-5 & lifestyle-9) */}
        <LiquidCoverflowStream products={products} />

        {/* 5. Selector de Colores & Acabados con Foto de Entorno (lifestyle-10) */}
        {sections.studio !== false && (
          <SensoryMoodChamber products={products} />
        )}

        {/* 6. Sobre CaseMood (Opcional) */}
        {sections.about && (
          <div id="sobre-nosotros" className="scroll-mt-20 w-full">
            <AboutSection />
          </div>
        )}
      </div>
    </ShowroomConfigProvider>
  );
}
