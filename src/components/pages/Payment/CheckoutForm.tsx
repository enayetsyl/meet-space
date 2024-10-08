// CheckoutForm.jsx
import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Room, Slot, User } from '../../../types';

const CheckoutForm = ({ room, slot, user }:{room:Room, slot:Slot, user:User}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    

    const returnUrl = `https://meet-space-theta.vercel.app/payment-success?roomId=${room._id}&slotId=${slot._id}&userId=${user._id}`;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnUrl,
      },
    });

    if (error) {
      setMessage(error.message ?? 'An unknown error occurred.');

    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 md:px-20 bg-white pb-32">
      <PaymentElement />
      <button disabled={!stripe || isProcessing} type="submit" className="bg-customOrange hover:bg-customGreen text-white font-semibold py-3 px-4  mt-5">
        {isProcessing ? 'Processing...' : 'Pay now'}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CheckoutForm;
