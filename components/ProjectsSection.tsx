'use client'

import React, { useState } from 'react'
import { Row, Col, Card, Typography, Button, Space } from 'antd'
import { RocketOutlined, SettingOutlined, EyeOutlined, ArrowRightOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

const caseStudies = [
  {
    id: 'fuel-tank-monitoring',
    title: 'Industrial IoT Fuel Tank Monitoring System',
    description: 'Enterprise-grade fuel tank monitoring system with ROS2-based IoT devices, microservices architecture, and multi-platform dashboard interfaces for real-time operational control.',
    icon: <RocketOutlined />,
    technologies: ['ROS2 + Python', 'Go Microservices', 'React + TypeScript', 'Tauri Desktop App', 'Docker + Kong API Gateway', 'PostgreSQL + Redis', 'MQTT + HAProxy'],
    status: 'Live Production',
    gradient: 'var(--industrix-gradient)',
    features: [
      'ROS2-based IoT devices with solenoid valve control & GPIO hardware integration',
      'Go microservices architecture with RBAC authentication & JWT token management',
      'Multi-platform interfaces: React CRM, Tauri desktop app, and cloud dashboard',
      'Real-time MQTT data streaming with Redis caching & PostgreSQL persistence',
      'Docker containerization with Kong API gateway & HAProxy load balancing',
      'Enterprise security: role-based permissions, device authentication & emergency shutdown protocols'
    ]
  },
  {
    id: 'blue-nautical-erp',
    title: 'Blue Nautical Cold Storage Logistics App',
    description: 'Mobile-first web application for tracking seafood logistics operations between Jakarta and Bali warehouses with anti-fraud security features.',
    icon: <SettingOutlined />,
    technologies: ['React + TypeScript', 'GPS Geofencing', 'Mobile Photography', 'Real-time Tracking'],
    status: 'In Production',
    gradient: 'var(--industrix-gradient-red)',
    features: [
      'Multi-location seafood intake & dispatch',
      'GPS-enforced geolocation security',
      'Photo documentation at each stage',
      'Weight discrepancy detection & admin review'
    ]
  }
]

export default function CaseStudiesSection() {
  const { isDarkMode } = useTheme()
  const [buttonStates, setButtonStates] = useState<{[key: string]: boolean}>({})
  const [fadingOut, setFadingOut] = useState<{[key: string]: boolean}>({})

  const toggleButtonState = (caseStudyId: string) => {
    // If button is currently "View Details", change to "Coming Soon"
    if (!buttonStates[caseStudyId]) {
      setButtonStates(prev => ({
        ...prev,
        [caseStudyId]: true
      }))
      
      // After 2.2 seconds, start fade out transition
      setTimeout(() => {
        setFadingOut(prev => ({
          ...prev,
          [caseStudyId]: true
        }))
      }, 2200)
      
      // After 2.5 seconds total, revert back to "View Details"
      setTimeout(() => {
        setButtonStates(prev => ({
          ...prev,
          [caseStudyId]: false
        }))
        setFadingOut(prev => ({
          ...prev,
          [caseStudyId]: false
        }))
      }, 2500)
    }
  }

  return (
    <section id="case-studies" style={{ 
      padding: '80px 0',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Title level={2} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '24px',
            background: 'var(--industrix-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Client Success Stories
          </Title>
          <Paragraph style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '800px',
            margin: '0 auto',
            color: isDarkMode ? '#94a3b8' : '#64748b'
          }}>
            Explore how we&apos;ve helped Indonesian companies transform their operations 
            with tailored digital solutions and proven results.
          </Paragraph>
        </div>

        {/* Case Studies Grid */}
        <Row gutter={[32, 32]}>
          {caseStudies.map((caseStudy) => (
            <Col xs={24} lg={12} key={caseStudy.id}>
              <Card
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '20px',
                  background: isDarkMode 
                    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(16, 121, 255, 0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 121, 255, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 121, 255, 0.1)'
                }}
              >
                {/* Project Header */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: caseStudy.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(16, 121, 255, 0.3)'
                    }}>
                      {caseStudy.icon}
                    </div>
                    
                    <div style={{
                      padding: '6px 16px',
                      borderRadius: '20px',
                      background: caseStudy.status === 'Live Production' 
                        ? 'linear-gradient(135deg, #10b981, #059669)'
                        : 'linear-gradient(135deg, #f59e0b, #d97706)',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {caseStudy.status}
                    </div>
                  </div>

                  <Title level={3} style={{ 
                    marginBottom: '12px',
                    fontSize: '1.5rem',
                    fontWeight: 700
                  }}>
                    {caseStudy.title}
                  </Title>
                  
                  <Paragraph style={{ 
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: '24px'
                  }}>
                    {caseStudy.description}
                  </Paragraph>
                </div>

                {/* Technologies */}
                <div style={{ marginBottom: '24px' }}>
                  <Title level={5} style={{ 
                    marginBottom: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    opacity: 0.8
                  }}>
                    Technologies
                  </Title>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '4px 12px',
                          borderRadius: '12px',
                          background: isDarkMode 
                            ? 'rgba(16, 121, 255, 0.2)'
                            : 'rgba(16, 121, 255, 0.1)',
                          color: '#1079FF',
                          fontSize: '12px',
                          fontWeight: 500,
                          border: '1px solid rgba(16, 121, 255, 0.3)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '32px' }}>
                  <Title level={5} style={{ 
                    marginBottom: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    opacity: 0.8
                  }}>
                    Key Features
                  </Title>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '0',
                    listStyle: 'none'
                  }}>
                    {caseStudy.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: isDarkMode ? '#cbd5e1' : '#475569'
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: caseStudy.gradient,
                          marginRight: '12px',
                          flexShrink: 0
                        }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button
                  type="primary"
                  size="large"
                  onClick={() => toggleButtonState(caseStudy.id)}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '12px',
                    background: buttonStates[caseStudy.id] 
                      ? 'linear-gradient(135deg, #6b7280, #4b5563)'
                      : caseStudy.gradient,
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: buttonStates[caseStudy.id] && !fadingOut[caseStudy.id]
                      ? 'pulse 1.5s ease-in-out infinite, shimmer 2s linear infinite' 
                      : fadingOut[caseStudy.id]
                      ? 'fadeOutScale 0.3s ease-in-out'
                      : 'fadeInScale 0.3s ease-in-out',
                    opacity: fadingOut[caseStudy.id] ? 0.3 : 1,
                    transform: fadingOut[caseStudy.id] ? 'scale(0.98)' : 'scale(1)'
                  }}
                  icon={buttonStates[caseStudy.id] ? <ClockCircleOutlined style={{ animation: fadingOut[caseStudy.id] ? 'none' : 'spin 2s linear infinite' }} /> : <EyeOutlined />}
                >
                  {buttonStates[caseStudy.id] ? 'Coming Soon' : 'View Details'}
                  {!buttonStates[caseStudy.id] && <ArrowRightOutlined style={{ fontSize: '12px' }} />}
                  
                  {/* Shimmer overlay effect during "Coming Soon" state */}
                  {buttonStates[caseStudy.id] && !fadingOut[caseStudy.id] && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'shimmerMove 2s ease-in-out infinite'
                    }} />
                  )}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '64px',
          padding: '48px 32px',
          borderRadius: '20px',
          background: isDarkMode 
            ? 'linear-gradient(145deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.05))'
            : 'linear-gradient(145deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.02))',
          border: `1px solid ${isDarkMode ? 'rgba(16, 121, 255, 0.2)' : 'rgba(16, 121, 255, 0.1)'}`
        }}>
          <Title level={3} style={{ 
            marginBottom: '16px',
            color: isDarkMode ? '#e2e8f0' : '#1e293b'
          }}>
            Ready to Transform Your Operations?
          </Title>
          <Paragraph style={{ 
            fontSize: '16px',
            marginBottom: '32px',
            color: isDarkMode ? '#94a3b8' : '#64748b',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Let&apos;s discuss how we can create custom digital solutions 
            tailored to your company&apos;s specific industrial needs and goals.
          </Paragraph>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px',
                borderRadius: '12px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Discuss Your Needs
            </Button>
            <Button
              size="large"
              onClick={() => {
                const element = document.getElementById('case-studies')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px',
                borderRadius: '12px',
                borderWidth: '2px',
                borderColor: '#1079FF',
                color: '#1079FF',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              View All Case Studies
            </Button>
          </Space>
        </div>
      </div>
    </section>
  )
}