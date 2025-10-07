import React, { useState, useRef, useEffect } from 'react';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // For LCP images
  lazy?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
  sizes,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [lazy, priority, isInView]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate next-gen image sources with fallbacks
  const generateNextGenSrcSet = (baseSrc: string) => {
    // Extract filename without extension
    const lastDotIndex = baseSrc.lastIndexOf('.');
    const baseName = lastDotIndex !== -1 ? baseSrc.substring(0, lastDotIndex) : baseSrc;

    // Generate sources in order of preference (AVIF, WebP, original)
    const sources = [];

    // Check if AVIF version exists
    if (baseSrc.match(/\.(png|jpe?g)$/i)) {
      sources.push(`${baseName}.avif`);
    }

    // Check if WebP version exists
    if (baseSrc.match(/\.(png|jpe?g)$/i)) {
      sources.push(`${baseName}.webp`);
    }

    // Fallback to original
    sources.push(baseSrc);

    return sources.join(', ');
  };

  const nextGenSrcSet = generateNextGenSrcSet(src);

  if (hasError) {
    return (
      <div className={`${styles.error} ${className}`} style={{ width, height }} role="img" aria-label={alt}>
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {!isLoaded && <div className={styles.placeholder} style={{ width, height }} aria-hidden="true" />}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        srcSet={isInView ? nextGenSrcSet : undefined}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    </div>
  );
}
