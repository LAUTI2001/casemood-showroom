export const CASEMOOD_PHONE = '5493424353268';
export const CASEMOOD_INSTAGRAM = 'https://instagram.com/casemood__';
export const CASEMOOD_STORE_URL = 'https://casemood.pages.dev';

export function createWhatsAppConsultUrl(productName: string): string {
  const message = `¡Hola Case Mood! 👋 Me encantó el diseño *${productName}* que vi en la galería visual y quería consultarles detalles.`;
  return `https://wa.me/${CASEMOOD_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppUrl(): string {
  const message = '¡Hola Case Mood! 👋 Estuve viendo el catálogo en el showroom y me gustaría hacerles una consulta.';
  return `https://wa.me/${CASEMOOD_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getEcommerceProductUrl(productName: string): string {
  return `${CASEMOOD_STORE_URL}/producto/${encodeURIComponent(productName)}`;
}
