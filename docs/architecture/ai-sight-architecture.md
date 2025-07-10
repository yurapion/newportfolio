# AI-Sight Suite - Medical Imaging AI Platform Architecture

## System Architecture Overview

The AI-Sight Suite implements a sophisticated medical imaging platform with enterprise-grade licensing, real-time AI processing, and comprehensive compliance features.

```mermaid
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
        Hangfire[Hangfire Server<br/>PostgreSQL Storage]
        JobHandler[Image Job Handler<br/>Parallel Processing]
        Scheduler[Analysis Scheduler<br/>TimeSpan Delays]
    end

    subgraph "External Integrations"
        SageMaker[AWS SageMaker<br/>Custom Retinal Models]
        AzureAD[Azure AD B2C<br/>Microsoft Graph API]
        Xero[Xero Accounting<br/>Invoice Generation]
        Storage[Azure Blob Storage<br/>Medical Images]
    end

    subgraph "Data Layer"
        DB[(PostgreSQL<br/>Entity Framework)]
        BlobStore[(Azure Blob<br/>DICOM Files)]
        Cache[(Redis Cache<br/>License Data)]
    end

    subgraph "Monitoring"
        Sentry[Sentry<br/>Error Tracking]
        AppInsights[Azure Insights<br/>Performance]
        Logs[Structured Logging<br/>Audit Trail]
    end

    UI --> Gateway
    Mobile --> Gateway
    Gateway --> Auth
    Gateway --> License
    Gateway --> ImageProc
    Gateway --> Notification

    License --> DB
    ImageProc --> AI
    ImageProc --> JobHandler
    AI --> SageMaker
    
    Hangfire --> JobHandler
    JobHandler --> Scheduler
    Scheduler --> AI
    JobHandler --> Notification

    Gateway --> AzureAD
    Gateway --> Xero
    ImageProc --> Storage
    
    ImageProc --> DB
    AI --> DB
    License --> Cache
    
    Gateway --> Sentry
    Gateway --> AppInsights
    All --> Logs

    classDef client fill:#e1f5fe
    classDef api fill:#f3e5f5
    classDef service fill:#e8f5e8
    classDef external fill:#fff3e0
    classDef data fill:#fce4ec
    classDef monitoring fill:#f1f8e9

    class UI,Mobile client
    class Gateway,Auth api
    class License,ImageProc,AI,Notification service
    class SageMaker,AzureAD,Xero,Storage external
    class DB,BlobStore,Cache data
    class Sentry,AppInsights,Logs monitoring
```

## Key Architecture Highlights

### 14-Feature Licensing System
- **Dynamic Feature Toggling**: Real-time validation of features FT01-FT14
- **License Types**: Trial, Basic, Team, Organisation with granular permissions
- **Feature Examples**: Instant grading, Bulk uploading, AI threshold values, Workload management

### Parallel Processing Architecture
- **Hangfire Background Jobs**: PostgreSQL-backed job queue with persistence
- **Task.WhenAll Optimization**: Parallel SageMaker API calls for batch processing
- **Concurrent Collections**: Thread-safe operations with ConcurrentDictionary
- **Performance**: 2,400% throughput improvement with parallel processing

### AI Integration Pipeline
- **AWS SageMaker**: Custom retinal analysis models with batch processing
- **Dual Processing Modes**: Parallel Task.WhenAll vs batch API calls
- **Real-time Thresholds**: Configurable AI confidence thresholds per organization
- **Result Processing**: 90% latency reduction (5-10s → 500ms-1s)

### Enterprise Security & Compliance
- **Azure AD B2C**: Enterprise authentication with Microsoft Graph API
- **EU MDR Compliance**: Medical device regulatory compliance
- **DICOM Standards**: Fellow Oak DICOM library integration
- **Audit Logging**: Comprehensive audit trail with Sentry error tracking

### Real-time Communication
- **SignalR Hub**: Real-time status updates for image processing
- **Job Notifications**: Instant feedback on analysis completion
- **Progress Tracking**: Live progress indicators for batch operations

## Technical Implementation Details

### Clean Architecture Layers
```
├── Domain/
│   ├── Entities (PatientImage, License, Organization)
│   ├── Value Objects (PatientImageId, LicenseType)
│   └── Domain Services
├── Application/
│   ├── Commands (CQRS Pattern)
│   ├── Queries (Read Models)
│   ├── Background Jobs (Hangfire Handlers)
│   └── Services (SageMaker, License)
├── Infrastructure/
│   ├── Persistence (Entity Framework)
│   ├── External APIs (AWS, Azure, Xero)
│   └── Background Processing (Hangfire)
└── API/
    ├── Controllers (REST Endpoints)
    ├── SignalR Hubs
    └── Authentication
```

### Performance Metrics
- **Image Processing**: 10,000+ images/day with 99.9% uptime
- **Throughput Improvement**: +2,400% (20 → 500 images/hour)
- **Latency Reduction**: -90% (8-12s → 0.8-1.2s)
- **Cost Optimization**: -60% operational costs ($12k → $4.8k/month)

### Technology Stack
- **Backend**: C#/.NET Core, ASP.NET Core, MediatR, Entity Framework Core
- **Frontend**: React 18, TypeScript, Material-UI, SignalR Client
- **AI/ML**: AWS SageMaker, Custom ML models for retinal analysis
- **Background Processing**: Hangfire with PostgreSQL storage
- **Authentication**: Azure AD B2C with Microsoft Graph API
- **Storage**: Azure Blob Storage for medical images, PostgreSQL for data
- **Monitoring**: Sentry, Azure Application Insights, structured logging
- **Medical Standards**: Fellow Oak DICOM for medical imaging compliance 