import { CheckCircle } from 'lucide-react'

const steps = [
  "Sign up for a Subtrack account and securely connect your Gmail",
  "Our AI scans your emails for subscription-related information",
  "View all your subscriptions in one place on your personalized dashboard",
  "Receive smart notifications about upcoming renewals and potential savings"
]

export default function Procedure() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          How Subtrack Works
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <p className="ml-4 text-lg leading-6 font-medium text-gray-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

