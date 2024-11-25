import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useBookings } from '../store/bookings';
import toast from 'react-hot-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  amount: number;
}

export function PaymentModal({ isOpen, onClose, bookingId, amount }: PaymentModalProps) {
  const [processing, setProcessing] = useState(false);
  const { processPayment } = useBookings();

  if (!isOpen) return null;

  const handlePayment = async () => {
    setProcessing(true);
    try {
      await processPayment(bookingId, amount);
      toast.success('Payment processed successfully!');
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Complete Payment</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="border-t border-b py-4">
            <div className="flex justify-between text-lg">
              <span>Total Amount:</span>
              <span className="font-semibold">${amount}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {processing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>
    </div>
  );
}