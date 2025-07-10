'use client'

import { useEffect, useRef } from 'react'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadMermaid = async () => {
      try {
        // Dynamically import mermaid to avoid SSR issues
        const mermaid = (await import('mermaid')).default
        
        // Initialize mermaid with custom theme
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#1e293b',
            primaryBorderColor: '#64748b',
            lineColor: '#64748b',
            secondaryColor: '#f1f5f9',
            tertiaryColor: '#e2e8f0',
            background: '#ffffff',
            mainBkg: '#ffffff',
            secondBkg: '#f8fafc',
            tertiaryBkg: '#f1f5f9',
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'cardinal'
          },
          sequence: {
            useMaxWidth: true,
            wrap: true
          },
          gantt: {
            useMaxWidth: true
          }
        })

        if (ref.current) {
          // Clear previous content
          ref.current.innerHTML = ''
          
          // Generate unique ID for this diagram
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
          
          // Render the diagram
          const { svg } = await mermaid.render(id, chart)
          ref.current.innerHTML = svg
          
          // Apply responsive styling
          const svgElement = ref.current.querySelector('svg')
          if (svgElement) {
            svgElement.style.maxWidth = '100%'
            svgElement.style.height = 'auto'
          }
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error)
        if (ref.current) {
          ref.current.innerHTML = `
            <div class="p-4 border border-red-200 rounded-lg bg-red-50 text-red-700">
              <p class="font-medium">Error rendering diagram</p>
              <p class="text-sm mt-1">Please check the diagram syntax.</p>
            </div>
          `
        }
      }
    }

    loadMermaid()
  }, [chart])

  return (
    <div 
      ref={ref} 
      className={`mermaid-container overflow-x-auto ${className}`}
      style={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  )
} 