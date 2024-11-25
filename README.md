## SparkleClean - Professional Cleaning Services Platform

A modern web application for booking professional cleaning services, built with React, TypeScript, and Firebase.

### Features

- User authentication
- Service provider profiles
- Real-time booking system
- Secure payments with Stripe
- Location-based search with Google Maps
- Responsive design

### Tech Stack

- React with TypeScript
- Firebase (Auth, Firestore)
- Stripe Payments
- Google Maps API
- TailwindCSS
- Express.js backend

### Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your API keys
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Environment Variables

Required environment variables:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_GOOGLE_MAPS_API_KEY=
```

### API Documentation

The backend API provides endpoints for:
- Payment processing
- Booking management
- Provider onboarding
- User management

### License

MIT License