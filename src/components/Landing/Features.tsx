import { Mail, Brain, BarChart3, Bell } from 'lucide-react'

const features = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email Integration',
    description: 'Securely connect to your Gmail account and automatically scan for subscription-related emails.'
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI-Powered Processing',
    description: 'Our advanced AI extracts and structures subscription details from your emails with high accuracy.'
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Insights Dashboard',
    description: 'View detailed subscription insights in a user-friendly interface for better financial management.'
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: 'Smart Notifications',
    description: 'Receive timely alerts for upcoming renewals and potential savings opportunities.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Powerful Features to Simplify Your Life
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                  <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

