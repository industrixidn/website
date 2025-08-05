'use client'

import React from 'react'
import { Layout, Switch } from 'antd'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../app/theme/ThemeProvider'

const { Header } = Layout

export default function SimpleNavbar() {
  const { isDarkMode, toggleTheme } = useTheme()

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

        {/* Right side - Just theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="animate-slideInRight">
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            style={{
              background: isDarkMode ? '#1079FF' : '#f0f0f0',
            }}
          />
          
          {/* Careers Page Indicator */}
          <span style={{
            fontSize: '14px',
            fontWeight: 600,
            color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Careers
          </span>
        </div>
      </div>
    </Header>
  )
}