'use client'

import React, { useState } from 'react'
import { Layout, Menu, Button, Switch, Space, Drawer } from 'antd'
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../app/theme/ThemeProvider'

const { Header } = Layout

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const mobileMenuItems = [
    { key: 'home', label: 'Home', href: '/', isExternal: true },
    { key: 'about', label: 'About', href: '/#about', isExternal: true },
    { key: 'solutions', label: 'Solutions', href: '/#solutions', isExternal: true },
    { key: 'case-studies', label: 'Case Studies', href: '/#case-studies', isExternal: true },
    { key: 'team', label: 'Meet Our Team', href: '/team', isExternal: true },
    { key: 'careers', label: 'Careers', href: '/careers', isExternal: true },
  ]

  return (
    <Header 
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0 16px',
        background: isDarkMode ? 'rgba(20, 20, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(16, 121, 255, 0.1)'}`,
        boxShadow: isDarkMode 
          ? '0 4px 32px rgba(0, 0, 0, 0.3)' 
          : '0 4px 32px rgba(16, 121, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className="animate-slideInUp"
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}>
        {/* Logo - Clickable to go back to home */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} 
            className="animate-slideInLeft"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.background = isDarkMode 
                ? 'rgba(16, 121, 255, 0.1)' 
                : 'rgba(16, 121, 255, 0.05)'
              target.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.background = 'transparent'
              target.style.transform = 'scale(1)'
            }}
          >
            <div style={{
              padding: '8px'
            }}>
              <Image
                src="/Logo.svg"
                alt="Industrix Logo"
                width={40}
                height={40}
                style={{ display: 'block', filter: 'drop-shadow(0 2px 4px rgba(16, 121, 255, 0.3))' }}
              />
            </div>
            <span style={{ 
              fontSize: '24px', 
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px'
            }}>
              Industrix
            </span>
          </div>
        </Link>

        {/* Theme Toggle & Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 32px)' }} className="animate-slideInRight">
          <Space size="large">
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              style={{
                background: isDarkMode ? '#1079FF' : '#f0f0f0',
              }}
            />
            
            <Button 
              type="primary"
              className="btn-gradient desktop-only"
              onClick={() => {
                window.location.href = '/#contact'
              }}
              style={{
                borderRadius: '12px',
                height: '44px',
                paddingLeft: '24px',
                paddingRight: '24px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '14px',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setIsMenuOpen(true)}
              className="mobile-only"
              style={{
                color: isDarkMode ? '#fff' : '#000',
                background: 'transparent',
                border: 'none',
                fontSize: '18px'
              }}
            />
          </Space>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        width={280}
        style={{
          background: isDarkMode ? '#1f1f1f' : '#fff',
        }}
      >
        <Menu
          mode="vertical"
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '16px',
          }}
          items={mobileMenuItems.map(item => ({
            key: item.key,
            label: (
              <a 
                href={item.href}
                onClick={(e) => {
                  if (item.isExternal) {
                    // For external links like /careers, let the default behavior happen
                    setIsMenuOpen(false)
                  } else {
                    // For internal scroll links, prevent default and scroll
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }
                }}
                style={{ 
                  color: isDarkMode ? '#fff' : '#000',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '12px 16px',
                  fontWeight: 400,
                  width: '100%',
                  minHeight: '44px'
                }}
              >
                {item.label}
              </a>
            ),
          }))}
        />
        
        <div style={{ marginTop: '32px' }}>
          <Button 
            type="primary"
            className="btn-gradient"
            block
            size="large"
            onClick={() => {
              window.location.href = '/#contact'
              setIsMenuOpen(false)
            }}
          >
            Contact Us
          </Button>
        </div>
      </Drawer>
    </Header>
  )
}