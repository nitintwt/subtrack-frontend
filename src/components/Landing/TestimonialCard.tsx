import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  image 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
      </div>
      <div className="flex items-center mt-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;