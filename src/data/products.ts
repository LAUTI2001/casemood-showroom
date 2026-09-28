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
    id: 'surf',
    name: 'SURF',
    displayName: 'SURF',
    category: 'Urban & Vibes',
    price: 16000,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 15 PRO', 'iPhone 16 PRO MAX'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790528313/casemood-productos/n1tddsj227h0fzpr2vjs.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790528317/casemood-productos/fd4hadxoi6lxrs0rsmwd.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790528320/casemood-productos/jiao7l2la9dxolr0boy6.jpg',
    ],
    description: 'Espíritu libre con tipografía playera y protección anti-shock para llevar la buena vibra a todos lados.',
    isFeatured: true,
    isNew: true,
    storeUrl: getEcommerceProductUrl('SURF'),
  },
  {
    id: 'wild',
    name: 'WILD',
    displayName: 'WILD',
    category: 'Streetwear',
    price: 14000,
    models: ['iPhone 14', 'iPhone 15', 'iPhone 16', 'iPhone 16 PRO', 'iPhone 17 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790532048/casemood-productos/jwhlja54dgdfcn2plhq2.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790532058/casemood-productos/wdfpntggryzdzcdaz7ve.jpg',
    ],
    description: 'Estampado animal print audaz con marco elevado de cámara y textura soft-grip.',
    isFeatured: true,
    isNew: false,
    storeUrl: getEcommerceProductUrl('WILD'),
  },
  {
    id: 'wine-royale',
    name: 'WINE ROYALE',
    displayName: 'WINE ROYALE',
    category: 'Velvet & Luxe',
    price: 13000,
    models: ['iPhone 15', 'iPhone 16', 'iPhone 17 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527620/casemood-productos/ofbyhfqwjbiwakoailuq.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527628/casemood-productos/p2cwxzmtmpbep4qwkybr.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527632/casemood-productos/nf3yja8cjugc0hm9egjv.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527634/casemood-productos/intytlbeovvdamishccw.jpg',
    ],
    description: 'Bordeaux profundo con detalles dorados y acabado satinado de alta resistencia.',
    isFeatured: true,
    isNew: true,
    storeUrl: getEcommerceProductUrl('WINE ROYALE'),
  },
  {
    id: 'bahia',
    name: 'BAHIA',
    displayName: 'BAHIA',
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
    id: 'cherry',
    name: 'CHERRY',
    displayName: 'CHERRY',
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
    id: 'wave-black',
    name: 'WAVE BLACK',
    displayName: 'WAVE BLACK',
    category: 'Minimalista',
    price: 12000,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786810926/casemood-productos/shrpehsaz9cw0rgnh50s.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786833176/casemood-productos/gosnhrr7ekyli5hswcos.jpg',
    ],
    description: 'Ondulaciones tridimensionales en negro mate táctil con agarre ergonómico.',
    isFeatured: true,
    isNew: false,
    storeUrl: getEcommerceProductUrl('WAVE BLACK'),
  },
  {
    id: 'wave-white',
    name: 'WAVE WITHE',
    displayName: 'WAVE WITHE',
    category: 'Minimalista',
    price: 12000,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527969/casemood-productos/eecetdcmlxqjsu9ngxmd.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527975/casemood-productos/uq9yvtluqqiefvmzr5hs.jpg',
    ],
    description: 'Estética futurista en blanco marfil con ondas suaves de absorción de impacto.',
    isFeatured: false,
    isNew: true,
    storeUrl: getEcommerceProductUrl('WAVE WITHE'),
  },
  {
    id: 'white-shimmer',
    name: 'WHITE SHIMMER',
    displayName: 'WHITE SHIMMER',
    category: 'Aesthetic',
    price: 12000,
    models: ['iPhone 14', 'iPhone 15', 'iPhone 16 PRO', '17 PRO MAX'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790527524/casemood-productos/ltwtegztxlwoeqftp9ia.jpg',
    ],
    description: 'Efecto perlado con reflejos prismáticos que brillan con la luz natural.',
    isFeatured: false,
    isNew: true,
    storeUrl: getEcommerceProductUrl('WHITE SHIMMER'),
  },
  {
    id: 'spark-rosa',
    name: 'SPARK ROSA',
    displayName: 'SPARK ROSA',
    category: 'Pop & Vibes',
    price: 12000,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061991/casemood-productos/u7gah6fum5tgdrdczpjf.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787062055/casemood-productos/sw657p5k4hothreupsui.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787062107/casemood-productos/tifmomlmqkrmi6uztj1q.jpg',
    ],
    description: 'Chispas de energía fucsia y destellos holográficos para resaltar cualquier outfit.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('SPARK ROSA'),
  },
  {
    id: 'spark-amarilla',
    name: 'SPARK AMARILLA',
    displayName: 'SPARK AMARILLA',
    category: 'Pop & Vibes',
    price: 12000,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061895/casemood-productos/cjbrvrpvvlhib2gwr2ex.jpg',
    ],
    description: 'El amarillo insignia de Case Mood en su máxima expresión eléctrica y juvenil.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('SPARK AMARILLA'),
  },
  {
    id: 'velvet-silver',
    name: 'VELVET SILVER',
    displayName: 'VELVET SILVER',
    category: 'Velvet & Luxe',
    price: 14000,
    models: ['iPhone 13', 'iPhone 14 PRO', 'iPhone 15 PRO', 'iPhone 16'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061064/casemood-productos/vrjw7aie7lpdmuybmljo.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061168/casemood-productos/hajdfmtptgaujcrx19vd.jpg',
    ],
    description: 'Acabado plateado metalizado con textura aterciopelada y cantos anti-choque.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('VELVET SILVER'),
  },
  {
    id: 'velvet-white',
    name: 'VELVET WHITE',
    displayName: 'VELVET WHITE',
    category: 'Velvet & Luxe',
    price: 14000,
    models: ['iPhone 14', 'iPhone 15', 'iPhone 16 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061209/casemood-productos/domwllhblphziis4ft7c.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061262/casemood-productos/zmxnl4ai86gqywueitjb.jpg',
    ],
    description: 'Sensación de seda al tacto con pureza blanca y durabilidad extendida.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('VELVET WHITE'),
  },
  {
    id: 'velvet-wine',
    name: 'VELVET WINE',
    displayName: 'VELVET WINE',
    category: 'Velvet & Luxe',
    price: 14000,
    models: ['iPhone 13', 'iPhone 14', 'iPhone 15 PRO MAX'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061299/casemood-productos/ynpd54xjrev029aqpfh3.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061341/casemood-productos/t0ovbkk1wrzgrdya8k9s.jpg',
    ],
    description: 'Elegancia en tono vino aterciopelado para quienes buscan distinción y carácter.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('VELVET WINE'),
  },
  {
    id: 'starck-blanca',
    name: 'STARCK BLANCA',
    displayName: 'STARCK BLANCA',
    category: 'Streetwear',
    price: 13000,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061418/casemood-productos/srqfuzev4rj5bffershd.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061491/casemood-productos/hs38i1meiokehlva2qtp.jpg',
    ],
    description: 'Líneas limpias, tipografía conceptual y máxima protección de esquinas.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('STARCK BLANCA'),
  },
  {
    id: 'starck-negra',
    name: 'STARCK NEGRA',
    displayName: 'STARCK NEGRA',
    category: 'Streetwear',
    price: 13000,
    models: ['iPhone 13', 'iPhone 14 PRO', 'iPhone 15 PRO', 'iPhone 16'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061502/casemood-productos/j2ldd9ehj8rdjhiqcfzr.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061693/casemood-productos/zve32vafe6cy5g3esyvh.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787061717/casemood-productos/m9audand5khg2blttxqv.jpg',
    ],
    description: 'Estilo editorial urbano en monocromo absoluto de alto impacto.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('STARCK NEGRA'),
  },
  {
    id: 'stickers',
    name: 'STICKERS',
    displayName: 'STICKERS',
    category: 'Pop & Vibes',
    price: 12000,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787069021/casemood-productos/npypa2ohbu9gm1xa9vxt.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787069039/casemood-productos/hlt7exvjkd4zixlpask0.jpg',
    ],
    description: 'Collage estilo scrapbooking con los iconos más cool de la cultura pop.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('STICKERS'),
  },
  {
    id: 'street',
    name: 'STREET',
    displayName: 'STREET',
    category: 'Streetwear',
    price: 13000,
    models: ['iPhone 14', 'iPhone 15', 'iPhone 16 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790528700/casemood-productos/bszczsmy5i3kgi0k5ctf.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790531678/casemood-productos/w8evggsgoedfoeyehsgy.jpg',
    ],
    description: 'Identidad streetwear moderna para transformar tu teléfono en un accesorio de moda.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('STREET'),
  },
  {
    id: 'universo',
    name: 'UNIVERSO',
    displayName: 'UNIVERSO',
    category: 'Aesthetic',
    price: 13000,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787009629/casemood-productos/kzyihn2m9qm0lx7nm4vp.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787009642/casemood-productos/l3uu4qu2ngwyfpdfbqbc.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787010101/casemood-productos/ocmzpdjsbeet3agllblb.jpg',
    ],
    description: 'Constelaciones y nebulosas con profundidad estelar y acabado anti-rayas.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('UNIVERSO'),
  },
  {
    id: 'wings',
    name: 'WINGS',
    displayName: 'WINGS',
    category: 'Minimalista',
    price: 14000,
    models: ['iPhone 14', 'iPhone 15', 'iPhone 17', '17 PRO'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786994725/casemood-productos/yw1ga1oa0qpgq8mml3qi.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786994754/casemood-productos/t8rbv965xw9hlqlfraaa.jpg',
    ],
    description: 'Ilustración etérea de alas con líneas minimalistas sobre base protectora ultra-slim.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('WINGS'),
  },
  {
    id: 'sweetie',
    name: 'SWEETIE',
    displayName: 'SWEETIE',
    category: 'Pop & Vibes',
    price: 15000,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786987743/casemood-productos/zpjxxie5izrqyo0eiwf9.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1786988925/casemood-productos/vymjlc6lshld9j9tbc2m.jpg',
    ],
    description: 'Ternura y estilo con paleta pastel y protección certificada de 360 grados.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('SWEETIE'),
  },
  {
    id: 'teddy',
    name: 'TEDDY',
    displayName: 'TEDDY',
    category: 'Pop & Vibes',
    price: 12000,
    models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787007980/casemood-productos/dvuiwir3swo11cn0pifa.jpg',
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1787008066/casemood-productos/rqga2azqcozadqsngi5i.jpg',
    ],
    description: 'Personaje tierno e icónico para darle alegría diaria a tu teléfono.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('TEDDY'),
  },
  {
    id: 'urban',
    name: 'URBAN',
    displayName: 'URBAN',
    category: 'Streetwear',
    price: 13500,
    models: ['iPhone 12', 'iPhone 13', 'iPhone 14 PRO', 'iPhone 15 PRO', 'Samsung S23 Ultra'],
    images: [
      'https://res.cloudinary.com/tehmhtfm/image/upload/v1790532287/casemood-productos/qalz3oiz9plhirak6ufy.jpg',
    ],
    description: 'Vibra urbana contemporánea con tipografía bold y resistencia extrema contra caídas.',
    isFeatured: false,
    isNew: false,
    storeUrl: getEcommerceProductUrl('URBAN'),
  },
];

