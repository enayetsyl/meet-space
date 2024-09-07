import { Link } from "react-router-dom";
import { Room } from "../../types";

const RoomCard = ({ room, image }: { room: Room; image: string }) => {
  return (
    <div className="bg-[#f5f5f5]  shadow-md">
      {/* Image */}
      <img src={image} alt="Meeting Room" className="w-full h-80 object-cover " />
      {/* Image, Room Name, Capacity, Price Per Slot, "See Details" Button. */}
      {/* Room title */}
     <div className="p-4">
     <h3 className="text-2xl font-semibold mt-2">{room.name}</h3>
     <div className="flex justify-between items-center py-5">
      
        <p className="text-gray-600 font-semibold text-lg">Capacity: {room.capacity}</p>
        
        <p className="text-gray-600 font-semibold text-lg">Price Per Slot: {room.pricePerSlot}</p>
      
     </div>
     <div className="flex justify-center items-center py-5">
      <Link to={`/single-room/${room._id}`}>
     <button className="bg-customOrange hover:bg-customGreen px-5 py-3 text-white font-semibold text-lg">See Details</button>
      </Link>
     </div>
     </div>
    </div>
  );
}

export default RoomCard;
