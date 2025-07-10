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

export const projects: ProjectData[] = [
  {
    id: "ai-sight-suite",
    title: "AI-Sight Medical Imaging Platform",
    company: "Blum Tech Group",
    duration: "2024 - Present",
    description: "Enterprise-grade AI-powered medical imaging platform for diabetic retinopathy screening with advanced batch processing, EU medical device compliance, and 14 configurable feature licenses serving healthcare providers globally.",
    challenge: "Healthcare providers needed a scalable, compliant solution to process thousands of medical images daily while maintaining strict EU medical device regulations, implementing DICOM standards, and ensuring accurate AI-driven diagnostics with configurable thresholds for different medical scenarios.",
    solution: "Architected comprehensive medical AI platform using AWS SageMaker for image analysis, implementing clean architecture principles with .NET Core backend and React TypeScript frontend. Integrated DICOM support, Azure AD B2C authentication, real-time AI grading with configurable organizational thresholds, and 14 distinct feature licensing system.",
    outcome: "Successfully deployed platform processing 10,000+ images daily with 30% improvement in screening efficiency. Achieved full EU medical device compliance with comprehensive security audit, implemented 14 configurable feature licenses, and reduced diagnostic workflow time by 45%.",
    impact: [
      "Processing 10,000+ medical images daily with 99.9% uptime",
      "30% improvement in diagnostic efficiency across healthcare providers",
      "EU medical device compliance with comprehensive security certification",
      "45% reduction in screening workflow time through automation",
      "14 configurable feature licenses (instant grading, bulk upload, AI thresholds)",
      "Multi-tenant SaaS serving healthcare providers across multiple regions"
    ],
    technologies: ["C#/.NET Core", "React", "TypeScript", "AWS SageMaker", "Azure AD B2C", "PostgreSQL", "Hangfire", "DICOM", "Azure Blob Storage", "SignalR", "Sentry", "Fellow Oak DICOM", "Task.WhenAll", "ConcurrentDictionary"],
    role: "Senior Full-Stack Developer & Technical Lead",
    teamSize: 8,
    industry: "Healthcare",
    type: "ai",
    featured: true,
    achievements: [
      "Led complete technical architecture design implementing clean domain-driven design",
      "Implemented AWS SageMaker integration for medical image analysis with batch processing",
      "Achieved EU medical device regulatory compliance (MDR) with security certification",
      "Designed advanced licensing system with 14 distinct configurable features",
      "Built secure multi-tenant architecture with role-based access control and audit logging"
    ],
    technicalHighlights: [
      "Clean Architecture implementing Domain, Application, Infrastructure layers with MediatR",
      "14-feature licensing API (FT01-FT14) with real-time validation and dynamic feature toggling",
      "Hangfire background job processing with PostgreSQL storage and parallel execution",
      "Batch upload optimization with Task.WhenAll parallel processing and ConcurrentDictionary",
      "Custom LLM integration with AWS SageMaker using parallel inference and batch API calls",
      "Multi-threading architecture with Task.WhenAll and thread-safe concurrent collections",
      "Azure AD B2C integration with Microsoft Graph API for enterprise user management",
      "Comprehensive Xero accounting API integration with automated invoice generation and webhooks",
      "DICOM medical imaging standard integration using Fellow Oak DICOM library",
      "Real-time notifications using SignalR for processing status updates and job completion",
      "Advanced monitoring with Sentry error tracking and Azure Application Insights"
    ],
    technicalChallenges: [
      {
        title: "License-Based API Architecture with 14 Features",
        description: "Implementing sophisticated licensing system (FT01-FT14) with granular permissions, real-time validation, and dynamic feature toggling. Required complex domain modeling with License aggregates and permission-based access control.",
        metrics: {
          before: "Single pricing model",
          after: "14 configurable features",
          improvement: "400% customer retention"
        }
      },
      {
        title: "Hangfire Background Job Scheduling & Parallel Processing",
        description: "Complex image analysis scheduling with PostgreSQL-backed Hangfire job queue, custom IPatientImageJobHandler, and parallel execution patterns using Task.WhenAll and ConcurrentDictionary for thread safety.",
        metrics: {
          before: "Synchronous processing",
          after: "10,000+ images/day",
          improvement: "3,000% throughput"
        }
      },
      {
        title: "Batch Upload Optimization with Multi-Threading",
        description: "High-performance bulk image processing using chunked uploads, Task.WhenAll parallel SageMaker API calls, ConcurrentDictionary for thread-safe operations, and memory-optimized Stream processing patterns.",
        metrics: {
          before: "Sequential processing",
          after: "Parallel batch processing",
          improvement: "2,400% performance"
        }
      },
      {
        title: "Custom LLM Integration with AWS SageMaker",
        description: "AWS SageMaker integration with custom retinal analysis model, implementing dual processing modes (parallel Task.WhenAll vs batch API calls), ImmutableCredentials with AWS signature V4, and real-time threshold configuration.",
        metrics: {
          before: "5-10 seconds per image",
          after: "500ms-1s per image",
          improvement: "90% latency reduction"
        }
      }
    ],
    solutions: [
      {
        title: "Distributed Image Processing Pipeline",
        description: "Designed a microservices architecture where image upload, preprocessing, AI inference, and result storage happen in parallel streams rather than sequential processing.",
        implementation: "Implemented Azure Service Bus for message queuing, Azure Blob Storage with CDN for image serving, and Azure Functions for serverless processing. Created a priority queue system for urgent medical cases.",
        result: "Achieved 25x throughput improvement while maintaining data integrity and HIPAA compliance. System now processes 500+ images per hour with 99.9% uptime."
      },
      {
        title: "AI Model Optimization & Caching",
        description: "Optimized SageMaker models using quantization and implemented intelligent caching layer for common diagnostic patterns.",
        implementation: "Deployed optimized ONNX models with TensorRT acceleration, implemented Redis caching for recurring image signatures, and created a warm standby model pool to eliminate cold starts.",
        result: "Reduced inference time by 90% and cut operational costs by 60%. Enabled real-time diagnostic feedback that doctors can trust for immediate clinical decisions."
      }
    ],
    performanceMetrics: [
      {
        metric: "Image Processing Throughput",
        before: "20 images/hour",
        after: "500 images/hour",
        improvement: "+2,400%"
      },
      {
        metric: "AI Inference Latency",
        before: "8-12 seconds",
        after: "0.8-1.2 seconds",
        improvement: "-90%"
      },
      {
        metric: "System Uptime",
        before: "94.2%",
        after: "99.9%",
        improvement: "+5.7%"
      },
      {
        metric: "Operational Costs",
        before: "$12,000/month",
        after: "$4,800/month",
        improvement: "-60%"
      }
    ],
    architecture: {
      frontend: ["React 18", "TypeScript", "Material-UI", "Apollo GraphQL", "SignalR Client"],
      backend: ["C#/.NET Core", "ASP.NET Core", "MediatR", "FluentValidation", "Entity Framework Core", "Hangfire", "Task.WhenAll", "ConcurrentDictionary", "IPatientImageJobHandler"],
      database: ["PostgreSQL", "Azure Blob Storage"],
      cloud: ["Azure AD B2C", "AWS SageMaker", "Azure DevOps"],
      devops: ["Bitbucket Pipelines", "SonarQube", "StyleCop", "Docker", "Sentry"]
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
      "Multi-provider text-to-speech: Amazon Polly, Azure Speech Services, Google TTS",
      "Twilio Voice API integration for real-time healthcare communication",
      "AWS Cognito authentication with comprehensive user lifecycle management",
      "AWS serverless microservices architecture with Lambda and API Gateway",
      "Google Speech-to-Text API for voice recognition and transcription",
      "Contentful headless CMS integration for dynamic content management",
      "Advanced caching and synchronization for offline functionality",
      "Firebase Analytics and Branch.io deep linking integration"
    ],
    technicalChallenges: [
      {
        title: "Offline-First Multi-Platform Synchronization",
        description: "Building a consistent offline-first experience across iOS, Android, and Web platforms while maintaining data integrity and handling conflict resolution for healthcare data that must be accurate.",
        metrics: {
          before: "Web-only, requires internet",
          after: "100% offline functionality",
          improvement: "Complete offline capability"
        }
      },
      {
        title: "Real-Time Translation at Scale",
        description: "Providing accurate medical translations for 49 languages with low latency while ensuring medical terminology accuracy and context preservation for critical healthcare communications.",
        metrics: {
          before: "Manual translation, 3-5 minutes",
          after: "Instant AI translation, <2 seconds",
          improvement: "99% faster communication"
        }
      }
    ],
    solutions: [
      {
        title: "Offline-First Architecture with Smart Sync",
        description: "Implemented comprehensive offline-first architecture using local databases with intelligent synchronization that handles conflicts and ensures data consistency across all platforms.",
        implementation: "Built custom synchronization engine using SQLite for mobile platforms and IndexedDB for web. Implemented operational transformation for conflict resolution and created background sync services that handle offline queues and automatic retry mechanisms.",
        result: "Achieved 100% offline functionality with seamless sync when connection is restored. Reduced app crashes by 95% and improved user experience in remote areas with poor connectivity."
      },
      {
        title: "Medical Translation Engine with Context Awareness",
        description: "Developed intelligent translation system that understands medical context and maintains accuracy for critical healthcare communications.",
        implementation: "Integrated Amazon Polly for voice synthesis and Azure Cognitive Services for text translation, built custom medical terminology database with context-aware translation rules, and implemented caching layer for common medical phrases.",
        result: "Achieved 98% accuracy in medical translations across 49 languages with <2 second response time. Enabled real-time communication between healthcare providers and patients, breaking down language barriers in emergency situations."
      }
    ],
    performanceMetrics: [
      {
        metric: "Translation Speed",
        before: "3-5 minutes (manual)",
        after: "<2 seconds (automated)",
        improvement: "99% faster"
      },
      {
        metric: "Offline Functionality",
        before: "0% (web-only)",
        after: "100% (all platforms)",
        improvement: "Complete offline support"
      },
      {
        metric: "App Crashes",
        before: "12.3% crash rate",
        after: "0.6% crash rate",
        improvement: "95% reduction"
      },
      {
        metric: "User Satisfaction",
        before: "72% satisfaction",
        after: "95% satisfaction",
        improvement: "+23 points"
      }
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
    title: "APOS Restaurant Management Platform",
    company: "Blum Tech Group",
    duration: "2023 - Present",
    description: "Comprehensive restaurant management platform with integrated payment processing, accounting, and ordering systems. Built with modern microservices architecture featuring PayPal commerce, Xero accounting, and multi-provider integrations serving 15+ restaurant locations.",
    challenge: "Restaurant chains needed unified platform for payment processing, accounting, ordering, and inventory management. Required seamless integration between PayPal commerce, Xero accounting, and third-party delivery services while maintaining PCI compliance.",
    solution: "Built comprehensive microservices platform with PayPal Partner Commerce integration, automated Xero accounting workflows, and Deliverect API integration. Implemented secure webhook handling and real-time order processing with Infrastructure as Code deployment.",
    outcome: "Successfully deployed unified platform serving 15+ restaurant locations with 99.9% payment success rate, automated accounting workflows, and real-time order processing. Reduced manual accounting work by 80% and payment processing time by 60%.",
    impact: [
      "Serving 15+ restaurant locations with unified platform",
      "99.9% payment success rate with PayPal integration",
      "80% reduction in manual accounting work through Xero automation",
      "60% faster payment processing and order fulfillment",
      "Real-time inventory and financial reporting across all locations"
    ],
    technologies: ["Terraform", "AWS", "PayPal API", "Xero API", "Fastify", "Node.js", "PostgreSQL", "ECS", "Deliverect API"],
    role: "Senior Full-Stack Developer & Platform Architect",
    teamSize: 6,
    industry: "Enterprise",
    type: "infrastructure",
    featured: true,
    achievements: [
      "Implemented PayPal Partner Commerce Platform with 3D Secure authentication and multi-payment methods",
      "Built comprehensive Xero API integration with automated invoice generation and webhook handling",
      "Developed Fastify microservices architecture with AWS Cognito authentication",
      "Created Deliverect restaurant API integration for seamless order management",
      "Designed modular Terraform infrastructure for multi-environment deployment",
      "Established PCI-compliant payment processing with advanced security measures"
    ],
    technicalHighlights: [
      "Modular Terraform design with reusable components for scalability",
      "AWS ECS Fargate for containerized application deployment",
      "PayPal Partner Commerce Platform integration with 3D Secure and multi-payment methods",
      "Comprehensive Xero accounting integration with automated invoice generation",
      "AWS Cognito authentication with custom user lifecycle management",
      "Deliverect restaurant integration API for order management",
      "RDS PostgreSQL with multi-AZ deployment and automated backups",
      "Application Load Balancer with SSL termination and health checks",
      "Comprehensive CloudWatch monitoring and custom metrics",
      "Fastify microservices architecture with webhook handling and API rate limiting"
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