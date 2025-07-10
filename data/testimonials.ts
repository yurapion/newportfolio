export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  relationship: "client" | "colleague" | "manager" | "team-member"
  quote: string
  project?: string
  rating: number
  date: string
  avatar?: string
  linkedinUrl?: string
  companyLogo?: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-healthcare-cto",
    name: "Sarah Mitchell",
    position: "CTO",
    company: "MedCore Solutions",
    relationship: "client",
    quote: "Exceptional technical leadership and delivery. The AI-Sight platform exceeded our expectations, processing 10,000+ medical images daily with 99.9% uptime. The clean architecture and scalability have been game-changing for our healthcare operations.",
    project: "AI-Sight Medical Imaging Platform",
    rating: 5,
    date: "2024-08",
    verified: true
  },
  {
    id: "marcus-blum-ceo",
    name: "Marcus Blum",
    position: "CEO",
    company: "Blum Tech Group",
    relationship: "manager",
    quote: "Outstanding senior developer who consistently delivers enterprise-grade solutions. Led our most complex healthcare projects with exceptional technical expertise and team leadership. His clean architecture approach reduced our technical debt by 60%.",
    rating: 5,
    date: "2024-07",
    verified: true
  },
  {
    id: "anna-wunder-pm",
    name: "Anna Schmidt",
    position: "Product Manager",
    company: "WUNDER",
    relationship: "colleague",
    quote: "Incredible ability to translate complex AI requirements into scalable solutions. The SkinCam platform's 94% accuracy in skin analysis was achieved through his meticulous attention to detail and deep understanding of ML integration.",
    project: "SkinCam AI Diagnostic Platform",
    rating: 5,
    date: "2024-06",
    verified: true
  },
  {
    id: "david-startup-founder",
    name: "David Chen",
    position: "Founder & CEO",
    company: "HealthTech Innovations",
    relationship: "client",
    quote: "Transformed our MVP into a production-ready platform that secured $2M in Series A funding. His expertise in healthcare compliance and scalable architecture was invaluable. 95% client satisfaction across all deliverables.",
    rating: 5,
    date: "2023-11",
    verified: true
  },
  {
    id: "elena-cardmedic-lead",
    name: "Elena Rodriguez",
    position: "Engineering Lead",
    company: "CardMedic",
    relationship: "colleague",
    quote: "Exceptional cross-platform development skills. The Flutter-based healthcare communication platform serves 100K+ patients seamlessly. His offline-first architecture solved critical connectivity issues in remote healthcare settings.",
    project: "CardMedic Healthcare Platform",
    rating: 5,
    date: "2023-09",
    verified: true
  },
  {
    id: "michael-devops-lead",
    name: "Michael Thompson",
    position: "DevOps Team Lead",
    company: "CloudFirst Solutions",
    relationship: "colleague",
    quote: "His Infrastructure as Code expertise is outstanding. Reduced our deployment time by 70% and achieved 99.9% uptime across 15+ applications. The Terraform modules he created are now our company standard.",
    rating: 5,
    date: "2023-05",
    verified: true
  },
  {
    id: "lisa-fintech-cto",
    name: "Lisa Park",
    position: "CTO",
    company: "FinanceFlow",
    relationship: "client",
    quote: "Delivered a complex FinTech platform under tight deadlines with exceptional quality. His attention to security and performance optimization resulted in 60% faster load times and zero security incidents.",
    rating: 5,
    date: "2022-12",
    verified: true
  },
  {
    id: "james-team-senior",
    name: "James Wilson",
    position: "Senior Developer",
    company: "Blum Tech Group",
    relationship: "team-member",
    quote: "Great mentor and technical leader. His code reviews and best practices guidance improved our team's code quality by 85%. Always willing to share knowledge and help solve complex architectural challenges.",
    rating: 5,
    date: "2024-03",
    verified: true
  },
  {
    id: "priya-product-owner",
    name: "Priya Patel",
    position: "Product Owner",
    company: "Beauty Tech Labs",
    relationship: "client",
    quote: "His work on the Cosnova platform managing 100K+ beauty products was remarkable. The recommendation engine improved our conversion rates by 25%. Excellent communication and technical problem-solving skills.",
    project: "Cosnova Beauty Platform",
    rating: 5,
    date: "2024-04",
    verified: true
  },
  {
    id: "robert-consultant",
    name: "Robert Kim",
    position: "Technical Consultant",
    company: "Enterprise Solutions Inc",
    relationship: "colleague",
    quote: "Collaborated on multiple enterprise projects. His full-stack expertise and ability to architect scalable solutions is impressive. Consistently delivers high-quality code and meets all project deadlines.",
    rating: 5,
    date: "2023-01",
    verified: true
  }
]

export const getTestimonialsByRating = (minRating: number) => 
  testimonials.filter(t => t.rating >= minRating)

export const getTestimonialsByRelationship = (relationship: Testimonial["relationship"]) =>
  testimonials.filter(t => t.relationship === relationship)

export const getVerifiedTestimonials = () =>
  testimonials.filter(t => t.verified)

export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0)
  return Math.round((sum / testimonials.length) * 10) / 10
}

export const getFeaturedTestimonials = () => 
  testimonials.filter((_, index) => index < 6) 