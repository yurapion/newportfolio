"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Breakpoint hook for responsive design
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 768) {
        setBreakpoint('mobile')
      } else if (width < 1024) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}

// Responsive Container
interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export function ResponsiveContainer({ 
  children, 
  className = "", 
  maxWidth = 'xl' 
}: ResponsiveContainerProps) {
  const maxWidthClass = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md', 
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl'
  }[maxWidth]

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  )
}

// Mobile-optimized Grid
interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  cols?: {
    mobile?: 1 | 2
    tablet?: 2 | 3 | 4
    desktop?: 3 | 4 | 5 | 6
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export function ResponsiveGrid({ 
  children, 
  className = "",
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md'
}: ResponsiveGridProps) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }[gap]

  const gridClass = `grid grid-cols-${cols.mobile} md:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop} ${gapClass}`

  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  )
}

// Touch-optimized Card for mobile
interface TouchCardProps {
  children: React.ReactNode
  className?: string
  onTap?: () => void
  elevation?: 'low' | 'medium' | 'high'
}

export function TouchCard({ 
  children, 
  className = "",
  onTap,
  elevation = 'medium'
}: TouchCardProps) {
  const elevationClass = {
    low: 'shadow-sm hover:shadow-md',
    medium: 'shadow-md hover:shadow-lg',
    high: 'shadow-lg hover:shadow-xl'
  }[elevation]

  return (
    <motion.div
      className={`
        bg-white rounded-xl border border-slate-200 
        transition-all duration-300 overflow-hidden
        ${elevationClass} 
        ${onTap ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onTap}
      whileTap={onTap ? { scale: 0.98 } : {}}
      whileHover={onTap ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// Mobile-first Typography
interface ResponsiveTextProps {
  children: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption'
  className?: string
  center?: boolean
}

export function ResponsiveText({ 
  children, 
  variant, 
  className = "",
  center = false 
}: ResponsiveTextProps) {
  const baseClass = center ? 'text-center' : ''
  
  const variantClasses = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight',
    h3: 'text-xl sm:text-2xl md:text-3xl font-semibold leading-snug',
    h4: 'text-lg sm:text-xl md:text-2xl font-medium leading-snug',
    body: 'text-base sm:text-lg leading-relaxed',
    caption: 'text-sm sm:text-base text-slate-600 leading-normal'
  }[variant]

  const Component = variant === 'body' || variant === 'caption' ? 'p' : variant

  return (
    <Component className={`${variantClasses} ${baseClass} ${className}`}>
      {children}
    </Component>
  )
}

// Mobile-optimized Button
interface ResponsiveButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
}

export function ResponsiveButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = "",
  disabled = false
}: ResponsiveButtonProps) {
  const baseClass = `
    inline-flex items-center justify-center font-medium rounded-xl
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 focus:ring-slate-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  }[variant]

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  }[size]

  return (
    <motion.button
      className={`${baseClass} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      transition={{ duration: 0.1 }}
      data-magnetic
    >
      {children}
    </motion.button>
  )
}

// Mobile Stack Layout
interface MobileStackProps {
  children: React.ReactNode
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function MobileStack({ 
  children, 
  spacing = 'md',
  className = "" 
}: MobileStackProps) {
  const spacingClass = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8'
  }[spacing]

  return (
    <div className={`flex flex-col ${spacingClass} ${className}`}>
      {children}
    </div>
  )
}

// Mobile-optimized Section
interface MobileSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'gradient'
}

export function MobileSection({ 
  children, 
  id,
  className = "",
  padding = 'lg',
  background = 'white'
}: MobileSectionProps) {
  const paddingClass = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16 md:py-20',
    lg: 'py-16 sm:py-20 md:py-24 lg:py-28',
    xl: 'py-20 sm:py-24 md:py-28 lg:py-32'
  }[padding]

  const backgroundClass = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-slate-50 to-blue-50'
  }[background]

  return (
    <section 
      id={id}
      className={`${backgroundClass} ${paddingClass} ${className}`}
    >
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </section>
  )
}

// Responsive Image with lazy loading
interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
}: ResponsiveImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
      />
    </div>
  )
} 