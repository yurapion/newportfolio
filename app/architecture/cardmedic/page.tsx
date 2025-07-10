import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MermaidDiagram } from "@/components/mermaid-diagram"

const systemArchitecture = `
graph TB
    subgraph "Client Applications"
        Flutter[Flutter Mobile App<br/>iOS + Android + Web]
        ReactNative[React Native<br/>Legacy Migration]
        AdminPortal[React Admin Portal<br/>Content Management]
    end

    subgraph "API Gateway Layer"
        APIGateway[AWS API Gateway<br/>REST + GraphQL]
        Cognito[AWS Cognito<br/>User Pool Management]
    end

    subgraph "Microservices"
        UserService[User Service<br/>Lambda + Node.js]
        TranslationService[Translation Service<br/>Multi-provider TTS]
        ContentService[Content Service<br/>49 Languages]
        NotificationService[Notification Service<br/>Push + SMS]
    end

    subgraph "External Integrations"
        Twilio[Twilio Voice API<br/>Healthcare Calls]
        PollyTTS[Amazon Polly<br/>Text-to-Speech]
        AzureSpeech[Azure Speech<br/>Voice Synthesis]
        GoogleTTS[Google TTS<br/>Natural Voices]
    end

    subgraph "Data Storage"
        DynamoDB[(DynamoDB<br/>User Data)]
        S3[(S3 Storage<br/>Audio Files)]
        ElastiCache[ElastiCache<br/>Translation Cache]
    end

    Flutter --> APIGateway
    ReactNative --> APIGateway
    AdminPortal --> APIGateway
    APIGateway --> Cognito
    APIGateway --> UserService
    APIGateway --> TranslationService
    APIGateway --> ContentService

    TranslationService --> PollyTTS
    TranslationService --> AzureSpeech
    TranslationService --> GoogleTTS
    NotificationService --> Twilio

    UserService --> DynamoDB
    ContentService --> S3
    TranslationService --> ElastiCache

    style Flutter fill:#e3f2fd
    style APIGateway fill:#f3e5f5
    style TranslationService fill:#e8f5e8
    style DynamoDB fill:#fff3e0
`

const offlineArchitecture = `
graph TB
    subgraph "Flutter App"
        UI[User Interface<br/>Provider State Management]
        LocalDB[SQLite Database<br/>Offline Storage]
        SyncEngine[Sync Engine<br/>Conflict Resolution]
        CacheLayer[Cache Layer<br/>Audio + Content]
    end

    subgraph "Sync Process"
        ChangeDetector[Change Detector<br/>Delta Sync]
        ConflictResolver[Conflict Resolver<br/>Last-Writer-Wins]
        BatchUploader[Batch Uploader<br/>Optimized Transfer]
    end

    subgraph "Cloud Storage"
        CloudDB[(Cloud Database<br/>DynamoDB)]
        CloudStorage[(Cloud Storage<br/>S3 Bucket)]
    end

    UI --> LocalDB
    UI --> CacheLayer
    LocalDB --> SyncEngine
    SyncEngine --> ChangeDetector
    ChangeDetector --> ConflictResolver
    ConflictResolver --> BatchUploader
    BatchUploader --> CloudDB
    BatchUploader --> CloudStorage

    style UI fill:#e1f5fe
    style LocalDB fill:#e8f5e8
    style SyncEngine fill:#fff3e0
`

export default function CardMedicArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/architecture"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Architecture Overview
            </Link>
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                CardMedic Platform
                <span className="block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  Healthcare Communication
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Cross-platform healthcare communication serving 100,000+ patients with 49-language support, 
                offline-first architecture, and multi-provider TTS integration.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Healthcare Tech
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Cross-Platform
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100,000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Patients Served</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">49</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Languages Supported</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Faster Translation</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Offline Capable</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="architecture" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="architecture">System Architecture</TabsTrigger>
            <TabsTrigger value="offline">Offline-First Design</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Cross-Platform Healthcare Communication</CardTitle>
                <CardDescription>
                  Microservices architecture with multi-provider TTS and real-time communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MermaidDiagram chart={systemArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mobile</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Flutter</Badge>
                      <Badge variant="outline">React Native</Badge>
                      <Badge variant="outline">SQLite</Badge>
                      <Badge variant="outline">Provider State</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AWS Lambda</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">GraphQL</Badge>
                      <Badge variant="outline">DynamoDB</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Twilio Voice</Badge>
                      <Badge variant="outline">Amazon Polly</Badge>
                      <Badge variant="outline">Azure Speech</Badge>
                      <Badge variant="outline">Google TTS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">49-language medical translation support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Offline-first with intelligent sync</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Multi-provider TTS for quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Real-time healthcare communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm">Cross-platform consistency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">HIPAA-compliant data handling</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="offline" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Offline-First Architecture</CardTitle>
                <CardDescription>
                  Intelligent sync engine with conflict resolution for uninterrupted healthcare communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MermaidDiagram chart={offlineArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sync Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Delta Synchronization</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Only changed data is synchronized, reducing bandwidth usage by 95% 
                      and enabling faster sync in low-connectivity environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Conflict Resolution</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Last-writer-wins strategy with timestamp-based conflict resolution 
                      ensures data consistency across devices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Background Sync</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Automatic background synchronization when connectivity is restored, 
                      with retry mechanisms for failed uploads.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Offline Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Local Storage</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      SQLite database stores patient data, translations, and audio files 
                      for complete offline functionality.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Audio Caching</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Pre-generated audio for common medical phrases in all 49 languages, 
                      ensuring instant playback without internet.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Smart Preloading</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Machine learning predicts likely content needs and preloads 
                      relevant translations and audio files.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">&lt;1s</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Translation Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Bandwidth Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Offline Capability</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">49</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Languages</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Mobile Deployment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Flutter single codebase deployed to iOS App Store and Google Play Store, 
                      with automatic updates and feature flagging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Serverless Backend</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      AWS Lambda functions with auto-scaling, DynamoDB for data persistence, 
                      and CloudFront CDN for global content delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Monitoring</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      CloudWatch for backend monitoring, Firebase Analytics for mobile usage, 
                      and custom metrics for healthcare-specific KPIs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 