import React from 'react';
import {Link , Button} from "@nextui-org/react";
import { PieChart, BarChart3, Zap, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              All Your Subscriptions in One Dashboard
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              No more subscription surprises. Get a clear view of all your recurring expenses with our intuitive dashboard that puts you in control.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: PieChart, text: "Visualize your monthly spending by category" },
                { icon: BarChart3, text: "Track spending trends over time" },
                { icon: Zap, text: "Identify unused or redundant subscriptions" },
                { icon: TrendingUp, text: "See potential savings opportunities" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <Button color='primary' as={Link} href="/auth/register" >
              Try the Dashboard
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1  rounded-lg blur-md opacity-20"></div>
              <img src="/dashboard.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;