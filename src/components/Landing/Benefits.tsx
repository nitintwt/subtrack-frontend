import { DollarSign, Clock, Shield, Zap } from 'lucide-react'

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Save Money',
    description: 'Identify unused subscriptions and optimize your spending.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Save Time',
    description: 'Automate subscription tracking and never manually review bills again.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Enhanced Security',
    description: 'Bank-level encryption keeps your data safe and secure.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Stay Informed',
    description: 'Get actionable insights about your subscription spending habits.'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          Benefits of Using Subtrack
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mx-auto">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

