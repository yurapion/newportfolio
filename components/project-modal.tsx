"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Zap,
  Target,
  Layers,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Wrench,
  Activity,
} from "lucide-react"

interface ProjectData {
  id: string
  title: string
  company: string
  duration: string
  description: string
  challenge: string
  solution: string
  outcome: string
  impact: string[]
  technologies: string[]
  role: string
  teamSize: number
  industry: string
  type: "web" | "mobile" | "infrastructure" | "ai" | "fullstack"
  featured: boolean
  images?: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  achievements: string[]
  technicalHighlights: string[]
  technicalChallenges?: {
    title: string
    description: string
    metrics?: {
      before: string
      after: string
      improvement: string
    }
  }[]
  solutions?: {
    title: string
    description: string
    implementation: string
    result: string
  }[]
  performanceMetrics?: {
    metric: string
    before: string
    after: string
    improvement: string
  }[]
  architecture: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    cloud?: string[]
    devops?: string[]
  }
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const getProjectIcon = (type: ProjectData["type"]) => {
  switch (type) {
    case "ai":
      return Brain
    case "mobile":
      return Smartphone
    case "infrastructure":
      return Cloud
    case "web":
      return Code
    default:
      return Layers
  }
}

const getIndustryIcon = (industry: string) => {
  switch (industry.toLowerCase()) {
    case "healthcare":
      return Shield
    case "fintech":
      return TrendingUp
    case "enterprise":
      return Settings
    default:
      return Target
  }
}

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  const ProjectIcon = getProjectIcon(project.type)
  const IndustryIcon = getIndustryIcon(project.industry)

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ProjectIcon className="h-6 w-6 text-blue-600" />
                <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <IndustryIcon className="h-4 w-4" />
                  <span>{project.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{project.teamSize} team members</span>
                </div>
              </div>
              <Badge variant="outline" className="w-fit">
                {project.role}
              </Badge>
            </div>
            <div className="flex gap-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-6">
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Project Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
              </CardContent>
            </Card>
          </div>

          {/* Solution & Outcome */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Solution</h3>
                <p className="text-slate-600 leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Outcome</h3>
                <p className="text-slate-600 leading-relaxed">{project.outcome}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Highlights */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Technical Highlights
              </h3>
              <ul className="space-y-2">
                {project.technicalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Challenges */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Technical Challenges
              </h3>
              <div className="space-y-4">
                {project.technicalChallenges.map((challenge, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h4 className="font-semibold text-lg text-slate-800 mb-3">
                        {challenge.title}
                      </h4>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {challenge.description}
                      </p>
                      {challenge.metrics && (
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-medium text-amber-800 mb-3 flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Performance Impact
                          </h5>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center p-3 bg-white rounded-lg border border-red-200">
                              <div className="text-red-600 font-medium mb-1">Before</div>
                              <div className="text-slate-700 font-semibold">{challenge.metrics.before}</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg border border-green-200">
                              <div className="text-green-600 font-medium mb-1">After</div>
                              <div className="text-slate-700 font-semibold">{challenge.metrics.after}</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                              <div className="text-blue-600 font-medium mb-1">Improvement</div>
                              <div className="text-blue-700 font-bold">{challenge.metrics.improvement}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Technical Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-green-600" />
                Technical Solutions
              </h3>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h4 className="font-semibold text-lg text-slate-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        {solution.title}
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h5 className="font-medium text-slate-700 mb-2">Problem Analysis</h5>
                          <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-center my-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border">
                            <span className="text-sm text-slate-600">Solution</span>
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                            <Wrench className="h-4 w-4" />
                            Implementation
                          </h5>
                          <p className="text-blue-700 leading-relaxed">{solution.implementation}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                            <Activity className="h-4 w-4" />
                            Result & Impact
                          </h5>
                          <p className="text-green-700 font-medium">{solution.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Performance Metrics */}
          {project.performanceMetrics && project.performanceMetrics.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.performanceMetrics.map((metric, index) => (
                  <Card key={index} className="p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
                      <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-purple-600" />
                        {metric.metric}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                          <span className="text-sm font-medium text-red-700">Before</span>
                          <span className="font-semibold text-red-600">{metric.before}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-green-700">After</span>
                          <span className="font-semibold text-green-600">{metric.after}</span>
                        </div>
                        <div className="border-t-2 border-purple-200 pt-3">
                          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                            <span className="text-sm font-medium text-purple-700">Improvement</span>
                            <span className="font-bold text-purple-600 text-xl">{metric.improvement}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-500" />
                Technical Architecture
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.architecture.frontend && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      Frontend
                    </h4>
                    <div className="space-y-1">
                      {project.architecture.frontend.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.architecture.backend && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-1">
                      <Database className="h-4 w-4" />
                      Backend
                    </h4>
                    <div className="space-y-1">
                      {project.architecture.backend.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.architecture.cloud && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-1">
                      <Cloud className="h-4 w-4" />
                      Cloud & DevOps
                    </h4>
                    <div className="space-y-1">
                      {project.architecture.cloud.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Impact & Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Business Impact
                </h3>
                <ul className="space-y-2">
                  {project.impact.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technologies Used */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
} 