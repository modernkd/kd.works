// Core Web Vitals tracking and performance monitoring
import React from 'react';
export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observers: PerformanceObserver[] = [];
  private metrics: Partial<PerformanceMetrics> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
          this.metrics.lcp = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & {
              processingStart: number;
              startTime: number;
            };
            const fid = fidEntry.processingStart - fidEntry.startTime;
            this.metrics.fid = fid;
            this.reportMetric('FID', fid);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { value: number; hadRecentInput?: boolean };
            if (!(clsEntry as any).hadRecentInput) {
              clsValue += clsEntry.value;
              this.metrics.cls = clsValue;
              this.reportMetric('CLS', clsValue);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    // First Contentful Paint (FCP) and Time to First Byte (TTFB)
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

        if (navigation) {
          this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
          this.reportMetric('TTFB', this.metrics.ttfb);
        }

        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
          this.reportMetric('FCP', fcpEntry.startTime);
        }

        // Log all metrics once page is fully loaded
        this.logAllMetrics();
      }, 0);
    });
  }

  private reportMetric(name: string, value: number) {
    // Report to analytics service (e.g., Google Analytics, custom endpoint)
    console.log(`Performance: ${name} = ${value.toFixed(2)}ms`);

    // Example: Report to Google Analytics 4
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(value),
        custom_parameter: 'performance_metric',
      });
    }
  }

  private logAllMetrics() {
    console.group('🚀 Core Web Vitals');
    console.log('LCP:', this.metrics.lcp?.toFixed(2), 'ms');
    console.log('FID:', this.metrics.fid?.toFixed(2), 'ms');
    console.log('CLS:', this.metrics.cls?.toFixed(4));
    console.log('FCP:', this.metrics.fcp?.toFixed(2), 'ms');
    console.log('TTFB:', this.metrics.ttfb?.toFixed(2), 'ms');
    console.groupEnd();

    // Check if metrics meet Google's thresholds
    this.evaluateThresholds();
  }

  private evaluateThresholds() {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
    };

    console.group('📊 Performance Assessment');
    if (this.metrics.lcp) {
      const rating =
        this.metrics.lcp <= thresholds.lcp.good
          ? 'Good'
          : this.metrics.lcp <= thresholds.lcp.poor
            ? 'Needs Improvement'
            : 'Poor';
      console.log(`LCP: ${rating} (${this.metrics.lcp.toFixed(2)}ms)`);
    }

    if (this.metrics.fid) {
      const rating =
        this.metrics.fid <= thresholds.fid.good
          ? 'Good'
          : this.metrics.fid <= thresholds.fid.poor
            ? 'Needs Improvement'
            : 'Poor';
      console.log(`FID: ${rating} (${this.metrics.fid.toFixed(2)}ms)`);
    }

    if (this.metrics.cls !== undefined) {
      const rating =
        this.metrics.cls <= thresholds.cls.good
          ? 'Good'
          : this.metrics.cls <= thresholds.cls.poor
            ? 'Needs Improvement'
            : 'Poor';
      console.log(`CLS: ${rating} (${this.metrics.cls.toFixed(4)})`);
    }
    console.groupEnd();
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  disconnect() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Initialize performance monitoring
export const performanceMonitor = PerformanceMonitor.getInstance();

// Hook for React components to access performance metrics
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = React.useState<Partial<PerformanceMetrics>>({});

  React.useEffect(() => {
    const updateMetrics = () => setMetrics(performanceMonitor.getMetrics());
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}
