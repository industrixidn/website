'use client'

import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Form, Input, Button, Select, message, Space } from 'antd'
import { 
  MailOutlined, 
  EnvironmentOutlined, 
  SendOutlined
} from '@ant-design/icons'
import emailjs from '@emailjs/browser'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  industry: string
  message: string
}

export default function ContactSection() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { isDarkMode } = useTheme()

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init('uLHUv1UdTBP0eJ57R')
    console.log('EmailJS initialized for contact form')
  }, [])

  const handleSubmit = async (values: ContactFormData) => {
    setLoading(true)
    try {
      console.log('Starting contact form submission...')
      console.log('Contact form values:', values)
      
      // EmailJS configuration - using INBOUND template
      const serviceId = 'service_q60i136'
      const inboundTemplateId = 'template_uaamyte' // Replace with your inbound template ID
      
      // Prepare template parameters for INBOUND template
      const templateParams = {
        name: values.name,
        time: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Jakarta',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        message_type: 'Contact Form Message',
        details: `📧 Contact Information:
• Name: ${values.name}
• Email: ${values.email}
• Phone: ${values.phone || 'Not provided'}
• Company: ${values.company}
• Industry: ${values.industry}`,
        message: values.message,
        to_email: 'industrix.idn@gmail.com',
        reply_to: values.email
      }
      
      console.log('Contact form template parameters:', templateParams)
      
      // Send email using EmailJS
      const result = await emailjs.send(serviceId, inboundTemplateId, templateParams)
      
      console.log('Contact form EmailJS result:', result)
      
      if (result.status === 200) {
        // Send confirmation email to the user using OUTBOUND template
        const outboundTemplateId = 'template_mu9wwrp' // OUTBOUND template for confirmation emails
        
        // Use OUTBOUND template parameters for contact form confirmation
        const confirmationParams = {
            // Comprehensive recipient field attempts - try every possible variation
            to_email: values.email,
            user_email: values.email,
            email: values.email,
            recipient_email: values.email,
            send_to: values.email,
            customer_email: values.email,
            client_email: values.email,
            contact_email: values.email,
            user_mail: values.email,
            to_mail: values.email,
            destination_email: values.email,
            target_email: values.email,
            // Standard EmailJS parameters
            to_name: values.name,
            from_name: 'Industrix Team', 
            from_email: 'industrix.idn@gmail.com',
            reply_to: 'industrix.idn@gmail.com',
            // Template variables
            name: values.name,
            subject: '✅ MESSAGE RECEIVED - Thank you for contacting Industrix',
            subtitle: 'We have received your message and will respond within 24 hours.',
            main_message: `Thank you for reaching out to Industrix!\n\nWe have successfully received your message and appreciate your interest in our industrial digital transformation solutions. Our team will review your inquiry and respond within 24 hours.`,
            info_title: '📝 Your Message Details:',
            info_details: `• Name: ${values.name}
• Email: ${values.email}
• Company: ${values.company}
• Industry: ${values.industry}
• Message Type: Contact Form Inquiry`,
            call_to_action: '📞 For urgent matters, you can also reach us directly at industrix.idn@gmail.com.',
            closing_message: 'We look forward to discussing how Industrix can help transform your industrial operations.',
            footer_note: 'This is an automated confirmation of your contact form submission.'
          }

        try {
          // Send confirmation email to user
          console.log('Attempting to send outbound confirmation email...')
          console.log('Outbound template ID:', outboundTemplateId)
          console.log('Confirmation params:', JSON.stringify(confirmationParams, null, 2))
          
          let outboundResult
          // Try using EmailJS sendForm method as an alternative approach
          try {
            outboundResult = await emailjs.send(serviceId, outboundTemplateId, confirmationParams)
            console.log('Standard send method result:', outboundResult)
          } catch (standardError: any) {
            console.warn('Standard send failed, trying with manual "to" field override:', standardError?.text)
            
            // Alternative approach: try overriding the "to" field directly in the service call
            const alternativeParams = {
              ...confirmationParams,
              // Override with direct EmailJS "to" parameter
              to: values.email,
              // Try service-level recipient override
              'service_recipient': values.email,
              'template_recipient': values.email
            }
            
            console.log('Trying alternative approach with "to" field override...')
            outboundResult = await emailjs.send(serviceId, outboundTemplateId, alternativeParams)
            console.log('Alternative method result:', outboundResult)
          }
          console.log('Final outbound EmailJS result:', outboundResult)
          console.log('Confirmation email sent to user using OUTBOUND template')
        } catch (error: any) {
          console.error('Confirmation email failed:', error)
          console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2))
          console.error('Error details:', {
            status: error?.status,
            text: error?.text,
            message: error?.message,
            name: error?.name,
            stack: error?.stack,
            response: error?.response,
            responseText: error?.responseText
          })
          console.error('EmailJS service and template info:', {
            serviceId,
            outboundTemplateId,
            confirmationParamsKeys: Object.keys(confirmationParams)
          })
          // Don't throw error - main contact form was successful
        }

        message.success('Thank you for your message! Please check your email for confirmation. We\'ll get back to you within 24 hours.')
        form.resetFields()
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
      
    } catch (error: any) {
      console.error('Contact form submission failed:', error)
      
      let errorMessage = 'Something went wrong. Please try again or contact us directly.'
      
      if (error?.text) {
        errorMessage = `Submission failed: ${error.text}`
      } else if (error?.message) {
        errorMessage = `Submission failed: ${error.message}`
      }
      
      message.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: 'Email',
      details: 'industrix.idn@gmail.com',
      action: 'mailto:industrix.idn@gmail.com'
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
            opacity: 0.7
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
                opacity: 0.7,
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
                          opacity: 0.7,
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

            {/* Social Links
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
              {/* <Title level={4} style={{ marginBottom: '16px' }}>
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
             </Card> */}
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
                fontWeight: 700
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

                <Form.Item
                  name="phone"
                  label="Phone Number (Optional)"
                >
                  <Input 
                    placeholder="+62 xxx xxx xxxx"
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Item>

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
      </div>
    </section>
  )
}