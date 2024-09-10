import { useNavigate, useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../../redux/api/roomApi";
import { meetingImages } from "../../constant";

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const {
    data: roomResponse,
    error,
    isLoading,
  } = useGetRoomByIdQuery(roomId as string);

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * meetingImages.length);
    return meetingImages[randomIndex].image;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !roomResponse) return <div>Error loading room details</div>;

  const room = roomResponse.data;

   // Function to handle booking button click
   const handleBookNow = () => {
    navigate('/booking', { state: { room } }); // Navigate to /booking and pass room data as state
  };

  return (
    <div className="px-5 md:px-20 bg-white pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
        Room Details
      </h1>

      {room && (
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
          {/* Image div */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            {/* Generate 4 random images */}
            {Array.from({ length: 4 }).map((_, index) => (
              <img
                key={index}
                src={getRandomImage()}
                alt={`Room detail image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
          {/* Content div */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mt-2 text-center">
              {room.name}
            </h3>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-600 font-semibold text-lg">
                Room No: {room.roomNo}
              </p>
              <p className="text-gray-600 font-semibold text-lg">
                Floor No: {room.floorNo}
              </p>
            </div>
            <div className="flex justify-between items-center py-5">
              <p className="text-gray-600 font-semibold text-lg">
                Capacity: {room.capacity}
              </p>
              <p className="text-gray-600 font-semibold text-lg">
                Price Per Slot: {room.pricePerSlot}
              </p>
            </div>
            <p className="text-gray-600 font-semibold text-lg">
              Amenities:{" "}
              {room.amenities?.join(", ") || "No amenities available"}
            </p>
            <div className="flex justify-center items-center py-20">
            <button className="bg-customOrange hover:bg-customGreen px-5 py-3 text-white font-semibold text-lg w-full"
            onClick={handleBookNow}
            >Book Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
