import React from 'react';
import { Home, Building2, Sparkles, Car } from 'lucide-react';

const categories = [
  { name: 'Home Cleaning', icon: Home },
  { name: 'Office Cleaning', icon: Building2 },
  { name: 'Deep Cleaning', icon: Sparkles },
  { name: 'Car Cleaning', icon: Car },
];

export function Categories() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon className="w-8 h-8 text-blue-600 mb-3" />
            <span className="text-gray-900 font-medium text-sm text-center">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}