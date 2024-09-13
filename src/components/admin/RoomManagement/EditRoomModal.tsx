import { EditRoomModalProps } from "../../../types";

const EditRoomModal = ({
  selectedRoom,
  setSelectedRoom,
  amenity,
  setAmenity,
  handleUpdateRoom,
  setIsEditModalOpen,
}: EditRoomModalProps) => {
    // Form submission handler
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent the default form submission
  
      if (selectedRoom) {
        handleUpdateRoom(selectedRoom); // Call the update function with the selected room
      }
    };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10 ">
      <div className="bg-white  mt-10 lg:mt-0 p-5 pt-40 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
        {" "}
        {/* Adjust width if necessary */}
        <h2 className="text-2xl font-bold mb-5">Edit Room</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Room Name</label>
            <input
              type="text"
              name="name"
              value={selectedRoom?.name || ""}
              onChange={(e) =>
                setSelectedRoom((prevRoom) =>
                  prevRoom ? { ...prevRoom, name: e.target.value } : prevRoom
                )
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Room No</label>
            <input
              type="number"
              value={selectedRoom?.roomNo}
              onChange={(e) =>
                setSelectedRoom((prevRoom) =>
                  prevRoom
                    ? { ...prevRoom, roomNo: Number(e.target.value) }
                    : prevRoom
                )
              }
              name="roomNo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Floor No</label>
            <input
              type="number"
              name="floorNo"
              value={selectedRoom?.floorNo}
              onChange={(e) =>
                setSelectedRoom((prevRoom) =>
                  prevRoom
                    ? { ...prevRoom, floorNo: Number(e.target.value) }
                    : prevRoom
                )
              }
              placeholder="Enter Floor No"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={selectedRoom?.capacity}
              onChange={(e) =>
                setSelectedRoom((prevRoom) =>
                  prevRoom
                    ? { ...prevRoom, capacity: Number(e.target.value) }
                    : prevRoom
                )
              }
              placeholder="Enter Capacity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price Per Slot</label>
            <input
              type="text"
              name="pricePerSlot"
              value={selectedRoom?.pricePerSlot}
              onChange={(e) =>
                setSelectedRoom((prevRoom) =>
                  prevRoom
                    ? { ...prevRoom, pricePerSlot: Number(e.target.value) }
                    : prevRoom
                )
              }
              placeholder="Enter price per slot"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Amenities Section */}
          <div className="mb-4">
            <label className="block text-gray-700">Amenities</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter an amenity"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={amenity}
                onChange={(e) => setAmenity(e.target.value)}
              />
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => {
                  if (amenity.trim() !== "") {
                    setSelectedRoom((prevRoom) =>
                      prevRoom
                        ? {
                            ...prevRoom,
                            amenities: [...(prevRoom.amenities ?? []), amenity],
                          }
                        : prevRoom
                    );
                    setAmenity("");
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Display added amenities */}
          {/* Display added amenities */}
          {selectedRoom?.amenities && selectedRoom.amenities.length > 0 && (
            <div className="mb-4">
              <label className="block text-gray-700">Added Amenities:</label>
              <ul className="list-disc pl-5">
                {(selectedRoom?.amenities ?? []).map((amenity, index) => (
                  <li key={index} className="flex justify-between items-center">
                    {amenity}
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 ml-2"
                      onClick={() => {
                        setSelectedRoom((prevRoom) =>
                          prevRoom
                            ? {
                                ...prevRoom,
                                amenities:
                                  prevRoom.amenities?.filter(
                                    (_, i) => i !== index
                                  ) ?? [],
                              }
                            : prevRoom
                        );
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end">
            <button
             type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoomModal;
