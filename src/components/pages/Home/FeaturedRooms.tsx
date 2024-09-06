import { useGetRoomsQuery } from "../../../redux/api/roomApi";
import { Room } from "../../../types";

const FeaturedRooms = () => {
  const { data } = useGetRoomsQuery();
  const rooms: Room[] = data?.data || [];

  console.log('rooms', rooms);
  return (
    <div>FeaturedRooms</div>
  )
}

export default FeaturedRooms