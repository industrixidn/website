'use client'

import React from 'react'
import { Layout, Typography, Card } from 'antd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '../theme/ThemeProvider'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function CookiePolicyPage() {
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
              Cookie Policy
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

        {/* Cookie Policy Content */}
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
                <Title level={3}>What Are Cookies?</Title>
                <Paragraph>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </Paragraph>

                <Title level={3}>How We Use Cookies</Title>
                <Paragraph>
                  Industrix uses cookies to enhance your experience on our website and improve our services. 
                  We use cookies for the following purposes:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Authentication and security</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing website performance and usage</li>
                  <li>Providing personalized content and features</li>
                  <li>Enabling social media features</li>
                </ul>

                <Title level={3}>Types of Cookies We Use</Title>
                
                <Title level={4}>Essential Cookies</Title>
                <Paragraph>
                  These cookies are necessary for the website to function properly. They enable core functionality such as 
                  security, network management, and accessibility. You cannot disable these cookies without impacting the site&apos;s functionality.
                </Paragraph>

                <Title level={4}>Performance Cookies</Title>
                <Paragraph>
                  These cookies collect information about how visitors use our website, such as which pages are visited most often. 
                  This data helps us improve how our website works and enhance user experience.
                </Paragraph>

                <Title level={4}>Functional Cookies</Title>
                <Paragraph>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </Paragraph>

                <Title level={4}>Targeting/Advertising Cookies</Title>
                <Paragraph>
                  These cookies are used to deliver content more relevant to you and your interests. They may be used to deliver 
                  targeted advertising or to limit the number of times you see an advertisement.
                </Paragraph>

                <Title level={3}>Third-Party Cookies</Title>
                <Paragraph>
                  We may use third-party services that place cookies on your device. These services help us with:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Website analytics (Google Analytics)</li>
                  <li>Social media integration</li>
                  <li>Customer support tools</li>
                  <li>Email marketing services</li>
                </ul>

                <Title level={3}>Managing Your Cookie Preferences</Title>
                <Paragraph>
                  You can control and manage cookies in various ways:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing cookies</li>
                  <li><strong>Opt-out Links:</strong> Some third-party services provide opt-out mechanisms</li>
                  <li><strong>Privacy Tools:</strong> Use browser extensions or privacy tools to manage cookies</li>
                </ul>

                <Title level={3}>Impact of Disabling Cookies</Title>
                <Paragraph>
                  If you choose to disable cookies, some features of our website may not function properly. This could include:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Login and authentication features</li>
                  <li>Personalized content and recommendations</li>
                  <li>Shopping cart functionality</li>
                  <li>Analytics and performance optimization</li>
                </ul>

                <Title level={3}>Cookie Retention</Title>
                <Paragraph>
                  Different cookies have different lifespans:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period or until manually deleted</li>
                  <li><strong>Third-party Cookies:</strong> Controlled by external services with their own retention policies</li>
                </ul>

                <Title level={3}>Changes to This Cookie Policy</Title>
                <Paragraph>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal compliance. 
                  We will notify you of any significant changes by posting the updated policy on our website.
                </Paragraph>

                <Title level={3}>Contact Us</Title>
                <Paragraph>
                  If you have any questions about our use of cookies, please contact us at:
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> industrix.idn@gmail.com<br />
                  <strong>Address:</strong> Jakarta, Indonesia
                </Paragraph>

                <Title level={3}>Additional Resources</Title>
                <Paragraph>
                  For more information about cookies and how to manage them, visit:
                </Paragraph>
                <ul style={{ marginBottom: '24px' }}>
                  <li>Your browser&apos;s help section</li>
                  <li>All About Cookies: www.allaboutcookies.org</li>
                  <li>Network Advertising Initiative: www.networkadvertising.org</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </Content>

      <Footer />
    </Layout>
  )
}