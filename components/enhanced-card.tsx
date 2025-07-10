"use client"

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Enhanced3DCardProps {
  children: React.ReactNode
  className?: string
  spotlight?: boolean
  magnetic?: boolean
}

export function Enhanced3DCard({ 
  children, 
  className = "", 
  spotlight = true, 
  magnetic = false 
}: Enhanced3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
      whileHover={magnetic ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      data-magnetic={magnetic}
    >
      {/* Spotlight Effect */}
      {spotlight && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(59, 130, 246, 0.15), transparent 50%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* 3D Transform Content */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {children}
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 blur-sm"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transform: "translateZ(-1px)" }}
      />
    </motion.div>
  )
}

// Enhanced Project Card with advanced hover effects
interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  onClick?: () => void
}

export function EnhancedProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  onClick 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Enhanced3DCard 
      className="group cursor-pointer"
      spotlight={true}
      magnetic={true}
    >
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-xl p-6 h-full border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden"
        onClick={onClick}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Image with Parallax Effect */}
        {image && (
          <motion.div 
            className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20"
              animate={{
                opacity: isHovered ? 0 : 0.1,
              }}
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="space-y-4">
          <motion.h3 
            className="text-xl font-semibold text-slate-900 dark:text-white"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p 
            className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3"
            animate={{
              opacity: isHovered ? 0.8 : 1,
            }}
          >
            {description}
          </motion.p>

          {/* Technologies with Stagger Animation */}
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            animate={isHovered ? "visible" : "hidden"}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                variants={{
                  hidden: { opacity: 0.7, scale: 1 },
                  visible: { 
                    opacity: 1, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </Enhanced3DCard>
  )
}

// Floating Action Button with magnetic effect
interface FloatingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function FloatingButton({ children, onClick, className = "" }: FloatingButtonProps) {
  return (
    <Enhanced3DCard magnetic={true} className={className}>
      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.button>
    </Enhanced3DCard>
  )
} 