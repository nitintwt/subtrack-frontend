import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I found out I was paying for 3 subscriptions I completely forgot about. Subtrack has already saved me over $500 this year!",
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The renewal notifications are a lifesaver. No more unexpected charges on my credit card statement.",
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As someone with 15+ subscriptions, this app has been incredible for keeping track of everything in one place.",
      name: "Emma Rodriguez",
      role: "Freelance Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have taken control of their subscriptions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 text-white text-3xl font-bold w-24 h-24 rounded-full flex items-center justify-center">
                  94%
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Trusted by Our Users</h3>
              <p className="text-gray-600 leading-relaxed">
                94% of our users report saving money within the first 3 months of using Subtrack, with an average annual savings of $240 per user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;