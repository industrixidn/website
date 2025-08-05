'use client'

import React from 'react'
import { Layout, Row, Col, Card, Typography, Space, Button } from 'antd'
import { 
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '../theme/ThemeProvider'

const { Content } = Layout
const { Title, Paragraph } = Typography

const teamMembers = [
  {
    id: 'dustin',
    name: 'Dustin Tengdyantono',
    role: 'CEO & Co-Founder',
    title: 'Chief Executive Officer',
    description: 'Dustin is passionate about bringing autonomous robotics to Indonesian industries. Having spent years building and deploying real-world robotic systems, he loves solving complex engineering challenges that make industrial operations smarter and more efficient.',
    expertise: [
      'Autonomous Systems Design',
      'Robotics Engineering',
      'Industrial IoT Integration',
      'ROS2 Architecture',
      'Field Operations Leadership',
      'Hardware/Software Optimization'
    ],
    background: 'At CIV Robotics, Dustin led field operations and built autonomous surveying rovers that were 4x more efficient than traditional methods. He\'s currently pursuing his Master\'s at UC Berkeley, diving deep into controls and robotics. From swarm systems to industrial automation, he enjoys tackling the technical challenges that come with deploying robots in real-world environments.',
    social: {
      linkedin: 'https://linkedin.com/in/jantengdyantono',
      email: 'dustin@industrix.com',
      github: 'https://github.com/dustinteng'
    }
  },
  {
    id: 'carlos-wirawan',
    name: 'Carlos Wirawan',
    role: 'CTO & Co-Founder',
    title: 'Chief Technology Officer',
    description: 'Carlos is obsessed with building systems that scale. He gets excited about optimizing performance, designing clean architectures, and solving the complex distributed systems challenges that come with industrial IoT deployments at scale.',
    expertise: [
      'Distributed Systems Architecture',
      'Microservice Development',
      'Cloud Infrastructure (AWS EKS, Kubernetes)',
      'CI/CD Pipeline Engineering',
      'Go, Python, Java Programming',
      'Performance Optimization'
    ],
    background: 'Carlos cut his teeth in Silicon Valley at Forcepoint, where he built CI frameworks and optimized systems that improved throughput by 700%. He graduated from UC San Diego with a Computer Science degree and has a knack for making complex distributed systems look simple. Whether it\'s Go microservices or Kubernetes deployments, he loves the puzzle of making everything work together seamlessly.',
    social: {
      linkedin: '#',
      email: 'carlos@industrix.com',
      github: '#'
    }
  }
]

export default function TeamPage() {
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
              Meet Our Team
            </Title>
            
            <Paragraph style={{ 
              fontSize: '20px',
              lineHeight: 1.7,
              opacity: 0.8,
              marginBottom: '0'
            }}>
              The visionaries behind Indonesia&apos;s industrial digital transformation
            </Paragraph>
          </div>
        </section>

        {/* Team Members */}
        <section style={{ 
          padding: '80px 0',
          background: isDarkMode ? '#1f1f1f' : '#ffffff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <Row gutter={[48, 48]}>
              {teamMembers.map((member, index) => (
                <Col xs={24} key={member.id}>
                  <Card 
                    style={{
                      border: 'none',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      background: isDarkMode 
                        ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    hoverable
                  >
                    <Row gutter={[48, 32]} align="middle">
                      {/* Profile Image */}
                      <Col xs={24} md={8}>
                        <div style={{ textAlign: 'center' }}>
                          {member.id === 'carlos-wirawan' ? (
                            <div style={{
                              width: '200px',
                              height: '200px',
                              borderRadius: '50%',
                              margin: '0 auto 24px',
                              overflow: 'hidden',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                            }}>
                              <Image
                                src="/carlos-wirawan.png"
                                alt="Carlos Wirawan"
                                width={200}
                                height={200}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                          ) : member.id === 'dustin' ? (
                            <div style={{
                              width: '200px',
                              height: '200px',
                              borderRadius: '50%',
                              margin: '0 auto 24px',
                              overflow: 'hidden',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                            }}>
                              <Image
                                src="/jan-dustin-tengdyantono.png"
                                alt="Dustin Tengdyantono"
                                width={200}
                                height={200}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                          ) : (
                            <div style={{
                              width: '200px',
                              height: '200px',
                              borderRadius: '50%',
                              background: index % 2 === 0 
                                ? 'var(--industrix-gradient)' 
                                : 'var(--industrix-gradient-red)',
                              margin: '0 auto 24px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '48px',
                              color: 'white',
                              fontWeight: 'bold',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                            }}>
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                          
                          {/* Social Links */}
                          <Space size="large">
                            {member.social.linkedin && (
                              <Button 
                                type="text" 
                                icon={<LinkedinOutlined />}
                                size="large"
                                style={{ 
                                  color: '#0077B5',
                                  fontSize: '20px'
                                }}
                              />
                            )}
                            {member.social.email && (
                              <Button 
                                type="text" 
                                icon={<MailOutlined />}
                                size="large"
                                style={{ 
                                  color: '#ea4335',
                                  fontSize: '20px'
                                }}
                              />
                            )}
                            {member.social.github && (
                              <Button 
                                type="text" 
                                icon={<GithubOutlined />}
                                size="large"
                                style={{ 
                                  color: isDarkMode ? '#f0f6ff' : '#24292f',
                                  fontSize: '20px'
                                }}
                              />
                            )}
                          </Space>
                        </div>
                      </Col>
                      
                      {/* Member Info */}
                      <Col xs={24} md={16}>
                        <div>
                          <Title level={2} style={{ 
                            marginBottom: '8px',
                            background: index % 2 === 0 
                              ? 'var(--industrix-gradient)' 
                              : 'var(--industrix-gradient-red)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                            {member.name}
                          </Title>
                          
                          <Title level={4} style={{ 
                            color: index % 2 === 0 ? '#1079FF' : '#F62A3A',
                            marginBottom: '24px',
                            fontWeight: 600
                          }}>
                            {member.title}
                          </Title>
                          
                          <Paragraph style={{ 
                            fontSize: '16px',
                            lineHeight: 1.7,
                            marginBottom: '24px'
                          }}>
                            {member.description}
                          </Paragraph>
                          
                          {/* Expertise */}
                          <div style={{ marginBottom: '24px' }}>
                            <Title level={5} style={{ marginBottom: '16px' }}>
                              Core Expertise
                            </Title>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {member.expertise.map((skill, idx) => (
                                <span key={idx} style={{
                                  background: index % 2 === 0 
                                    ? 'rgba(16, 121, 255, 0.1)' 
                                    : 'rgba(246, 42, 58, 0.1)',
                                  color: index % 2 === 0 ? '#1079FF' : '#F62A3A',
                                  padding: '6px 12px',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  fontWeight: 500
                                }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Background */}
                          <div>
                            <Title level={5} style={{ marginBottom: '12px' }}>
                              Background
                            </Title>
                            <Paragraph style={{ 
                              fontSize: '15px',
                              lineHeight: 1.6,
                              opacity: 0.8
                            }}>
                              {member.background}
                            </Paragraph>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ 
          padding: '80px 0',
          background: 'linear-gradient(135deg, #1079FF 0%, #29C5FF 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>
              Want to Join Our Team?
            </Title>
            <Paragraph style={{ 
              color: 'white', 
              fontSize: '18px', 
              marginBottom: '32px',
              opacity: 0.9
            }}>
              We&apos;re always looking for talented individuals who share our passion for 
              transforming Indonesian industries through innovative technology.
            </Paragraph>
            <Space size="large">
              <Link href="/careers">
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
                  View Open Positions
                </Button>
              </Link>
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
                onClick={() => window.location.href = '/#contact'}
              >
                Get in Touch
              </Button>
            </Space>
          </div>
        </section>
      </Content>

      <Footer />
    </Layout>
  )
}