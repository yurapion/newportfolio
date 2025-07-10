'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface Node extends d3.SimulationNodeDatum {
  id: string
  name: string
  type: 'role' | 'team' | 'project' | 'achievement'
  level: number
  size: number
  color: string
  year?: number
  description?: string
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node
  target: string | Node
  type: 'progression' | 'leadership' | 'collaboration'
  strength: number
}

const networkData = {
  nodes: [
    // Career Roles
    { id: 'dev2017', name: 'Junior Developer', type: 'role', level: 1, size: 20, color: '#3b82f6', year: 2017, description: 'Started with C# and ASP.NET' },
    { id: 'dev2018', name: 'Full-Stack Developer', type: 'role', level: 2, size: 25, color: '#10b981', year: 2018, description: 'Expanded to React and Node.js' },
    { id: 'senior2019', name: 'Senior Developer', type: 'role', level: 3, size: 30, color: '#f59e0b', year: 2019, description: 'Led architecture decisions' },
    { id: 'lead2021', name: 'Technical Lead', type: 'role', level: 4, size: 35, color: '#8b5cf6', year: 2021, description: 'Managing teams and projects' },
    { id: 'architect2023', name: 'Senior Technical Lead', type: 'role', level: 5, size: 40, color: '#ef4444', year: 2023, description: 'Enterprise architecture and strategy' },
    
    // Teams
    { id: 'team-ai', name: 'AI/ML Team', type: 'team', level: 3, size: 25, color: '#6366f1', description: '8 engineers, 3 data scientists' },
    { id: 'team-web3', name: 'Web3 Team', type: 'team', level: 3, size: 20, color: '#14b8a6', description: '5 blockchain developers' },
    { id: 'team-mobile', name: 'Mobile Team', type: 'team', level: 3, size: 22, color: '#f97316', description: '6 mobile developers' },
    { id: 'team-backend', name: 'Backend Team', type: 'team', level: 3, size: 28, color: '#84cc16', description: '10 backend engineers' },
    
    // Key Projects
    { id: 'proj-aisight', name: 'AI-Sight Suite', type: 'project', level: 2, size: 35, color: '#3b82f6', description: 'Medical imaging AI platform' },
    { id: 'proj-cardmedic', name: 'CardMedic Platform', type: 'project', level: 2, size: 30, color: '#10b981', description: 'Healthcare communication tool' },
    { id: 'proj-apos', name: 'APOS System', type: 'project', level: 2, size: 25, color: '#f59e0b', description: 'Restaurant management system' },
    { id: 'proj-cosnova', name: 'Cosnova E-commerce', type: 'project', level: 2, size: 28, color: '#8b5cf6', description: 'Multi-brand beauty platform' },
    { id: 'proj-skincam', name: 'SkinCam AI', type: 'project', level: 2, size: 26, color: '#ef4444', description: 'AI diagnostic tool' },
    
    // Key Achievements
    { id: 'achieve-2400', name: '2400% Performance', type: 'achievement', level: 1, size: 18, color: '#dc2626', description: 'AI-Sight optimization' },
    { id: 'achieve-100k', name: '100K+ Users', type: 'achievement', level: 1, size: 18, color: '#059669', description: 'Total users served' },
    { id: 'achieve-funding', name: '$2M+ Funding', type: 'achievement', level: 1, size: 18, color: '#7c3aed', description: 'Secured for AI projects' },
    { id: 'achieve-hackathon', name: 'Hackathon Winner', type: 'achievement', level: 1, size: 16, color: '#ea580c', description: 'Multiple Web3 hackathons' },
    { id: 'achieve-team', name: '15+ Team Members', type: 'achievement', level: 1, size: 16, color: '#0d9488', description: 'Led diverse teams' }
  ] as Node[],
  
  links: [
    // Career Progression
    { source: 'dev2017', target: 'dev2018', type: 'progression', strength: 3 },
    { source: 'dev2018', target: 'senior2019', type: 'progression', strength: 3 },
    { source: 'senior2019', target: 'lead2021', type: 'progression', strength: 3 },
    { source: 'lead2021', target: 'architect2023', type: 'progression', strength: 3 },
    
    // Team Leadership
    { source: 'lead2021', target: 'team-backend', type: 'leadership', strength: 2 },
    { source: 'lead2021', target: 'team-mobile', type: 'leadership', strength: 2 },
    { source: 'architect2023', target: 'team-ai', type: 'leadership', strength: 2 },
    { source: 'architect2023', target: 'team-web3', type: 'leadership', strength: 2 },
    
    // Project Leadership
    { source: 'senior2019', target: 'proj-cardmedic', type: 'leadership', strength: 2 },
    { source: 'senior2019', target: 'proj-apos', type: 'leadership', strength: 2 },
    { source: 'lead2021', target: 'proj-aisight', type: 'leadership', strength: 3 },
    { source: 'lead2021', target: 'proj-cosnova', type: 'leadership', strength: 2 },
    { source: 'architect2023', target: 'proj-skincam', type: 'leadership', strength: 2 },
    
    // Team-Project Collaborations
    { source: 'team-ai', target: 'proj-aisight', type: 'collaboration', strength: 3 },
    { source: 'team-ai', target: 'proj-skincam', type: 'collaboration', strength: 3 },
    { source: 'team-web3', target: 'achieve-hackathon', type: 'collaboration', strength: 2 },
    { source: 'team-backend', target: 'proj-cardmedic', type: 'collaboration', strength: 2 },
    { source: 'team-backend', target: 'proj-apos', type: 'collaboration', strength: 2 },
    { source: 'team-mobile', target: 'proj-cardmedic', type: 'collaboration', strength: 2 },
    
    // Achievements
    { source: 'proj-aisight', target: 'achieve-2400', type: 'collaboration', strength: 3 },
    { source: 'proj-aisight', target: 'achieve-funding', type: 'collaboration', strength: 2 },
    { source: 'proj-cardmedic', target: 'achieve-100k', type: 'collaboration', strength: 2 },
    { source: 'architect2023', target: 'achieve-team', type: 'leadership', strength: 2 }
  ] as Link[]
}

