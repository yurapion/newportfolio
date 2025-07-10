import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/mermaid-diagram"

const systemArchitecture = `
graph TB
    subgraph "Client Application"
        ReactApp[React PWA<br/>TypeScript + Hooks]
        CameraAPI[Camera API<br/>getUserMedia]
        CanvasAPI[Canvas API<br/>Image Capture]
        ServiceWorker[Service Worker<br/>Model Caching]
    end

    subgraph "AI Processing Pipeline"
        TensorFlowJS[TensorFlow.js<br/>Client-side ML]
        ModelLoader[Model Loader<br/>Integrity Verification]
        ImagePreprocessor[Image Preprocessor<br/>Normalization]
        InferenceEngine[Inference Engine<br/>Parallel Processing]
    end

    subgraph "WebGL Acceleration"
        WebGLBackend[WebGL Backend<br/>GPU Acceleration]
        ShaderOps[Shader Operations<br/>Matrix Calculations]
        TextureMemory[Texture Memory<br/>Optimized Storage]
    end

    subgraph "Model Management"
        ModelCache[IndexedDB Cache<br/>Offline Models]
        VersionControl[Model Versioning<br/>Integrity Checks]
        CDNDelivery[CDN Delivery<br/>Global Distribution]
    end

    ReactApp --> CameraAPI
    CameraAPI --> CanvasAPI
    CanvasAPI --> ImagePreprocessor
    ImagePreprocessor --> TensorFlowJS
    TensorFlowJS --> InferenceEngine
    TensorFlowJS --> WebGLBackend
    WebGLBackend --> ShaderOps
    ModelLoader --> ModelCache
    ModelLoader --> VersionControl
    ServiceWorker --> CDNDelivery

    style ReactApp fill:#e3f2fd
    style TensorFlowJS fill:#e8f5e8
    style WebGLBackend fill:#fff3e0
    style ModelCache fill:#f3e5f5
`

const aiPipeline = `
sequenceDiagram
    participant U as User
    participant C as Camera API
    participant P as Preprocessor
    participant AI as TensorFlow.js
    participant GPU as WebGL
    participant R as Results

    U->>C: Capture Image
    C->>P: Raw Image Data
    P->>P: Normalize & Resize
    P->>AI: Preprocessed Image
    AI->>GPU: Tensor Operations
    GPU->>GPU: Parallel Computation
    GPU->>AI: Inference Results
    AI->>R: Confidence Scores
    R->>U: Skin Analysis
    
    Note over AI,GPU: 92% Accuracy<br/>Sub-3-second Analysis
`

export default function SkinCamArchitecturePage() {
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
                SkinCam Platform
                <span className="block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  AI Skin Diagnostics
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Client-side AI skin diagnostics achieving 92% accuracy with TensorFlow.js, 
                WebGL acceleration, and real-time image processing.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                Client AI
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Privacy-First
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
              <div className="text-3xl font-bold text-cyan-600 mb-2">92%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Diagnostic Accuracy</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;3s</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Analysis Time</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Offline Capable</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Data Uploaded</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Client-Side AI Processing Architecture</CardTitle>
              <CardDescription>
                Complete privacy-first design with client-side machine learning and WebGL acceleration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MermaidDiagram chart={systemArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Processing Pipeline</CardTitle>
              <CardDescription>
                Real-time image processing flow achieving sub-3-second analysis with 92% accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MermaidDiagram chart={aiPipeline} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Complete Privacy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    All image processing happens locally in the browser. No data ever leaves the device, 
                    ensuring complete user privacy and GDPR compliance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Zero Data Upload</Badge>
                    <Badge variant="outline">GDPR Compliant</Badge>
                    <Badge variant="outline">Offline Capable</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">WebGL Acceleration</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    GPU acceleration through WebGL enables real-time processing with optimized 
                    shader operations for matrix calculations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GPU Processing</Badge>
                    <Badge variant="outline">Parallel Computing</Badge>
                    <Badge variant="outline">Memory Optimization</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Canvas API</Badge>
                    <Badge variant="outline">Service Worker</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI & ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">TensorFlow.js</Badge>
                    <Badge variant="outline">WebGL Backend</Badge>
                    <Badge variant="outline">Custom Models</Badge>
                    <Badge variant="outline">Image Processing</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Storage & Caching</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">IndexedDB</Badge>
                    <Badge variant="outline">Model Caching</Badge>
                    <Badge variant="outline">CDN Delivery</Badge>
                    <Badge variant="outline">Version Control</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 