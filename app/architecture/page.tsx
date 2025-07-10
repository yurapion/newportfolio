import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Heart, 
  Utensils, 
  ShoppingBag, 
  Camera,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

const architectures = [
  {
    id: 'ai-sight',
    title: 'AI-Sight Suite',
    subtitle: 'Medical Imaging AI Platform',
    description: 'Enterprise-grade medical imaging platform with 14-feature licensing, Hangfire background processing, and AWS SageMaker integration for diabetic retinopathy screening.',
    icon: Brain,
    category: 'Healthcare AI',
    technologies: ['C#/.NET Core', 'React', 'AWS SageMaker', 'Azure AD B2C', 'PostgreSQL'],
    highlights: [
      '10,000+ images/day processing',
      '2,400% throughput improvement',
      'EU MDR compliance',
      '14 configurable features'
    ],
    metrics: {
      scale: '10K+ daily images',
      performance: '2,400% improvement',
      uptime: '99.9%'
    },
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'cardmedic',
    title: 'CardMedic Platform',
    subtitle: 'Healthcare Communication',
    description: 'Cross-platform healthcare communication serving 100,000+ patients with 49-language support, offline-first architecture, and multi-provider TTS integration.',
    icon: Heart,
    category: 'Healthcare Tech',
    technologies: ['Flutter', 'React Native', 'AWS Lambda', 'Twilio', 'Azure Speech'],
    highlights: [
      '100,000+ patients served',
      '49 languages supported',
      'Offline-first design',
      '95% user satisfaction'
    ],
    metrics: {
      scale: '100K+ users',
      performance: '99% faster translation',
      uptime: '100% offline capable'
    },
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'apos',
    title: 'APOS Platform',
    subtitle: 'Restaurant Management',
    description: 'Comprehensive restaurant management with PayPal Partner Commerce, Xero accounting automation, and multi-location support for 15+ restaurants.',
    icon: Utensils,
    category: 'FinTech',
    technologies: ['Node.js', 'PayPal API', 'Xero API', 'AWS Cognito', 'PostgreSQL'],
    highlights: [
      '15+ restaurant locations',
      '99.9% payment success',
      'Automated accounting',
      '80% manual work reduction'
    ],
    metrics: {
      scale: '15+ locations',
      performance: '99.9% success rate',
      uptime: 'Zero downtime deployment'
    },
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'cosnova',
    title: 'Cosnova Platform',
    subtitle: 'Beauty E-commerce',
    description: 'Multi-brand beauty e-commerce managing 100,000+ products with monorepo architecture, Elasticsearch search, and GraphQL federation.',
    icon: ShoppingBag,
    category: 'E-commerce',
    technologies: ['React', 'TypeScript', 'Elasticsearch', 'Kubernetes', 'GraphQL'],
    highlights: [
      '100,000+ products',
      '40% search improvement',
      'Multi-brand support',
      '25% conversion increase'
    ],
    metrics: {
      scale: '100K+ products',
      performance: '40% search boost',
      uptime: 'Global CDN delivery'
    },
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 'skincam',
    title: 'SkinCam Platform',
    subtitle: 'AI Skin Diagnostics',
    description: 'Client-side AI skin diagnostics achieving 92% accuracy with TensorFlow.js, WebGL acceleration, and real-time image processing.',
    icon: Camera,
    category: 'Client AI',
    technologies: ['TensorFlow.js', 'WebGL', 'React', 'TypeScript', 'Canvas API'],
    highlights: [
      '92% diagnostic accuracy',
      'Sub-3-second analysis',
      'Complete privacy',
      '100% offline capable'
    ],
    metrics: {
      scale: 'Privacy-first',
      performance: '<3s analysis',
      uptime: '100% offline'
    },
    gradient: 'from-cyan-600 to-blue-600'
  }
]

const categoryIcons = {
  'Healthcare AI': Brain,
  'Healthcare Tech': Heart,
  'FinTech': Zap,
  'E-commerce': Globe,
  'Client AI': Shield
}

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-950 border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              System Architecture
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Explore the technical architecture behind enterprise-scale applications. 
              From AI-powered medical platforms to multi-brand e-commerce systems.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>100,000+ Users Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:gap-12">
          {architectures.map((arch, index) => {
            const IconComponent = arch.icon
            const CategoryIcon = categoryIcons[arch.category as keyof typeof categoryIcons]
            
            return (
              <Card key={arch.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                <div className={`absolute inset-0 bg-gradient-to-r ${arch.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${arch.gradient} text-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                            {arch.title}
                          </CardTitle>
                          <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700">
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {arch.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                          {arch.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/architecture/${arch.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200 group"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        View Architecture
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {arch.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {arch.metrics.scale}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Scale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {arch.metrics.performance}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {arch.metrics.uptime}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Reliability</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Key Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {arch.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-white dark:bg-slate-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Architecture Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {arch.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${arch.gradient}`} />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 dark:bg-slate-950 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Individual Architectures
          </h2>
          <p className="text-slate-300 mb-8">
            Dive deep into the technical implementation details, see interactive diagrams, 
            and understand the architectural decisions behind each platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {architectures.map((arch) => (
              <Link
                key={arch.id}
                href={`/architecture/${arch.id}`}
                className={`px-6 py-3 rounded-lg bg-gradient-to-r ${arch.gradient} text-white font-medium hover:scale-105 transition-transform duration-200`}
              >
                {arch.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 