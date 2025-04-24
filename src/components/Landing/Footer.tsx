import React from 'react';
import { MailCheck, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MailCheck className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">Subtrack</span>
            </div>
            <p className="text-blue-200 mb-6">
              Take control of your subscriptions with our AI-powered tracking and management solution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for tips and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md text-gray-800 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <p className="text-blue-200 text-center">
            &copy; {new Date().getFullYear()} Subtrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
