import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot, room, user } = location.state;

  console.log('slot', slot, 'room', room, 'user', user)

  const handlePayment = () => {
    navigate('/payment', { state: { slot, room, user } });
  }
  


  return (
    <div className="px-5 md:px-20 bg-white pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 pt-20 md:pt-0 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
        Booking Confirmation
      </h1>

      <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-customOrange">Booking Details</h2>
      <div  className="space-y-3">
        <p><strong>Room Name:</strong> {room.name}</p>
        <p><strong>Booking Date:</strong> {slot.date}</p>
        <p><strong>Booking Time:</strong> {slot.startTime} - {slot.endTime}</p>
        <p><strong>Total Price:</strong> ${room.pricePerSlot}</p>
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-customOrange pt-5">Your Details</h2>
      <div className="space-y-3">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <button className="bg-customOrange hover:bg-customGreen text-white font-semibold py-2 px-4 rounded-md mt-5"
      onClick={handlePayment}
      >
        Confirm Booking</button>
      </div>
    </div>
  )
}

export default Checkout