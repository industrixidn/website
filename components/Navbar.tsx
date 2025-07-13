'use client'

import React, { useState } from 'react'
import { Layout, Menu, Button, Switch, Space, Drawer } from 'antd'
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useTheme } from '../app/theme/ThemeProvider'

const { Header } = Layout

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const menuItems = [
    { key: 'home', label: 'Home', href: '#home' },
    { key: 'solutions', label: 'Solutions', href: '#solutions' },
    { key: 'industries', label: 'Industries', href: '#industries' },
    { key: 'about', label: 'About', href: '#about' },
    { key: 'contact', label: 'Contact', href: '#contact' },
  ]

  return (
    <Header 
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0 32px',
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
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="animate-slideInLeft">
          <div style={{
            padding: '8px',
            borderRadius: '12px',
            background: isDarkMode 
              ? 'linear-gradient(145deg, rgba(16, 121, 255, 0.2), rgba(41, 197, 255, 0.1))'
              : 'linear-gradient(145deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.05))',
            transition: 'all 0.3s ease'
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

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="animate-slideInRight">
          <div className="desktop-menu">
            <Menu
              mode="horizontal"
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '16px',
                fontWeight: 600,
              }}
              items={menuItems.map(item => ({
                key: item.key,
                label: (
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{ 
                      color: isDarkMode ? '#fff' : '#475569',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      position: 'relative',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.color = '#1079FF'
                      target.style.background = isDarkMode 
                        ? 'rgba(16, 121, 255, 0.1)' 
                        : 'rgba(16, 121, 255, 0.05)'
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.color = isDarkMode ? '#fff' : '#475569'
                      target.style.background = 'transparent'
                    }}
                  >
                    {item.label}
                  </a>
                ),
              }))}
            />
          </div>

          {/* Theme Toggle & Contact Button */}
          <Space>
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
                color: isDarkMode ? '#fff' : '#000'
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
          items={menuItems.map(item => ({
            key: item.key,
            label: (
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
                style={{ 
                  color: isDarkMode ? '#fff' : '#000',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '12px 0'
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
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </Drawer>
    </Header>
  )
}