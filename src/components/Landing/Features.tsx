import React from 'react';
import FeatureCard from './FeatureCard';
import { MailPlus, Search, Sparkles, Bell } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MailPlus,
      title: 'Connect Your Email',
      description: 'Securely connect your Gmail account with just a few clicks and let us do the hard work for you.'
    },
    {
      icon: Search,
      title: 'AI Subscription Scanning',
      description: 'Our AI technology scans your emails to identify and categorize all your subscription services automatically.'
    },
    {
      icon: Sparkles,
      title: 'Smart Dashboard',
      description: 'View and manage all your subscriptions in one place with our intuitive, personalized dashboard.'
    },
    {
      icon: Bell,
      title: 'Renewal Notifications',
      description: 'Get timely alerts about upcoming renewals, price changes, and potential savings opportunities.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Subtrack Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take control of your digital spending with our simple four-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:-translate-y-2">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Trusted by thousands of users to manage their subscriptions effectively
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;