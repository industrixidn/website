'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Skeleton } from 'antd'

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  priority = false,
  placeholder = 'empty',
  blurDataURL 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={className}>
      {(isInView || priority) ? (
        <div style={{ position: 'relative' }}>
          {isLoading && (
            <Skeleton.Image 
              style={{ 
                width, 
                height,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1
              }} 
            />
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            placeholder={placeholder}
            {...(blurDataURL && { blurDataURL })}
            onLoad={() => setIsLoading(false)}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </div>
      ) : (
        <div 
          style={{ 
            width, 
            height, 
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Skeleton.Image style={{ width, height }} />
        </div>
      )}
    </div>
  )
}