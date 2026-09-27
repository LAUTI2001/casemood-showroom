import { getEcommerceProductUrl } from '../lib/whatsapp';
import type { RawCatalogProduct, ShowroomApiConfig, ShowroomProduct } from '../types';

export const DEFAULT_SHOWROOM_PRODUCTS: ShowroomProduct[] = [
  {
    id: 'aurora',
    name: 'AURORA',
    displayName: 'AURORA',
    category: 'Aesthetic',
    price: 13000,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16', '17 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833101/casemood-productos/ngursdhkqzhrn9yjok5g.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833111/casemood-productos/vhmlri9uufcvqjzguoww.jpg',
    ],
    description: 'Gradiente etéreo en tonos pastel con textura antideslizante y bordes reforzados para máxima protección.',
    isFeatured: true,
    isNew: true,
    storeUrl: getEcommerceProductUrl('AURORA'),
  },
  {
    id: 'bahia',
    name: 'BAHIA',
    displayName: 'BAHIA Tropical',
    category: 'Naturaleza',
    price: 14000,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 14 PRO', 'iPhone 15', 'iPhone 15 PRO', 'Samsung S23'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787070889/casemood-productos/alkctshcpgfdgmq0pdc7.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787070900/casemood-productos/w6iwotgvtywvwrj1tqvz.jpg',
    ],
    description: 'Inspiración costera con ondas orgánicas y acabado mate soft-touch que no junta huellas.',
    isFeatured: true,
    isNew: false,
    storeUrl: getEcommerceProductUrl('BAHIA'),
  },
  {
    id: 'black-shimmer',
    name: 'BLACK SHIMMER',
    displayName: 'BLACK SHIMMER',
    category: 'Minimalista',
    price: 13500,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15 PRO MAX'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg',
    ],
    description: 'Elegancia total en negro profundo con destellos minerales bajo la luz.',
    isFeatured: false,
    isNew: true,
    storeUrl: getEcommerceProductUrl('BLACK SHIMMER'),
  },
  {
    id: 'cherry',
    name: 'CHERRY',
    displayName: 'CHERRY Sweet',
    category: 'Pop & Vibes',
    price: 13000,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787070889/casemood-productos/alkctshcpgfdgmq0pdc7.jpg',
    ],
    description: 'Diseño juguetón y lleno de frescura con cerezas ilustradas y marco de cámara elevado.',
    isFeatured: true,
    isNew: false,
    storeUrl: getEcommerceProductUrl('CHERRY'),
  },
  {
    id: 'crystal-fleur',
    name: 'CRYSTAL FLEUR',
    displayName: 'CRYSTAL FLEUR',
    category: 'Aesthetic',
    price: 14500,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833101/casemood-productos/ngursdhkqzhrn9yjok5g.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833111/casemood-productos/vhmlri9uufcvqjzguoww.jpg',
    ],
    description: 'Transparencia de alta densidad con relieve floral botánico que resalta el color original de tu teléfono.',
    isFeatured: true,
    isNew: true,
    storeUrl: getEcommerceProductUrl('CRYSTAL FLEUR'),
  },
  {
    id: 'urban',
    name: 'URBAN',
    displayName: 'URBAN Streetwear',
    category: 'Urban',
    price: 13500,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14 PRO', 'iPhone 15 PRO', 'Samsung S23 Ultra'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787070900/casemood-productos/w6iwotgvtywvwrj1tqvz.jpg',
    ],
    description: 'Vibra urbana contemporánea con tipografía bold y resistencia extrema contra caídas.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('URBAN'),
  },
];

export async function fetchLiveShowroomProducts(): Promise<ShowroomProduct[]> {
  try {
    const [catalogRes, settingsRes] = await Promise.all([
      fetch('https://casemood.pages.dev/api/catalog', { next: { revalidate: 60 } }).catch(() => null),
      fetch('https://casemood.pages.dev/api/settings', { next: { revalidate: 60 } }).catch(() => null),
    ]);

    if (!catalogRes || !catalogRes.ok) {
      return DEFAULT_SHOWROOM_PRODUCTS;
    }

    const { products } = (await catalogRes.json()) as { products: RawCatalogProduct[] };
    if (!products || products.length === 0) return DEFAULT_SHOWROOM_PRODUCTS;

    // Group catalog products by name
    const grouped = new Map<
      string,
      {
        name: string;
        category: string;
        minPrice: number;
        models: string[];
        images: string[];
        isNew: boolean;
      }
    >();

    for (const p of products) {
      if (!grouped.has(p.name)) {
        const imgs = p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : p.imageUrl ? [p.imageUrl] : [];
        grouped.set(p.name, {
          name: p.name,
          category: p.category || 'Fundas',
          minPrice: p.price,
          models: [p.model],
          images: imgs,
          isNew: Boolean(p.isNew),
        });
      } else {
        const item = grouped.get(p.name)!;
        if (!item.models.includes(p.model)) item.models.push(p.model);
        if (p.price < item.minPrice && p.price > 0) item.minPrice = p.price;
        if (p.imageUrls) {
          for (const url of p.imageUrls) {
            if (!item.images.includes(url)) item.images.push(url);
          }
        }
      }
    }

    // Check if Admin configured specific Showroom products
    let adminConfigs: Record<string, ShowroomApiConfig> = {};
    if (settingsRes && settingsRes.ok) {
      const { settings } = (await settingsRes.json()) as { settings: Record<string, string> };
      const raw = settings?.showroom_products_config;
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            for (const c of parsed) {
              if (c && c.productName) adminConfigs[c.productName] = c;
            }
          }
        } catch {
          // ignore parse errors
        }
      }
    }

    const hasAdminConfigured = Object.keys(adminConfigs).length > 0;

    if (hasAdminConfigured) {
      const result: ShowroomProduct[] = [];
      for (const [name, cfg] of Object.entries(adminConfigs)) {
        if (!cfg.enabled) continue;
        const catalogItem = grouped.get(name);
        if (catalogItem) {
          result.push({
            id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
            name: catalogItem.name,
            displayName: cfg.customTitle?.trim() || catalogItem.name,
            category: catalogItem.category,
            price: catalogItem.minPrice,
            models: catalogItem.models,
            images: catalogItem.images.length > 0 ? catalogItem.images : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'],
            description:
              cfg.description?.trim() ||
              `Diseño exclusivo ${catalogItem.name} con protección reforzada y calce exacto.`,
            isFeatured: Boolean(cfg.isFeatured),
            isNew: Boolean(cfg.isNew ?? catalogItem.isNew),
            storeUrl: getEcommerceProductUrl(catalogItem.name),
          });
        }
      }

      if (result.length > 0) return result;
    }

    // If no admin settings yet, convert all catalog products with photos
    const result: ShowroomProduct[] = [];
    for (const item of grouped.values()) {
      if (item.images.length === 0) continue;
      result.push({
        id: item.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        name: item.name,
        displayName: item.name,
        category: item.category,
        price: item.minPrice,
        models: item.models,
        images: item.images,
        description: `Diseño exclusivo ${item.name} en material rígido con absorción de impactos y acabado premium.`,
        isFeatured: result.length < 4,
        isNew: item.isNew,
        storeUrl: getEcommerceProductUrl(item.name),
      });
    }

    return result.length > 0 ? result : DEFAULT_SHOWROOM_PRODUCTS;
  } catch {
    return DEFAULT_SHOWROOM_PRODUCTS;
  }
}
