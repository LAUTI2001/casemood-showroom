'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface ProductImageCrossfadeProps {
  images: string[];
  alt: string;
  className?: string;
  autoplayInterval?: number;
  priority?: boolean;
}

export function ProductImageCrossfade({
  images,
  alt,
  className = '',
  autoplayInterval = 3500,
  priority = false,
}: ProductImageCrossfadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef<number | null>(null);

  const validImages = images && images.length > 0
    ? images
    : ['https://res.cloudinary.com/tehmhtfm/image/upload/v1786833046/casemood-productos/ir1qmltsh2af2joov7ov.jpg'];

  useEffect(() => {
    if (validImages.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [validImages.length, isPaused, autoplayInterval]);

  function handleTouchStart(e: React.TouchEvent) {
    setIsPaused(true);
    touchStartRef.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    setIsPaused(false);
    if (touchStartRef.current !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStartRef.current - touchEnd;
      if (diff > 40) {
        // Swipe left
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
      } else if (diff < -40) {
        // Swipe right
        setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
      }
      touchStartRef.current = null;
    }
  }

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-white p-3 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {validImages.map((src, index) => {
        const isCurrent = index === currentIndex;
        return (
          <div
            key={src + index}
            className={`absolute inset-0 p-3 transition-opacity duration-700 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`${alt} - ángulo ${index + 1}`}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-contain transition-transform duration-500 hover:scale-105"
                priority={priority && index === 0}
                loading={priority && index === 0 ? undefined : 'lazy'}
              />
            </div>
          </div>
        );
      })}

      {/* Slide Indicators / Dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center items-center gap-1.5 pointer-events-none">
          {validImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-4 bg-brand-yellow shadow-xs'
                  : 'w-1.5 bg-slate-300/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
