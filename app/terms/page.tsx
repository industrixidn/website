'use client'

import React from 'react'
import { Layout, Typography, Card } from 'antd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '../theme/ThemeProvider'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function TermsOfServicePage() {
  const { isDarkMode } = useTheme()

  return (
    <Layout>
      <Navbar />
      <Content style={{ marginTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: '80px 0 60px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={1} style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '24px',
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Terms of Service
            </Title>
            
            <Paragraph style={{ 
              fontSize: '18px',
              lineHeight: 1.7,
              opacity: 0.8,
              marginBottom: '0'
            }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Paragraph>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section style={{ 
          padding: '80px 0',
          background: isDarkMode ? '#1f1f1f' : '#ffffff'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <Card style={{
              border: 'none',
              borderRadius: '16px',
              background: isDarkMode 
                ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              padding: '32px'
            }}>
              <div style={{ lineHeight: 1.7 }}>
                <Title level={3}>1. Acceptance of Terms</Title>
                <Paragraph>
                  By accessing and using Industrix&apos;s services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </Paragraph>

                <Title level={3}>2. Description of Service</Title>
                <Paragraph>
                  Industrix provides industrial monitoring and management solutions, including but not limited to:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Real-time equipment monitoring and analytics</li>
                  <li>IoT device integration and data collection</li>
                  <li>Industrial dashboard and reporting tools</li>
                  <li>Cloud-based platform services</li>
                  <li>Technical support and consultation</li>
                </ul>

                <Title level={3}>3. User Accounts</Title>
                <Paragraph>
                  To access certain features of our service, you may be required to create an account. You are responsible for:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>

                <Title level={3}>4. Acceptable Use</Title>
                <Paragraph>You agree not to use the service to:</Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit malicious code or compromise system security</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>

                <Title level={3}>5. Intellectual Property</Title>
                <Paragraph>
                  The service and its original content, features, and functionality are and will remain the exclusive 
                  property of Industrix and its licensors. The service is protected by copyright, trademark, and other laws.
                </Paragraph>

                <Title level={3}>6. Service Availability</Title>
                <Paragraph>
                  We strive to provide continuous service availability, but we do not guarantee that the service will be 
                  uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue the service with or without notice.
                </Paragraph>

                <Title level={3}>7. Data and Privacy</Title>
                <Paragraph>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices regarding the collection and use of your information.
                </Paragraph>

                <Title level={3}>8. Limitation of Liability</Title>
                <Paragraph>
                  In no event shall Industrix, its directors, employees, or agents be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </Paragraph>

                <Title level={3}>9. Indemnification</Title>
                <Paragraph>
                  You agree to defend, indemnify, and hold harmless Industrix from and against any claims, damages, 
                  obligations, losses, liabilities, costs, or debt, and expenses (including attorney&apos;s fees) arising from your use of the service.
                </Paragraph>

                <Title level={3}>10. Termination</Title>
                <Paragraph>
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice, 
                  under our sole discretion, for any reason whatsoever and without limitation.
                </Paragraph>

                <Title level={3}>11. Governing Law</Title>
                <Paragraph>
                  These Terms shall be interpreted and governed by the laws of Indonesia, without regard to conflict of law provisions.
                </Paragraph>

                <Title level={3}>12. Contact Information</Title>
                <Paragraph>
                  If you have any questions about these Terms of Service, please contact us at:
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> industrix.idn@gmail.com<br />
                  <strong>Address:</strong> Jakarta, Indonesia
                </Paragraph>

                <Title level={3}>13. Changes to Terms</Title>
                <Paragraph>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will try to provide at least 30 days notice prior to any new terms taking effect.
                </Paragraph>
              </div>
            </Card>
          </div>
        </section>
      </Content>

      <Footer />
    </Layout>
  )
}