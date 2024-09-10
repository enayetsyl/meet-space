import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const { room } = location.state; 
  
  return (
    <div>
      <h1>Booking Page</h1>
      {room && (
        <div>
          <h2>Room Name: {room.name}</h2>
          <p>Room No: {room.roomNo}</p>
          <p>Price Per Slot: {room.pricePerSlot}</p>
          {/* Display other room details as needed */}
        </div>
      )}
    </div>
  );
};

export default Booking