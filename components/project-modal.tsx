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