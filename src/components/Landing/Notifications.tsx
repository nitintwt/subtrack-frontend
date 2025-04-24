import React from 'react';
import {Link , Button} from "@nextui-org/react";
import { BellRing, DollarSign, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

const Notifications = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-32 top-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -left-32 bottom-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Notifications That Save You Money
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Never be caught off guard by subscription renewals again. Subtrack sends you timely reminders and money-saving recommendations.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: BellRing, text: "Get renewal alerts before you're charged" },
                { icon: DollarSign, text: "Receive price increase notifications" },
                { icon: Calendar, text: "Track free trial end dates" },
                { icon: AlertTriangle, text: "Identify duplicate or overlapping services" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-600 mb-8">
              Users save an average of $240 per year by acting on our smart notifications.
            </p>
            
            <Button color='primary' as={Link} href="/auth/register" >
              Sign Up for Alerts
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Calendar,
                  title: "Trial Ending Soon",
                  text: "Your Adobe Creative Cloud trial ends in 3 days. Renewal price: $52.99/month.",
                  action: "Remind me tomorrow",
                  color: "bg-yellow-50 border-yellow-200"
                },
                {
                  icon: DollarSign,
                  title: "Price Increase Detected",
                  text: "Spotify is increasing your subscription from $9.99 to $10.99 next billing cycle.",
                  action: "Review alternatives",
                  color: "bg-red-50 border-red-200"
                },
                {
                  icon: CheckCircle,
                  title: "Potential Savings",
                  text: "You have both Netflix and Hulu. Consider the Disney+ bundle to save $8/month.",
                  action: "See details",
                  color: "bg-green-50 border-green-200"
                },
                {
                  icon: AlertTriangle,
                  title: "Unused Subscription",
                  text: "You haven't used your Audible subscription in 60 days. Consider pausing.",
                  action: "Pause subscription",
                  color: "bg-blue-50 border-blue-200"
                }
              ].map((notification, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${notification.color} transform transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                >
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-md shadow-sm mr-4">
                      <notification.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{notification.title}</h3>
                      <p className="text-sm text-gray-700 mb-3">{notification.text}</p>
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                        {notification.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;