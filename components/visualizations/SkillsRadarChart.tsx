'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface SkillData {
  skill: string
  level: number
  maxLevel: number
  category: string
  projects: number
}

const skillsData: SkillData[] = [
  { skill: 'Backend Development', level: 95, maxLevel: 100, category: 'Core', projects: 18 },
  { skill: 'Frontend Development', level: 90, maxLevel: 100, category: 'Core', projects: 15 },
  { skill: 'Mobile Development', level: 85, maxLevel: 100, category: 'Core', projects: 8 },
  { skill: 'Cloud & DevOps', level: 92, maxLevel: 100, category: 'Infrastructure', projects: 12 },
  { skill: 'AI & Machine Learning', level: 88, maxLevel: 100, category: 'Emerging', projects: 10 },
  { skill: 'Web3 & Blockchain', level: 82, maxLevel: 100, category: 'Emerging', projects: 6 },
  { skill: 'System Architecture', level: 95, maxLevel: 100, category: 'Leadership', projects: 20 },
  { skill: 'Team Leadership', level: 90, maxLevel: 100, category: 'Leadership', projects: 15 },
  { skill: 'Project Management', level: 88, maxLevel: 100, category: 'Leadership', projects: 22 },
  { skill: 'Database Design', level: 93, maxLevel: 100, category: 'Core', projects: 16 }
]

const SkillsRadarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = 500
    const height = 500
    const margin = 50
    const radius = Math.min(width, height) / 2 - margin

    const container = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const angleSlice = Math.PI * 2 / skillsData.length
    const rScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, radius])

    const colorScale = d3.scaleOrdinal()
      .domain(['Core', 'Infrastructure', 'Emerging', 'Leadership'])
      .range(['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'])

    // Create circular grid lines
    const levels = 5
    for (let level = 1; level <= levels; level++) {
      const levelRadius = (radius / levels) * level
      
      container.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', levelRadius)
        .attr('fill', 'none')
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)
        .attr('opacity', 0.3)

      // Add percentage labels
      container.append('text')
        .attr('x', 4)
        .attr('y', -levelRadius + 4)
        .attr('text-anchor', 'start')
        .style('font-size', '10px')
        .style('fill', '#64748b')
        .text(`${(level * 20)}%`)
    }

    // Create axis lines
    skillsData.forEach((skill, i) => {
      const angle = angleSlice * i - Math.PI / 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      container.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', y)
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)
        .attr('opacity', 0.5)

      // Add skill labels
      const labelX = Math.cos(angle) * (radius + 20)
      const labelY = Math.sin(angle) * (radius + 20)

      container.append('text')
        .attr('x', labelX)
        .attr('y', labelY)
        .attr('text-anchor', labelX > 0 ? 'start' : 'end')
        .attr('dominant-baseline', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#374151')
        .text(skill.skill)
    })

    // Create radar path
    const radarLine = d3.line<SkillData>()
      .x((d, i) => {
        const angle = angleSlice * i - Math.PI / 2
        return Math.cos(angle) * rScale(d.level)
      })
      .y((d, i) => {
        const angle = angleSlice * i - Math.PI / 2
        return Math.sin(angle) * rScale(d.level)
      })
      .curve(d3.curveLinearClosed)

    // Create tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'radar-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '10px')
      .style('border-radius', '5px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('z-index', '1000')

    // Add radar area
    const radarArea = container.append('path')
      .datum(skillsData)
      .attr('d', radarLine)
      .attr('fill', '#3b82f6')
      .attr('fill-opacity', 0.1)
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 2)
      .attr('opacity', 0)

    // Animate radar area
    radarArea.transition()
      .duration(1000)
      .attr('opacity', 1)

    // Add data points
    const dots = container.selectAll('.radar-dot')
      .data(skillsData)
      .enter()
      .append('circle')
      .attr('class', 'radar-dot')
      .attr('cx', (d, i) => {
        const angle = angleSlice * i - Math.PI / 2
        return Math.cos(angle) * rScale(d.level)
      })
      .attr('cy', (d, i) => {
        const angle = angleSlice * i - Math.PI / 2
        return Math.sin(angle) * rScale(d.level)
      })
      .attr('r', 0)
      .attr('fill', d => colorScale(d.category) as string || '#3b82f6')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this).transition().duration(200).attr('r', 8)
        
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9)
        tooltip.html(`
          <strong>${d.skill}</strong><br/>
          <strong>Proficiency:</strong> ${d.level}%<br/>
          <strong>Category:</strong> ${d.category}<br/>
          <strong>Projects:</strong> ${d.projects}
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px')
      })
      .on('mouseout', function() {
        d3.select(this).transition().duration(200).attr('r', 5)
        
        tooltip.transition()
          .duration(500)
          .style('opacity', 0)
      })

    // Animate dots
    dots.transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr('r', 5)

    // Add legend
    const legend = container.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${-radius + 20}, ${radius - 80})`)

    const legendData = ['Core', 'Infrastructure', 'Emerging', 'Leadership']
    const legendItems = legend.selectAll('.legend-item')
      .data(legendData)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    legendItems.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', d => colorScale(d) as string || '#3b82f6')
      .attr('rx', 2)

    legendItems.append('text')
      .attr('x', 18)
      .attr('y', 6)
      .attr('dy', '0.35em')
      .style('font-size', '11px')
      .style('fill', '#374151')
      .text(d => d)

    // Cleanup function
    return () => {
      d3.select('body').selectAll('.radar-tooltip').remove()
    }
  }, [])

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        Skills Proficiency Radar
      </h3>
      <p className="text-slate-600 text-center mb-6">
        Comprehensive overview of technical and leadership competencies
      </p>
      <div className="flex justify-center">
        <svg ref={svgRef} className="max-w-full h-auto"></svg>
      </div>
    </div>
  )
}

export default SkillsRadarChart 