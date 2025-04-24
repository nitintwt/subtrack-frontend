import React from 'react';
import {Link , Button} from "@nextui-org/react";
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic subscription tracking for casual users",
      features: [
        "Track up to 5 subscriptions",
        "Email reminders for renewals",
        "Basic dashboard",
        "Email support"
      ],
      buttonText: "Get Started",
      primary: false
    },
    {
      name: "Pro",
      price: "$4.99",
      period: "per month",
      description: "Advanced features for subscription management",
      features: [
        "Unlimited subscription tracking",
        "Smart saving recommendations",
        "Advanced spending analytics",
        "Custom renewal notifications",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      primary: true,
      popular: true
    },
    {
      name: "Family",
      price: "$9.99",
      period: "per month",
      description: "Share subscription tracking with your family",
      features: [
        "Everything in Pro",
        "Up to 6 family members",
        "Family dashboard",
        "Subscription sharing insights",
        "Premium customer support"
      ],
      buttonText: "Start Free Trial",
      primary: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and start saving today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? "border-blue-600 shadow-md relative transform md:-translate-y-4" 
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                <Button color='primary' as={Link} href="/auth/register" className="w-full">
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
              {[
                {
                  q: "Is my email data secure?",
                  a: "Absolutely. We use bank-level encryption and never store your email passwords. We only access subscription-related emails."
                },
                {
                  q: "Can I cancel my subscription anytime?",
                  a: "Yes, you can cancel your Pro or Family plan at any time. You'll continue to have access until the end of your billing period."
                },
                {
                  q: "Do you offer a free trial?",
                  a: "Yes! Both our Pro and Family plans come with a 14-day free trial, no credit card required to start."
                },
                {
                  q: "Which email providers do you support?",
                  a: "Currently, we support Gmail, with plans to add Outlook, Yahoo, and other providers in the near future."
                }
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;