export const DEFAULT_SWATCH_CONFIGS: import('../types').ShowroomSwatchConfig[] = [
  {
    id: 'aurora',
    name: 'AURORA',
    productName: 'AURORA',
    label: 'Aurora Glow',
    finishName: 'Gradiente Ácido & Pastel',
    colorHex: '#F5C518',
    textColor: 'text-amber-400',
    tagline: 'Reflejos etéreos que mutan de color según el ángulo de la luz.',
    glowColor: 'from-amber-500/20 via-yellow-400/15 to-transparent',
    enabled: true,
  },
  {
    id: 'wine-royale',
    name: 'WINE ROYALE',
    productName: 'WINE ROYALE',
    label: 'Wine Royale',
    finishName: 'Borgoña Aterciopelado',
    colorHex: '#722F37',
    textColor: 'text-rose-400',
    tagline: 'Profundidad cromática en vino tinto con acabado satinado anti-marcas.',
    glowColor: 'from-rose-900/30 via-red-600/20 to-transparent',
    enabled: true,
  },
  {
    id: 'wave-black',
    name: 'WAVE BLACK',
    productName: 'WAVE BLACK',
    label: 'Wave Black',
    finishName: 'Negro Carbón 3D',
    colorHex: '#1E2430',
    textColor: 'text-slate-300',
    tagline: 'Relieve de ondas ergonómicas táctiles con absorción de impactos.',
    glowColor: 'from-slate-700/30 via-slate-900/40 to-transparent',
    enabled: true,
  },
  {
    id: 'surf',
    name: 'SURF',
    productName: 'SURF',
    label: 'Surf Coast',
    finishName: 'Turquesa Oceánico',
    colorHex: '#00A896',
    textColor: 'text-teal-400',
    tagline: 'Vibra costera playera con marco reforzado para aventuras cotidianas.',
    glowColor: 'from-teal-600/25 via-cyan-500/20 to-transparent',
    enabled: true,
  },
  {
    id: 'wild',
    name: 'WILD',
    productName: 'WILD',
    label: 'Wild Leopard',
    finishName: 'Ocre & Ébano Street',
    colorHex: '#C68B59',
    textColor: 'text-orange-400',
    tagline: 'Estampado animal print de alta fidelidad con protección perimetral.',
    glowColor: 'from-orange-700/25 via-amber-600/20 to-transparent',
    enabled: true,
  },
  {
    id: 'velvet-silver',
    name: 'VELVET SILVER',
    productName: 'VELVET SILVER',
    label: 'Velvet Silver',
    finishName: 'Plata Metalizado Silk',
    colorHex: '#94A3B8',
    textColor: 'text-slate-200',
    tagline: 'Sensación de seda metalizada al tacto con esquinas reforzadas.',
    glowColor: 'from-slate-400/25 via-slate-600/20 to-transparent',
    enabled: true,
  },
  {
    id: 'spark-rosa',
    name: 'SPARK ROSA',
    productName: 'SPARK ROSA',
    label: 'Spark Rosa',
    finishName: 'Fucsia Neón Holográfico',
    colorHex: '#EC4899',
    textColor: 'text-pink-400',
    tagline: 'Destellos de energía vibrante que resaltan sobre cualquier superficie.',
    glowColor: 'from-pink-600/30 via-purple-600/20 to-transparent',
    enabled: true,
  },
];


