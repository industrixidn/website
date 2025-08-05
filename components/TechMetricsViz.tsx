'use client'

import React, { useState, useEffect } from 'react'
import { Card, Typography, Row, Col, Progress } from 'antd'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Text } = Typography

interface MetricData {
  label: string
  value: number
  target: number
  trend: 'up' | 'down' | 'stable'
  color: string
}

const mockMetrics: MetricData[] = [
  { label: 'System Uptime', value: 99.9, target: 99.5, trend: 'up', color: '#52c41a' },
  { label: 'Response Time', value: 120, target: 200, trend: 'down', color: '#1890ff' },
  { label: 'Processing Speed', value: 2.4, target: 2.0, trend: 'up', color: '#722ed1' },
  { label: 'Data Accuracy', value: 99.7, target: 99.0, trend: 'stable', color: '#eb2f96' },
]

export default function TechMetricsViz() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(mockMetrics.map(() => 0))
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(mockMetrics.map(metric => metric.value))
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️'
      case 'down': return '↘️' 
      default: return '→'
    }
  }

  return (
    <Card
      style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
          : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
        backdropFilter: 'blur(20px)',
        border: 'none',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      <Title level={3} style={{ 
        textAlign: 'center', 
        marginBottom: '32px',
        background: 'var(--industrix-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Real-Time System Performance
      </Title>

      <Row gutter={[24, 24]}>
        {mockMetrics.map((metric, index) => (
          <Col xs={24} sm={12} key={metric.label}>
            <div style={{
              padding: '20px',
              borderRadius: '12px',
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 121, 255, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <Text style={{ fontWeight: 600, fontSize: '14px' }}>
                  {metric.label}
                </Text>
                <span style={{ fontSize: '16px' }}>
                  {getTrendIcon(metric.trend)}
                </span>
              </div>

              <div style={{ marginBottom: '8px' }}>
                <Text style={{ 
                  fontSize: '24px', 
                  fontWeight: 700,
                  color: metric.color
                }}>
                  {metric.label.includes('Time') ? `${(animatedValues[index] || 0).toFixed(0)}ms` : 
                   metric.label.includes('Speed') ? `${(animatedValues[index] || 0).toFixed(1)}x` :
                   `${(animatedValues[index] || 0).toFixed(1)}%`}
                </Text>
              </div>

              <Progress
                percent={metric.label.includes('Time') ? 
                  Math.max(0, 100 - ((animatedValues[index] || 0) / 300) * 100) :
                  ((animatedValues[index] || 0) / (metric.label.includes('Speed') ? 3 : 100)) * 100
                }
                strokeColor={{
                  '0%': metric.color,
                  '100%': metric.color + '80'
                }}
                trailColor={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                strokeWidth={8}
                showInfo={false}
              />

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginTop: '8px'
              }}>
                <Text style={{ fontSize: '12px', opacity: 0.7 }}>
                  Target: {metric.label.includes('Time') ? `${metric.target}ms` : 
                           metric.label.includes('Speed') ? `${metric.target}x` :
                           `${metric.target}%`}
                </Text>
                <Text style={{ 
                  fontSize: '12px', 
                  color: metric.trend === 'up' ? '#52c41a' : 
                         metric.trend === 'down' ? '#f5222d' : '#faad14'
                }}>
                  {metric.trend === 'up' ? '+' : metric.trend === 'down' ? '-' : '±'}
                  {Math.abs((animatedValues[index] || 0) - metric.target).toFixed(1)}
                </Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Live data indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '24px',
        gap: '8px'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#52c41a',
          animation: 'pulse 2s infinite'
        }} />
        <Text style={{ fontSize: '12px', opacity: 0.7 }}>
          Live Data Feed - Updated in Real Time
        </Text>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </Card>
  )
}