import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = true, 
  className = '', 
  onClick 
}) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg";
  const secondaryClasses = "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50";

  return (
    <button 
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;