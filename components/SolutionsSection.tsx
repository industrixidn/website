'use client'

import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { 
  MonitorOutlined, 
  ThunderboltOutlined, 
  CloudOutlined, 
  BarChartOutlined,
  SafetyOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

const solutions = [
  {
    icon: <MonitorOutlined />,
    title: 'Real-Time Monitoring',
    description: 'Track equipment performance, resource utilization, and operational metrics in real-time with our advanced IoT dashboard.',
    features: [
      'Live equipment status tracking',
      'Resource utilization analytics',
      'Performance metrics monitoring',
      'Automated alerts and notifications'
    ],
    gradient: 'var(--industrix-gradient)'
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Smart Integration',
    description: 'Seamlessly integrate with your existing ERP systems, hardware, and workflows without disrupting operations.',
    features: [
      'ERP system integration',
      'Hardware compatibility',
      'API-first architecture',
      'Custom workflow automation'
    ],
    gradient: 'var(--industrix-gradient-red)'
  },
  {
    icon: <CloudOutlined />,
    title: 'Cloud Platform',
    description: 'Access your data anywhere with enterprise-grade security and scalable cloud infrastructure.',
    features: [
      'Multi-device accessibility',
      'Enterprise security',
      'Scalable infrastructure',
      'Real-time synchronization'
    ],
    gradient: 'var(--industrix-gradient)'
  },
  {
    icon: <BarChartOutlined />,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
    features: [
      'Predictive analytics',
      'Custom reporting',
      'Data visualization',
      'Trend analysis'
    ],
    gradient: 'var(--industrix-gradient-red)'
  },
  {
    icon: <SafetyOutlined />,
    title: 'Compliance & Safety',
    description: 'Ensure regulatory compliance and maintain safety standards with automated monitoring.',
    features: [
      'Regulatory compliance tracking',
      'Safety protocol monitoring',
      'Automated reporting',
      'Audit trail management'
    ],
    gradient: 'var(--industrix-gradient)'
  },
  {
    icon: <SettingOutlined />,
    title: 'Custom Solutions',
    description: 'Tailored solutions designed specifically for your industry and operational requirements.',
    features: [
      'Industry-specific customization',
      'Modular architecture',
      'Scalable deployment',
      'Dedicated support'
    ],
    gradient: 'var(--industrix-gradient-red)'
  }
]

export default function SolutionsSection() {
  const { isDarkMode } = useTheme()
  
  return (
    <section id="solutions" style={{ 
      background: isDarkMode ? '#0f172a' : '#f8fafc', 
      paddingTop: '60px',
      paddingBottom: '40px',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }} className="animate-fadeInUp">
          <Title level={2} className="section-title" style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '24px',
            textShadow: '0 4px 20px rgba(16, 121, 255, 0.1)'
          }}>
            Our <span className="animate-gradient" style={{
              background: 'linear-gradient(-45deg, #1079FF, #29C5FF, #F62A3A, #F85B62)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Solutions</span>
          </Title>
          <Paragraph className="section-subtitle" style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.7,
            color: '#64748b'
          }}>
            Comprehensive digital transformation solutions designed to modernize your industrial operations
            and drive operational excellence across all sectors.
          </Paragraph>
        </div>

        <Row gutter={[24, 32]} style={{ marginBottom: '48px' }}>
          {solutions.map((solution, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <div 
                className="animate-fadeInUp" 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  height: '100%'
                }}
              >
                <Card
                  className="solution-card"
                  data-gradient={solution.gradient.includes('red') ? 'red' : 'blue'}
                  style={{
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  hoverable
                  cover={
                    <div style={{ padding: '24px 24px 0', position: 'relative' }}>
                      <div 
                        className="feature-icon animate-float"
                        style={{
                          background: solution.gradient,
                          margin: '0 auto 20px',
                          width: '60px',
                          height: '60px',
                          fontSize: '24px',
                          borderRadius: '16px',
                          boxShadow: 'var(--shadow-soft)',
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        {solution.icon}
                      </div>
                    </div>
                  }
                >
                <div style={{ padding: '0 20px 24px' }}>
                  <Title level={4} style={{ 
                    marginBottom: '16px', 
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: isDarkMode ? '#f1f5f9' : '#1e293b'
                  }}>
                    {solution.title}
                  </Title>
                  <Paragraph style={{ 
                    fontSize: '14px', 
                    lineHeight: 1.6, 
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: isDarkMode ? '#cbd5e1' : '#64748b'
                  }}>
                    {solution.description}
                  </Paragraph>
                  
                  <div style={{ marginBottom: '8px' }}>
                    {solution.features.map((feature, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '8px',
                        fontSize: '13px',
                        color: isDarkMode ? '#e2e8f0' : '#475569',
                        padding: '4px 0'
                      }}>
                        <div style={{ 
                          width: '8px', 
                          height: '8px', 
                          borderRadius: '50%', 
                          background: 'var(--industrix-gradient)',
                          marginRight: '16px',
                          flexShrink: 0
                        }}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                </div>
              </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}