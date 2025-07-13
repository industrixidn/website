'use client'

import React from 'react'
import { Spin, Space, Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const { Text } = Typography

interface LoadingSpinnerProps {
  size?: 'small' | 'default' | 'large'
  text?: string
  center?: boolean
}

const customSpinIcon = <LoadingOutlined style={{ fontSize: 24, color: '#1079FF' }} spin />

export default function LoadingSpinner({ 
  size = 'default', 
  text = 'Loading...', 
  center = true 
}: LoadingSpinnerProps) {
  const content = (
    <Space direction="vertical" align="center" size="middle">
      <Spin 
        indicator={customSpinIcon}
        size={size}
      />
      {text && (
        <Text style={{ 
          color: '#6b7280',
          fontSize: '14px'
        }}>
          {text}
        </Text>
      )}
    </Space>
  )

  if (center) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px',
        minHeight: '200px'
      }}>
        {content}
      </div>
    )
  }

  return content
}

// Inline loading spinner for buttons and smaller components
export function InlineLoader({ size = 16 }: { size?: number }) {
  return (
    <LoadingOutlined 
      style={{ 
        fontSize: size, 
        color: '#1079FF',
        marginRight: '8px'
      }} 
      spin 
    />
  )
}