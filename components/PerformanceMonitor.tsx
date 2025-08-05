'use client'

import React, { useEffect, useState } from 'react'
import { Card, Typography, Progress, Space } from 'antd'
import { useTheme } from '../app/theme/ThemeProvider'

const { Text } = Typography

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint  
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const showMetrics = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('show-perf-metrics') === 'true'
    
    if (!showMetrics) return

    setIsVisible(true)

    // Web Vitals measurement
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        const ttfb = navigation.responseStart - navigation.requestStart

        setMetrics({
          fcp: Math.round(fcp),
          lcp: 0, // Would need PerformanceObserver for accurate LCP
          fid: 0, // Would need PerformanceObserver for FID
          cls: 0, // Would need PerformanceObserver for CLS
          ttfb: Math.round(ttfb)
        })
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => window.removeEventListener('load', measurePerformance)
  }, [])

  if (!isVisible || !metrics) return null

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return '#52c41a' // Good
    if (value <= thresholds[1]) return '#faad14' // Needs improvement
    return '#f5222d' // Poor
  }

  const getScorePercentage = (value: number, max: number) => {
    return Math.min((value / max) * 100, 100)
  }

  return (
    <Card
      size="small"
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: 280,
        zIndex: 1000,
        opacity: 0.9,
        background: isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
      }}
      title={
        <Text style={{ fontSize: '12px', fontWeight: 600 }}>
          ⚡ Performance Metrics
        </Text>
      }
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div>
          <Text style={{ fontSize: '11px' }}>First Contentful Paint</Text>
          <Progress
            percent={getScorePercentage(metrics.fcp, 3000)}
            size="small"
            strokeColor={getScoreColor(metrics.fcp, [1800, 3000])}
            format={() => `${metrics.fcp}ms`}
          />
        </div>
        
        <div>
          <Text style={{ fontSize: '11px' }}>Time to First Byte</Text>
          <Progress
            percent={getScorePercentage(metrics.ttfb, 1500)}
            size="small"
            strokeColor={getScoreColor(metrics.ttfb, [800, 1500])}
            format={() => `${metrics.ttfb}ms`}
          />
        </div>

        <Text style={{ fontSize: '10px', opacity: 0.7 }}>
          💡 Dev metrics - disable in production
        </Text>
      </Space>
    </Card>
  )
}