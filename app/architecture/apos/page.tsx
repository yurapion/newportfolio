import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/mermaid-diagram"

const systemArchitecture = `
graph TB
    subgraph "Frontend Applications"
        ReactApp[React Web App<br/>Restaurant Dashboard]
        MobileApp[Mobile App<br/>Manager Portal]
        POS[POS Terminal<br/>Zettle Integration]
    end

    subgraph "API Gateway"
        Fastify[Fastify Gateway<br/>Node.js + TypeScript]
        CognitoAuth[AWS Cognito<br/>User Management]
    end

    subgraph "Payment Processing"
        PayPalPPCP[PayPal Partner Commerce<br/>3D Secure + Multi-payment]
        DojoPayments[Dojo Card Terminals<br/>In-person Payments]
        StripeConnect[Stripe Connect<br/>Marketplace Payments]
    end

    subgraph "Business Integrations"
        XeroAPI[Xero Accounting API<br/>Automated Invoicing]
        DeliverectAPI[Deliverect API<br/>Delivery Management]
        InventorySystem[Inventory Management<br/>Real-time Stock]
    end

    subgraph "Data Layer"
        PostgresMain[(PostgreSQL<br/>Transactional Data)]
        RedisCache[Redis Cache<br/>Session + Analytics]
        S3Storage[S3 Storage<br/>Reports + Files]
    end

    ReactApp --> Fastify
    MobileApp --> Fastify
    POS --> Fastify
    Fastify --> CognitoAuth
    Fastify --> PayPalPPCP
    Fastify --> XeroAPI
    Fastify --> DeliverectAPI

    PayPalPPCP --> DojoPayments
    PayPalPPCP --> StripeConnect
    Fastify --> PostgresMain
    Fastify --> RedisCache
    XeroAPI --> S3Storage

    style ReactApp fill:#e3f2fd
    style Fastify fill:#f3e5f5
    style PayPalPPCP fill:#e8f5e8
    style PostgresMain fill:#fff3e0
`

export default function APOSArchitecturePage() {
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
                APOS Platform
                <span className="block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Restaurant Management
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Comprehensive restaurant management with PayPal Partner Commerce, Xero accounting automation, 
                and multi-location support for 15+ restaurants.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                FinTech
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Restaurant Tech
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
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Restaurant Locations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Payment Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Manual Work Reduction</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Downtime Deployments</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Restaurant Management & Payment Processing</CardTitle>
            <CardDescription>
              Multi-payment provider integration with automated accounting and delivery management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={systemArchitecture} className="bg-white dark:bg-slate-800 rounded-lg p-4" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Payment Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">PayPal Partner Commerce Platform</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Advanced payment processing with 3D Secure authentication and multi-payment method support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">3D Secure</Badge>
                  <Badge variant="outline">Multi-payment</Badge>
                  <Badge variant="outline">Fraud Detection</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dojo Card Terminals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Integrated point-of-sale terminals for in-person transactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Contactless</Badge>
                  <Badge variant="outline">Chip & PIN</Badge>
                  <Badge variant="outline">Real-time Processing</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Automation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Xero Accounting Integration</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Automated invoice generation and financial reporting for all restaurant locations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Auto Invoicing</Badge>
                  <Badge variant="outline">Tax Reporting</Badge>
                  <Badge variant="outline">Financial Analytics</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Deliverect API</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Unified delivery management across multiple platforms and providers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Multi-platform</Badge>
                  <Badge variant="outline">Order Sync</Badge>
                  <Badge variant="outline">Delivery Tracking</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 