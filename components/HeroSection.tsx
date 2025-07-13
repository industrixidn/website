'use client'

import React from 'react'
import { Row, Col, Button, Space, Card, Typography } from 'antd'
import { RocketOutlined, ThunderboltOutlined, CloudOutlined, CheckCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  
  return (
    <section className="hero-section" style={{ paddingTop: '80px' }}>
      <div className="hero-bg-pattern"></div>
      
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Row justify="center" align="middle">
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              {/* Logo with Enhanced Styling */}
              <div style={{ marginBottom: '48px' }} className="animate-fadeInScale">
                <div style={{ 
                  display: 'inline-block',
                  padding: '32px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                  borderRadius: '24px',
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
                    borderRadius: '26px',
                    zIndex: -1,
                    opacity: 0.1
                  }}></div>
                  <Image
                    src="/Logo.svg"
                    alt="Industrix Logo"
                    width={80}
                    height={80}
                    style={{ display: 'block', filter: 'drop-shadow(0 4px 8px rgba(16, 121, 255, 0.2))' }}
                  />
                </div>
              </div>
              
              {/* Main Heading */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <Title level={1} style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  marginBottom: '32px',
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(16, 121, 255, 0.1)'
                }}>
                  Transform Your{' '}
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
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  marginBottom: '48px',
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  lineHeight: 1.7,
                  color: '#475569',
                  textShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  Gain <strong style={{ color: '#1079FF', fontWeight: 700 }}>complete visibility</strong> and{' '}
                  <strong style={{ color: '#1079FF', fontWeight: 700 }}>control</strong> over your industrial processes with our integrated 
                  digital solutions. From equipment tracking to fuel monitoring, we help Indonesian 
                  industries embrace the future of smart operations.
                </Paragraph>
              </div>
              
              {/* CTA Buttons */}
              <div className="animate-fadeInUp" style={{ animationDelay: '0.6s', marginBottom: '64px' }}>
                <Space size="large" wrap>
                  <Button 
                    type="primary" 
                    size="large"
                    className="btn-gradient animate-glow"
                    style={{ 
                      height: '56px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                      fontSize: '16px',
                      fontWeight: 700,
                      borderRadius: '16px',
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
                    style={{ 
                      height: '56px',
                      paddingLeft: '40px',
                      paddingRight: '40px',
                      fontSize: '16px',
                      fontWeight: 700,
                      borderRadius: '16px',
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
        <Row gutter={[32, 32]} style={{ marginBottom: '64px' }}>
          <Col xs={24} md={8}>
            <Card 
              className="feature-card"
              style={{ 
                height: '100%',
                textAlign: 'center',
                border: 'none',
                borderRadius: '16px',
                padding: '16px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              hoverable
            >
              <div className="feature-icon">
                <RocketOutlined />
              </div>
              <Title level={4} style={{ marginBottom: '16px' }}>
                Real-Time Monitoring
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Track equipment performance, fuel consumption, and operational metrics in real-time with our advanced dashboard
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              className="feature-card"
              style={{ 
                height: '100%',
                textAlign: 'center',
                border: 'none',
                borderRadius: '16px',
                padding: '16px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              hoverable
            >
              <div className="feature-icon feature-icon-red">
                <ThunderboltOutlined />
              </div>
              <Title level={4} style={{ marginBottom: '16px' }}>
                Smart Integration
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Seamlessly connect with your existing ERP systems, hardware, and workflows without disrupting operations
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              className="feature-card"
              style={{ 
                height: '100%',
                textAlign: 'center',
                border: 'none',
                borderRadius: '16px',
                padding: '16px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              hoverable
            >
              <div className="feature-icon">
                <CloudOutlined />
              </div>
              <Title level={4} style={{ marginBottom: '16px' }}>
                Cloud-Based Platform
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Access your data anywhere with enterprise-grade security and scalable cloud infrastructure
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
        {/* Trust Indicators */}
        <Card 
          style={{ 
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 120px',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            background: isDarkMode 
              ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
              : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <CheckCircleOutlined style={{ color: '#1079FF', fontSize: '24px', marginRight: '8px' }} />
            <Title level={4} style={{ display: 'inline', color: '#1079FF' }}>
              Trusted by Indonesian Industries
            </Title>
          </div>
          
          <Row gutter={[64, 48]}>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ 
                  width: '64px', 
                  height: '64px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  margin: '0 auto 16px'
                }}>
                  🌾
                </div>
                <Title level={4} style={{ marginBottom: '8px' }}>Agriculture</Title>
                <Paragraph>Smart Farming Solutions</Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <div className="feature-icon feature-icon-red" style={{ 
                  width: '64px', 
                  height: '64px',
                  margin: '0 auto 16px'
                }}>
                  ⛏️
                </div>
                <Title level={4} style={{ marginBottom: '8px' }}>Mining</Title>
                <Paragraph>Equipment Tracking</Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={8}>
              <div style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ 
                  width: '64px', 
                  height: '64px',
                  margin: '0 auto 16px'
                }}>
                  🚚
                </div>
                <Title level={4} style={{ marginBottom: '8px' }}>Logistics</Title>
                <Paragraph>Fleet Management</Paragraph>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  )
}