import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Measure Web Vitals
    const measureWebVitals = () => {
      // FCP - First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint')
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint')
      
      // Navigation timing for TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null

      setMetrics(prev => ({
        ...prev,
        fcp: fcpEntry ? Math.round(fcpEntry.startTime) : null,
        ttfb: ttfb ? Math.round(ttfb) : null
      }))
    }

    // Measure when page is loaded
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    // Use PerformanceObserver for more accurate metrics
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        setMetrics(prev => ({
          ...prev,
          lcp: Math.round(lastEntry.startTime)
        }))
      })

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          setMetrics(prev => ({
            ...prev,
            fid: Math.round((entry as any).processingStart - entry.startTime)
          }))
        })
      })

      // CLS Observer
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setMetrics(prev => ({
          ...prev,
          cls: Math.round(clsValue * 1000) / 1000
        }))
      })

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        fidObserver.observe({ entryTypes: ['first-input'] })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.warn('Performance observation not supported:', e)
      }

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        window.removeEventListener('load', measureWebVitals)
      }
    }

    return () => {
      window.removeEventListener('load', measureWebVitals)
    }
  }, [])

  return metrics
}