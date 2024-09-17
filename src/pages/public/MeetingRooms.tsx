import RoomCard from "../../components/shared/RoomCard";
import { meetingImages } from "../../constant";
import { useGetRoomsQuery } from "../../redux/api/roomApi";
import { Room } from "../../types";

const MeetingRooms = () => {

  const { data } = useGetRoomsQuery();
  const rooms: Room[] = data?.data || [];

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * meetingImages.length);
    return meetingImages[randomIndex].image;
  };


  return (
    <div className="px-5 md:px-20  pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
        Available Meeting Rooms
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

export default MeetingRooms