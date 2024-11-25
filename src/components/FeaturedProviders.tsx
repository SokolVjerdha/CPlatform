import React from 'react';
import { ServiceCard } from './ServiceCard';

interface FeaturedProvidersProps {
  onBookService: (service: any) => void;
}

export function FeaturedProviders({ onBookService }: FeaturedProvidersProps) {
  const featuredServices = [
    {
      id: 1,
      name: "Premium Home Cleaning",
      provider: "CleanPro Services",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 342,
      price: 150,
      duration: "4 hours"
    },
    {
      id: 2,
      name: "Eco-Friendly Cleaning",
      provider: "Green Clean Co.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80",
      rating: 4.8,
      reviews: 215,
      price: 180,
      duration: "3 hours"
    },
    {
      id: 3,
      name: "Deep Sanitization",
      provider: "Hygiene Heroes",
      image: "https://images.unsplash.com/photo-1596263576925-d90d63691097?auto=format&fit=crop&q=80",
      rating: 5.0,
      reviews: 127,
      price: 200,
      duration: "5 hours"
    }
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Providers</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View all →
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => (
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