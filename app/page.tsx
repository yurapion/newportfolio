"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "@/components/project-modal"
import { getFeaturedProjects, ProjectData } from "@/data/projects"
import { workExperience, getCurrentPosition, getTotalYearsExperience } from "@/data/experience"
import { getFeaturedTestimonials, getAverageRating } from "@/data/testimonials"
import { getFeaturedServices } from "@/data/services"
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
  Calendar,
  MapPin,
  Star,
  Quote,
  CheckCircle,
  Clock,
  Building,
  Briefcase,
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
  const featuredTestimonials = getFeaturedTestimonials()
  const featuredServices = getFeaturedServices()
  const currentPosition = getCurrentPosition()
  const totalYears = getTotalYearsExperience()
  const averageRating = getAverageRating()

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
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
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
                <AnimatedCounter end={totalYears} suffix="+" />
              </div>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={22} suffix="+" />
              </div>
              <p className="text-slate-600">Projects Delivered</p>
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
              <p className="text-slate-600">System Uptime</p>
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
              {currentPosition && (
                <div className="mb-6">
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                    Currently: {currentPosition.position} at {currentPosition.company}
                  </Badge>
                </div>
              )}
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Highly accomplished Senior Full-Stack Developer & Technical Lead with {totalYears}+ years of experience specializing
                in healthcare technology, enterprise systems, and AI-powered solutions. Proven leader adept at guiding
                cross-functional teams, architecting scalable systems, and delivering 20+ mission-critical applications
                serving hundreds of thousands of users worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">EU MDR</div>
                  <p className="text-sm text-slate-600">Medical Device Compliance</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div>
                  <p className="text-sm text-slate-600">System Uptime Achieved</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$2M+</div>
                  <p className="text-sm text-slate-600">In Client Funding Secured</p>
                </div>
              </div>
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

      {/* Work Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Experience</h2>
            <p className="text-lg text-slate-600">{totalYears}+ years of delivering enterprise-grade solutions</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200"></div>

            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`scroll-animate ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{experience.position}</h3>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                              <Building className="h-4 w-4" />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{experience.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {experience.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-6 leading-relaxed">{experience.description}</p>
                        
                        {/* Key Metrics */}
                        {experience.keyMetrics && (
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {experience.keyMetrics.slice(0, 2).map((metric, idx) => (
                              <div key={idx} className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                                <div className="text-xs text-slate-600">{metric.metric}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Top Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-orange-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.slice(0, 6).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {experience.technologies.length > 6 && (
                              <Badge variant="outline" className="text-xs">
                                +{experience.technologies.length - 6} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Client Testimonials</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-slate-700">{averageRating}/5.0</span>
              <span className="text-slate-500">({featuredTestimonials.length} reviews)</span>
            </div>
            <p className="text-lg text-slate-600">What clients and colleagues say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="scroll-animate hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <CardContent className="p-8">
                  <div className="absolute top-6 right-6">
                    <Quote className="h-6 w-6 text-blue-200" />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs">Verified</span>
                        </div>
                      )}
                    </div>
                    
                    {testimonial.project && (
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">
                          {testimonial.project}
                        </Badge>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                      <span className="capitalize">{testimonial.relationship}</span>
                      <span>•</span>
                      <span>{new Date(testimonial.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="scroll-animate text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Ready to add your testimonial to this collection?
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Services & Expertise</h2>
            <p className="text-lg text-slate-600">Comprehensive technical solutions for your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredServices.map((service) => {
              const IconComponent = service.icon === 'Code2' ? Code2 : 
                                  service.icon === 'Brain' ? Brain :
                                  service.icon === 'Cloud' ? Cloud :
                                  Settings
              
              return (
                <Card key={service.id} className="scroll-animate hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-500">{service.timeframe}</span>
                          <Badge variant="outline" className="text-xs capitalize">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 6).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {service.technologies.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{service.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="scroll-animate text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Need a custom solution or want to discuss your specific requirements?
            </p>
            <Button 
              variant="outline"
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
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
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
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
