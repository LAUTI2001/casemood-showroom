'use client';

import { useMemo, useState, useEffect } from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';
import { CatalogFilters } from './CatalogFilters';
import { ProductCard } from './ProductCard';
import { ProductLightboxModal } from './ProductLightboxModal';
import { CASEMOOD_STORE_URL, createGeneralWhatsAppUrl } from '../lib/whatsapp';
import { fetchLiveShowroomProducts } from '../data/products';
import type { ShowroomProduct } from '../types';

interface ShowroomCatalogProps {
  products: ShowroomProduct[];
}

export function ShowroomCatalog({ products: initialProducts }: ShowroomCatalogProps) {
  const [products, setProducts] = useState<ShowroomProduct[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<ShowroomProduct | null>(null);

  useEffect(() => {
    fetchLiveShowroomProducts()
      .then((data) => {
        if (data && data.length > 0) setProducts(data);
      })
      .catch(() => {});
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return Array.from(set).sort();
  }, [products]);

  const allModels = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) {
      for (const m of p.models) set.add(m);
    }
    return Array.from(set).sort();
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedModel && !p.models.some((m) => m.toLowerCase().includes(selectedModel.toLowerCase()))) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q) || p.displayName.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchModel = p.models.some((m) => m.toLowerCase().includes(q));
        if (!matchName && !matchCat && !matchDesc && !matchModel) return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedModel, searchQuery]);

  return (
    <div id="showroom" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-yellow">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Colección Seleccionada</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-4xl font-black tracking-tight text-white">
            Nuestros Diseños
          </h2>
        </div>
        <p className="text-xs font-medium text-brand-muted sm:text-right">
          Mostrando <strong className="text-white">{filtered.length}</strong> de {products.length} fundas
        </p>
      </div>

      {/* Filters Toolbar */}
      <CatalogFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        models={allModels}
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={products.length}
      />

      {/* Product Grid: 2 cols on mobile, 3 on md, 4 on xl */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3.5 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, idx) => (
            <ProductCard
              key={p.id || p.name}
              product={p}
              onOpenModal={(prod) => setModalProduct(prod)}
              priority={idx < 4}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-brand-border/60 bg-brand-card p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
            <HelpCircle className="h-7 w-7" />
          </div>
          <h3 className="text-lg font-bold text-white">No encontramos fundas con esos filtros</h3>
          <p className="text-xs text-brand-muted max-w-sm mx-auto">
            Probá quitando los filtros o consultanos por WhatsApp si buscás un diseño o modelo específico.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedModel(null);
                setSearchQuery('');
              }}
              className="rounded-xl bg-brand-yellow px-4 py-2 text-xs font-black text-brand-bg hover:bg-brand-yellow-hover"
            >
              Ver todas las fundas
            </button>
            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-brand-border bg-brand-bg px-4 py-2 text-xs font-bold text-white hover:border-brand-yellow"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <ProductLightboxModal
        product={modalProduct}
        open={Boolean(modalProduct)}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
}
