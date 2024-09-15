import { AddRoomProps } from "../../../types";




const AddRoom = ({handleAddRoom,newRoom, handleInputChange, amenity, setAmenity, handleAddAmenity, handleRemoveAmenity, setIsAddModalOpen }: AddRoomProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
          <div className="bg-white mt-10 lg:mt-0 p-5 pt-5 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
            {" "}
            {/* Adjusted margin top */}
            <h2 className="text-2xl font-bold mb-5">Add Room</h2>
            <form onSubmit={handleAddRoom}>
              <div className="mb-4">
                <label className="block text-gray-700">Room Name</label>
                <input
                  type="text"
                  placeholder="Enter room  name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="name"
                  value={newRoom.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Room No</label>
                <input
                  type="number"
                  placeholder="Enter room  name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="roomNo"
                  value={newRoom.roomNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Floor No</label>
                <input
                  type="number"
                  placeholder="Enter floor number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="floorNo"
                  value={newRoom.floorNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Capacity</label>
                <input
                  type="number"
                  placeholder="Enter capacity"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="capacity"
                  value={newRoom.capacity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price Per Slot</label>
                <input
                  type="number"
                  placeholder="Enter product rating"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="pricePerSlot"
                  value={newRoom.pricePerSlot}
                  onChange={handleInputChange}
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
                    onClick={handleAddAmenity}
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Display added amenities */}
              {newRoom?.amenities && newRoom.amenities.length > 0 && (
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Added Amenities:
                  </label>
                  <ul className="list-disc pl-5">
                    {newRoom?.amenities?.map((amenity, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        {amenity}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 ml-2"
                          onClick={() => handleRemoveAmenity(index)}
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
                  type='submit'
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Add Room
                </button>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddRoom