import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MermaidDiagram } from "@/components/mermaid-diagram"

const systemArchitecture = `
graph TB
    subgraph "Client Layer"
        UI[React Frontend<br/>TypeScript]
        Mobile[Mobile App<br/>React Native]
    end

    subgraph "API Gateway"
        Gateway[ASP.NET Core API<br/>MediatR + CQRS]
        Auth[Azure AD B2C<br/>JWT Authentication]
    end

    subgraph "Core Services"
        License[Licensing Service<br/>14 Features FT01-FT14]
        ImageProc[Image Processing Service<br/>DICOM Integration]
        AI[AI Analysis Service<br/>AWS SageMaker]
        Notification[SignalR Hub<br/>Real-time Updates]
    end

    subgraph "Background Processing"
        Hangfire[Hangfire Server<br/>Parallel Task Processing]
        JobStore[PostgreSQL<br/>Job Storage]
        Queue[Redis Queue<br/>Task Distribution]
    end

    subgraph "Data Layer"
        MainDB[(PostgreSQL<br/>Main Database)]
        FileStore[Azure Blob Storage<br/>DICOM Files]
        Cache[Redis Cache<br/>Session + Data]
    end

    subgraph "AI/ML Infrastructure"
        SageMaker[AWS SageMaker<br/>Model Inference]
        ModelStore[S3 Model Storage<br/>Versioned Models]
        Pipeline[ML Pipeline<br/>Pre/Post Processing]
    end

    UI --> Gateway
    Mobile --> Gateway
    Gateway --> Auth
    Gateway --> License
    Gateway --> ImageProc
    Gateway --> AI
    Gateway --> Notification

    ImageProc --> Hangfire
    AI --> SageMaker
    Hangfire --> JobStore
    Hangfire --> Queue
    Hangfire --> FileStore

    License --> MainDB
    ImageProc --> MainDB
    Gateway --> Cache
    AI --> Pipeline
    SageMaker --> ModelStore

    style UI fill:#e1f5fe
    style Gateway fill:#f3e5f5
    style License fill:#fff3e0
    style Hangfire fill:#e8f5e8
    style SageMaker fill:#fff8e1
`

const dataFlow = `
sequenceDiagram
    participant U as User Interface
    participant API as API Gateway
    participant L as License Service
    participant H as Hangfire
    participant AI as SageMaker
    participant DB as PostgreSQL
    participant S as SignalR Hub

    U->>API: Upload DICOM Image
    API->>L: Validate License (FT01-FT14)
    L-->>API: License Valid ✓
    API->>H: Queue Image Processing
    H-->>API: Job ID
    API-->>U: Upload Accepted

    H->>DB: Store Job Status
    H->>AI: Send Image for Analysis
    AI-->>H: Analysis Complete
    H->>DB: Update Results
    H->>S: Notify Completion
    S-->>U: Real-time Update
    U->>API: Fetch Results
    API->>DB: Query Results
    DB-->>API: Return Data
    API-->>U: Display Results
`

const licensingArchitecture = `
graph LR
    subgraph "License Features"
        FT01[FT01: Instant Grading]
        FT02[FT02: Bulk Uploading]
        FT03[FT03: AI Threshold Values]
        FT04[FT04: Multi-user Support]
        FT05[FT05: Advanced Analytics]
        FT06[FT06: DICOM Integration]
        FT07[FT07: Cloud Storage]
        FT08[FT08: API Access]
        FT09[FT09: Batch Processing]
        FT10[FT10: Real-time Monitoring]
        FT11[FT11: Custom Workflows]
        FT12[FT12: Integration Hooks]
        FT13[FT13: Advanced Reporting]
        FT14[FT14: Enterprise SSO]
    end

    subgraph "License Validation"
        Validator[License Validator]
        Cache[Feature Cache]
        DB[(License Database)]
    end

    FT01 --> Validator
    FT02 --> Validator
    FT03 --> Validator
    FT04 --> Validator
    FT05 --> Validator
    FT06 --> Validator
    FT07 --> Validator
    FT08 --> Validator
    FT09 --> Validator
    FT10 --> Validator
    FT11 --> Validator
    FT12 --> Validator
    FT13 --> Validator
    FT14 --> Validator

    Validator --> Cache
    Validator --> DB

    style FT01 fill:#e3f2fd
    style FT02 fill:#e8f5e8
    style FT03 fill:#fff3e0
    style Validator fill:#f3e5f5
`

