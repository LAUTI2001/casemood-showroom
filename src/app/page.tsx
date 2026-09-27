import { fetchLiveShowroomProducts } from '../data/products';
import { HeroSection } from '../components/HeroSection';
import { ShowroomCatalog } from '../components/ShowroomCatalog';
import { AboutSection } from '../components/AboutSection';

// Dynamic revalidation every 60s to pick up admin updates from Case Mood
export const revalidate = 60;

export default async function ShowroomPage() {
  const products = await fetchLiveShowroomProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section with Mascots & Featured Carousel */}
      <HeroSection products={products} />

      {/* Main Showroom Catalog Section */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-8">
        <ShowroomCatalog products={products} />
      </section>

      {/* About & Quality Pillars */}
      <AboutSection />
    </div>
  );
}
