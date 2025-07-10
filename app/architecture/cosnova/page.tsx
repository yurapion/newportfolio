import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/mermaid-diagram"

const systemArchitecture = `
graph TB
    subgraph "Frontend Layer"
        EssenceStore[Essence Store<br/>React + TypeScript]
        CatriceStore[CATRICE Store<br/>React + TypeScript]
        LOVStore[L.O.V Store<br/>React + TypeScript]
        TintedStore[Tinted Store<br/>React + TypeScript]
    end

    subgraph "Monorepo Architecture"
        UIComponents[Shared UI Components<br/>@cosnova/ui-components]
        SharedHooks[Custom Hooks<br/>@cosnova/hooks]
        Utils[Utilities<br/>@cosnova/utils]
        ThemeSystem[Brand Theme System<br/>Dynamic Styling]
    end

    subgraph "Backend Services"
        GraphQLGateway[GraphQL Federation<br/>Apollo Gateway]
        ProductService[Product Service<br/>100,000+ SKUs]
        SearchService[Search Service<br/>Elasticsearch]
        UserService[User Service<br/>Authentication]
    end

    subgraph "Data & Search"
        Elasticsearch[(Elasticsearch<br/>Product Search)]
        PostgreSQL[(PostgreSQL<br/>Transactional Data)]
        Redis[Redis Cache<br/>Session + Search]
        CDN[CloudFlare CDN<br/>Global Assets]
    end

    EssenceStore --> GraphQLGateway
    CatriceStore --> GraphQLGateway
    LOVStore --> GraphQLGateway
    TintedStore --> GraphQLGateway

    EssenceStore --> UIComponents
    CatriceStore --> UIComponents
    LOVStore --> UIComponents
    TintedStore --> UIComponents

    GraphQLGateway --> ProductService
    GraphQLGateway --> SearchService
    GraphQLGateway --> UserService

    SearchService --> Elasticsearch
    ProductService --> PostgreSQL
    UserService --> Redis
    EssenceStore --> CDN

    style EssenceStore fill:#e3f2fd
    style GraphQLGateway fill:#f3e5f5
    style SearchService fill:#e8f5e8
    style Elasticsearch fill:#fff3e0
`

const monorepoStructure = `
graph LR
    subgraph "Cosnova Monorepo"
        Apps[apps/<br/>4 Brand Stores]
        Packages[packages/<br/>Shared Libraries]
        Tools[tools/<br/>Build System]
    end

    subgraph "Brand Applications"
        Essence[essence-store]
        Catrice[catrice-store]
        LOV[lov-store]
        Tinted[tinted-store]
    end

    subgraph "Shared Packages"
        UI[ui-components]
        Hooks[custom-hooks]
        Utils[utilities]
        Theme[theme-system]
    end

    Apps --> Essence
    Apps --> Catrice
    Apps --> LOV
    Apps --> Tinted

    Packages --> UI
    Packages --> Hooks
    Packages --> Utils
    Packages --> Theme

    Essence --> UI
    Catrice --> UI
    LOV --> UI
    Tinted --> UI

    style Apps fill:#e3f2fd
    style Packages fill:#e8f5e8
    style UI fill:#fff3e0
`

export default function CosnovaArchitecturePage() {
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
                Cosnova Platform
                <span className="block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Beauty E-commerce
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Multi-brand beauty e-commerce managing 100,000+ products with monorepo architecture, 
                Elasticsearch search, and GraphQL federation.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
                E-commerce
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                Multi-Brand
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
              <div className="text-3xl font-bold text-pink-600 mb-2">100,000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Products Managed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Search Improvement</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Beauty Brands</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Conversion Increase</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Brand E-commerce Architecture</CardTitle>
              <CardDescription>
                Monorepo architecture with shared components and GraphQL federation for scalable brand management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MermaidDiagram chart={systemArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monorepo Structure</CardTitle>
              <CardDescription>
                Shared package architecture enabling consistent branding while maintaining brand uniqueness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MermaidDiagram chart={monorepoStructure} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <Badge variant="outline">Styled Components</Badge>
                    <Badge variant="outline">Lerna</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GraphQL</Badge>
                    <Badge variant="outline">Apollo Federation</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Search & Data</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Elasticsearch</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Redis</Badge>
                    <Badge variant="outline">CloudFlare</Badge>
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
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">100,000+ beauty products across 4 brands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Advanced search with filters and recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Shared component library for consistency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Dynamic theming per brand identity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">GraphQL federation for microservices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Global CDN for fast content delivery</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 