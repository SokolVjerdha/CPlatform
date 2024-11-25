import { create } from 'zustand';
import { 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { stripePromise } from '../lib/stripe';

interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid';
  amount: number;
}

interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  createBooking: (bookingData: Omit<Booking, 'id'>) => Promise<string>;
  getUserBookings: (userId: string) => Promise<void>;
  processPayment: (bookingId: string, amount: number) => Promise<void>;
}

export const useBookings = create<BookingsState>((set, get) => ({
  bookings: [],
  loading: false,
  createBooking: async (bookingData) => {
    const docRef = await addDoc(collection(db, 'bookings'), bookingData);
    return docRef.id;
  },
  getUserBookings: async (userId) => {
    set({ loading: true });
    const q = query(collection(db, 'bookings'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const bookings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Booking[];
    set({ bookings, loading: false });
  },
  processPayment: async (bookingId: string, amount: number) => {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    // Create payment intent on your backend
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, bookingId }),
    });
    
    const { clientSecret } = await response.json();

    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret);
    
    if (result.error) {
      throw new Error(result.error.message);
    }

    // Update booking payment status
    await updateDoc(doc(db, 'bookings', bookingId), {
      paymentStatus: 'paid'
    });
  }
}));