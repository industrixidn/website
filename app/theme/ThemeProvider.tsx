'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { ConfigProvider, theme } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(systemPrefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const antdTheme = {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#1079FF',
      colorSuccess: '#52c41a',
      colorWarning: '#faad14',
      colorError: '#F62A3A',
      colorInfo: '#29C5FF',
      borderRadius: 8,
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    components: {
      Button: {
        borderRadius: 8,
        fontWeight: 600,
      },
      Card: {
        borderRadius: 12,
      },
      Menu: {
        borderRadius: 8,
      },
      Input: {
        borderRadius: 8,
      },
      Select: {
        borderRadius: 8,
      },
    },
  }

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </ThemeContext.Provider>
    </div>
  )
}