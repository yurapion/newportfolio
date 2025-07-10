"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, FileText } from 'lucide-react'

interface NavigationItem {
  id: string
  label: string
  icon: React.ElementType
  href: string
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
  { id: 'experience', label: 'Experience', icon: FileText, href: '#experience' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
]

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Close menu when clicking outside or on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-nav')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('scroll', handleScroll)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => 
        document.querySelector(item.href)
      ).filter(Boolean)

      const scrollY = window.scrollY + 100

      for (const section of sections) {
        if (section && scrollY >= (section as HTMLElement).offsetTop) {
          const id = section.id
          if (id !== activeSection) {
            setActiveSection(id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="mobile-nav fixed top-6 right-6 z-50 md:hidden bg-white/80 backdrop-blur-md border border-slate-200 rounded-full p-3 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        data-magnetic
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-slate-700" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-nav fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="mobile-nav fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-slate-200 z-40 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="pt-20 pb-8 px-6 border-b border-slate-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-xl font-semibold text-slate-900">Navigation</h2>
                    <p className="text-sm text-slate-600 mt-1">Portfolio sections</p>
                  </motion.div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navigationItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = activeSection === item.id
                      
                      return (
                        <motion.button
                          key={item.id}
                          className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left transition-all duration-200 ${
                            isActive 
                              ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                          onClick={() => scrollToSection(item.href)}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 + index * 0.05,
                            duration: 0.3 
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            animate={{
                              scale: isActive ? 1.1 : 1,
                              rotate: isActive ? 5 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                          </motion.div>
                          <span className="font-medium">{item.label}</span>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                              layoutId="activeIndicator"
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.button>
                      )
                    })}
                  </nav>
                </div>

                {/* Footer */}
                <motion.div
                  className="px-6 py-6 border-t border-slate-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-slate-500 text-center">
                    Yurii Pion Portfolio • 2024
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation Indicator */}
      <div className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <nav className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                className="group relative"
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'bg-transparent border-slate-400 hover:border-blue-500'
                  }`}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                  }}
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
            )
          })}
        </nav>
      </div>
    </>
  )
} 