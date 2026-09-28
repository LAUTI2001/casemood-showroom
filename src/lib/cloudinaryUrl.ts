/**
 * Utilidades para optimización y formateo de URLs de imágenes de Cloudinary
 * en el Showroom de CaseMood.
 */

/**
 * Detecta si el usuario tiene activado el modo Ahorro de Datos en su navegador
 * o si se encuentra en una red móvil lenta (2G).
 */
export function isDataSaverEnabled(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } })
    ?.connection;
  return Boolean(conn?.saveData || conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g');
}

/**
 * Inserta parámetros de optimización de Cloudinary:
 * - Formato moderno automático (f_auto: sirve AVIF/WebP según soporte)
 * - Compresión visual sin pérdidas perceptuales (q_auto)
 * - Ancho exacto delimitado (c_limit,w_xxx)
 * - Micro-thumbnail borroso para progressive blur-up (e_blur:1000,w_40,q_10)
 */
export function optimizeCloudinaryUrl(
  url: string,
  maxWidth = 800,
  quality: 'auto' | 'auto:good' | 'auto:eco' | 'auto:best' = 'auto',
  blur = false,
): string {
  if (!url) return url;
  const marker = '/image/upload/';
  const index = url.indexOf(marker);
  if (index === -1) return url;

  const before = url.slice(0, index + marker.length);
  const after = url.slice(index + marker.length);

  // Micro-thumbnail borroso para progressive blur-up (<1KB)
  if (blur) {
    return `${before}f_auto,q_10,c_limit,w_40,e_blur:1000/${after}`;
  }

  // Si el usuario tiene ahorro de datos activo, aplicamos compresión económica y menor resolución
  const dataSaver = isDataSaverEnabled();
  const effectiveQuality = dataSaver ? 'auto:eco' : quality;
  const effectiveWidth = dataSaver ? Math.min(maxWidth, 480) : maxWidth;

  return `${before}f_auto,q_${effectiveQuality},c_limit,w_${effectiveWidth}/${after}`;
}
