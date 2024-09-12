import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";

const Booking = () => {
  const location = useLocation();
  const { room } = location.state; 
  
   // Access the user from the Redux store
   const user = useSelector((state: RootState) => state.auth.user);

   console.log('user', user, 'room', room)
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