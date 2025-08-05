'use client'

import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Card, Typography, Button, Tag, Space, Modal, Form, Input, message } from 'antd'
import { 
  RocketOutlined,
  TeamOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
  SendOutlined
} from '@ant-design/icons'
import emailjs from '@emailjs/browser'
// Removed Uploadcare - using GitHub instead
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '../theme/ThemeProvider'

const { Content } = Layout
const { Title, Paragraph } = Typography

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  isInternship?: boolean
}

const jobPostings: JobPosting[] = [
  {
    id: 'fullstack-intern',
    title: 'Full Stack Software Engineer Intern',
    department: 'Engineering',
    location: 'Remote (Indonesia)',
    type: 'Full-time Internship',
    experience: '3 months (with possible conversion to full-time role)',
    salary: 'Compensation + Full-time conversion opportunity',
    description: 'We\'re seeking a motivated Full Stack Software Engineer Intern to join our development team at Industrix for a 3-month full-time internship program. As an industrial solution provider, we build cutting-edge software that powers modern industrial operations. This is an excellent opportunity to gain hands-on experience building scalable web applications and backend services while working alongside experienced engineers.',
    requirements: [
      'React: Solid understanding of React fundamentals, including components, hooks, and state management',
      'React Ecosystem: Experience with React Context API and modern build tools (familiarity with Vite and Refine.js is a plus)',
      'SQL Databases: Familiarity with SQL databases, particularly PostgreSQL',
      'English Proficiency: Strong English communication skills, able to read and understand technical documentation',
      'Strong problem-solving skills and attention to detail',
      'Basic understanding of web development concepts (HTTP, REST APIs, databases)',
      'Familiarity with version control systems (Git)',
      'Ability to work independently and thrive in a small team environment'
    ],
    responsibilities: [
      'Develop dashboards for industrial monitoring equipment - Build intuitive interfaces for tracking equipment performance, alerts, and analytics',
      'Develop ingestion services for IoT devices - Create robust backend services to collect, process, and store data from industrial IoT sensors',
      'Build and maintain frontend applications using React with our modern tech stack',
      'Build and optimize backend services and APIs',
      'Work directly with our CTO and small engineering team in a collaborative environment',
      'Participate in code reviews and contribute to technical discussions',
      'Learn industry best practices for industrial software development',
      'Work on real projects that directly impact industrial operations and efficiency'
    ],
    benefits: [
      'Direct mentorship from our CTO and experienced engineers',
      'Small team environment - Work closely with senior engineers and have significant impact on product development',
      'Compensation for the 3-month internship period',
      'Full-time conversion opportunity - Potential to join our team permanently after successful completion',
      'Exposure to cutting-edge industrial IoT and monitoring technologies',
      'Opportunity to work on meaningful projects with real impact in the industrial sector',
      'Flexible remote work environment that encourages growth and learning',
      'Experience building solutions that power modern industrial operations'
    ],
    isInternship: true
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive - Industrial Solutions',
    department: 'Sales',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '2-4 years in B2B sales',
    salary: 'Competitive base + commission',
    description: 'Join our sales team to drive growth across Indonesian industrial markets. You\'ll be responsible for identifying opportunities, building relationships with key decision-makers, and closing deals for our industrial IoT and monitoring solutions. This role offers significant earning potential and the opportunity to shape Indonesia\'s industrial digital transformation.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '2+ years of B2B sales experience, preferably in technology or industrial sectors',
      'Proven track record of meeting or exceeding sales targets',
      'Strong communication and presentation skills in English and Bahasa Indonesia',
      'Understanding of industrial operations (manufacturing, mining, logistics, agriculture)',
      'Experience with CRM systems and sales processes',
      'Ability to build relationships with C-level executives and technical decision-makers',
      'Strong negotiation and closing skills',
      'Willingness to travel for client meetings and industry events'
    ],
    responsibilities: [
      'Identify and qualify new business opportunities in target industrial sectors',
      'Build and maintain relationships with key prospects and existing clients',
      'Conduct product demonstrations and technical presentations',
      'Develop and execute strategic sales plans for assigned territories',
      'Collaborate with technical teams to develop customized solutions',
      'Negotiate contracts and close deals to achieve quarterly and annual targets',
      'Maintain accurate sales forecasts and pipeline management in CRM',
      'Attend industry events, trade shows, and networking opportunities',
      'Provide market feedback to product and marketing teams'
    ],
    benefits: [
      'Competitive base salary with uncapped commission structure',
      'Comprehensive benefits package including health insurance',
      'Travel allowance for client visits and industry events',
      'Professional development and sales training opportunities',
      'Opportunity to work with cutting-edge industrial technology',
      'Direct impact on company growth and Indonesian industrial transformation',
      'Career advancement opportunities in a growing company',
      'Flexible work arrangements and performance-based incentives'
    ]
  }
]

