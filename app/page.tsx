"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "@/components/project-modal"
import { getFeaturedProjects, ProjectData } from "@/data/projects"
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Settings,
  Users,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  TrendingUp,
  Award,
  Target,
  Zap,
  Brain,
  Shield,
  ExternalLink,
} from "lucide-react"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

// Scroll Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function CVWebsite() {
  useScrollAnimation()

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const featuredProjects = getFeaturedProjects()

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const skills = {
    backend: [
      "C#/.NET 8",
      "ASP.NET Core",
      "Node.js",
      "Microservices",
      "Clean Architecture",
      "PostgreSQL",
      "SQL Server",
      "REST",
      "GraphQL",
      "gRPC",
    ],
    frontend: ["React 18", "TypeScript", "JavaScript ES6+", "Material-UI", "Responsive Design", "Vite", "Webpack"],
    mobile: ["Flutter", "iOS", "Android", "Cross-platform", "BLoC Pattern", "Push Notifications"],
    cloud: ["AWS", "Azure", "Terraform", "Docker", "ECS", "Lambda", "S3", "Container Orchestration"],
    devops: ["CI/CD", "GitHub Actions", "Bitbucket Pipelines", "SonarQube", "Automated Testing", "99.9% Uptime"],
    leadership: [
      "Technical Leadership",
      "Project Management",
      "Client Communication",
      "Team Mentorship",
      "Agile Planning",
    ],
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
        return Code2
      default:
        return Settings
    }
  }

  const getIndustryColor = (industry: string) => {
    switch (industry.toLowerCase()) {
      case "healthcare":
        return "text-green-600"
      case "enterprise":
        return "text-blue-600"
      case "e-commerce":
        return "text-purple-600"
      default:
        return "text-slate-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-900/5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Senior Full-Stack Developer
              <span className="block text-blue-600">& Technical Lead</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Building Scalable Solutions, Leading High-Performing Teams,
              <br className="hidden md:block" />
              Driving Innovation in Healthcare, Enterprise & FinTech
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Connect on LinkedIn
              <Linkedin className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-200/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-slate-200/30 rounded-full animate-float animation-delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-slate-600">Applications Built</p>
            </div>
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={100} suffix="K+" />
              </div>
              <p className="text-slate-600">Users Served</p>
            </div>
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={99} suffix=".9%" />
              </div>
              <p className="text-slate-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Summary</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed">
                Highly accomplished Senior Full-Stack Developer & Technical Lead with 6 years of experience specializing
                in healthcare technology, enterprise systems, and FinTech solutions. Proven leader adept at guiding
                cross-functional teams, optimizing complex systems, and delivering 15+ mission-critical applications
                serving hundreds of thousands of users. Blends deep technical expertise with strong project management,
                client communication, and agile planning skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Technical Expertise</h2>
            <p className="text-lg text-slate-600">Comprehensive full-stack development capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-green-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">Mobile Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-purple-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold">Cloud & Infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-orange-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Settings className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">DevOps & CI/CD</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-red-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold">Leadership & Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.leadership.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-teal-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Key Projects & Achievements</h2>
            <p className="text-lg text-slate-600">Delivering impact across healthcare, enterprise, and FinTech</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const ProjectIcon = getProjectIcon(project.type)
              const industryColor = getIndustryColor(project.industry)
              
              return (
                <Card
                  key={project.id}
                  className="scroll-animate hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <ProjectIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-sm font-medium ${industryColor}`}>{project.company}</span>
                            <span className="text-sm text-slate-500">• {project.duration}</span>
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-green-600 font-semibold">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span className="text-sm">{project.impact[0]}</span>
                      </div>
                      <Badge variant="outline" className="w-fit text-xs">
                        {project.role}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What I Bring to Your Team</h2>
            <p className="text-xl opacity-90">Core value propositions that drive results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="scroll-animate text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Leadership</h3>
              <p className="opacity-90">Leading and mentoring engineering teams to success</p>
            </div>

            <div className="scroll-animate text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance & Scalability</h3>
              <p className="opacity-90">60-80% load time reductions through optimization</p>
            </div>

            <div className="scroll-animate text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client & Business Focus</h3>
              <p className="opacity-90">95% project success rate with high client satisfaction</p>
            </div>

            <div className="scroll-animate text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Delivery</h3>
              <p className="opacity-90">From architecture to deployment with robust solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate mb-12">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-slate-300 mb-8">
              Open to Senior Developer, Technical Lead, Solutions Architect, and Engineering Manager positions. Remote
              preferred. Interested in challenging technical environments within healthcare, enterprise, or FinTech
              domains.
            </p>
          </div>

          <div className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>

          <div className="scroll-animate text-slate-400">
            <p>Ready to discuss how I can contribute to your team's success</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400 text-center px-4">
        <p>&copy; {new Date().getFullYear()} Senior Full-Stack Developer & Technical Lead. All rights reserved.</p>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  )
}
