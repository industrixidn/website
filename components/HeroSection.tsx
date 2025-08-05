'use client'

import React from 'react'
import { Row, Col, Button, Space, Card, Typography } from 'antd'
import { RocketOutlined, CloudOutlined, CheckCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  
  return (
    <section className="hero-section" style={{ paddingTop: '120px' }}>
      <div className="hero-bg-pattern"></div>
      
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Row justify="center" align="middle">
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              {/* Logo with Enhanced Styling */}
              <div style={{ marginBottom: '32px' }} className="animate-fadeInScale">
                <div style={{ 
                  display: 'inline-block',
                  padding: '20px',
                  background: isDarkMode 
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
                    : 'linear-gradient(145deg, rgba(30,41,59,0.9), rgba(15,23,42,0.7))',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-strong)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(16, 121, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative'
                }}
                className="animate-float"
                >
                  <div style={{
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background: 'var(--industrix-gradient)',
                    borderRadius: '18px',
                    zIndex: -1,
                    opacity: 0.1
                  }}></div>
                  <Image
                    src="/Logo.svg"
                    alt="Industrix Logo"
                    width={50}
                    height={50}
                    style={{ display: 'block', filter: 'drop-shadow(0 4px 8px rgba(16, 121, 255, 0.2))' }}
                  />
                </div>
              </div>
              
              {/* Main Heading */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <Title level={1} style={{ 
                  fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                  fontWeight: 900,
                  marginBottom: '24px',
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(16, 121, 255, 0.1)'
                }}>
                  <span className="animate-glow" style={{
                    animation: 'textGlow 3s ease-in-out infinite alternate',
                    textShadow: '0 0 20px rgba(16, 121, 255, 0.3)',
                    color: isDarkMode ? '#ffffff' : '#1a202c'
                  }}>Transform Your</span>{' '}
                  <span className="animate-gradient" style={{
                    background: 'linear-gradient(-45deg, #1079FF, #29C5FF, #F62A3A, #F85B62)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Industrial Operations
                  </span>
                </Title>
              </div>
              
              {/* Subheading */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <Paragraph style={{ 
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
                  marginBottom: '32px',
                  maxWidth: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  lineHeight: 1.6,
                  color: isDarkMode ? '#d1d5db' : '#374151',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  We&apos;re building the <strong style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b', fontWeight: 800 }}>next-generation digital infrastructure</strong> that powers <strong style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b', fontWeight: 800 }}>Indonesia&apos;s industrial revolution</strong>. Our cutting-edge platform <strong style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b', fontWeight: 800 }}>delivers unparalleled operational intelligence and autonomous control</strong> across <strong style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b', fontWeight: 800 }}>manufacturing, logistics, and complex industrial ecosystems</strong>.
                  <br /><br />
                  <span style={{ fontSize: '0.9rem', fontStyle: 'italic', color: isDarkMode ? '#d1d5db' : '#374151', fontWeight: 600 }}> ✨ Transcending traditional monitoring to architect truly intelligent, self-optimizing operations ✨</span>
                </Paragraph>
              </div>
              
              {/* CTA Buttons */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.6s', marginBottom: '48px' }}>
                <Space size={16} wrap>
                  <Button 
                    type="primary" 
                    size="large"
                    className="btn-gradient animate-glow"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ 
                      height: '48px',
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      fontSize: '14px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      border: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    size="large"
                    className="btn-outline"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ 
                      height: '48px',
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      fontSize: '14px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      borderWidth: '2px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    Learn More
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Feature Cards */}
        <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
          <Col xs={24} md={12}>
            <Card 
              className="feature-card"
              style={{ 
                height: '100%',
                textAlign: 'center',
                border: 'none',
                borderRadius: '12px',
                padding: '12px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              hoverable
            >
              <div className="feature-icon" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 24px',
                width: '80px',
                height: '80px'
              }}>
                <RocketOutlined />
              </div>
              <Title level={4} style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                Real-Time Monitoring
              </Title>
              <Paragraph style={{ fontSize: '14px', lineHeight: 1.5 }}>
                Track equipment performance, resource utilization, and operational metrics in real-time with our advanced dashboard
              </Paragraph>
            </Card>
          </Col>
          
          
          <Col xs={24} md={12}>
            <Card 
              className="feature-card"
              style={{ 
                height: '100%',
                textAlign: 'center',
                border: 'none',
                borderRadius: '12px',
                padding: '12px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              hoverable
            >
              <div className="feature-icon" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 24px',
                width: '80px',
                height: '80px'
              }}>
                <CloudOutlined />
              </div>
              <Title level={4} style={{ marginBottom: '12px', fontSize: '1.1rem' }}>
                Cloud-Based Platform
              </Title>
              <Paragraph style={{ fontSize: '14px', lineHeight: 1.5 }}>
                Access your data anywhere with enterprise-grade security and scalable cloud infrastructure
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
        {/* Trust Indicators */}
        <Card 
          style={{ 
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 80px',
            border: 'none',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
            background: isDarkMode 
              ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
              : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease'
          }}
        >
          <div>
            <CheckCircleOutlined style={{ color: '#1079FF', fontSize: '20px', marginRight: '8px' }} />
            <Title level={4} style={{ display: 'inline', color: '#1079FF', fontSize: '1.1rem' }}>
              Trusted by Indonesian Industries
            </Title>
          </div>
        </Card>
      </div>
    </section>
  )
}