const CareerGrowthNetwork: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = 900
    const height = 600
    const margin = { top: 20, right: 20, bottom: 20, left: 20 }

    const container = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // Create force simulation
    const simulation = d3.forceSimulation<Node>(networkData.nodes)
      .force('link', d3.forceLink<Node, Link>(networkData.links).id((d: Node) => d.id).distance(80).strength(0.5))
      .force('charge', d3.forceManyBody<Node>().strength(-200))
      .force('center', d3.forceCenter<Node>(width / 2, height / 2))
      .force('collision', d3.forceCollide<Node>().radius((d: Node) => d.size + 5))

    // Create tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'network-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '10px')
      .style('border-radius', '5px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('z-index', '1000')

    // Create links
    const link = container.append('g')
      .selectAll('line')
      .data(networkData.links)
      .enter()
      .append('line')
      .attr('stroke', (d: Link) => {
        switch (d.type) {
          case 'progression': return '#3b82f6'
          case 'leadership': return '#ef4444'
          case 'collaboration': return '#10b981'
          default: return '#64748b'
        }
      })
      .attr('stroke-width', (d: Link) => d.strength)
      .attr('stroke-opacity', 0.6)
      .attr('stroke-dasharray', (d: Link) => d.type === 'collaboration' ? '5,5' : '0')

    // Create nodes
    const node = container.append('g')
      .selectAll('circle')
      .data(networkData.nodes)
      .enter()
      .append('circle')
      .attr('r', (d: Node) => d.size / 2)
      .attr('fill', (d: Node) => d.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this).transition().duration(200).attr('r', (d.size / 2) + 5)
        
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9)
        tooltip.html(`
          <strong>${d.name}</strong><br/>
          <strong>Type:</strong> ${d.type}<br/>
          ${d.year ? `<strong>Year:</strong> ${d.year}<br/>` : ''}
          ${d.description ? `<strong>Details:</strong> ${d.description}` : ''}
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px')
      })
      .on('mouseout', function(event, d) {
        d3.select(this).transition().duration(200).attr('r', d.size / 2)
        
        tooltip.transition()
          .duration(500)
          .style('opacity', 0)
      })

    // Add labels
    const label = container.append('g')
      .selectAll('text')
      .data(networkData.nodes)
      .enter()
      .append('text')
      .text((d: Node) => d.name)
      .attr('font-size', (d: Node) => Math.min(d.size / 3, 10))
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#fff')
      .style('pointer-events', 'none')
      .style('user-select', 'none')

    // Add drag behavior
    const drag = d3.drag<SVGCircleElement, Node>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on('drag', (event, d) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })

    node.call(drag)

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: Link) => (d.source as Node).x || 0)
        .attr('y1', (d: Link) => (d.source as Node).y || 0)
        .attr('x2', (d: Link) => (d.target as Node).x || 0)
        .attr('y2', (d: Link) => (d.target as Node).y || 0)

      node
        .attr('cx', (d: Node) => d.x || 0)
        .attr('cy', (d: Node) => d.y || 0)

      label
        .attr('x', (d: Node) => d.x || 0)
        .attr('y', (d: Node) => d.y || 0)
    })

    // Add legend
    const legend = container.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(20, 20)`)

    const legendData = [
      { type: 'Career Roles', color: '#3b82f6' },
      { type: 'Teams', color: '#10b981' },
      { type: 'Projects', color: '#f59e0b' },
      { type: 'Achievements', color: '#8b5cf6' }
    ]

    const legendItems = legend.selectAll('.legend-item')
      .data(legendData)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    legendItems.append('circle')
      .attr('cx', 8)
      .attr('cy', 8)
      .attr('r', 6)
      .attr('fill', d => d.color)

    legendItems.append('text')
      .attr('x', 20)
      .attr('y', 8)
      .attr('dy', '0.35em')
      .style('font-size', '12px')
      .style('fill', '#374151')
      .text(d => d.type)

    // Cleanup function
    return () => {
      simulation.stop()
      d3.select('body').selectAll('.network-tooltip').remove()
    }
  }, [])

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        Career Growth & Leadership Network
      </h3>
      <p className="text-slate-600 text-center mb-6">
        Interactive visualization of career progression, team leadership, and project achievements
      </p>
      <div className="flex justify-center">
        <svg ref={svgRef} className="max-w-full h-auto border border-slate-200 rounded-lg"></svg>
      </div>
      <div className="mt-4 text-center text-sm text-slate-500">
        Drag nodes to explore connections • Hover for details
      </div>
    </div>
  )
}

export default CareerGrowthNetwork 