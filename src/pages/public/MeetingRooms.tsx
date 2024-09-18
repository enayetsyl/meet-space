import { useEffect, useState } from "react";
import RoomCard from "../../components/shared/RoomCard";
import { meetingImages } from "../../constant";
import { useGetRoomsQuery } from "../../redux/api/roomApi";
import { Room } from "../../types";

const MeetingRooms = () => {
  const [filters, setFilters] = useState({
    name: "",
    capacity: "",
    maxPrice: "",
    sortBy: "",
    sortOrder: "",
  });

 // New state to hold debounced filters
 const [debouncedFilters, setDebouncedFilters] = useState(filters);

 // Debounce the filters
 useEffect(() => {
   const handler = setTimeout(() => {
     setDebouncedFilters(filters);
   }, 500); // Adjust the delay as needed (500ms in this case)

   return () => {
     clearTimeout(handler);
   };
 }, [filters]);

 // Use debouncedFilters for the API call
 const { data } = useGetRoomsQuery(debouncedFilters);
 const rooms: Room[] = data?.data || [];

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * meetingImages.length);
    return meetingImages[randomIndex].image;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setFilters({
      name: "",
      capacity: "",
      maxPrice: "",
      sortBy: "",
      sortOrder: "",
    });
    setDebouncedFilters({
      name: "",
      capacity: "",
      maxPrice: "",
      sortBy: "",
      sortOrder: "",
    });
  };
  

  return (
    <div className="px-5 md:px-20  pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
        Available Meeting Rooms
      </h1>

{/* Search and Filter Options */}
<div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Bar */}
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            placeholder="Search by name or keyword"
            className="border border-gray-300 rounded-md p-2"
          />

          {/* Capacity Filter */}
          <input
            type="number"
            name="capacity"
            value={filters.capacity}
            onChange={handleInputChange}
            placeholder="Minimum Capacity"
            className="border border-gray-300 rounded-md p-2"
          />

          {/* Max Price Filter */}
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleInputChange}
            placeholder="Maximum Price per Slot"
            className="border border-gray-300 rounded-md p-2"
          />

          {/* Sort Options */}
          <div className="flex space-x-2">
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Sort By</option>
              <option value="pricePerSlot">Price Per Slot</option>
              {/* Add more sort options if needed */}
            </select>
            <select
              name="sortOrder"
              value={filters.sortOrder}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Clear Filter Button */}
        <button
          onClick={handleClearFilters}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Clear Filters
        </button>
      </div>

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