export async function fetchLiveShowroomProducts(): Promise<ShowroomProduct[]> {
  try {
    const [catalogRes, settingsRes] = await Promise.all([
      fetch('https://casemood.pages.dev/api/catalog').catch(() => null),
      fetch('https://casemood.pages.dev/api/settings').catch(() => null),
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
      if (p.active === false) continue;
      // prioritize fundas
      if (p.category && p.category.toLowerCase().includes('vidrio')) continue;

      if (!grouped.has(p.name)) {
        const imgs = p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : p.imageUrl ? [p.imageUrl] : [];
        if (imgs.length === 0) continue;
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

    // If no specific admin restrictions yet, convert all catalog products with photos
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
        isFeatured: result.length < 6,
        isNew: item.isNew,
        storeUrl: getEcommerceProductUrl(item.name),
      });
    }

    return result.length > 0 ? result : DEFAULT_SHOWROOM_PRODUCTS;
  } catch {
    return DEFAULT_SHOWROOM_PRODUCTS;
  }
}

export const DEFAULT_SHOWROOM_TEXTS: import('../types').ShowroomTextsConfig = {
  heroBadge: 'Presentamos Case Mood',
  heroHeadline1: 'Diseñadas para destacar.',
  heroHeadline2: 'Construidas para proteger.',
  heroDescription:
    'Explorá nuestras fundas de diseño exclusivo con protección de grado superior, calce milimétrico y la mejor onda para tu celular.',
  heroCtaExplore: 'Explorar Showroom',
  heroCtaStore: 'Ir a la Tienda Oficial',

  studioBadge: 'Studio Mood Switcher',
  studioTitle: 'Elegí tu Mood. Sentí el Acabado.',
  studioSubtitle:
    'Tocá cada color para ver cómo se transforma la funda en tiempo real y descubrir sus detalles.',

  hotspotsBadge: 'Ingeniería Case Mood',
  hotspotsTitle: 'Cada milímetro cuenta.',
  hotspotsSubtitle:
    'Tocá los puntos interactivos para descubrir por qué nuestras fundas protegen más sin perder estilo.',
  hotspot1Title: 'Bordes de Cámara Elevados',
  hotspot1Desc: 'Marco biselado de 1.8mm que evita que los lentes toquen superficies y se rayen.',
  hotspot2Title: 'TPU Anti-Shock Perimetral',
  hotspot2Desc: 'Bumper con amortiguación de impacto en caídas de hasta 2 metros.',
  hotspot3Title: 'Calce y Botoneras Milimétricas',
  hotspot3Desc: 'Corte láser exacto con respuesta táctil suave y acceso libre a puertos.',
  hotspot4Title: 'Impresión Ultra HD Anti-Desgaste',
  hotspot4Desc: 'Tintas curadas UV que no se decoloran, no se rayan ni se ponen amarillas.',

  bentoBadge: 'Colecciones',
  bentoTitle: 'Diseñadas para cada Mood',
  bentoSubtitle:
    'Cuatro estéticas distintas pensadas para acompañar tu vibra en cada momento.',

  cineBadge: 'Lo Más Destacado',
  cineTitle: 'Momentos que marcan estilo.',
  cineSubtitle: 'Una mirada cinematográfica a nuestras fundas más elegidas.',

  coverflowBadge: 'Carrusel 3D · Diseños en Movimiento',
  coverflowTitle: 'Deslizá y Explorá el Lookbook 3D',
  coverflowSubtitle:
    'Tocá las flechas o deslizá para descubrir la colección completa de fundas Case Mood.',

  lookbookBadge: 'Galería de Diseños',
  lookbookTitle: 'Diseños a pleno con toda la personalidad de Case Mood.',
  lookbookSubtitle: 'Explorá todas nuestras fundas en alta definición.',

  aboutBadge: 'Conocé Case Mood',
  aboutTitle: 'Más que una funda, la personalidad de tu teléfono.',
  aboutParagraph:
    'Nacimos para romper con las fundas genéricas y aburridas. Traemos accesorios que combinan moda, resistencia extrema y una vibra fresca para que lleves tu teléfono siempre protegido con el estilo que te representa.',
  aboutMascotTitle: 'Creado con pasión por el detalle',
  aboutMascotSubtitle: 'Seguinos en Instagram @casemood__',
  aboutPillar1Title: 'Protección Grado Superior',
  aboutPillar1Desc: 'Bordes elevados que cuidan la pantalla y el lente de la cámara contra caídas y rayones.',
  aboutPillar2Title: 'Materiales Premium',
  aboutPillar2Desc: 'TPU flexible con placa de policarbonato rígida para absorción óptima de impactos.',
  aboutPillar3Title: 'Calce y Botoneras Exactas',
  aboutPillar3Desc: 'Acceso perfecto a puertos de carga, parlantes y respuesta suave al tacto de los botones.',
  aboutPillar4Title: 'Impresión Ultra HD',
  aboutPillar4Desc: 'Colores vibrantes que no se borran, no se rayan ni se ponen amarillos con el uso.',

  footerDescription:
    'Showroom oficial de fundas y accesorios premium para celular. Calidad, protección y diseño para acompañar tu estilo todos los días.',
  footerCopyrightText: 'Hecho con ❤️ para potenciar tu estilo',
};

