import React from 'react';
import { HowCardProps } from '../../../types';

const HowCard: React.FC<HowCardProps> = ({ how, index }) => {
  
  const alignmentClasses = [
    "text-left",  
    "text-center", 
    "text-right",  
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className={`text-xl font-bold mb-4 ${alignmentClasses[index]}`}>
        {how.title}
      </h3>
      <img src={how.image} alt={how.title} className="w-full h-80 object-cover" />
    </div>
  );
};

export default HowCard;
