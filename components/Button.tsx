
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-300 text-center inline-block";
  const variants = {
    primary: "bg-[#8e7d6a] text-white hover:bg-[#7a6b5a] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline: "border-2 border-[#8e7d6a] text-[#8e7d6a] hover:bg-[#8e7d6a] hover:text-white",
    ghost: "text-[#8e7d6a] hover:underline"
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {label}
    </button>
  );
};