export async function fetchLiveShowroomTexts(): Promise<import('../types').ShowroomTextsConfig> {
  try {
    const res = await fetch('https://casemood.pages.dev/api/settings').catch(() => null);
    if (!res || !res.ok) return DEFAULT_SHOWROOM_TEXTS;
    const { settings } = (await res.json()) as { settings: Record<string, string> };
    const raw = settings?.showroom_texts_config;
    if (!raw) return DEFAULT_SHOWROOM_TEXTS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SHOWROOM_TEXTS, ...parsed };
  } catch {
    return DEFAULT_SHOWROOM_TEXTS;
  }
}

export async function fetchLiveShowroomSwatches(): Promise<import('../types').ShowroomSwatchConfig[]> {
  try {
    const res = await fetch('https://casemood.pages.dev/api/settings').catch(() => null);
    if (!res || !res.ok) return DEFAULT_SWATCH_CONFIGS;
    const { settings } = (await res.json()) as { settings: Record<string, string> };
    const raw = settings?.showroom_swatches_config;
    if (!raw) return DEFAULT_SWATCH_CONFIGS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.filter((s) => s && s.enabled !== false);
    }
    return DEFAULT_SWATCH_CONFIGS;
  } catch {
    return DEFAULT_SWATCH_CONFIGS;
  }
}


