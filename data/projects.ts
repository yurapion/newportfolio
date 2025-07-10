export interface ProjectData {
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

export const projects: ProjectData[] = [
  {
    id: "ai-sight-suite",
    title: "AI-Sight Medical Imaging Platform",
    company: "Blum Tech Group",
    duration: "2024 - Present",
    description: "Enterprise-grade AI-powered medical imaging platform for automated diagnosis and analysis. Built for healthcare providers to process thousands of medical images daily with AI-assisted grading and DICOM integration.",
    challenge: "Healthcare providers needed a scalable solution to process large volumes of medical images efficiently while maintaining HIPAA compliance and integrating with existing medical systems. Traditional manual grading was time-consuming and prone to human error.",
    solution: "Developed a comprehensive SaaS platform with clean architecture, integrating AWS SageMaker for AI processing, Azure AD B2C for authentication, and DICOM support for medical imaging standards. Implemented multi-tenant architecture with advanced licensing and user management.",
    outcome: "Successfully deployed platform processing thousands of images daily with 30% improvement in diagnostic efficiency. Achieved 99.9% uptime and full regulatory compliance.",
    impact: [
      "Processing 10,000+ medical images daily",
      "30% improvement in diagnostic efficiency",
      "99.9% platform uptime achieved",
      "Full HIPAA compliance implementation",
      "Multi-tenant SaaS serving multiple healthcare providers"
    ],
    technologies: ["C#/.NET 8", "React", "TypeScript", "Azure", "AWS SageMaker", "PostgreSQL", "DICOM", "Azure AD B2C", "Terraform"],
    role: "Senior Full-Stack Developer & Technical Lead",
    teamSize: 8,
    industry: "Healthcare",
    type: "ai",
    featured: true,
    achievements: [
      "Architected clean domain-driven design with separation of concerns",
      "Implemented AI/ML pipeline with AWS SageMaker integration",
      "Built secure multi-tenant architecture with role-based access control",
      "Achieved medical device regulatory compliance (EU MDR)",
      "Designed scalable microservices architecture"
    ],
    technicalHighlights: [
      "Clean Architecture with Domain, Application, Infrastructure layers",
      "Real-time AI image processing with batch upload capabilities",
      "DICOM medical imaging standard integration using fo-dicom library",
      "Azure AD B2C OAuth 2.0 authentication with role-based permissions",
      "Comprehensive logging and monitoring with Sentry integration",
      "CI/CD pipeline with automated testing and SonarQube code analysis",
      "Terraform infrastructure as code for scalable cloud deployment"
    ],
    architecture: {
      frontend: ["React 18", "TypeScript", "Material-UI", "React Query", "Vite"],
      backend: ["C#/.NET 8", "ASP.NET Core", "MediatR", "FluentValidation", "Entity Framework"],
      database: ["PostgreSQL", "Azure Storage", "AWS S3"],
      cloud: ["Azure", "AWS", "Terraform", "Docker", "Azure AD B2C", "AWS SageMaker"],
      devops: ["Bitbucket Pipelines", "SonarQube", "Sentry", "Docker", "Terraform"]
    }
  },
  {
    id: "cardmedic-platform",
    title: "CardMedic Healthcare Communication Platform",
    company: "Blum Tech Group",
    duration: "2023 - 2024",
    description: "Comprehensive healthcare communication platform serving 100,000+ patients across multiple clinics. Cross-platform mobile and web application with real-time translation, offline capabilities, and multi-language support for 49 languages.",
    challenge: "Healthcare providers needed to communicate effectively with patients speaking different languages, especially in emergency situations. Existing solutions lacked offline capabilities and comprehensive medical content management.",
    solution: "Built a comprehensive Flutter-based cross-platform application with advanced offline capabilities, real-time translation services, and a robust CMS for medical content. Implemented microservices architecture with AWS serverless functions.",
    outcome: "Successfully launched platform serving 100,000+ patients with 95% user satisfaction rating. Reduced communication barriers in healthcare settings by 80%.",
    impact: [
      "Serving 100,000+ patients across multiple clinics",
      "Supporting 49 languages with real-time translation",
      "95% user satisfaction rating achieved",
      "80% reduction in communication barriers",
      "Offline functionality for remote areas"
    ],
    technologies: ["Flutter", "React Native", "Node.js", "AWS Lambda", "PostgreSQL", "DynamoDB", "Cognito", "React", "TypeScript"],
    role: "Senior Full-Stack Developer",
    teamSize: 12,
    industry: "Healthcare",
    type: "mobile",
    featured: true,
    achievements: [
      "Developed cross-platform mobile app (iOS, Android, Web) with Flutter",
      "Built comprehensive microservices architecture with AWS Lambda",
      "Implemented offline-first architecture with local data synchronization",
      "Created multi-language content management system",
      "Integrated real-time voice and text translation services"
    ],
    technicalHighlights: [
      "Flutter cross-platform development for iOS, Android, and Web",
      "Offline-first architecture with local SQLite and Sembast databases",
      "Real-time translation with Amazon Polly and Azure Cognitive Services",
      "AWS serverless microservices with Lambda and API Gateway",
      "Secure authentication with Amazon Cognito and JWT tokens",
      "Advanced caching and synchronization for offline functionality",
      "Push notifications with Firebase Cloud Messaging",
      "CI/CD pipeline with automated testing and deployment"
    ],
    architecture: {
      frontend: ["Flutter", "React", "TypeScript", "React Native"],
      backend: ["Node.js", "AWS Lambda", "Express", "Serverless Framework"],
      database: ["PostgreSQL", "DynamoDB", "SQLite", "Sembast"],
      cloud: ["AWS", "Lambda", "API Gateway", "Cognito", "S3", "CloudFront"],
      devops: ["AWS CodePipeline", "Docker", "Serverless", "Jest", "Detox"]
    }
  },
  {
    id: "apos-infrastructure",
    title: "APOS Cloud Infrastructure Platform",
    company: "Blum Tech Group",
    duration: "2023 - Present",
    description: "Enterprise-grade cloud infrastructure platform managing 15+ applications with Terraform. Designed and implemented production and staging environments with advanced monitoring, security, and scalability features.",
    challenge: "Managing complex multi-environment infrastructure for multiple applications while ensuring security, scalability, and cost optimization. Manual infrastructure management was becoming unsustainable.",
    solution: "Implemented Infrastructure as Code using Terraform with modular design for reusable components. Created automated CI/CD pipelines with comprehensive monitoring and security features.",
    outcome: "Achieved 99.9% uptime across all environments, 40% reduction in infrastructure costs, and 70% faster deployment times.",
    impact: [
      "Managing 15+ production applications",
      "99.9% uptime across all environments",
      "40% reduction in infrastructure costs",
      "70% faster deployment times",
      "Zero-downtime deployments implemented"
    ],
    technologies: ["Terraform", "AWS", "ECS", "RDS", "CloudWatch", "ALB", "Route53", "S3", "IAM"],
    role: "DevOps Engineer & Infrastructure Architect",
    teamSize: 6,
    industry: "Enterprise",
    type: "infrastructure",
    featured: true,
    achievements: [
      "Designed modular Terraform infrastructure for multi-environment deployment",
      "Implemented blue-green deployment strategy for zero-downtime updates",
      "Created comprehensive monitoring and alerting system",
      "Established security best practices with IAM and VPC configurations",
      "Automated backup and disaster recovery procedures"
    ],
    technicalHighlights: [
      "Modular Terraform design with reusable components for scalability",
      "AWS ECS Fargate for containerized application deployment",
      "RDS PostgreSQL with multi-AZ deployment and automated backups",
      "Application Load Balancer with SSL termination and health checks",
      "VPC with public/private subnets and NAT Gateway configuration",
      "Comprehensive CloudWatch monitoring and custom metrics",
      "Automated scaling policies based on application metrics",
      "Security groups and IAM roles following least privilege principle"
    ],
    architecture: {
      cloud: ["AWS", "ECS Fargate", "RDS PostgreSQL", "Application Load Balancer", "Route53"],
      devops: ["Terraform", "CloudWatch", "IAM", "VPC", "Security Groups", "Auto Scaling"],
      database: ["RDS PostgreSQL", "Multi-AZ", "Automated Backups"],
    }
  },
  {
    id: "cardmedic-cms",
    title: "CardMedic Translation CMS",
    company: "Blum Tech Group", 
    duration: "2022 - 2023",
    description: "Comprehensive content management system for healthcare translations supporting 49 languages. Built with React and modern microservices architecture to manage medical content, translations, and user workflows.",
    challenge: "Healthcare content needed to be accurately translated and managed across 49 languages while maintaining medical accuracy and compliance. Manual translation management was inefficient and error-prone.",
    solution: "Developed a sophisticated CMS with automated translation workflows, content versioning, and approval processes. Integrated with translation services and built custom medical terminology databases.",
    outcome: "Reduced translation time by 60%, improved accuracy by 85%, and streamlined content management for global healthcare communication.",
    impact: [
      "Managing translations for 49 languages",
      "60% reduction in translation time",
      "85% improvement in translation accuracy",
      "Streamlined workflow for medical content",
      "Real-time collaboration features for translators"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Material-UI", "Express"],
    role: "Full-Stack Developer",
    teamSize: 8,
    industry: "Healthcare",
    type: "web",
    featured: false,
    achievements: [
      "Built intuitive React-based content management interface",
      "Implemented automated translation workflow with approval chains",
      "Created medical terminology database with context-aware suggestions",
      "Developed real-time collaboration features for translation teams",
      "Integrated with multiple translation service providers"
    ],
    technicalHighlights: [
      "React with Material-UI for responsive and accessible interface",
      "Real-time collaboration using WebSockets and operational transforms",
      "Advanced search and filtering with Elasticsearch integration",
      "Automated workflow engine with configurable approval processes",
      "Version control system for content with diff visualization",
      "REST API with comprehensive documentation and testing",
      "Role-based access control with granular permissions"
    ],
    architecture: {
      frontend: ["React", "Material-UI", "Redux", "WebSockets"],
      backend: ["Node.js", "Express", "PostgreSQL", "Elasticsearch"],
      cloud: ["AWS", "S3", "CloudFront", "Docker"],
      devops: ["Docker", "AWS ECS", "CI/CD", "Jest", "Cypress"]
    }
  },
  {
    id: "cosnova-mono",
    title: "Cosnova Beauty Platform",
    company: "WUNDER",
    duration: "2024",
    description: "Large-scale beauty e-commerce platform built with modern monorepo architecture. Comprehensive solution including product catalog, recommendation engine, and advanced analytics dashboard.",
    challenge: "Building a scalable beauty e-commerce platform with complex product relationships, advanced search capabilities, and real-time inventory management across multiple brands and regions.",
    solution: "Implemented monorepo architecture with shared components, microservices for different business domains, and advanced CI/CD pipeline with automated testing and deployment strategies.",
    outcome: "Successfully launched platform handling 100K+ products with 40% improvement in search accuracy and 25% increase in conversion rates.",
    impact: [
      "Managing 100,000+ beauty products across multiple brands",
      "40% improvement in search accuracy with AI-powered recommendations",
      "25% increase in conversion rates",
      "Real-time inventory management across regions",
      "Advanced analytics dashboard for business insights"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Elasticsearch", "Docker", "Kubernetes"],
    role: "Senior Frontend Developer",
    teamSize: 15,
    industry: "E-commerce",
    type: "fullstack",
    featured: true,
    achievements: [
      "Architected monorepo structure with shared component library",
      "Implemented advanced product search with filters and faceting",
      "Built real-time inventory management system",
      "Created comprehensive analytics dashboard with data visualization",
      "Developed mobile-first responsive design with PWA capabilities"
    ],
    technicalHighlights: [
      "Monorepo architecture with Lerna for efficient code sharing",
      "Advanced search functionality with Elasticsearch and faceted filtering",
      "Real-time updates using WebSockets for inventory and pricing",
      "Progressive Web App (PWA) with offline capabilities",
      "Comprehensive testing strategy with Jest, Cypress, and Storybook",
      "GraphQL API with optimized query batching and caching",
      "Advanced image optimization and lazy loading for performance"
    ],
    architecture: {
      frontend: ["React", "TypeScript", "Next.js", "Styled Components", "PWA"],
      backend: ["Node.js", "GraphQL", "Express", "Elasticsearch"],
      database: ["PostgreSQL", "Redis", "Elasticsearch"],
      cloud: ["Docker", "Kubernetes", "AWS", "CloudFront"],
      devops: ["Lerna", "Docker", "Kubernetes", "Jest", "Cypress", "Storybook"]
    }
  },
  {
    id: "skincam-frontend",
    title: "SkinCam AI Diagnostic Platform",
    company: "WUNDER", 
    duration: "2023 - 2024",
    description: "AI-powered skin diagnostic platform using computer vision for dermatological analysis. Real-time image processing with advanced machine learning models for skin condition detection and recommendations.",
    challenge: "Creating an accurate and user-friendly platform for skin analysis using AI while ensuring medical compliance and data privacy. Real-time image processing needed to be fast and accurate.",
    solution: "Built sophisticated frontend with advanced image capture, processing, and visualization capabilities. Integrated with machine learning APIs for real-time skin analysis and recommendation engine.",
    outcome: "Achieved 92% diagnostic accuracy, processed 50K+ analyses, and received positive feedback from dermatology professionals.",
    impact: [
      "92% diagnostic accuracy achieved",
      "50,000+ skin analyses processed",
      "Real-time results in under 3 seconds",
      "Positive feedback from dermatology professionals",
      "GDPR compliant data handling"
    ],
    technologies: ["React", "TypeScript", "WebGL", "TensorFlow.js", "WebRTC", "Canvas API", "AWS"],
    role: "Senior Frontend Developer",
    teamSize: 10,
    industry: "Healthcare",
    type: "ai",
    featured: true,
    achievements: [
      "Implemented real-time image capture with WebRTC and Canvas API",
      "Built advanced image processing pipeline with WebGL shaders",
      "Created intuitive UI for medical professionals and consumers",
      "Integrated TensorFlow.js for client-side AI inference",
      "Developed comprehensive data visualization for analysis results"
    ],
    technicalHighlights: [
      "Real-time camera integration with WebRTC for high-quality image capture",
      "Advanced image processing using WebGL shaders and Canvas API",
      "Client-side AI inference with TensorFlow.js for faster results",
      "Progressive image enhancement and noise reduction algorithms",
      "Responsive design optimized for mobile and tablet devices",
      "Secure image handling with client-side encryption",
      "Performance optimization for real-time processing"
    ],
    architecture: {
      frontend: ["React", "TypeScript", "WebGL", "TensorFlow.js", "WebRTC"],
      backend: ["Python", "FastAPI", "TensorFlow", "OpenCV"],
      cloud: ["AWS", "S3", "Lambda", "API Gateway"],
      devops: ["Docker", "GitHub Actions", "Jest", "Cypress"]
    }
  },
  {
    id: "target-group-frontend",
    title: "Target Group Analytics Platform",
    company: "WUNDER",
    duration: "2023",
    description: "Advanced analytics platform for target audience analysis and market research. Real-time data visualization with interactive dashboards and comprehensive reporting capabilities.",
    challenge: "Marketing teams needed sophisticated tools to analyze target audiences with real-time data processing and intuitive visualization. Complex data relationships needed to be presented clearly.",
    solution: "Developed comprehensive analytics platform with real-time data processing, interactive charts, and advanced filtering capabilities. Implemented efficient data streaming and caching strategies.",
    outcome: "Improved marketing campaign effectiveness by 35%, reduced analysis time by 70%, and increased user engagement with data insights.",
    impact: [
      "35% improvement in marketing campaign effectiveness",
      "70% reduction in data analysis time",
      "Real-time processing of millions of data points",
      "Intuitive dashboards for non-technical users",
      "Comprehensive export and reporting capabilities"
    ],
    technologies: ["React", "TypeScript", "D3.js", "Chart.js", "WebSockets", "Redux", "Material-UI"],
    role: "Frontend Developer",
    teamSize: 8,
    industry: "Marketing",
    type: "web",
    featured: false,
    achievements: [
      "Created interactive data visualization with D3.js and Chart.js",
      "Implemented real-time data streaming with WebSockets",
      "Built advanced filtering and segmentation tools",
      "Developed comprehensive dashboard customization features",
      "Created automated report generation with PDF export"
    ],
    technicalHighlights: [
      "Advanced data visualization with D3.js custom charts",
      "Real-time data updates using WebSockets and Redux",
      "Efficient data processing with worker threads for large datasets",
      "Interactive filtering with complex query building interface",
      "Responsive design with mobile-optimized chart rendering",
      "Performance optimization with virtual scrolling and lazy loading",
      "Comprehensive accessibility features for data visualization"
    ],
    architecture: {
      frontend: ["React", "TypeScript", "D3.js", "Chart.js", "Redux", "Material-UI"],
      backend: ["Node.js", "Express", "WebSockets", "Redis"],
      database: ["PostgreSQL", "InfluxDB", "Redis"],
      devops: ["Docker", "GitHub Actions", "Jest", "Testing Library"]
    }
  },
  {
    id: "strategy-minds",
    title: "Strategy Minds Business Intelligence Platform",
    company: "WUNDER",
    duration: "2022 - 2023", 
    description: "Comprehensive business intelligence platform for strategic planning and decision making. Advanced analytics, forecasting, and collaborative planning tools for enterprise clients.",
    challenge: "Enterprise clients needed sophisticated tools for strategic planning with real-time collaboration, advanced forecasting, and comprehensive business intelligence. Complex data from multiple sources needed integration.",
    solution: "Built comprehensive BI platform with advanced analytics, real-time collaboration features, and sophisticated forecasting algorithms. Integrated multiple data sources with ETL pipelines.",
    outcome: "Reduced strategic planning time by 50%, improved forecast accuracy by 40%, and enabled real-time collaboration for distributed teams.",
    impact: [
      "50% reduction in strategic planning time",
      "40% improvement in forecast accuracy", 
      "Real-time collaboration for distributed teams",
      "Integration with 20+ enterprise data sources",
      "Automated report generation and distribution"
    ],
    technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    role: "Full-Stack Developer",
    teamSize: 12,
    industry: "Enterprise",
    type: "fullstack",
    featured: false,
    achievements: [
      "Developed advanced forecasting algorithms with machine learning",
      "Built real-time collaborative planning interface",
      "Created comprehensive data integration and ETL pipelines",
      "Implemented role-based access control with audit logging",
      "Designed scalable microservices architecture"
    ],
    technicalHighlights: [
      "Advanced React application with TypeScript for type safety",
      "Real-time collaboration using WebSockets and operational transforms",
      "Machine learning integration for predictive analytics",
      "Comprehensive data visualization with custom chart components",
      "ETL pipelines for integrating diverse enterprise data sources",
      "Microservices architecture with Docker and Kubernetes",
      "Advanced caching strategies with Redis for performance"
    ],
    architecture: {
      frontend: ["React", "TypeScript", "Redux Toolkit", "Material-UI"],
      backend: ["Python", "FastAPI", "Node.js", "Express", "WebSockets"],
      database: ["PostgreSQL", "Redis", "InfluxDB"],
      cloud: ["Docker", "Kubernetes", "AWS", "S3"],
      devops: ["Docker", "Kubernetes", "GitHub Actions", "Pytest", "Jest"]
    }
  },
  {
    id: "playtime-festival-quiz",
    title: "Playtime Festival Interactive Quiz Platform", 
    company: "WUNDER",
    duration: "2023",
    description: "Real-time interactive quiz platform for music festivals with live audience participation, real-time scoring, and social media integration. Handled thousands of concurrent users during live events.",
    challenge: "Creating engaging real-time quiz experience for large festival audiences with reliable performance under high load. Needed seamless integration with social media and live event streaming.",
    solution: "Built scalable real-time platform with WebSockets, efficient load balancing, and optimized for mobile devices. Implemented advanced caching and CDN strategies for global performance.",
    outcome: "Successfully handled 10K+ concurrent users, achieved 99.8% uptime during live events, and generated 50K+ social media interactions.",
    impact: [
      "Handled 10,000+ concurrent users during live events",
      "99.8% uptime achieved during peak usage",
      "50,000+ social media interactions generated",
      "Real-time engagement with festival audiences",
      "Seamless mobile experience for all attendees"
    ],
    technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "AWS", "CloudFront"],
    role: "Full-Stack Developer",
    teamSize: 6,
    industry: "Entertainment",
    type: "web",
    featured: false,
    achievements: [
      "Built real-time quiz engine with Socket.io and Redis",
      "Implemented efficient load balancing for high concurrency",
      "Created engaging mobile-first user interface",
      "Integrated social media sharing and live streaming",
      "Developed comprehensive admin dashboard for event management"
    ],
    technicalHighlights: [
      "Real-time communication using Socket.io with Redis adapter",
      "Efficient state management with Redux for quiz progression",
      "Mobile-optimized interface with touch-friendly controls",
      "Advanced caching strategies with Redis and CDN",
      "Load balancing with multiple server instances",
      "Social media API integration for viral sharing",
      "Real-time leaderboards with efficient ranking algorithms"
    ],
    architecture: {
      frontend: ["React", "Redux", "Socket.io Client", "Material-UI"],
      backend: ["Node.js", "Express", "Socket.io", "Redis"],
      database: ["MongoDB", "Redis"],
      cloud: ["AWS", "CloudFront", "Load Balancer"],
      devops: ["Docker", "AWS ECS", "GitHub Actions", "Jest"]
    }
  }
]

export const getFeaturedProjects = () => projects.filter(project => project.featured)

export const getProjectsByType = (type: ProjectData["type"]) => projects.filter(project => project.type === type)

export const getProjectsByIndustry = (industry: string) => projects.filter(project => project.industry.toLowerCase() === industry.toLowerCase())

export const getProjectById = (id: string) => projects.find(project => project.id === id) 