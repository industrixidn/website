'use client'

import React, { useState } from 'react'
import { Row, Col, Card, Typography, Form, Input, Button, Select, message, Space } from 'antd'
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  SendOutlined,
  CheckCircleOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined
} from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select

interface ContactFormData {
  name: string
  email: string
  company: string
  industry: string
  message: string
}

export default function ContactSection() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { isDarkMode } = useTheme()

  const handleSubmit = async (values: ContactFormData) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the data to your backend
      console.log('Contact form submitted:', values)
      
      message.success('Thank you for your message! We&apos;ll get back to you soon.')
      form.resetFields()
    } catch (error) {
      message.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: 'Email',
      details: 'info@industrix.id',
      action: 'mailto:info@industrix.id'
    },
    {
      icon: <PhoneOutlined />,
      title: 'Phone',
      details: '+62 21 1234 5678',
      action: 'tel:+622112345678'
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Location',
      details: 'Jakarta, Indonesia',
      action: null
    }
  ]

  return (
    <section id="contact" className="section-padding" style={{ 
      background: isDarkMode ? '#0f172a' : '#f8fafc',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-fadeInUp">
          <Title level={2} className="section-title" style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '24px',
            textShadow: '0 4px 20px rgba(16, 121, 255, 0.1)'
          }}>
            Get in <span className="animate-gradient" style={{
              background: 'linear-gradient(-45deg, #1079FF, #29C5FF, #F62A3A, #F85B62)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Touch</span>
          </Title>
          <Paragraph className="section-subtitle" style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7,
            color: '#64748b'
          }}>
            Ready to transform your industrial operations? Contact us today to discuss your 
            digital transformation needs and discover how Industrix can help.
          </Paragraph>
        </div>

        <Row gutter={[48, 48]}>
          {/* Contact Information */}
          <Col xs={24} lg={8}>
            <div className="animate-slideInLeft">
            <div style={{ marginBottom: '48px' }}>
              <Title level={3} style={{ marginBottom: '24px' }}>
                Contact Information
              </Title>
              <Paragraph style={{ 
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#6b7280',
                marginBottom: '32px'
              }}>
                Have questions about our solutions or want to schedule a consultation? 
                We&apos;re here to help you modernize your industrial operations.
              </Paragraph>
              
              <Space direction="vertical" size={24} style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    style={{
                      border: 'none',
                      borderRadius: '12px',
                      padding: '8px',
                      background: isDarkMode 
                        ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8))'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                      backdropFilter: 'blur(20px)',
                      transition: 'all 0.3s ease'
                    }}
                    hoverable={info.action !== null}
                    onClick={() => info.action && window.open(info.action, '_blank')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: index === 0 ? 'var(--industrix-gradient)' : 
                                   index === 1 ? 'var(--industrix-gradient-red)' : 
                                   'var(--industrix-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '20px'
                      }}>
                        {info.icon}
                      </div>
                      <div>
                        <Title level={5} style={{ marginBottom: '4px' }}>
                          {info.title}
                        </Title>
                        <Paragraph style={{ 
                          margin: 0,
                          color: '#6b7280',
                          fontSize: '14px'
                        }}>
                          {info.details}
                        </Paragraph>
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>
            </div>

            {/* Social Links */}
            <Card 
              style={{
                borderRadius: '16px',
                border: 'none',
                textAlign: 'center',
                padding: '24px',
                background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
            >
              <Title level={4} style={{ marginBottom: '16px' }}>
                Follow Us
              </Title>
              <Space size="large">
                <Button 
                  type="text" 
                  icon={<LinkedinOutlined />}
                  size="large"
                  style={{ color: '#1079FF' }}
                />
                <Button 
                  type="text" 
                  icon={<TwitterOutlined />}
                  size="large"
                  style={{ color: '#1079FF' }}
                />
                <Button 
                  type="text" 
                  icon={<GithubOutlined />}
                  size="large"
                  style={{ color: '#1079FF' }}
                />
              </Space>
            </Card>
            </div>
          </Col>

          {/* Contact Form */}
          <Col xs={24} lg={16}>
            <div className="animate-slideInRight">
              <Card 
                style={{
                  borderRadius: '24px',
                  border: 'none',
                  padding: '40px',
                  background: isDarkMode 
                    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.8))'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-strong)',
                  transition: 'all 0.3s ease'
                }}
              >
              <Title level={3} style={{ 
                marginBottom: '32px',
                fontSize: '28px',
                fontWeight: 700,
                color: '#1e293b'
              }}>
                Send us a Message
              </Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                size="large"
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input 
                        placeholder="Your full name"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input 
                        placeholder="your@email.com"
                        style={{ borderRadius: '8px' }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[24, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="company"
                      label="Company Name"
                      rules={[{ required: true, message: 'Please enter your company name' }]}
                    >
                      <Input 
                        placeholder="Your company name"
                        style={{ borderRadius: '8px' }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="industry"
                      label="Industry"
                      rules={[{ required: true, message: 'Please select your industry' }]}
                    >
                      <Select 
                        placeholder="Select your industry"
                        style={{ borderRadius: '8px' }}
                      >
                        <Option value="agriculture">Agriculture</Option>
                        <Option value="mining">Mining</Option>
                        <Option value="logistics">Logistics</Option>
                        <Option value="manufacturing">Manufacturing</Option>
                        <Option value="energy">Energy</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea 
                    rows={6}
                    placeholder="Tell us about your project requirements, challenges, or how we can help..."
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="btn-gradient"
                    icon={<SendOutlined />}
                    style={{ 
                      height: '48px',
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      fontWeight: 600
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Card 
          style={{
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #1079FF 0%, #29C5FF 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '48px',
            marginTop: '64px'
          }}
        >
          <CheckCircleOutlined style={{ fontSize: '48px', marginBottom: '24px' }} />
          <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{ 
            color: 'white', 
            fontSize: '18px', 
            marginBottom: '32px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Join leading Indonesian industries who have already transformed their operations 
            with Industrix. Let&apos;s discuss how we can help you achieve your digital transformation goals.
          </Paragraph>
          <Space size="large">
            <Button 
              size="large"
              style={{
                background: 'white',
                color: '#1079FF',
                border: 'none',
                fontWeight: 600,
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="large"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                fontWeight: 600,
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              Download Brochure
            </Button>
          </Space>
        </Card>
      </div>
    </section>
  )
}