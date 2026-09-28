export interface ShowroomProduct {
  id: string;
  name: string;
  displayName: string;
  category: string;
  price: number;
  models: string[];
  images: string[];
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  storeUrl: string;
}

export interface ShowroomApiConfig {
  productName: string;
  customTitle?: string;
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  enabled: boolean;
}

export interface ShowroomSwatchConfig {
  id: string;
  name: string;
  productName?: string;
  label: string;
  finishName: string;
  colorHex: string;
  textColor?: string;
  tagline: string;
  glowColor?: string;
  enabled?: boolean;
}

export interface RawCatalogProduct {
  id: string;
  name: string;
  model: string;
  price: number;
  stock: number;
  imageUrl: string;
  imageUrls?: string[];
  category: string;
  isNew?: boolean;
  order?: number;
  active: boolean;
}
export interface ShowroomTextsConfig {
  // 1. Hero Principal
  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroDescription: string;
  heroCtaExplore: string;
  heroCtaStore: string;

  // 2. Studio Mood Switcher
  studioBadge: string;
  studioTitle: string;
  studioSubtitle: string;

  // 3. Hotspots / Detalles
  hotspotsBadge: string;
  hotspotsTitle: string;
  hotspotsSubtitle: string;
  hotspot1Title: string;
  hotspot1Desc: string;
  hotspot2Title: string;
  hotspot2Desc: string;
  hotspot3Title: string;
  hotspot3Desc: string;
  hotspot4Title: string;
  hotspot4Desc: string;

  // 4. Bento Grid
  bentoBadge: string;
  bentoTitle: string;
  bentoSubtitle: string;

  // 5. Cine Highlights
  cineBadge: string;
  cineTitle: string;
  cineSubtitle: string;

  // 6. Coverflow 3D
  coverflowBadge: string;
  coverflowTitle: string;
  coverflowSubtitle: string;

  // 7. Lookbook Stream
  lookbookBadge: string;
  lookbookTitle: string;
  lookbookSubtitle: string;

  // 8. Sobre Nosotros
  aboutBadge: string;
  aboutTitle: string;
  aboutParagraph: string;
  aboutMascotTitle: string;
  aboutMascotSubtitle: string;
  aboutPillar1Title: string;
  aboutPillar1Desc: string;
  aboutPillar2Title: string;
  aboutPillar2Desc: string;
  aboutPillar3Title: string;
  aboutPillar3Desc: string;
  aboutPillar4Title: string;
  aboutPillar4Desc: string;

  // 9. Footer
  footerDescription: string;
  footerCopyrightText: string;
}
