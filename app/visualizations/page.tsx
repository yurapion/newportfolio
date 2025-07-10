'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, TrendingUp, Users, Globe, Brain, BarChart, Radar, Network } from 'lucide-react'
import TechEvolutionTimeline from '@/components/visualizations/TechEvolutionTimeline'
import SkillsRadarChart from '@/components/visualizations/SkillsRadarChart'
import ProjectImpactMetrics from '@/components/visualizations/ProjectImpactMetrics'
import CareerGrowthNetwork from '@/components/visualizations/CareerGrowthNetwork'

export default function VisualizationsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const visualizations = [
    {
      id: 'tech-evolution',
      name: 'Technology Evolution Timeline',
      description: 'Interactive D3.js timeline showing technology stack growth from 2017-2024',
      icon: TrendingUp,
      category: 'Career Growth',
      technologies: ['D3.js', 'TypeScript', 'SVG Animation'],
      component: TechEvolutionTimeline
    },
    {
      id: 'skills-radar',
      name: 'Skills Proficiency Radar',
      description: 'Comprehensive radar chart displaying technical and leadership competencies',
      icon: Radar,
      category: 'Skills Assessment',
      technologies: ['D3.js', 'Interactive SVG', 'Force Layout'],
      component: SkillsRadarChart
    },
    {
      id: 'project-impact',
      name: 'Project Impact Metrics',
      description: 'Business value dashboard with performance improvements and growth metrics',
      icon: BarChart,
      category: 'Business Impact',
      technologies: ['Chart.js', 'React Charts', 'Data Visualization'],
      component: ProjectImpactMetrics
    },
    {
      id: 'career-network',
      name: 'Career Growth Network',
      description: 'Interactive network diagram showing career progression and team leadership',
      icon: Network,
      category: 'Leadership Journey',
      technologies: ['D3.js', 'Force Simulation', 'Network Graph'],
      component: CareerGrowthNetwork
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Career Growth': return TrendingUp
      case 'Skills Assessment': return Brain
      case 'Business Impact': return Globe
      case 'Leadership Journey': return Users
      default: return BarChart
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career Growth': return 'text-blue-600 bg-blue-50'
      case 'Skills Assessment': return 'text-purple-600 bg-purple-50'
      case 'Business Impact': return 'text-green-600 bg-green-50'
      case 'Leadership Journey': return 'text-orange-600 bg-orange-50'
      default: return 'text-slate-600 bg-slate-50'
    }
  }

  const renderVisualization = (visualizationId: string) => {
    const viz = visualizations.find(v => v.id === visualizationId)
    if (!viz) return null

    const Component = viz.component
    return <Component />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Data Visualizations</h1>
                <p className="text-slate-600">Interactive charts and diagrams showcasing technical expertise</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              4 Visualizations
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Interactive Data Visualizations
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Showcasing technical expertise through cutting-edge data visualization libraries including 
                D3.js, Chart.js, and custom interactive components built with React and TypeScript.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-slate-600">Interactive Charts</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">D3.js</div>
                <div className="text-sm text-slate-600">Advanced Library</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">TypeScript</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Real-time</div>
                <div className="text-sm text-slate-600">Interactions</div>
              </Card>
            </div>

            {/* Visualization Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {visualizations.map((viz) => {
                const CategoryIcon = getCategoryIcon(viz.category)
                const VizIcon = viz.icon
                
                return (
                  <Card key={viz.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <VizIcon className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{viz.name}</h3>
                            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(viz.category)}`}>
                              <CategoryIcon className="h-3 w-3" />
                              {viz.category}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {viz.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {viz.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => setActiveTab(viz.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        View Interactive Chart
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Technology Stack Info */}
            <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Visualization Technology Stack
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">D3.js</h4>
                  <p className="text-sm text-slate-600">
                    Advanced data visualization library for creating interactive, animated charts and network diagrams
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Chart.js</h4>
                  <p className="text-sm text-slate-600">
                    Modern charting library for responsive, beautiful charts with extensive customization options
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">TypeScript</h4>
                  <p className="text-sm text-slate-600">
                    Type-safe development ensuring robust, maintainable visualization components
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Individual Visualization Sections */}
        {activeTab !== 'overview' && (
          <div>
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setActiveTab('overview')}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Overview
              </Button>
              
              {(() => {
                const viz = visualizations.find(v => v.id === activeTab)
                if (!viz) return null
                
                return (
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{viz.name}</h2>
                    <p className="text-lg text-slate-600 mb-4">{viz.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {viz.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              {renderVisualization(activeTab)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 