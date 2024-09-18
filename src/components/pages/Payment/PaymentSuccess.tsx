// PaymentSuccess.jsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { BookingData } from '../../../types';
import meeting1 from '../../../../public/meeting-1.jpg'

const PaymentSuccess = () => {
  const [bookingCreated, setBookingCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const paymentIntentId = query.get('payment_intent');
  const roomId = query.get('roomId');
  const slotId = query.get('slotId');
  const userId = query.get('userId');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    // Confirm payment status
    if (paymentIntentId) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/payment/confirm-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentIntentId }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log('data from confirm payment', data);
          if (data.data.status === 'succeeded') {
            console.log('Payment succeeded');
            // Payment is successful, create booking
            const response = await fetch(
              `${import.meta.env.VITE_API_BASE_URL}/api/bookings`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                  roomId,
                  slotId,
                  userId,
                  paymentIntentId,
                }),
              }
            );
            const bookingResponse = await response.json();
            console.log('booking data', bookingResponse);
            if (bookingResponse.statusCode === 200) {
              setBookingCreated(true);
              setBookingData(bookingResponse.data);
            } else {
              setError(bookingResponse.error || 'Error creating booking.');
            }
          } else {
            console.log('Payment not successful');
            setError('Payment not successful.');
          }
        })
        .catch((err) => {
          console.error('Error confirming payment:', err);
          setError('Error confirming payment.');
        });
    } else {
      setError('No payment intent ID found.');
      console.log('No payment intent ID found.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bookingCreated) {
    return <div className="px-5 md:px-20 bg-white pb-32">
       <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20  md:pt-0 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
       Creating your booking...
      </h1>
      </div>;
  }

  // Format dates
  const eventDate = bookingData?.slots?.[0]?.date
    ? format(new Date(bookingData.slots[0].date), 'MMMM dd, yyyy')
    : '';
  const bookingCreatedAt = bookingData?.createdAt
    ? format(new Date(bookingData.createdAt), 'MMMM dd, yyyy')
    : '';

  return (
    <div 
      className="px-5 md:px-20 bg-white pb-32"
      style={{
        backgroundImage: `url(${meeting1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        paddingTop: '80px',
       marginTop: '-112px', 
      }}
    >
      <h1 className='text-center font-bold text-3xl pb-5 pt-20'>Thank You for Booking with Us!</h1>
      <p className='pb-10 text-center font-bold'>Your booking has been created successfully.</p>
      <div className="bg-[#f5f5f5] p-8">
        <p><strong>Room Name:</strong> {bookingData?.room?.name}</p>
        <p><strong>Event Date:</strong> {eventDate}</p>
        <p><strong>Start Time:</strong> {bookingData?.slots?.[0]?.startTime}</p>
        <p><strong>End Time:</strong> {bookingData?.slots?.[0]?.endTime}</p>
        <p className='capitalize'><strong>Confirmation Status:</strong> {bookingData?.isConfirmed}</p>
        <p ><strong>Booking Created At:</strong> {bookingCreatedAt}</p>
        <p><strong>Price:</strong> ${bookingData?.totalAmount}</p>
        {bookingData?.room?.roomNo && (
          <p><strong>Room No:</strong> {bookingData.room.roomNo}</p>
        )}
        <p><strong>Floor No:</strong> {bookingData?.room?.floorNo}</p>
        <p><strong>Capacity:</strong> {bookingData?.room?.capacity}</p>
        <p><strong>Amenities:</strong> {bookingData?.room?.amenities?.join(', ')}</p>
        <p><strong>User Name:</strong> {bookingData?.user?.name}</p>
        <Link to="/">
          <button className="bg-customOrange hover:bg-customGreen text-white font-semibold py-3 px-4  mt-5">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
