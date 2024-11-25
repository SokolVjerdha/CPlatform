import React from 'react';
import { Search } from 'lucide-react';
import { LocationSearch } from './LocationSearch';

export function SearchBar() {
  return (
    <div className="flex w-full max-w-2xl mx-auto gap-2">
      <LocationSearch 
        onLocationSelect={(location) => {
          console.log('Selected location:', location);
        }} 
      />
      
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search services..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}