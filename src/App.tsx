import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchResults } from './components/SearchResults';
import { BookingModal } from './components/BookingModal';
import { Toaster } from 'react-hot-toast';
import { Categories } from './components/Categories';
import { FeaturedProviders } from './components/FeaturedProviders';

function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster position="top-center" />
      
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Categories />
        <FeaturedProviders onBookService={(service) => {
          setSelectedService(service);
          setShowBooking(true);
        }} />
        <SearchResults onBookService={(service) => {
          setSelectedService(service);
          setShowBooking(true);
        }} />
      </main>

      <BookingModal 
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        service={selectedService}
      />
    </div>
  );
}

export default App;