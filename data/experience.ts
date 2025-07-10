export interface WorkExperience {
  id: string
  company: string
  position: string
  location: string
  duration: string
  startDate: string
  endDate: string | "Present"
  type: "full-time" | "contract" | "consulting" | "freelance"
  industry: string
  description: string
  achievements: string[]
  technologies: string[]
  teamSize?: number
  projectsLed?: number
  keyMetrics?: {
    metric: string
    value: string
    improvement?: string
  }[]
  responsibilities: string[]
  companyWebsite?: string
  companyLogo?: string
}

export const workExperience: WorkExperience[] = [
  {
    id: "blum-tech-senior",
    company: "Blum Tech Group",
    position: "Senior Full-Stack Developer & Technical Lead",
    location: "Remote",
    duration: "2022 - Present",
    startDate: "2022-01",
    endDate: "Present",
    type: "full-time",
    industry: "Healthcare Technology",
    description: "Leading development of enterprise-grade healthcare applications serving 100,000+ users. Architecting scalable AI-powered medical platforms with clean architecture principles and comprehensive DevOps practices.",
    achievements: [
      "Led technical architecture for AI-Sight medical platform processing 10,000+ images daily",
      "Achieved 99.9% uptime across 15+ production applications using Infrastructure as Code",
      "Reduced deployment time by 70% through automated CI/CD pipeline implementation",
      "Mentored team of 8 developers, improving code quality by 85% through best practices",
      "Designed microservices architecture serving 100K+ patients across multiple clinics",
      "Implemented EU medical device compliance (MDR) with comprehensive security certification"
    ],
    technologies: [
      "C#/.NET Core", "React", "TypeScript", "AWS", "Azure", "PostgreSQL", "Docker", "Terraform",
      "Flutter", "Node.js", "AWS SageMaker", "Azure AD B2C", "Microservices", "Clean Architecture"
    ],
    teamSize: 12,
    projectsLed: 6,
    keyMetrics: [
      {
        metric: "System Uptime",
        value: "99.9%",
        improvement: "+5.7% from previous"
      },
      {
        metric: "Applications Deployed",
        value: "15+",
        improvement: "Managing full lifecycle"
      },
      {
        metric: "Users Served",
        value: "100,000+",
        improvement: "Across multiple platforms"
      },
      {
        metric: "Code Quality",
        value: "95%+",
        improvement: "SonarQube metrics"
      }
    ],
    responsibilities: [
      "Technical leadership and architecture design for healthcare applications",
      "Full-stack development using .NET Core, React, and modern JavaScript frameworks",
      "Infrastructure management with Terraform and cloud platforms (AWS/Azure)",
      "Team mentorship and code review processes ensuring high-quality deliverables",
      "Client communication and technical requirements gathering",
      "DevOps implementation including CI/CD pipelines and automated testing",
      "Security implementation and compliance with healthcare regulations",
      "Performance optimization achieving 60-80% load time improvements"
    ],
    companyWebsite: "https://blumtechgroup.com"
  },
  {
    id: "wunder-senior",
    company: "WUNDER", 
    position: "Senior Full-Stack Developer",
    location: "Remote",
    duration: "2024",
    startDate: "2024-01",
    endDate: "2024-12",
    type: "contract",
    industry: "AI & Beauty Tech",
    description: "Contracted to develop cutting-edge AI-powered beauty and analytics platforms. Built scalable monorepo architectures and advanced recommendation systems for major beauty brands.",
    achievements: [
      "Developed SkinCam AI diagnostic platform with real-time image analysis",
      "Built Cosnova beauty e-commerce platform managing 100K+ products",
      "Implemented advanced recommendation engine improving conversion by 25%",
      "Created Target Group analytics platform processing millions of data points",
      "Architected monorepo structure supporting multiple beauty brands",
      "Delivered Strategy Minds consulting platform with advanced analytics dashboard"
    ],
    technologies: [
      "React", "Next.js", "TypeScript", "Python", "TensorFlow", "AWS", "Docker", 
      "Microservices", "GraphQL", "PostgreSQL", "Redis", "Elasticsearch"
    ],
    teamSize: 8,
    projectsLed: 4,
    keyMetrics: [
      {
        metric: "Products Managed",
        value: "100,000+",
        improvement: "Beauty e-commerce platform"
      },
      {
        metric: "Conversion Rate",
        value: "+25%",
        improvement: "Through AI recommendations"
      },
      {
        metric: "AI Accuracy",
        value: "94%+",
        improvement: "Skin analysis precision"
      }
    ],
    responsibilities: [
      "AI/ML integration for beauty and diagnostic applications",
      "Full-stack development with React, Next.js and modern frameworks",
      "Microservices architecture design and implementation",
      "Performance optimization for high-traffic beauty platforms",
      "Data analytics and recommendation system development",
      "Cloud infrastructure setup and scaling strategies"
    ],
    companyWebsite: "https://wunder.ai"
  },
  {
    id: "freelance-consulting",
    company: "Independent Consulting",
    position: "Full-Stack Developer & Technical Consultant",
    location: "Remote",
    duration: "2020 - 2022", 
    startDate: "2020-03",
    endDate: "2022-01",
    type: "freelance",
    industry: "Various",
    description: "Provided technical consulting and full-stack development services to startups and mid-sized companies. Specialized in healthcare technology, FinTech solutions, and e-commerce platforms.",
    achievements: [
      "Delivered 12+ successful projects across healthcare, FinTech, and e-commerce",
      "Maintained 95% client satisfaction rate with repeat business",
      "Built MVP platforms that secured $2M+ in funding for clients",
      "Reduced client infrastructure costs by 40% through cloud optimization",
      "Established development best practices for 5+ startup engineering teams",
      "Created scalable architectures supporting 50K+ concurrent users"
    ],
    technologies: [
      "React", "Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "AWS", "Azure",
      "Docker", "Kubernetes", "MongoDB", "Redis", "REST APIs", "GraphQL"
    ],
    projectsLed: 12,
    keyMetrics: [
      {
        metric: "Projects Delivered",
        value: "12+",
        improvement: "100% on-time delivery"
      },
      {
        metric: "Client Satisfaction",
        value: "95%+",
        improvement: "Repeat business rate"
      },
      {
        metric: "Cost Reduction",
        value: "40%",
        improvement: "Infrastructure optimization"
      }
    ],
    responsibilities: [
      "Technical architecture consulting and system design",
      "Full-stack web and mobile application development",
      "Cloud infrastructure setup and optimization",
      "Team mentorship and development process establishment",
      "Performance optimization and scalability planning",
      "Security audits and compliance implementation"
    ]
  },
  {
    id: "early-career",
    company: "Various Companies",
    position: "Full-Stack Developer",
    location: "Ukraine/Remote",
    duration: "2018 - 2020",
    startDate: "2018-06",
    endDate: "2020-03",
    type: "full-time",
    industry: "Web Development",
    description: "Started career building web applications and gaining expertise in modern development technologies. Focused on learning full-stack development, working with diverse clients and projects.",
    achievements: [
      "Built 20+ web applications using modern JavaScript frameworks",
      "Gained expertise in React, Node.js, and database technologies",
      "Worked with international clients across different time zones",
      "Developed responsive, mobile-first web applications",
      "Learned DevOps practices and cloud deployment strategies",
      "Established foundation in software engineering best practices"
    ],
    technologies: [
      "JavaScript", "React", "Node.js", "Express", "MySQL", "MongoDB", 
      "HTML5", "CSS3", "Bootstrap", "jQuery", "REST APIs", "Git"
    ],
    responsibilities: [
      "Frontend development with React and modern JavaScript",
      "Backend development with Node.js and Express",
      "Database design and optimization",
      "Responsive web design and mobile optimization",
      "Client communication and requirements gathering",
      "Version control and collaborative development"
    ]
  }
]

export const getExperienceByCompany = (company: string) => 
  workExperience.find(exp => exp.company.toLowerCase().includes(company.toLowerCase()))

export const getTotalYearsExperience = () => {
  const startYear = 2018
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

export const getCurrentPosition = () => 
  workExperience.find(exp => exp.endDate === "Present")

export const getTechnologiesUsed = () => {
  const allTechs = workExperience.flatMap(exp => exp.technologies)
  return [...new Set(allTechs)].sort()
} 