import { useState } from "react";
import Button from "../../components/shared/Button";
import {
  useCreateRoomMutation,
  useGetRoomsQuery,
} from "../../redux/api/roomApi";
import { BackendError, Room } from "../../types";
import toast from "react-hot-toast";

const RoomManagement = () => {
  const { data, refetch } = useGetRoomsQuery();
  const rooms: Room[] = data?.data || [];
  const [createRoom] = useCreateRoomMutation();

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const [newRoom, setNewRoom] = useState<Room>({
    name: "",
    pricePerSlot: 0,
    roomNo: 0,
    floorNo: 0,
    capacity: 0,
    amenities: [],
  });
  const [amenity, setAmenity] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  // Add amenity to the list
  const handleAddAmenity = () => {
    if (amenity.trim() !== "") {
      setNewRoom((prevRoom) => ({
        ...prevRoom,
        amenities: [...(prevRoom.amenities ?? []), amenity], // Provide a default empty array if amenities is undefined
      }));
      setAmenity("");
    }
  };

  // Remove amenity from the list
  const handleRemoveAmenity = (index: number) => {
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      amenities: (prevRoom.amenities ?? []).filter((_, i) => i !== index),
    }));
  };

  const openEditModal = (room: Room) => {
    setSelectedRoom(room);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (room: Room) => {
    setSelectedRoom(room);
    setIsDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleUpdateProduct = (room: Room) => {
    console.log(room);
  };
  const handleDeleteProduct = (room: Room) => {
    console.log(room);
  };
  const handleAddProduct = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newRoom);
    try {
      const dataToSend = {
        ...newRoom,
        roomNo: Number(newRoom.roomNo),
        pricePerSlot: Number(newRoom.pricePerSlot),
        floorNo: Number(newRoom.floorNo),
        capacity: Number(newRoom.capacity),
      };

      await createRoom(dataToSend).unwrap();
      setIsAddModalOpen(false);
      refetch();

      setNewRoom({
        name: "",
        pricePerSlot: 0,
        roomNo: 0,
        floorNo: 0,
        capacity: 0,
        amenities: [],
      });
    } catch (error) {
      const backendError = error as BackendError;

      if (backendError?.message) {
        toast.error(backendError.message);
        console.log("Error Sources:", backendError.errorSources);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Products Dashboard</h1>

      {/* Add Product Button */}
      <button
        onClick={openAddModal}
        className="mb-5  text-white px-4 py-2  bg-customOrange hover:bg-customGreen transition"
      >
        Add Room
      </button>

      {/* Room List Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-x-auto">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left font-bold">Room Name</th>
              <th className="px-6 py-4 text-left font-bold">Room No</th>
              <th className="px-6 py-4 text-left font-bold">Floor No</th>
              <th className="px-6 py-4 text-left font-bold">Price Per Slot</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((room) => (
              <tr key={room._id} className="border-t">
                <td className="px-6 py-4">{room.name}</td>
                <td className="px-6 py-4">{room.roomNo}</td>
                <td className="px-6 py-4">{room.floorNo}</td>
                <td className="px-6 py-4">${room.pricePerSlot}</td>
                <td className="px-6 py-4 flex gap-1 flex-wrap">
                  <Button
                    onClick={() => openEditModal(room)}
                    className=" px-4 py-2  bg-customOrange hover:bg-customGreen transition"
                    size="small"
                    type="button"
                    variant="primary"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => openDeleteModal(room)}
                    className=" text-white px-[19px] py-2  hover:bg-red-600 transition"
                    variant="danger"
                    size="small"
                    type="button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10 ">
          <div className="bg-white  mt-10 lg:mt-0 p-5 pt-40 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
            {" "}
            {/* Adjust width if necessary */}
            <h2 className="text-2xl font-bold mb-5">Edit Room</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Room Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedRoom?.name || ""}
                  onChange={(e) =>
                    setSelectedRoom((prevRoom) =>
                      prevRoom
                        ? { ...prevRoom, name: e.target.value }
                        : prevRoom
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
                                amenities: [
                                  ...(prevRoom.amenities ?? []),
                                  amenity,
                                ],
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
                  <label className="block text-gray-700">
                    Added Amenities:
                  </label>
                  <ul className="list-disc pl-5">
                    {(selectedRoom?.amenities ?? []).map((amenity, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
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
                   onClick={() => {
                    if (selectedRoom) {
                      handleUpdateProduct(selectedRoom);
                    }
                  }}
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
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-5">
              <button
                onClick={() => {
                  if (selectedRoom) {
                    handleDeleteProduct(selectedRoom);
                  }
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
          <div className="bg-white mt-10 lg:mt-0 p-5 pt-5 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
            {" "}
            {/* Adjusted margin top */}
            <h2 className="text-2xl font-bold mb-5">Add Room</h2>
            <form onSubmit={handleAddProduct}>
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
              {selectedRoom?.amenities && selectedRoom.amenities.length > 0 && (
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
      )}
    </div>
  );
};

export default RoomManagement;
