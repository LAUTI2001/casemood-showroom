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
