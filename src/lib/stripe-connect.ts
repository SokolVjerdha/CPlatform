import { loadStripe } from '@stripe/stripe-js';

export const stripeConnect = loadStripe(import.meta.env.VITE_STRIPE_CONNECT_KEY);

export const createConnectedAccount = async (userId: string) => {
  const response = await fetch('/api/stripe/create-connected-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });
  
  const { accountLink } = await response.json();
  return accountLink;
};