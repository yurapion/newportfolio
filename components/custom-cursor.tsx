"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseEnter = () => {
      setIsHovering(true)
      setCursorVariant('hover')
    }

    const mouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [data-cursor="hover"]')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', mouseEnter)
        el.addEventListener('mouseleave', mouseLeave)
      })
    }

    window.addEventListener('mousemove', mouseMove)
    addHoverListeners()

    // Re-add listeners for dynamically created elements
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      observer.disconnect()
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: 0.8,
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    }
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          backgroundColor: variants[cursorVariant as keyof typeof variants].backgroundColor
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-blue-600"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
          mass: 0.2
        }}
      />
    </>
  )
}

// Custom hook for magnetic hover effects
export function useMagneticHover() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-magnetic]')
    
    elements.forEach(element => {
      const handleMouseEnter = () => {
        element.classList.add('magnetic-active')
      }
      
      const handleMouseLeave = () => {
        element.classList.remove('magnetic-active')
        // @ts-ignore
        element.style.transform = 'translate3d(0, 0, 0)'
      }
      
      const handleMouseMove = (e: Event) => {
        if (!element.classList.contains('magnetic-active')) return
        
        const mouseEvent = e as MouseEvent
        const rect = element.getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left - rect.width / 2
        const y = mouseEvent.clientY - rect.top - rect.height / 2
        
        const maxDistance = 50
        const distance = Math.sqrt(x * x + y * y)
        const factor = Math.min(distance / maxDistance, 1)
        
        const translateX = (x / distance) * factor * 20
        const translateY = (y / distance) * factor * 20
        
        // @ts-ignore
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`
      }
      
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
      element.addEventListener('mousemove', handleMouseMove)
    })
  }, [])
} 