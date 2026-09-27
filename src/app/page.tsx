import { fetchLiveShowroomProducts } from '../data/products';
import { LookbookStream } from '../components/LookbookStream';
import { AboutSection } from '../components/AboutSection';

export const revalidate = 60;

export default async function ShowroomPage() {
  const products = await fetchLiveShowroomProducts();

  return (
    <div className="flex flex-col w-full">
      {/* Full-bleed Editorial Lookbook Stream */}
      <LookbookStream initialProducts={products} />

      {/* About the Brand & Quality */}
      <AboutSection />
    </div>
  );
}
