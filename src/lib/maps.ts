import { Loader } from '@googlemaps/js-api-loader';

let mapsPromise: Promise<typeof google.maps> | null = null;

const initMaps = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    console.warn('Google Maps API key is not configured');
    return Promise.reject(new Error('Google Maps API key is not configured'));
  }

  if (!mapsPromise) {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places']
    });
    mapsPromise = loader.load();
  }
  return mapsPromise;
};

export const getPlacePredictions = async (input: string): Promise<google.maps.places.AutocompletePrediction[]> => {
  try {
    if (!input || input.length < 2) return [];
    
    const google = await initMaps();
    const service = new google.maps.places.AutocompleteService();
    
    const response = await service.getPlacePredictions({
      input,
      types: ['address']
      // Removed componentRestrictions to allow worldwide addresses
    });
    
    return response.predictions || [];
  } catch (error) {
    if (error instanceof Error && error.message === 'Google Maps API key is not configured') {
      return [];
    }
    console.error('Places API error:', error);
    return [];
  }
};