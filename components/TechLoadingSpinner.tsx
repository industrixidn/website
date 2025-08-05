'use client'

import React from 'react'
import { useTheme } from '../app/theme/ThemeProvider'

interface TechLoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
}

export default function TechLoadingSpinner({ 
  size = 'medium', 
  text = 'Loading...' 
}: TechLoadingSpinnerProps) {
  const { isDarkMode } = useTheme()
  
  const sizeMap = {
    small: 24,
    medium: 48,
    large: 72
  }
  
  const spinnerSize = sizeMap[size]
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '32px'
    }}>
      {/* Tech-style hexagonal spinner */}
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          position: 'relative'
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: '100%',
            height: '100%',
            border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(16,121,255,0.1)'}`,
            borderTop: `2px solid var(--industrix-blue)`,
            borderRadius: '50%',
            animation: 'techSpin 1s linear infinite'
          }}
        />
        
        {/* Inner ring */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(16,121,255,0.2)'}`,
            borderBottom: `2px solid var(--industrix-cyan)`,
            borderRadius: '50%',
            animation: 'techSpin 0.7s linear infinite reverse'
          }}
        />
        
        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            height: '20%',
            background: 'var(--industrix-gradient)',
            borderRadius: '50%',
            animation: 'techPulse 1.5s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Loading text */}
      <div
        style={{
          fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
          color: isDarkMode ? '#94a3b8' : '#64748b',
          fontWeight: 500,
          letterSpacing: '0.5px',
          animation: 'techFade 2s ease-in-out infinite'
        }}
      >
        {text}
      </div>
      
      <style jsx>{`
        @keyframes techSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes techPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.7;
          }
        }
        
        @keyframes techFade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}