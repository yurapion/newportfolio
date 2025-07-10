export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
  deliverables: string[]
  timeframe: string
  priceRange?: string
  caseStudies?: string[]
  category: "development" | "consulting" | "architecture" | "leadership"
}

export const services: Service[] = [
  {
    id: "full-stack-development",
    title: "Full-Stack Application Development",
    description: "End-to-end development of scalable web and mobile applications using modern technologies. From MVP to enterprise-grade solutions with clean architecture and best practices.",
    icon: "Code2",
    features: [
      "Custom web and mobile application development",
      "Responsive design and cross-platform compatibility",
      "Database design and optimization",
      "RESTful APIs and GraphQL implementation",
      "Real-time features with WebSockets",
      "Performance optimization and caching strategies"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Flutter", "C#/.NET", "PostgreSQL", "MongoDB"],
    deliverables: [
      "Production-ready application with source code",
      "Technical documentation and API docs",
      "Testing suite with 80%+ coverage",
      "Deployment and CI/CD setup",
      "Performance monitoring dashboard",
      "3 months post-launch support"
    ],
    timeframe: "8-16 weeks",
    category: "development"
  },
  {
    id: "ai-ml-integration",
    title: "AI/ML Platform Development",
    description: "Integration of artificial intelligence and machine learning capabilities into existing systems or new applications. Specialized in healthcare AI, computer vision, and recommendation systems.",
    icon: "Brain",
    features: [
      "Custom AI model integration and deployment",
      "Computer vision and image processing",
      "Natural language processing solutions",
      "Recommendation engines and personalization",
      "Real-time inference optimization",
      "On-device AI implementation"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "OpenCV", "Scikit-learn", "ONNX", "Docker"],
    deliverables: [
      "Trained and optimized AI models",
      "Production inference pipeline",
      "Model monitoring and analytics",
      "API endpoints for AI services",
      "Performance benchmarks and reports",
      "Model retraining documentation"
    ],
    timeframe: "12-20 weeks",
    category: "development"
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure & DevOps",
    description: "Complete cloud infrastructure setup and DevOps implementation. Infrastructure as Code with Terraform, CI/CD pipelines, and automated deployment strategies for high availability systems.",
    icon: "Cloud",
    features: [
      "Infrastructure as Code with Terraform",
      "CI/CD pipeline implementation",
      "Container orchestration with Docker/Kubernetes",
      "Monitoring and logging setup",
      "Security hardening and compliance",
      "Auto-scaling and load balancing"
    ],
    technologies: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Prometheus"],
    deliverables: [
      "Complete infrastructure codebase",
      "Automated deployment pipeline",
      "Monitoring and alerting system",
      "Security audit and compliance report",
      "Disaster recovery procedures",
      "Operations documentation"
    ],
    timeframe: "6-12 weeks",
    category: "architecture"
  },
  {
    id: "technical-consulting",
    title: "Technical Architecture Consulting",
    description: "Strategic technical guidance for complex software projects. System architecture design, technology stack selection, and technical roadmap planning for startups and enterprises.",
    icon: "Settings",
    features: [
      "System architecture design and review",
      "Technology stack evaluation and selection",
      "Performance optimization strategies",
      "Code quality audit and improvement plans",
      "Scalability planning and bottleneck analysis",
      "Technical debt assessment and resolution"
    ],
    technologies: ["Architecture Patterns", "Microservices", "Domain-Driven Design", "SOLID Principles", "Design Patterns"],
    deliverables: [
      "Comprehensive architecture documentation",
      "Technology recommendations report",
      "Performance optimization roadmap",
      "Code quality improvement plan",
      "Implementation timeline and milestones",
      "Risk assessment and mitigation strategies"
    ],
    timeframe: "4-8 weeks",
    category: "consulting"
  },
  {
    id: "team-leadership",
    title: "Technical Team Leadership",
    description: "Leading and mentoring development teams to deliver high-quality software. Establishing best practices, code review processes, and fostering a culture of continuous improvement.",
    icon: "Users",
    features: [
      "Team leadership and mentorship",
      "Development process establishment",
      "Code review and quality standards",
      "Technical decision making and guidance",
      "Sprint planning and project management",
      "Knowledge sharing and documentation"
    ],
    technologies: ["Agile", "Scrum", "Git", "Code Review Tools", "Project Management", "Team Communication"],
    deliverables: [
      "Team process documentation",
      "Code review guidelines and standards",
      "Development workflow setup",
      "Team performance improvement plan",
      "Knowledge base and documentation",
      "Mentorship and training programs"
    ],
    timeframe: "Ongoing",
    category: "leadership"
  },
  {
    id: "healthcare-compliance",
    title: "Healthcare Technology & Compliance",
    description: "Specialized development for healthcare applications with focus on compliance, security, and medical device regulations. HIPAA, GDPR, and EU MDR compliance expertise.",
    icon: "Shield",
    features: [
      "HIPAA compliant application development",
      "Medical device software certification (EU MDR)",
      "DICOM integration and medical imaging",
      "Healthcare data security and encryption",
      "Audit logging and compliance reporting",
      "Telemedicine platform development"
    ],
    technologies: ["HL7 FHIR", "DICOM", "Azure AD B2C", "Encryption", "Audit Logging", "Medical APIs"],
    deliverables: [
      "Compliant healthcare application",
      "Security audit and certification",
      "Compliance documentation package",
      "Data privacy impact assessment",
      "Medical device software documentation",
      "Ongoing compliance monitoring"
    ],
    timeframe: "16-24 weeks",
    category: "development"
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization & Scaling",
    description: "Comprehensive performance optimization for existing applications. Database tuning, caching strategies, and architecture improvements to handle high traffic loads.",
    icon: "Zap",
    features: [
      "Application performance profiling and analysis",
      "Database query optimization and indexing",
      "Caching layer implementation",
      "CDN setup and static asset optimization",
      "Load balancing and auto-scaling configuration",
      "Real-time monitoring and alerting"
    ],
    technologies: ["Redis", "Elasticsearch", "CDN", "Load Balancers", "Monitoring Tools", "Database Optimization"],
    deliverables: [
      "Performance audit report with recommendations",
      "Optimized application with improved metrics",
      "Caching and scaling infrastructure",
      "Monitoring dashboard and alerts",
      "Load testing results and benchmarks",
      "Ongoing performance monitoring setup"
    ],
    timeframe: "8-12 weeks",
    category: "consulting"
  },
  {
    id: "third-party-integrations",
    title: "Third-Party API Integrations",
    description: "Seamlessly integrate your applications with external services and APIs. Expert implementation of payment gateways, authentication providers, communication services, and business tools.",
    icon: "Plug",
    features: [
      "Payment gateway integrations (PayPal, Stripe, Square, Xero)",
      "Authentication providers (Azure AD B2C, AWS Cognito, OAuth)",
      "Communication services (Twilio, SendGrid, Azure Text-to-Speech)",
      "Cloud services integration (AWS SageMaker, Azure Blob, S3)",
      "Business tools (Salesforce, HubSpot, Xero, QuickBooks)",
      "Social media and marketing platforms",
      "Webhook design and event handling",
      "API rate limiting, security, and error handling"
    ],
    technologies: ["REST APIs", "GraphQL", "OAuth 2.0", "JWT", "Webhooks", "API Security", "Rate Limiting"],
    deliverables: [
      "Secure API integration implementations",
      "Integration architecture documentation",
      "Error handling and monitoring setup",
      "API testing suite and documentation",
      "Webhook endpoints and event processing",
      "Security audit and compliance report"
    ],
    timeframe: "2-8 weeks per integration",
    category: "development"
  },
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization",
    description: "Modernizing legacy applications with updated technologies, improved security, and enhanced performance while maintaining business continuity.",
    icon: "ArrowRight",
    features: [
      "Legacy system assessment and migration planning",
      "Technology stack modernization",
      "Database migration and optimization",
      "API development for integration",
      "Gradual migration with minimal downtime",
      "Training and knowledge transfer"
    ],
    technologies: ["Migration Tools", "API Development", "Database Migration", "Modern Frameworks", "Cloud Migration"],
    deliverables: [
      "Migration strategy and roadmap",
      "Modernized application architecture",
      "New technology stack implementation",
      "Data migration and validation",
      "Staff training and documentation",
      "Post-migration support and optimization"
    ],
    timeframe: "16-28 weeks",
    category: "consulting"
  }
]

export const getServicesByCategory = (category: Service["category"]) =>
  services.filter(service => service.category === category)

export const getFeaturedServices = () =>
  services.filter((_, index) => index < 4)

export const getServiceById = (id: string) =>
  services.find(service => service.id === id) 