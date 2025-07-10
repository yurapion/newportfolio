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
  Globe,
  Menu,
  X,
} from "lucide-react"

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              Senior Developer
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/architecture'}
            >
              Architecture
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => window.location.href = '/architecture'}
                className="block w-full text-left px-3 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-colors"
              >
                System Architecture
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

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
    web3: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "Smart Contracts",
      "DeFi",
      "NFTs",
      "MetaMask",
      "Hardhat",
      "IPFS",
      "Blockchain Architecture",
    ],
    ai: [
      "Agentic AI",
      "LangChain",
      "OpenAI GPT-4",
      "Claude API",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "AutoGen",
      "ML Model Deployment",
      "AI Tool Integration",
    ],
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
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
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
              Pioneering Web3, AI & Healthcare Innovation
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
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.location.href = '/architecture'}
            >
              System Architecture
              <Settings className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.location.href = '/visualizations'}
            >
              Data Visualizations
              <TrendingUp className="ml-2 h-5 w-5" />
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
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
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-slate-600">Hackathon Wins</p>
            </div>
            <div className="scroll-animate">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-slate-600">MVPs Built</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-600">The story behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey in Technology</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My passion for technology began with solving complex problems and creating solutions that make a real difference. 
                  Over {totalYears}+ years, I've evolved from a curious developer into a technical leader who bridges the gap 
                  between innovative technology and business value.
                </p>
                <p>
                  What drives me most is working on meaningful projects—especially in healthcare where technology can literally 
                  save lives. From building AI-powered medical imaging platforms that help diagnose diabetic retinopathy to 
                  creating communication tools that serve 100,000+ patients, I'm motivated by impact. My expertise extends to 
                  creating compelling data visualizations using D3.js and modern charting libraries to tell stories with data.
                </p>
                <p>
                  I believe the best technology solutions come from understanding both the technical complexities and human needs. 
                  That's why I focus not just on writing clean, scalable code, but on mentoring teams, understanding business 
                  objectives, and delivering solutions that truly solve problems.
                </p>
              </div>
            </div>

            {/* Core Values & Work Style */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Values & Work Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Impact-Driven Development</h4>
                    <p className="text-sm text-slate-600">Every line of code should serve a purpose. I focus on building solutions that deliver measurable business value and user satisfaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Collaborative Leadership</h4>
                    <p className="text-sm text-slate-600">I believe in leading by example, mentoring team members, and creating an environment where everyone can grow and contribute their best work.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Continuous Learning</h4>
                    <p className="text-sm text-slate-600">Technology evolves rapidly, and so do I. I'm constantly exploring new tools, patterns, and methodologies to stay at the forefront of innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Quality & Security First</h4>
                    <p className="text-sm text-slate-600">Especially in healthcare and enterprise systems, I prioritize security, compliance, and robust architecture that can scale safely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="scroll-animate mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Beyond the Code</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              When I'm not architecting systems or mentoring teams, I enjoy exploring emerging technologies, 
              contributing to open-source projects, and staying active in the developer community. 
              I believe work-life balance is essential for sustained creativity and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">🚀 Tech Innovation</Badge>
              <Badge variant="outline" className="px-4 py-2">🌱 Open Source</Badge>
              <Badge variant="outline" className="px-4 py-2">🎯 Mentoring</Badge>
              <Badge variant="outline" className="px-4 py-2">🏃‍♂️ Fitness</Badge>
              <Badge variant="outline" className="px-4 py-2">📚 Continuous Learning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Education & Certifications</h2>
            <p className="text-lg text-slate-600">Academic foundation and professional development</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                Education
              </h3>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">Computer Science & Software Engineering</h4>
                        <p className="text-blue-600 font-semibold">Technical University</p>
                        <p className="text-sm text-slate-500">Specialization: Software Architecture & Systems Design</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        2015-2019
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      Strong foundation in algorithms, data structures, software engineering principles, 
                      and system architecture. Graduated with honors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Data Structures</Badge>
                      <Badge variant="secondary" className="text-xs">Algorithms</Badge>
                      <Badge variant="secondary" className="text-xs">System Design</Badge>
                      <Badge variant="secondary" className="text-xs">Database Systems</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">AWS Solutions Architect</h4>
                      <Badge className="bg-orange-100 text-orange-700 text-xs">Professional</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Advanced cloud architecture and enterprise solutions</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">Microsoft Azure Developer</h4>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Associate</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Cloud application development and deployment</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">Kubernetes Administrator (CKA)</h4>
                      <Badge className="bg-purple-100 text-purple-700 text-xs">Certified</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Container orchestration and cluster management</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">Scrum Master (PSM I)</h4>
                      <Badge className="bg-green-100 text-green-700 text-xs">Professional</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Agile project management and team leadership</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  Continuous Learning
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Staying current with industry trends and emerging technologies through ongoing education.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                  <Badge variant="outline" className="text-xs">DevOps</Badge>
                  <Badge variant="outline" className="text-xs">Security</Badge>
                  <Badge variant="outline" className="text-xs">Leadership</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Impact & Value Proposition Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Impact & Value Proposition</h2>
            <p className="text-xl opacity-90">Quantifiable results that drive business success</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Key Value Props */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-8">What I Bring to Your Organization</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Measurable Business Impact</h4>
                    <p className="text-white/90">
                      Delivered 2,400% performance improvements, secured $2M+ in funding, and achieved 99.9% system uptime 
                      across healthcare and enterprise systems serving 100,000+ users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Team Leadership Excellence</h4>
                    <p className="text-white/90">
                      Led 15+ engineers across multiple time zones, achieved 95% on-time delivery rate, 
                      and mentored 8 team members to promotions with zero critical production incidents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Compliance & Security Expertise</h4>
                    <p className="text-white/90">
                      Successfully navigated EU MDR medical device regulations, GDPR compliance, and enterprise 
                      security standards while maintaining rapid development cycles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Innovation & Technical Vision</h4>
                    <p className="text-white/90">
                      Pioneered AI-powered healthcare solutions, implemented scalable microservices architectures, 
                      and drove adoption of modern development practices across organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI & Business Metrics */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-8">Proven ROI & Business Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">2,400%</div>
                  <p className="text-white/80 text-sm">Performance Improvement</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">$2M+</div>
                  <p className="text-white/80 text-sm">Funding Secured</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">100K+</div>
                  <p className="text-white/80 text-sm">Users Served</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <p className="text-white/80 text-sm">System Uptime</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <p className="text-white/80 text-sm">Client Satisfaction</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">22+</div>
                  <p className="text-white/80 text-sm">Projects Delivered</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Key Differentiators</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Healthcare domain expertise with medical device compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Full-stack + AI/ML capabilities in production environments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Remote-first leadership across multiple time zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Enterprise-grade architecture with startup agility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Career Highlights Timeline</h2>
            <p className="text-lg text-slate-600">Key milestones and achievements throughout my professional journey</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-green-400 to-purple-600"></div>

            <div className="space-y-12">
              {/* 2023-2024 */}
              <div className="relative flex items-start">
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Senior Technical Lead & Architect</h3>
                        <Badge className="bg-blue-100 text-blue-700">2023-2024</Badge>
                      </div>
                      <p className="text-blue-600 font-semibold mb-3">Blum Tech Group</p>
                      <p className="text-slate-600 mb-4">
                        Spearheaded AI-Sight Suite development, achieving 2,400% performance improvement and EU MDR compliance. 
                        Led architectural redesign serving 100,000+ patients globally.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-green-600 font-semibold">
                        <span>🎯 $2M+ funding secured</span>
                        <span>🚀 2,400% performance boost</span>
                        <span>🏥 EU MDR compliance</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2021-2023 */}
              <div className="relative flex items-start">
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Full-Stack Team Lead</h3>
                        <Badge className="bg-green-100 text-green-700">2021-2023</Badge>
                      </div>
                      <p className="text-green-600 font-semibold mb-3">Healthcare Innovation Projects</p>
                      <p className="text-slate-600 mb-4">
                        Led development of CardMedic platform with 49-language support and offline-first architecture. 
                        Managed distributed teams across 6+ time zones with 95% client satisfaction.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-green-600 font-semibold">
                        <span>👥 15+ team members led</span>
                        <span>🌍 49 languages supported</span>
                        <span>⭐ 95% satisfaction rate</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2019-2021 */}
              <div className="relative flex items-start">
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Senior Full-Stack Developer</h3>
                        <Badge className="bg-purple-100 text-purple-700">2019-2021</Badge>
                      </div>
                      <p className="text-purple-600 font-semibold mb-3">Enterprise & FinTech Solutions</p>
                      <p className="text-slate-600 mb-4">
                        Developed APOS restaurant management system with PayPal Partner Commerce integration. 
                        Built scalable microservices architecture handling 60-80% performance improvements.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-purple-600 font-semibold">
                        <span>💳 PayPal Partner integration</span>
                        <span>📊 80% performance boost</span>
                        <span>🏗️ Microservices architecture</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2017-2019 */}
              <div className="relative flex items-start">
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Full-Stack Developer</h3>
                        <Badge className="bg-orange-100 text-orange-700">2017-2019</Badge>
                      </div>
                      <p className="text-orange-600 font-semibold mb-3">E-commerce & Beauty Tech</p>
                      <p className="text-slate-600 mb-4">
                        Built Cosnova multi-brand e-commerce platform and SkinCam AI diagnostics tool. 
                        Achieved 92% accuracy in client-side AI with complete privacy protection.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-orange-600 font-semibold">
                        <span>🤖 92% AI accuracy</span>
                        <span>🛒 Multi-brand platform</span>
                        <span>🔒 Privacy-first design</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-animate mt-16 text-center">
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Continuous Growth & Innovation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Throughout my career, I've consistently pushed the boundaries of what's possible in software development. 
                From building AI-powered healthcare solutions to leading distributed teams, each role has built upon the last, 
                creating a unique blend of technical expertise, leadership skills, and business acumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 & Blockchain Expertise Section */}
      <section id="web3" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Web3 & Blockchain Expertise</h2>
            <p className="text-xl opacity-90">Building the decentralized future with cutting-edge blockchain technology</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Web3 Experience */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Code2 className="h-6 w-6" />
                </div>
                Decentralized Applications
              </h3>
              
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-green-300" />
                      Smart Contract Development
                    </h4>
                    <p className="text-white/90 text-sm mb-4">
                      Experienced in building secure and efficient smart contracts for various blockchain platforms. 
                      Focus on gas optimization and security best practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">Solidity</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">Ethereum</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">Web3.js</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">Hardhat</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-300" />
                      DeFi & NFT Platforms
                    </h4>
                    <p className="text-white/90 text-sm mb-4">
                      Built decentralized finance applications and NFT marketplaces with focus on user experience 
                      and security. Integration with multiple wallet providers and blockchain networks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">DeFi</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">NFTs</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">MetaMask</Badge>
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white">IPFS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Blockchain Achievements */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                Blockchain Achievements
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-3">Hackathon Victories</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">Multiple</div>
                      <div className="text-xs text-white/80">Hackathon Wins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-300">Invited</div>
                      <div className="text-xs text-white/80">Hackerhouses</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">
                    Consistent performer in blockchain hackathons, recognized for innovative solutions and 
                    technical excellence. Invited to exclusive hackerhouses for collaborative building.
                  </p>
                </div>

                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold mb-3">MVP Development</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-300">10+</div>
                      <div className="text-xs text-white/80">MVPs Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-300">Rapid</div>
                      <div className="text-xs text-white/80">Prototyping</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">
                    Experienced in rapid MVP development for blockchain startups. From concept to 
                    functional prototype in record time, focusing on core value propositions.
                  </p>
                </div>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-orange-300" />
                      Current Learning Focus
                    </h4>
                    <ul className="space-y-2 text-sm text-white/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-300 mt-0.5 flex-shrink-0" />
                        <span>Advanced blockchain consensus mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-300 mt-0.5 flex-shrink-0" />
                        <span>Layer 2 scaling solutions and rollups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-300 mt-0.5 flex-shrink-0" />
                        <span>Cross-chain interoperability protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-300 mt-0.5 flex-shrink-0" />
                        <span>Zero-knowledge proofs and privacy</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Expertise Section */}
      <section id="ai" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">AI & Machine Learning Expertise</h2>
            <p className="text-lg text-slate-600">Pioneering intelligent solutions with cutting-edge AI technologies</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Agentic AI */}
            <div className="scroll-animate">
              <Card className="hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Agentic AI Systems</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Specialized in building autonomous AI agents that can reason, plan, and execute complex tasks 
                      with minimal human intervention.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">LangChain</Badge>
                      <Badge variant="secondary" className="text-xs">AutoGen</Badge>
                      <Badge variant="secondary" className="text-xs">OpenAI GPT-4</Badge>
                      <Badge variant="secondary" className="text-xs">Anthropic Claude</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Tools & Frameworks */}
            <div className="scroll-animate">
              <Card className="hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">AI Tool Proficiency</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Expert in leveraging modern AI tools and frameworks to accelerate development and create 
                      intelligent applications across various domains.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Cursor AI</Badge>
                      <Badge variant="secondary" className="text-xs">GitHub Copilot</Badge>
                      <Badge variant="secondary" className="text-xs">Replit AI</Badge>
                      <Badge variant="secondary" className="text-xs">Claude Dev</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Machine Learning */}
            <div className="scroll-animate">
              <Card className="hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">ML & Data Science</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Experience in machine learning model development, training, and deployment for real-world 
                      applications with focus on practical implementation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">TensorFlow</Badge>
                      <Badge variant="secondary" className="text-xs">PyTorch</Badge>
                      <Badge variant="secondary" className="text-xs">Scikit-learn</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Project Highlights */}
          <div className="scroll-animate mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">AI Project Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    Autonomous Trading Agents
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Developed intelligent trading agents using reinforcement learning and real-time market data analysis. 
                    Achieved 15% improved performance over traditional algorithms.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-green-600 font-semibold">
                    <span>🤖 Autonomous Decision Making</span>
                    <span>📈 15% Performance Gain</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    Multi-Agent Coordination System
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Built a distributed system where multiple AI agents collaborate to solve complex problems. 
                    Used in blockchain governance and DeFi protocol optimization.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-purple-600 font-semibold">
                    <span>🔗 Blockchain Integration</span>
                    <span>⚡ Real-time Coordination</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-50">
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

            <Card className="scroll-animate hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">Web3 & Blockchain</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.web3.map((skill) => (
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
                  <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-indigo-100 transition-colors">
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
      <section id="experience" className="py-20 px-4 bg-white">
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
      <section id="testimonials" className="py-20 px-4 bg-slate-50">
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

      {/* Awards & Recognition Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-xl opacity-90">Industry recognition and professional achievements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="scroll-animate bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Outstanding Technical Achievement</h3>
                  <p className="text-blue-100 text-sm">Blum Tech Group - 2023</p>
                </div>
                <p className="text-white/90 text-sm">
                  Recognized for delivering 2,400% performance improvement in AI-Sight Suite, 
                  leading to successful EU MDR compliance and $2M+ funding.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-animate bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Team Leadership Excellence</h3>
                  <p className="text-blue-100 text-sm">Industry Recognition - 2022</p>
                </div>
                <p className="text-white/90 text-sm">
                  Led cross-functional teams to deliver healthcare solutions serving 100,000+ patients 
                  with 95% client satisfaction rate.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-animate bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation in Healthcare AI</h3>
                  <p className="text-blue-100 text-sm">Tech Innovation Award - 2023</p>
                </div>
                <p className="text-white/90 text-sm">
                  Pioneered client-side AI diagnostics with 92% accuracy, ensuring complete 
                  patient privacy and GDPR compliance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="scroll-animate mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="text-blue-100">System Uptime</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">22+</div>
                <p className="text-blue-100">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$2M+</div>
                <p className="text-blue-100">Funding Secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Management Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Leadership & Team Management</h2>
            <p className="text-lg text-slate-600">Building high-performing teams and driving technical excellence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Leadership Philosophy */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                Leadership Philosophy
              </h3>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Servant Leadership
                    </h4>
                    <p className="text-slate-600 text-sm mb-4">
                      I believe in leading by example and serving my team. My role is to remove obstacles, 
                      provide guidance, and create an environment where everyone can do their best work.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Mentoring</Badge>
                      <Badge variant="secondary" className="text-xs">Empowerment</Badge>
                      <Badge variant="secondary" className="text-xs">Growth Focus</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      Technical Excellence
                    </h4>
                    <p className="text-slate-600 text-sm mb-4">
                      Fostering a culture of continuous improvement, code quality, and knowledge sharing. 
                      Every team member should feel confident and capable of delivering exceptional work.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Code Reviews</Badge>
                      <Badge variant="secondary" className="text-xs">Best Practices</Badge>
                      <Badge variant="secondary" className="text-xs">Knowledge Sharing</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Team Management Achievements */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                Management Achievements
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Team Growth & Development</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-xs text-slate-600">Team Members Led</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-xs text-slate-600">Promoted Team Members</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Successfully mentored junior developers into senior roles, with 80% of team members 
                    receiving promotions or salary increases under my leadership.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Project Delivery Excellence</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-xs text-slate-600">On-Time Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">22+</div>
                      <div className="text-xs text-slate-600">Projects Delivered</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Maintained exceptional delivery rates while ensuring code quality and team satisfaction. 
                    Zero critical production incidents in the last 2 years.
                  </p>
                </div>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-600" />
                      Key Leadership Principles
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Regular 1:1s and career development planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Transparent communication and feedback culture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Cross-training and knowledge sharing initiatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Agile methodologies and continuous improvement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work & Collaboration Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Remote Work & Global Collaboration</h2>
            <p className="text-lg text-slate-600">Proven expertise in leading distributed teams and remote-first culture</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Remote Experience */}
            <Card className="scroll-animate hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Global Experience</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-slate-600">Years Remote Work</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-slate-600">Time Zones Collaborated</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-slate-600">Countries Worked With</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Remote Tools & Processes */}
            <Card className="scroll-animate hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Remote-First Tools</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Communication</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Slack</Badge>
                      <Badge variant="secondary" className="text-xs">Zoom</Badge>
                      <Badge variant="secondary" className="text-xs">Teams</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Project Management</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Jira</Badge>
                      <Badge variant="secondary" className="text-xs">Notion</Badge>
                      <Badge variant="secondary" className="text-xs">Linear</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">GitHub</Badge>
                      <Badge variant="secondary" className="text-xs">GitLab</Badge>
                      <Badge variant="secondary" className="text-xs">Docker</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Remote Leadership Success */}
            <Card className="scroll-animate hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Remote Leadership</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Led distributed teams across 6+ time zones</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Implemented async-first communication</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">95% team satisfaction in remote setup</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Zero productivity loss in remote transition</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Established remote onboarding processes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="scroll-animate mt-12 text-center">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote Work Philosophy</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                I believe remote work is not just about location flexibility—it's about creating a culture of trust, 
                clear communication, and results-driven performance. My approach focuses on asynchronous collaboration, 
                documentation-first processes, and maintaining strong team bonds regardless of physical distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
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
