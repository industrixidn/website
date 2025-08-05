'use client'

import React from 'react'
import { Layout, Row, Col, Typography, Space } from 'antd'
import { 
  MailOutlined, 
  EnvironmentOutlined
} from '@ant-design/icons'
import Image from 'next/image'
import { useTheme } from '../app/theme/ThemeProvider'

const { Footer: AntFooter } = Layout
const { Title, Paragraph, Text } = Typography

export default function Footer() {
  const { isDarkMode } = useTheme()
  
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/#news' }
    ],
    solutions: [
      { label: 'Real-Time Monitoring', href: '/#solutions' },
      { label: 'Smart Integration', href: '/#solutions' },
      { label: 'Cloud Platform', href: '/#solutions' },
      { label: 'Analytics', href: '/#solutions' }
    ],
    industries: [
      { label: 'Agriculture', href: '/#industries' },
      { label: 'Mining', href: '/#industries' },
      { label: 'Logistics', href: '/#industries' },
      { label: 'Manufacturing', href: '/#industries' }
    ],
    support: [
      { label: 'Contact Us', href: '/#contact' },
      { label: 'Documentation', href: '/#docs' },
      { label: 'Support Center', href: '/#support' },
      { label: 'Status', href: '/#status' }
    ]
  }

  return (
    <AntFooter 
      style={{
        background: isDarkMode ? '#1f1f1f' : '#1a1a1a',
        color: 'white',
        padding: '64px 0 32px',
        marginTop: 0
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Row gutter={[48, 48]}>
          {/* Company Info */}
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Image
                src="/Logo.svg"
                alt="Industrix Logo"
                width={40}
                height={40}
                style={{ display: 'block' }}
              />
              <Text style={{ 
                fontSize: '24px', 
                fontWeight: 700,
                color: 'white'
              }}>
                Industrix
              </Text>
            </div>
            <Paragraph style={{ 
              color: '#a1a1aa',
              fontSize: '16px',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              Transform your industrial operations with smart digital solutions. 
              Specializing in equipment tracking, resource monitoring, and enterprise 
              integration for Indonesian industries.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '24px' }}>
              Company
            </Title>
            <Space direction="vertical" size={12}>
              {footerLinks.company.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  style={{ 
                    color: '#a1a1aa',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '24px' }}>
              Solutions
            </Title>
            <Space direction="vertical" size={12}>
              {footerLinks.solutions.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  style={{ 
                    color: '#a1a1aa',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white', marginBottom: '24px' }}>
              Contact Information
            </Title>
            <Space direction="vertical" size={16}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MailOutlined style={{ color: '#1079FF', fontSize: '16px' }} />
                <Text style={{ color: '#a1a1aa', fontSize: '14px' }}>
                  industrix.idn@gmail.com
                </Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <EnvironmentOutlined style={{ color: '#1079FF', fontSize: '16px' }} />
                <Text style={{ color: '#a1a1aa', fontSize: '14px' }}>
                  Jakarta, Indonesia
                </Text>
              </div>
            </Space>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #404040',
          marginTop: '48px',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <Text style={{ color: '#a1a1aa', fontSize: '14px' }}>
            © {currentYear} Industrix. All rights reserved.
          </Text>
          <Space size="large">
            <a 
              href="/privacy" 
              style={{ 
                color: '#a1a1aa', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              style={{ 
                color: '#a1a1aa', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Terms of Service
            </a>
            <a 
              href="/cookies" 
              style={{ 
                color: '#a1a1aa', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Cookie Policy
            </a>
          </Space>
        </div>
      </div>
    </AntFooter>
  )
}