import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../../components/pages/Payment/CheckoutForm";
import { useEffect, useState } from "react";

const Payment = () => {
  const location = useLocation();
  const { slot, room, user } = location.state;
  console.log('slot', slot, 'room', room, 'user', user);
  const PUBLIC_KEY=`pk_test_51OHOq1BYRJK6WPifj3RVipWJ2F8EInOogAIklm33x1GCLhaImaRBmk5UFZUhyrF30W1CWMX9K74qkYgfOdARGWTP0007UxIyx4`


  const stripePromise = loadStripe(PUBLIC_KEY)

  // Fetch the Payment Intent client secret from the backend
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Replace with your backend URL
    fetch('http://localhost:5000/api/payment/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: room.pricePerSlot * 100, currency: 'usd'}),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log('data', data);
        setClientSecret(data.data)});
  }, [room.pricePerSlot]);

  const options = {
    clientSecret,
    // Add appearance or other options if needed
  };


  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm room={room} slot={slot} user={user}/>
        </Elements>
      )}
    </div>
  )
}

export default Payment