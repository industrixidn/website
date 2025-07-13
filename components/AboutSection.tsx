'use client'

import React from 'react'
import { Row, Col, Card, Typography, Progress, Space, Button } from 'antd'
import { 
  TeamOutlined, 
  GlobalOutlined, 
  TrophyOutlined, 
  RocketOutlined,
  CheckCircleOutlined,
  StarOutlined
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const stats = [
  {
    icon: <TeamOutlined />,
    number: '10+',
    label: 'Silicon Valley Veterans',
    description: 'Experienced engineers from top tech companies'
  },
  {
    icon: <GlobalOutlined />,
    number: '50+',
    label: 'Indonesian Clients',
    description: 'Trusted by leading industrial companies'
  },
  {
    icon: <TrophyOutlined />,
    number: '99%',
    label: 'System Uptime',
    description: 'Reliable, enterprise-grade infrastructure'
  },
  {
    icon: <RocketOutlined />,
    number: '5x',
    label: 'Efficiency Improvement',
    description: 'Average operational efficiency gains'
  }
]

const values = [
  {
    title: 'Innovation First',
    description: 'We leverage cutting-edge technology to solve real industrial challenges',
    icon: <RocketOutlined />
  },
  {
    title: 'Indonesian Focus',
    description: 'Deep understanding of local market needs and regulatory requirements',
    icon: <GlobalOutlined />
  },
  {
    title: 'Proven Expertise',
    description: 'Silicon Valley experience applied to Indonesian industrial transformation',
    icon: <StarOutlined />
  },
  {
    title: 'Customer Success',
    description: 'Dedicated to delivering measurable results and long-term partnerships',
    icon: <CheckCircleOutlined />
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main About Content */}
        <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
          <Col xs={24} lg={12}>
            <Title level={2} style={{ marginBottom: '24px' }}>
              About <span className="text-gradient">Industrix</span>
            </Title>
            <Paragraph style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '24px' }}>
              Industrix is a technology company focused on modernizing industrial operations through 
              digital transformation. We provide integrated software and hardware solutions that help 
              companies in heavy industries gain better control, visibility, and efficiency.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
              Our platform supports everything from equipment tracking and fuel monitoring to 
              enterprise resource planning (ERP) and environmental compliance. With a modular 
              approach, we enable industrial businesses to adopt scalable, data-driven tools 
              that align with their operational goals.
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large"
                className="btn-gradient"
                style={{ height: '48px', paddingLeft: '24px', paddingRight: '24px' }}
              >
                Learn More
              </Button>
              <Button 
                size="large"
                className="btn-outline"
                style={{ height: '48px', paddingLeft: '24px', paddingRight: '24px' }}
              >
                View Portfolio
              </Button>
            </Space>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card 
              style={{
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '32px' }}>
                <Title level={4} style={{ marginBottom: '24px', textAlign: 'center' }}>
                  Our Mission
                </Title>
                <Paragraph style={{ 
                  fontSize: '16px', 
                  lineHeight: 1.7, 
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  To transform Indonesian industries through innovative digital solutions that 
                  provide complete operational visibility and drive sustainable growth.
                </Paragraph>
                
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontWeight: 600 }}>Technology Excellence</span>
                    <Progress percent={95} strokeColor="#1079FF" />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontWeight: 600 }}>Industry Knowledge</span>
                    <Progress percent={90} strokeColor="#29C5FF" />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontWeight: 600 }}>Customer Satisfaction</span>
                    <Progress percent={98} strokeColor="#1079FF" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Statistics */}
        <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
          {stats.map((stat, index) => (
            <Col xs={12} md={6} key={index}>
              <Card 
                style={{
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: '16px',
                  height: '100%',
                  background: index % 2 === 0 ? '#f8fafc' : 'white'
                }}
                hoverable
              >
                <div style={{ 
                  fontSize: '32px', 
                  color: '#1079FF',
                  marginBottom: '16px'
                }}>
                  {stat.icon}
                </div>
                <Title level={2} style={{ 
                  color: '#1079FF',
                  marginBottom: '8px',
                  fontSize: '2.5rem'
                }}>
                  {stat.number}
                </Title>
                <Title level={5} style={{ marginBottom: '12px' }}>
                  {stat.label}
                </Title>
                <Paragraph style={{ 
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: 0
                }}>
                  {stat.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Values */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ marginBottom: '16px' }}>
            Our <span className="text-gradient">Values</span>
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            The principles that guide our approach to industrial digital transformation
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} style={{ marginBottom: '64px' }}>
          {values.map((value, index) => (
            <Col xs={24} md={12} key={index}>
              <Card 
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '16px'
                }}
                hoverable
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: index % 2 === 0 ? 'var(--industrix-gradient)' : 'var(--industrix-gradient-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    {value.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Title level={4} style={{ marginBottom: '12px' }}>
                      {value.title}
                    </Title>
                    <Paragraph style={{ 
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: '#6b7280',
                      margin: 0
                    }}>
                      {value.description}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Highlight */}
        <Card 
          style={{
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            textAlign: 'center',
            padding: '32px'
          }}
        >
          <Title level={3} style={{ marginBottom: '16px' }}>
            Silicon Valley Experience, Indonesian Focus
          </Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            marginBottom: '32px',
            color: '#475569',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Our team brings together experienced engineers who have worked at leading Silicon Valley 
            companies with deep understanding of Indonesian industrial needs. This unique combination 
            enables us to deliver world-class solutions tailored for local markets.
          </Paragraph>
          <Button 
            type="primary"
            size="large"
            className="btn-gradient"
            style={{ 
              height: '48px',
              paddingLeft: '32px',
              paddingRight: '32px'
            }}
          >
            Meet Our Team
          </Button>
        </Card>
      </div>
    </section>
  )
}