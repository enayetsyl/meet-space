import { meetingImages } from "../../../constant";
import { useGetRoomsQuery } from "../../../redux/api/roomApi";
import { Room } from "../../../types";
import RoomCard from "../../shared/RoomCard";

const FeaturedRooms = () => {
  const { data } = useGetRoomsQuery();
  const rooms: Room[] = data?.data || [];

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * meetingImages.length);
    return meetingImages[randomIndex].image;
  };


  return (
    <div className="px-5 md:px-20 bg-white pb-32">
      <h1 className="text-customOrange text-3xl md:text-6xl font-bold  uppercase  text-center leading-tight md:leading-snug py-20">
       featured room
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {
          rooms.map((room: Room) => {
            const randomImage = getRandomImage(); // Get a random image for each room
            return (
              <RoomCard key={room._id} room={room} image={randomImage} />
            );
          })
        }
        </div>
    </div>
  )
}

export default FeaturedRooms