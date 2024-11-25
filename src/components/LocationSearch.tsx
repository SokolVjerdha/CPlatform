import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { getPlacePredictions } from '../lib/maps';
import toast from 'react-hot-toast';

interface LocationSearchProps {
  onLocationSelect: (location: google.maps.places.AutocompletePrediction) => void;
}

export function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimer = useRef<number>();
  const apiConfigured = Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  useEffect(() => {
    if (!apiConfigured) {
      toast.error('Location search is currently unavailable', { id: 'maps-api-error' });
    }
  }, [apiConfigured]);

  useEffect(() => {
    if (!apiConfigured || input.length < 2) {
      setPredictions([]);
      setIsOpen(false);
      return;
    }

    window.clearTimeout(debounceTimer.current);
    debounceTimer.current = window.setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await getPlacePredictions(input);
        setPredictions(results);
        setIsOpen(results.length > 0);
      } catch (error) {
        console.error('Failed to get predictions:', error);
        toast.error('Failed to load location suggestions');
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => window.clearTimeout(debounceTimer.current);
  }, [input, apiConfigured]);

  return (
    <div className="relative flex-1">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={apiConfigured ? "Enter your location" : "Location search unavailable"}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        disabled={!apiConfigured}
      />

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto z-50">
          {predictions.map((prediction) => (
            <button
              key={prediction.place_id}
              onClick={() => {
                onLocationSelect(prediction);
                setInput(prediction.description);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
            >
              <p className="text-sm text-gray-900">{prediction.structured_formatting.main_text}</p>
              <p className="text-xs text-gray-600">{prediction.structured_formatting.secondary_text}</p>
            </button>
          ))}
          {isLoading && (
            <div className="px-4 py-2 text-sm text-gray-600">Loading...</div>
          )}
        </div>
      )}
    </div>
  );
}