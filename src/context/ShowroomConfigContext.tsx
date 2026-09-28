'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ShowroomProduct, ShowroomSwatchConfig, ShowroomTextsConfig } from '../types';
import { DEFAULT_SHOWROOM_TEXTS, DEFAULT_SWATCH_CONFIGS } from '../data/products';

interface ShowroomConfigContextValue {
  texts: ShowroomTextsConfig;
  swatches: ShowroomSwatchConfig[];
  products: ShowroomProduct[];
}

const ShowroomConfigContext = createContext<ShowroomConfigContextValue>({
  texts: DEFAULT_SHOWROOM_TEXTS,
  swatches: DEFAULT_SWATCH_CONFIGS,
  products: [],
});

interface ShowroomConfigProviderProps {
  children: React.ReactNode;
  initialTexts: ShowroomTextsConfig;
  initialSwatches: ShowroomSwatchConfig[];
  initialProducts: ShowroomProduct[];
}

export function ShowroomConfigProvider({
  children,
  initialTexts,
  initialSwatches,
  initialProducts,
}: ShowroomConfigProviderProps) {
  const [texts, setTexts] = useState<ShowroomTextsConfig>(initialTexts || DEFAULT_SHOWROOM_TEXTS);
  const [swatches, setSwatches] = useState<ShowroomSwatchConfig[]>(initialSwatches || DEFAULT_SWATCH_CONFIGS);
  const [products, setProducts] = useState<ShowroomProduct[]>(initialProducts || []);

  useEffect(() => {
    // Dynamic client-side refresh to always get freshest admin settings
    async function loadFreshConfig() {
      try {
        const res = await fetch('https://casemood.pages.dev/api/settings', { cache: 'no-store' });
        if (!res.ok) return;
        const { settings } = (await res.json()) as { settings: Record<string, string> };

        // 1. Texts
        if (settings?.showroom_texts_config) {
          try {
            const parsedTexts = JSON.parse(settings.showroom_texts_config);
            setTexts((prev) => ({ ...prev, ...parsedTexts }));
          } catch {
            // ignore
          }
        }

        // 2. Swatches
        if (settings?.showroom_swatches_config) {
          try {
            const parsedSwatches = JSON.parse(settings.showroom_swatches_config);
            if (Array.isArray(parsedSwatches) && parsedSwatches.length > 0) {
              setSwatches(parsedSwatches.filter((s) => s && s.enabled !== false));
            }
          } catch {
            // ignore
          }
        }

        // 3. Products overrides (titles, descriptions)
        if (settings?.showroom_products_config) {
          try {
            const parsedProds = JSON.parse(settings.showroom_products_config);
            if (Array.isArray(parsedProds) && parsedProds.length > 0) {
              const configMap = new Map<string, { customTitle?: string; description?: string }>();
              for (const p of parsedProds) {
                if (p && p.productName) {
                  configMap.set(p.productName.trim().toUpperCase(), p);
                }
              }

              setProducts((prev) =>
                prev.map((prod) => {
                  const cfg = configMap.get(prod.name.trim().toUpperCase());
                  if (!cfg) return prod;
                  return {
                    ...prod,
                    displayName: cfg.customTitle?.trim() || prod.displayName,
                    description: cfg.description?.trim() || prod.description,
                  };
                })
              );
            }
          } catch {
            // ignore
          }
        }
      } catch {
        // network error, fallback safely to initial
      }
    }

    loadFreshConfig();
  }, []);

  return (
    <ShowroomConfigContext.Provider value={{ texts, swatches, products }}>
      {children}
    </ShowroomConfigContext.Provider>
  );
}

export function useShowroomConfig() {
  return useContext(ShowroomConfigContext);
}
