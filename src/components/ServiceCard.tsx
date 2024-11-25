import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  onClick: () => void;
}

export function ServiceCard({ name, image, rating, reviews, price, duration, onClick }: ServiceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}