'use client'

import React, { Component, ReactNode } from 'react'
import { Result, Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div style={{ 
          padding: '48px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '400px'
        }}>
          <Result
            status="error"
            title="Something went wrong"
            subTitle="We're sorry, but something unexpected happened. Please try refreshing the page."
            extra={[
              <Button 
                key="retry" 
                type="primary" 
                icon={<ReloadOutlined />}
                onClick={this.handleRetry}
                className="btn-gradient"
              >
                Try Again
              </Button>,
              <Button 
                key="home" 
                onClick={() => window.location.href = '/'}
              >
                Go Home
              </Button>,
            ]}
          />
        </div>
      )
    }

    return this.props.children
  }
}