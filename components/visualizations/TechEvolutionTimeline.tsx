'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface TechItem {
  year: number
  technologies: string[]
  category: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  projects: number
}

const techEvolutionData: TechItem[] = [
  {
    year: 2017,
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript'],
    category: 'Backend Foundation',
    level: 'beginner',
    projects: 2
  },
  {
    year: 2018,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'Full-Stack Development',
    level: 'intermediate',
    projects: 5
  },
  {
    year: 2019,
    technologies: ['Docker', 'Kubernetes', 'Microservices', 'TypeScript'],
    category: 'DevOps & Architecture',
    level: 'intermediate',
    projects: 8
  },
  {
    year: 2020,
    technologies: ['Flutter', 'React Native', 'GraphQL', 'Terraform'],
    category: 'Mobile & Infrastructure',
    level: 'advanced',
    projects: 12
  },
  {
    year: 2021,
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AI Integration'],
    category: 'AI & Data Science',
    level: 'advanced',
    projects: 8
  },
  {
    year: 2022,
    technologies: ['Blockchain', 'Solidity', 'Web3.js', 'Smart Contracts'],
    category: 'Web3 & Blockchain',
    level: 'advanced',
    projects: 6
  },
  {
    year: 2023,
    technologies: ['Agentic AI', 'LangChain', 'GPT-4', 'AutoGen'],
    category: 'Advanced AI Systems',
    level: 'expert',
    projects: 10
  },
  {
    year: 2024,
    technologies: ['Claude API', 'Multi-Agent Systems', 'DeFi', 'NFT Platforms'],
    category: 'AI & Web3 Integration',
    level: 'expert',
    projects: 15
  }
]

const TechEvolutionTimeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const margin = { top: 40, right: 40, bottom: 60, left: 60 }
    const width = 1000 - margin.left - margin.right
    const height = 600 - margin.top - margin.bottom

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Scales
    const xScale = d3.scaleLinear()
      .domain(d3.extent(techEvolutionData, d => d.year) as [number, number])
      .range([0, width])

    const yScale = d3.scalePoint()
      .domain(['beginner', 'intermediate', 'advanced', 'expert'])
      .range([height, 0])
      .padding(0.1)

    const colorScale = d3.scaleOrdinal()
      .domain(['Backend Foundation', 'Full-Stack Development', 'DevOps & Architecture', 'Mobile & Infrastructure', 'AI & Data Science', 'Web3 & Blockchain', 'Advanced AI Systems', 'AI & Web3 Integration'])
      .range(['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#6366f1', '#14b8a6', '#f97316'])

    const sizeScale = d3.scaleLinear()
      .domain(d3.extent(techEvolutionData, d => d.projects) as [number, number])
      .range([15, 30])

    // Timeline line
    const line = d3.line<TechItem>()
      .x(d => xScale(d.year))
      .y(d => yScale(d.level) || 0)
      .curve(d3.curveMonotoneX)

    g.append('path')
      .datum(techEvolutionData)
      .attr('fill', 'none')
      .attr('stroke', '#64748b')
      .attr('stroke-width', 3)
      .attr('stroke-dasharray', '5,5')
      .attr('d', line)

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format('d')))
      .selectAll('text')
      .style('font-size', '12px')
      .style('fill', '#475569')

    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .style('font-size', '12px')
      .style('fill', '#475569')
      .style('text-transform', 'capitalize')

    // Axis labels
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .style('fill', '#475569')
      .style('font-weight', 'bold')
      .text('Skill Level')

    g.append('text')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom - 10})`)
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .style('fill', '#475569')
      .style('font-weight', 'bold')
      .text('Year')

    // Create tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '10px')
      .style('border-radius', '5px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('z-index', '1000')

    // Data points
    const circles = g.selectAll('.data-point')
      .data(techEvolutionData)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.level) || 0)
      .attr('r', 0)
      .attr('fill', d => colorScale(d.category) as string || '#3b82f6')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', .9)
        tooltip.html(`
          <strong>${d.year} - ${d.category}</strong><br/>
          <strong>Level:</strong> ${d.level}<br/>
          <strong>Projects:</strong> ${d.projects}<br/>
          <strong>Technologies:</strong><br/>
          ${d.technologies.join(', ')}
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px')
      })
      .on('mouseout', () => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0)
      })

    // Animate circles
    circles.transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr('r', d => sizeScale(d.projects))

    // Category labels
    g.selectAll('.category-label')
      .data(techEvolutionData)
      .enter()
      .append('text')
      .attr('class', 'category-label')
      .attr('x', d => xScale(d.year))
      .attr('y', d => (yScale(d.level) || 0) - sizeScale(d.projects) - 5)
      .attr('text-anchor', 'middle')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('fill', '#374151')
      .text(d => d.year)
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .style('opacity', 1)

    // Legend
    const legend = g.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width - 200}, 20)`)

    const legendItems = legend.selectAll('.legend-item')
      .data(colorScale.domain())
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    legendItems.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', d => colorScale(d) as string)

    legendItems.append('text')
      .attr('x', 18)
      .attr('y', 6)
      .attr('dy', '0.35em')
      .style('font-size', '10px')
      .style('fill', '#374151')
      .text(d => d)

    // Cleanup function
    return () => {
      d3.select('body').selectAll('.tooltip').remove()
    }
  }, [])

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        Technology Stack Evolution
      </h3>
      <p className="text-slate-600 text-center mb-6">
        Journey from backend fundamentals to cutting-edge AI & Web3 technologies
      </p>
      <div className="flex justify-center">
        <svg ref={svgRef} className="max-w-full h-auto"></svg>
      </div>
    </div>
  )
}

export default TechEvolutionTimeline 