const benefits = [
  {
    icon: <RocketOutlined />,
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest IoT, cloud, and industrial automation technologies + AI!'
  },
  {
    icon: <TeamOutlined />,
    title: 'Silicon Valley Mentorship',
    description: 'Learn directly from engineers with experience at top tech companies'
  },
  {
    icon: <GlobalOutlined />,
    title: 'Market Impact',
    description: 'Your work directly impacts Indonesian industrial transformation and later on globally'
  },
  {
    icon: <EnvironmentOutlined />,
    title: 'Career Growth',
    description: 'Clear advancement paths with continuous learning and development opportunities'
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null)
  const [isApplicationModalVisible, setIsApplicationModalVisible] = useState(false)
  const [isGeneralApplicationModalVisible, setIsGeneralApplicationModalVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form] = Form.useForm()
  const [generalForm] = Form.useForm()
  const { isDarkMode } = useTheme()

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('uLHUv1UdTBP0eJ57R')
    console.log('EmailJS initialized successfully')
  }, [])

  const handleApplyNow = (job: JobPosting) => {
    setSelectedJob(job)
    setIsApplicationModalVisible(true)
  }

  const handleGeneralApplication = () => {
    setIsGeneralApplicationModalVisible(true)
  }

  // Removed file upload function - using direct email instruction instead

  const handleApplicationSubmit = async (values: any) => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      console.log('Starting EmailJS submission...')
      console.log('Form values:', values)
      
      // No resume upload needed - will be requested via follow-up email

      // EmailJS configuration - using INBOUND template
      const serviceId = 'service_q60i136'
      const inboundTemplateId = 'template_uaamyte' // Replace with your inbound template ID
      
      // Prepare template parameters for INBOUND template
      const templateParams = {
        name: `${values.firstName} ${values.lastName}`,
        time: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Jakarta',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        message_type: 'Job Application',
        details: `📧 Contact Information:
• Name: ${values.firstName} ${values.lastName}
• Email: ${values.email}
• Phone: ${values.phone}
• University/Company: ${values.university}
• LinkedIn: ${values.linkedin || 'Not provided'}
• Available Start: ${values.availableStart}

💼 Position Details:
• Job Title: ${selectedJob?.title}
• Job ID: ${selectedJob?.id}
• Department: ${selectedJob?.department}

📎 Resume: ${selectedJob?.isInternship ? 'Will be requested via automated follow-up email' : 'Expected to be provided by candidate (professional role)'}`,
        message: values.coverLetter,
        to_email: 'industrix.idn@gmail.com',
        reply_to: values.email
      }
      
      console.log('Template parameters:', templateParams)
      console.log(`Sending to service: ${serviceId}, template: ${inboundTemplateId}`)
      
      // Send email using EmailJS
      const result = await emailjs.send(serviceId, inboundTemplateId, templateParams)
      
      console.log('EmailJS result:', result)
      
      if (result.status === 200) {
        // Always send follow-up email to ALL candidates using OUTBOUND template
        try {
          const outboundTemplateId = 'template_mu9wwrp' // OUTBOUND template for candidate emails
          
          // Use OUTBOUND template parameters for candidate follow-up (ALL roles ask for resume + cover letter)
          const followUpParams = {
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
            // Template variables
            name: values.firstName + ' ' + values.lastName,
            subject: '📋 RESUME REQUEST - Job Application Follow-up',
            subtitle: 'Thank you for applying! We need your resume and cover letter to complete your application.',
            main_message: `Thank you for applying to the ${selectedJob?.title} position at Industrix!\n\nWe have received your application and are very interested in reviewing your qualifications. To complete your application, please reply to this email with your resume and cover letter attached.`,
            info_title: '📝 Application Details:',
            info_details: `• Position: ${selectedJob?.title}
• Your Email: ${values.email}
• Application Type: Job Application
• Status: Awaiting Documents`,
            call_to_action: '💼 Please attach both your resume file (PDF, DOC, or DOCX format) and cover letter to your reply email.',
            closing_message: 'We look forward to reviewing your qualifications and will be in touch soon regarding next steps.',
            footer_note: 'This is an automated follow-up to your job application.',
            reply_to: 'industrix.idn@gmail.com' // Company email as reply-to
          }

          // Use the OUTBOUND template for all candidate follow-ups
          console.log('Attempting to send outbound follow-up email...')
          console.log('Outbound template ID:', outboundTemplateId)
          console.log('Follow-up params:', followUpParams)
          
          const outboundResult = await emailjs.send(serviceId, outboundTemplateId, followUpParams)
          console.log('Outbound EmailJS result:', outboundResult)
          console.log('Follow-up email sent to candidate using OUTBOUND template')
        } catch (error: any) {
          console.error('Follow-up email failed:', error)
          console.error('Error details:', {
            status: error?.status,
            text: error?.text,
            message: error?.message,
            name: error?.name,
            stack: error?.stack
          })
          // Don't throw error - main application was successful
        }

        message.success('Application submitted successfully! Please check your email for next steps to complete your application.')
        form.resetFields()
        setIsApplicationModalVisible(false)
        setSelectedJob(null)
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
      
    } catch (error: any) {
      console.log('EmailJS submission failed:', error)
      
      // Show specific error message
      let errorMessage = 'Failed to submit application. Please try again or contact us directly.'
      
      if (error?.text) {
        errorMessage = `Submission failed: ${error.text}`
      } else if (error?.message) {
        errorMessage = `Submission failed: ${error.message}`
      } else if (typeof error === 'string') {
        errorMessage = `Submission failed: ${error}`
      }
      
      console.log('Error message:', errorMessage)
      message.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGeneralApplicationSubmit = async (values: any) => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      console.log('Starting general application submission...')
      console.log('General form values:', values)
      
      // No resume upload needed - will be requested via follow-up email
      
      // EmailJS configuration - using INBOUND template
      const serviceId = 'service_q60i136'
      const inboundTemplateId = 'template_uaamyte' // Replace with your inbound template ID
      
      // Prepare template parameters for INBOUND template
      const templateParams = {
        name: `${values.firstName} ${values.lastName}`,
        time: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Jakarta',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        message_type: 'General Application',
        details: `📧 Contact Information:
• Name: ${values.firstName} ${values.lastName}
• Email: ${values.email}
• Phone: ${values.phone}
• University/Company: ${values.university}
• LinkedIn: ${values.linkedin || 'Not provided'}
• Available Start: ${values.availableStart}

💼 Area of Interest: ${values.areaOfInterest}

📎 Resume: Will be requested via automated follow-up email`,
        message: values.contribution,
        to_email: 'industrix.idn@gmail.com',
        reply_to: values.email
      }
      
      console.log('General application template parameters:', templateParams)
      
      // Send email using EmailJS
      const result = await emailjs.send(serviceId, inboundTemplateId, templateParams)
      
      console.log('General application EmailJS result:', result)
      
      if (result.status === 200) {
        // Always send follow-up email with resume request using OUTBOUND template
        try {
            const outboundTemplateId = 'template_mu9wwrp' // OUTBOUND template for candidate emails
            
            // Use OUTBOUND template parameters for general application follow-up
            const followUpParams = {
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
              // Template variables
              name: values.firstName + ' ' + values.lastName,
              subject: '📋 RESUME REQUEST - General Application Follow-up',
              subtitle: 'Thank you for your interest! We need your resume and cover letter to learn more about you.',
              main_message: `Thank you for your interest in joining Industrix!\n\nWe have received your general application and would like to learn more about your background. To complete your application, please reply to this email with your resume and cover letter attached.`,
              info_title: '📝 Application Details:',
              info_details: `• Area of Interest: ${values.areaOfInterest}
• Your Email: ${values.email}
• Application Type: General Application
• Status: Awaiting Documents`,
              call_to_action: '💼 Please attach both your resume file (PDF, DOC, or DOCX format) and cover letter to your reply email so we can better understand your qualifications.',
              closing_message: 'We look forward to reviewing your qualifications and will reach out if there\'s a good fit for our team.',
              footer_note: 'This is an automated follow-up to your general application.',
              reply_to: 'industrix.idn@gmail.com' // Company email as reply-to
            }

          // Use the OUTBOUND template for all candidate follow-ups
          console.log('Attempting to send general application outbound email...')
          console.log('Outbound template ID:', outboundTemplateId)
          console.log('General follow-up params:', followUpParams)
          
          const outboundResult = await emailjs.send(serviceId, outboundTemplateId, followUpParams)
          console.log('General outbound EmailJS result:', outboundResult)
          console.log('Follow-up email sent to candidate using OUTBOUND template')
        } catch (error: any) {
          console.error('Follow-up email failed:', error)
          console.error('Error details:', {
            status: error?.status,
            text: error?.text,
            message: error?.message,
            name: error?.name,
            stack: error?.stack
          })
          // Don't throw error - main application was successful
        }

        message.success('General application submitted successfully! We will review your profile and reach out if there\'s a good fit. Please check your email for next steps.')
        generalForm.resetFields()
        setIsGeneralApplicationModalVisible(false)
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
      
    } catch (error: any) {
      console.log('General application submission failed:', error)
      
      let errorMessage = 'Failed to submit application. Please try again or contact us directly.'
      
      if (error?.text) {
        errorMessage = `Submission failed: ${error.text}`
      } else if (error?.message) {
        errorMessage = `Submission failed: ${error.message}`
      }
      
      message.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Navbar />
      <Content style={{ marginTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: '80px 0',
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
              Join Our Team
            </Title>
            <Paragraph style={{ 
              fontSize: '20px',
              lineHeight: 1.7,
              opacity: 0.8,
              marginBottom: '40px'
            }}>
              Be part of Indonesia&apos;s industrial digital transformation. Work with Silicon Valley 
              veterans to build cutting-edge solutions that modernize heavy industries.
            </Paragraph>
            <Button 
              size="large"
              className="btn-gradient"
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ 
                height: '56px',
                paddingLeft: '32px',
                paddingRight: '32px',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Why Join Us */}
        <section style={{ padding: '80px 0', background: isDarkMode ? '#1f1f1f' : '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <Title level={2} style={{ marginBottom: '16px' }}>
                Why Work at <span className="text-gradient">Industrix</span>?
              </Title>
              <Paragraph style={{ 
                fontSize: '18px',
                opacity: 0.7,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Join a team that&apos;s transforming Indonesian industries with world-class technology and innovation
              </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
              {benefits.map((benefit, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card 
                    style={{
                      height: '100%',
                      border: 'none',
                      borderRadius: '16px',
                      padding: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
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
                        {benefit.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <Title level={4} style={{ marginBottom: '12px' }}>
                          {benefit.title}
                        </Title>
                        <Paragraph style={{ 
                          fontSize: '15px',
                          lineHeight: 1.6,
                          opacity: 0.7,
                          margin: 0
                        }}>
                          {benefit.description}
                        </Paragraph>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" style={{ 
          padding: '80px 0',
          background: isDarkMode ? '#0f172a' : '#f8fafc'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <Title level={2} style={{ marginBottom: '16px' }}>
                Open <span className="text-gradient">Positions</span>
              </Title>
              <Paragraph style={{ 
                fontSize: '18px',
                opacity: 0.7,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Find your next opportunity to make a real impact in industrial technology
              </Paragraph>
            </div>

            <Row gutter={[24, 24]}>
              {jobPostings.map((job) => (
                <Col xs={24} lg={12} key={job.id}>
                  <Card 
                    style={{
                      height: '100%',
                      border: 'none',
                      borderRadius: '16px',
                      padding: '24px',
                      background: isDarkMode 
                        ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8))'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    hoverable
                  >
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <Title level={4} style={{ margin: 0, flex: 1 }}>
                          {job.title}
                        </Title>
                        {job.isInternship && (
                          <Tag color="orange" style={{ fontSize: '12px', fontWeight: 600 }}>
                            INTERNSHIP
                          </Tag>
                        )}
                      </div>
                      
                      <Space wrap style={{ marginBottom: '16px' }}>
                        <Tag icon={<EnvironmentOutlined />}>{job.location}</Tag>
                        <Tag icon={<ClockCircleOutlined />}>{job.type}</Tag>
                        <Tag icon={<DollarCircleOutlined />}>{job.salary}</Tag>
                      </Space>
                      
                      <Paragraph style={{ 
                        fontSize: '14px',
                        lineHeight: 1.6,
                        opacity: 0.8,
                        marginBottom: '20px'
                      }}>
                        {job.description}
                      </Paragraph>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Button 
                        type="primary"
                        className="btn-gradient"
                        onClick={() => handleApplyNow(job)}
                        style={{ flex: 1 }}
                      >
                        Apply Now
                      </Button>
                      <Button 
                        onClick={() => setSelectedJob(job)}
                        style={{ flex: 1 }}
                      >
                        View Details
                      </Button>
                    </div>
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
              Don&apos;t See the Right Role?
            </Title>
            <Paragraph style={{ 
              color: 'white', 
              fontSize: '18px', 
              marginBottom: '32px',
              opacity: 0.9
            }}>
              We&apos;re always looking for talented individuals to join our mission. 
              Send us your resume and let us know how you&apos;d like to contribute.
            </Paragraph>
            <Button 
              size="large"
              onClick={handleGeneralApplication}
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
              Send General Application
            </Button>
          </div>
        </section>
      </Content>

      {/* Job Details Modal */}
      <Modal
        title={selectedJob?.title}
        open={!!selectedJob && !isApplicationModalVisible}
        onCancel={() => setSelectedJob(null)}
        footer={[
          <Button key="close" onClick={() => setSelectedJob(null)}>
            Close
          </Button>,
          <Button 
            key="apply" 
            type="primary" 
            className="btn-gradient"
            onClick={() => selectedJob && handleApplyNow(selectedJob)}
          >
            Apply Now
          </Button>
        ]}
        width={800}
      >
        {selectedJob && (
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <Space wrap style={{ marginBottom: '20px' }}>
              <Tag icon={<EnvironmentOutlined />}>{selectedJob.location}</Tag>
              <Tag icon={<ClockCircleOutlined />}>{selectedJob.type}</Tag>
              <Tag>{selectedJob.department}</Tag>
              <Tag>{selectedJob.experience}</Tag>
            </Space>

            <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
              {selectedJob.description}
            </Paragraph>

            <Title level={5}>Requirements:</Title>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              {selectedJob.requirements.map((req, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{req}</li>
              ))}
            </ul>

            <Title level={5}>Responsibilities:</Title>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              {selectedJob.responsibilities.map((resp, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{resp}</li>
              ))}
            </ul>

            <Title level={5}>Benefits:</Title>
            <ul style={{ paddingLeft: '20px' }}>
              {selectedJob.benefits.map((benefit, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>

      {/* Application Modal */}
      <Modal
        title={`Apply for ${selectedJob?.title}`}
        open={isApplicationModalVisible}
        onCancel={() => {
          form.resetFields()
          setIsApplicationModalVisible(false)
          setSelectedJob(null)
        }}
        footer={null}
        width={700}
        destroyOnHidden={true}
      >
        <Form 
          form={form} 
          layout="vertical" 
          onFinish={handleApplicationSubmit}
          preserve={false}
          initialValues={{
            jobTitle: selectedJob?.title,
            jobId: selectedJob?.id
          }}
        >
          {/* Hidden fields for backend */}
          <Form.Item name="jobTitle" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="jobId" hidden>
            <Input />
          </Form.Item>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter your first name' }]}
              >
                <Input placeholder="Your first name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter your last name' }]}
              >
                <Input placeholder="Your last name" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="your@email.com" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="+62 xxx xxx xxxx" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="university"
            label="University/Company"
            rules={[{ required: true, message: 'Please enter your university or current company' }]}
          >
            <Input placeholder="Your university or current company" size="large" />
          </Form.Item>

          <Form.Item
            name="linkedin"
            label="LinkedIn Profile (Optional)"
          >
            <Input placeholder="https://linkedin.com/in/yourprofile" size="large" />
          </Form.Item>


          <Form.Item
            name="coverLetter"
            label="Why do you want to join Industrix?"
            rules={[{ required: true, message: 'Please tell us why you want to join us' }]}
          >
            <Input.TextArea
              placeholder="Tell us why you're interested in this position and what you can bring to our team..."
              maxLength={2000}
              rows={6}
              showCount
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="availableStart"
            label="When can you start?"
            rules={[{ required: true, message: 'Please let us know your availability' }]}
          >
            <Input placeholder="Immediately / After graduation / Specific date" size="large" />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <Button 
                onClick={() => {
                  setIsApplicationModalVisible(false)
                  setSelectedJob(null)
                  form.resetFields()
                }}
                size="large"
              >
                Cancel
              </Button>
              <Button 
                type="primary"
                htmlType="submit"
                className="btn-gradient"
                icon={<SendOutlined />}
                size="large"
                loading={isSubmitting}
                disabled={isSubmitting}
                style={{ paddingLeft: '32px', paddingRight: '32px' }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Application'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* General Application Modal */}
      <Modal
        title="General Application"
        open={isGeneralApplicationModalVisible}
        onCancel={() => {
          generalForm.resetFields()
          setIsGeneralApplicationModalVisible(false)
        }}
        footer={null}
        width={700}
        destroyOnHidden={true}
      >
        <div style={{ marginBottom: '24px' }}>
          <Paragraph style={{ fontSize: '16px', color: '#6b7280' }}>
            We&apos;re always looking for talented individuals to join our mission. 
            Tell us about yourself and how you&apos;d like to contribute to Industrix.
          </Paragraph>
        </div>

        <Form 
          form={generalForm} 
          layout="vertical" 
          onFinish={handleGeneralApplicationSubmit}
          preserve={false}
        >
          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please enter your first name' }]}
              >
                <Input placeholder="Your first name" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please enter your last name' }]}
              >
                <Input placeholder="Your last name" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="your@email.com" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="+62 xxx xxx xxxx" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="university"
            label="University/Current Company"
            rules={[{ required: true, message: 'Please enter your university or current company' }]}
          >
            <Input placeholder="Your university or current company" size="large" />
          </Form.Item>

          <Form.Item
            name="linkedin"
            label="LinkedIn Profile (Optional)"
          >
            <Input placeholder="https://linkedin.com/in/yourprofile" size="large" />
          </Form.Item>

          <Form.Item
            name="areaOfInterest"
            label="Area of Interest"
            rules={[{ required: true, message: 'Please tell us your area of interest' }]}
          >
            <Input placeholder="e.g., Software Development, Business Development, Marketing, etc." size="large" />
          </Form.Item>


          <Form.Item
            name="contribution"
            label="How would you like to contribute to Industrix?"
            rules={[{ required: true, message: 'Please tell us how you\'d like to contribute' }]}
          >
            <Input.TextArea
              placeholder="Tell us about your skills, experience, and how you'd like to contribute to our mission of transforming Indonesian industries..."
              maxLength={2000}
              rows={6}
              showCount
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="availableStart"
            label="When can you start?"
            rules={[{ required: true, message: 'Please let us know your availability' }]}
          >
            <Input placeholder="Immediately / After graduation / Specific date" size="large" />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <Button 
                onClick={() => {
                  generalForm.resetFields()
                  setIsGeneralApplicationModalVisible(false)
                }}
                size="large"
              >
                Cancel
              </Button>
              <Button 
                type="primary"
                htmlType="submit"
                className="btn-gradient"
                icon={<SendOutlined />}
                size="large"
                loading={isSubmitting}
                disabled={isSubmitting}
                style={{ paddingLeft: '32px', paddingRight: '32px' }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Application'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Footer />
    </Layout>
  )
} 