export default function AISightArchitecturePage() {
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
                AI-Sight Suite
                <span className="block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Medical Imaging AI Platform
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Enterprise-grade medical imaging platform with 14-feature licensing system, 
                Hangfire background processing, and AWS SageMaker integration for diabetic retinopathy screening.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Healthcare AI
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                EU MDR Compliant
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
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Images Processed Daily</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">2,400%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Throughput Improvement</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">System Uptime</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">14</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Configurable Features</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="architecture" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="architecture">System Architecture</TabsTrigger>
            <TabsTrigger value="dataflow">Data Flow</TabsTrigger>
            <TabsTrigger value="licensing">Licensing System</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture Overview</CardTitle>
                <CardDescription>
                  Clean architecture implementation with CQRS pattern, background processing, and AI integration
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
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">C# / .NET Core</Badge>
                      <Badge variant="outline">MediatR</Badge>
                      <Badge variant="outline">Entity Framework</Badge>
                      <Badge variant="outline">Hangfire</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">SignalR</Badge>
                      <Badge variant="outline">Redux Toolkit</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cloud & AI</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AWS SageMaker</Badge>
                      <Badge variant="outline">Azure AD B2C</Badge>
                      <Badge variant="outline">Azure Blob Storage</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Real-time image processing with parallel execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">14-feature enterprise licensing system (FT01-FT14)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">DICOM medical imaging format support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">EU MDR compliance and HIPAA security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm">Background job processing with Hangfire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">AI-powered diabetic retinopathy detection</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dataflow" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Flow & Processing Pipeline</CardTitle>
                <CardDescription>
                  Complete request lifecycle from image upload to AI analysis results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MermaidDiagram chart={dataFlow} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimizations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Parallel Processing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Task.WhenAll enables simultaneous processing of multiple images, 
                      achieving 2,400% throughput improvement over sequential processing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Background Jobs</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Hangfire manages long-running AI analysis tasks with PostgreSQL persistence 
                      and automatic retry mechanisms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Real-time Updates</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      SignalR provides instant notifications when AI analysis completes, 
                      eliminating need for polling.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Authentication</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Azure AD B2C provides enterprise SSO with JWT token validation 
                      and role-based access control.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Data Protection</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      DICOM files encrypted at rest in Azure Blob Storage with 
                      HIPAA-compliant access logging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">EU MDR Compliance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Full audit trails, data lineage tracking, and regulatory 
                      reporting for medical device certification.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="licensing" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>14-Feature Licensing Architecture</CardTitle>
                <CardDescription>
                  Dynamic feature gating system with real-time validation and enterprise controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MermaidDiagram chart={licensingArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>License Features (FT01-FT07)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <span className="font-mono text-sm">FT01</span>
                    <span className="text-sm">Instant Grading</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                    <span className="font-mono text-sm">FT02</span>
                    <span className="text-sm">Bulk Uploading</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                    <span className="font-mono text-sm">FT03</span>
                    <span className="text-sm">AI Threshold Values</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                    <span className="font-mono text-sm">FT04</span>
                    <span className="text-sm">Multi-user Support</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-teal-50 dark:bg-teal-900/20 rounded">
                    <span className="font-mono text-sm">FT05</span>
                    <span className="text-sm">Advanced Analytics</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-pink-50 dark:bg-pink-900/20 rounded">
                    <span className="font-mono text-sm">FT06</span>
                    <span className="text-sm">DICOM Integration</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-cyan-50 dark:bg-cyan-900/20 rounded">
                    <span className="font-mono text-sm">FT07</span>
                    <span className="text-sm">Cloud Storage</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>License Features (FT08-FT14)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
                    <span className="font-mono text-sm">FT08</span>
                    <span className="text-sm">API Access</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                    <span className="font-mono text-sm">FT09</span>
                    <span className="text-sm">Batch Processing</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded">
                    <span className="font-mono text-sm">FT10</span>
                    <span className="text-sm">Real-time Monitoring</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                    <span className="font-mono text-sm">FT11</span>
                    <span className="text-sm">Custom Workflows</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                    <span className="font-mono text-sm">FT12</span>
                    <span className="text-sm">Integration Hooks</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-violet-50 dark:bg-violet-900/20 rounded">
                    <span className="font-mono text-sm">FT13</span>
                    <span className="text-sm">Advanced Reporting</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-rose-50 dark:bg-rose-900/20 rounded">
                    <span className="font-mono text-sm">FT14</span>
                    <span className="text-sm">Enterprise SSO</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Code Examples</CardTitle>
                  <CardDescription>Real implementation patterns from the codebase</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Parallel Image Processing</h4>
                    <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
{`var tasks = images.Select(async image => {
    var result = await ProcessImageAsync(image);
    return result;
}).ToArray();

var results = await Task.WhenAll(tasks);`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">License Feature Validation</h4>
                    <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
{`public async Task<bool> HasFeatureAsync(
    string licenseKey, Features feature)
{
    var license = await GetLicenseAsync(licenseKey);
    return license.EnabledFeatures
        .Contains(feature.ToString());
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment & Scaling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Azure Container Instances</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Auto-scaling containers based on CPU and memory usage, 
                      with 99.9% SLA and automatic failover.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Database Scaling</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      PostgreSQL with read replicas for analytics queries 
                      and connection pooling for high concurrency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Monitoring</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Application Insights for performance tracking, 
                      custom metrics for business KPIs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10ms</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Average API Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">45s</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">AI Analysis Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">System Availability</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">100+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Concurrent Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 