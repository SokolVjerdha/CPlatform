import React from 'react';
import { ServiceCard } from './ServiceCard';

interface SearchResultsProps {
  onBookService: (service: any) => void;
}

export function SearchResults({ onBookService }: SearchResultsProps) {
  const services = [
    {
      id: 1,
      name: "Regular Home Cleaning",
      provider: "Spotless Solutions",
      image: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: 89,
      price: 120,
      duration: "3 hours"
    },
    {
      id: 2,
      name: "Office Deep Clean",
      provider: "Corporate Cleaners",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 156,
      price: 250,
      duration: "6 hours"
    }
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Available Services</h2>
        <div className="flex items-center gap-4">
          <select className="border rounded-lg px-4 py-2 text-sm">
            <option>Sort by: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            onClick={() => onBookService(service)}
          />
        ))}
      </div>
    </section>
  );
}