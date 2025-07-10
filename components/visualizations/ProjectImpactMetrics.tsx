'use client'

import React from 'react'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  Filler
)

const ProjectImpactMetrics: React.FC = () => {
  // Performance Improvement Data
  const performanceData = {
    labels: ['AI-Sight Suite', 'CardMedic Platform', 'APOS System', 'Cosnova E-commerce', 'SkinCam AI', 'Web3 Trading Bot'],
    datasets: [
      {
        label: 'Performance Improvement (%)',
        data: [2400, 450, 320, 180, 350, 1500],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(99, 102, 241, 0.7)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(99, 102, 241, 1)'
        ],
        borderWidth: 2
      }
    ]
  }

  // User Growth Timeline
  const userGrowthData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Total Users Served',
        data: [1200, 5800, 15000, 35000, 62000, 85000, 100000],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Enterprise Clients',
        data: [2, 8, 15, 28, 45, 65, 78],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  }

  // Technology Distribution
  const techDistributionData = {
    labels: ['Backend Systems', 'Frontend Applications', 'Mobile Apps', 'AI/ML Projects', 'Web3/Blockchain', 'DevOps/Infrastructure'],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(99, 102, 241, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(99, 102, 241, 1)'
        ],
        borderWidth: 2
      }
    ]
  }

  // Business Value Metrics
  const businessValueData = {
    labels: ['Cost Savings', 'Revenue Generated', 'Time Saved', 'Process Efficiency', 'User Satisfaction', 'System Uptime'],
    datasets: [
      {
        label: 'Impact Score',
        data: [92, 88, 95, 89, 96, 99.9],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 11
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        },
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`
          }
        }
      }
    }
  }

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        Project Impact Metrics
      </h3>
      <p className="text-slate-600 text-center mb-8">
        Quantified business value and performance improvements across key projects
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Improvements */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Performance Improvements</h4>
          <div className="h-64">
            <Bar data={performanceData} options={chartOptions} />
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Average improvement: <span className="font-semibold text-green-600">847%</span>
          </p>
        </div>

        {/* User Growth */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">User Growth Timeline</h4>
          <div className="h-64">
            <Line data={userGrowthData} options={lineChartOptions} />
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Total users served: <span className="font-semibold text-blue-600">100,000+</span>
          </p>
        </div>

        {/* Technology Distribution */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Project Technology Mix</h4>
          <div className="h-64">
            <Doughnut data={techDistributionData} options={doughnutOptions} />
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Across <span className="font-semibold text-purple-600">22+</span> major projects
          </p>
        </div>

        {/* Business Value */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Business Value Metrics</h4>
          <div className="h-64">
            <Bar data={businessValueData} options={chartOptions} />
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Overall impact score: <span className="font-semibold text-green-600">93.3/100</span>
          </p>
        </div>
      </div>

      {/* Key Achievements Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">$2M+</div>
          <div className="text-sm text-slate-600">Cost Savings</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <div className="text-2xl font-bold text-green-600">99.9%</div>
          <div className="text-sm text-slate-600">System Uptime</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">15+</div>
          <div className="text-sm text-slate-600">Team Members</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">8</div>
          <div className="text-sm text-slate-600">Countries</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImpactMetrics 