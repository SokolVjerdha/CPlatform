import React from 'react';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="relative bg-blue-600 py-20 mb-12">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Book Professional Cleaning Services
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Find and book the best cleaning services in your area. 
          Trusted professionals, guaranteed satisfaction.
        </p>
        <SearchBar />
        
        <div className="mt-12 flex justify-center space-x-8 text-white">
          {['1000+ Providers', '50,000+ Bookings', '4.8 Average Rating'].map((stat) => (
            <div key={stat} className="text-center">
              <p className="text-2xl font-bold">{stat.split(' ')[0]}</p>
              <p className="text-blue-100">{stat.split(' ')[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}