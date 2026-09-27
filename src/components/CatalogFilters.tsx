'use client';

import { Search, X, Smartphone, Filter } from 'lucide-react';

interface CatalogFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  models: string[];
  selectedModel: string | null;
  onSelectModel: (model: string | null) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

export function CatalogFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  models,
  selectedModel,
  onSelectModel,
  searchQuery,
  onSearchChange,
  totalCount,
}: CatalogFiltersProps) {
  return (
    <div className="space-y-4 rounded-3xl border border-brand-border/80 bg-brand-card p-5 sm:p-6 shadow-xl">
      {/* Top row: Search input & Model selector dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por diseño o temática..."
            className="w-full rounded-2xl border border-brand-border bg-brand-bg py-2.5 pl-10 pr-9 text-xs text-white placeholder-brand-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow/30"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Model Filter Dropdown */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-56">
            <Smartphone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-yellow" />
            <select
              value={selectedModel || ''}
              onChange={(e) => onSelectModel(e.target.value || null)}
              className="w-full appearance-none rounded-2xl border border-brand-border bg-brand-bg py-2.5 pl-9.5 pr-8 text-xs font-bold text-white focus:border-brand-yellow focus:outline-none"
            >
              <option value="">📱 Todos los Modelos</option>
              {models.map((m) => (
                <option key={m} value={m} className="bg-brand-card text-white">
                  {m}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted text-[10px]">
              ▼
            </div>
          </div>

          {(selectedCategory || selectedModel || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                onSelectCategory(null);
                onSelectModel(null);
                onSearchChange('');
              }}
              className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-3 py-2.5 text-xs font-bold text-brand-red hover:bg-brand-red/20 transition-colors"
              title="Limpiar filtros"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      {categories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 scrollbar-hide">
          <button
            type="button"
            onClick={() => onSelectCategory(null)}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all shrink-0 ${
              selectedCategory === null
                ? 'bg-brand-yellow text-brand-bg shadow-sm'
                : 'bg-brand-bg text-brand-muted hover:border-brand-yellow/40 hover:text-white border border-brand-border'
            }`}
          >
            Todas ({totalCount})
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(isSelected ? null : cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-brand-yellow text-brand-bg shadow-sm'
                    : 'bg-brand-bg text-brand-muted hover:border-brand-yellow/40 hover:text-white border border-brand-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
