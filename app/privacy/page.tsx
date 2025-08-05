'use client'

import React from 'react'
import { Layout, Typography, Card } from 'antd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '../theme/ThemeProvider'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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

        {/* Privacy Policy Content */}
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
                <Title level={3}>1. Information We Collect</Title>
                <Paragraph>
                  At Industrix, we collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Industrial equipment and operational data</li>
                  <li>Usage data and analytics from our platform</li>
                </ul>

                <Title level={3}>2. How We Use Your Information</Title>
                <Paragraph>
                  We use the information we collect to:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Provide, maintain, and improve our industrial monitoring services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>

                <Title level={3}>3. Information Sharing and Disclosure</Title>
                <Paragraph>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share information in the following circumstances:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations or protect rights and safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <Title level={3}>4. Data Security</Title>
                <Paragraph>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet is 100% secure.
                </Paragraph>

                <Title level={3}>5. International Data Transfers</Title>
                <Paragraph>
                  Your information may be transferred to and processed in countries other than Indonesia. 
                  We ensure appropriate safeguards are in place to protect your personal information.
                </Paragraph>

                <Title level={3}>6. Your Rights</Title>
                <Paragraph>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to our processing of your personal information</li>
                </ul>

                <Title level={3}>7. Contact Us</Title>
                <Paragraph>
                  If you have any questions about this Privacy Policy, please contact us at:
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> industrix.idn@gmail.com<br />
                  <strong>Address:</strong> Jakarta, Indonesia
                </Paragraph>

                <Title level={3}>8. Changes to This Policy</Title>
                <Paragraph>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
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