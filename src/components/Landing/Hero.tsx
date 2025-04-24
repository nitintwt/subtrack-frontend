import React from 'react';
import {Link , Button} from "@nextui-org/react";
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-100 opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-200 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
              Take Control of Your <span className="text-blue-600">Subscriptions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Sign up for Subtrack and let our AI find and manage all your subscriptions in one place, so you never overpay again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center gap-2" color='primary' as={Link} href="/auth/register"  >
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-gray-500">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="ml-4 text-sm">Join 10,000+ users saving money every month</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-600 rounded-lg blur-md opacity-20 animate-pulse"></div>
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200 relative">
                <div className="bg-blue-600 text-white py-3 px-4 rounded-t-lg mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Connect your Gmail</span>
                </div>
                <div className="space-y-4 p-2">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Netflix" className="w-10 h-10 rounded object-cover mr-3" />
                    <div className="flex-1">
                      <h3 className="font-medium">Netflix</h3>
                      <p className="text-sm text-gray-500">$14.99/month</p>
                    </div>
                    <span className="text-blue-600 font-medium">Active</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img src="https://images.pexels.com/photos/7433832/pexels-photo-7433832.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Spotify" className="w-10 h-10 rounded object-cover mr-3" />
                    <div className="flex-1">
                      <h3 className="font-medium">Spotify</h3>
                      <p className="text-sm text-gray-500">$9.99/month</p>
                    </div>
                    <span className="text-yellow-600 font-medium">Renews soon</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Hulu" className="w-10 h-10 rounded object-cover mr-3" />
                    <div className="flex-1">
                      <h3 className="font-medium">Hulu</h3>
                      <p className="text-sm text-gray-500">$7.99/month</p>
                    </div>
                    <span className="text-red-600 font-medium">Unused</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 pb-2 text-center">
                    <p className="text-blue-600 font-medium">View All 14 Subscriptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;