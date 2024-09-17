import { useState } from "react";
import Button from "../../components/shared/Button";
import {
  useCreateRoomMutation,
  useDeleteRoomMutation,
  useGetRoomsQuery,
  useUpdateRoomMutation,
} from "../../redux/api/roomApi";
import { BackendError, Room } from "../../types";
import toast from "react-hot-toast";
import AddRoom from "../../components/admin/RoomManagement/AddRoom";
import EditRoomModal from "../../components/admin/RoomManagement/EditRoomModal";
import DeleteRoomModal from "../../components/admin/RoomManagement/DeleteRoomModal";

const RoomManagement = () => {
  const { data, refetch } = useGetRoomsQuery();
  const rooms: Room[] = data?.data || [];

  
  const [createRoom] = useCreateRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();
  const [deleteRoom] = useDeleteRoomMutation();

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
        amenities: [...(prevRoom.amenities ?? []), amenity], 
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

  const handleUpdateRoom = async (updatedRoom: Room) => {
    console.log("updated room", updatedRoom);
    const id = updatedRoom._id as string;
    try {
      const response = await updateRoom({ id, updatedRoom }).unwrap();
      console.log(response);
      if (response.statusCode === 200) {
        toast.success(`${response.message}`);
        setIsEditModalOpen(false);
      }
    } catch (error) {
      const backendError = error as BackendError;

      if (backendError?.message) {
        toast.error(`${backendError.message}`);
        console.log("Error Sources:", backendError.errorSources);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  const handleDeleteRoom = async (selectedRoom: Room) => {
    const id = selectedRoom._id as string;
    try {
      const response = await deleteRoom(id).unwrap();

      if (response.statusCode === 200) {
        toast.success(`${response.message}`);
        setIsDeleteModalOpen(false);
      }
    } catch (error) {
      const backendError = error as BackendError;

      if (backendError?.message) {
        toast.error(`${backendError.message}`);
        console.log("Error Sources:", backendError.errorSources);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleAddRoom = async (event: React.FormEvent<HTMLFormElement>) => {
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
      <h1 className="text-3xl font-bold mb-5">Room Dashboard</h1>

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
        <EditRoomModal
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          amenity={amenity}
          setAmenity={setAmenity}
          handleUpdateRoom={handleUpdateRoom}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteRoomModal
          selectedRoom={selectedRoom}
          handleDeleteRoom={handleDeleteRoom}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <AddRoom
          handleAddRoom={handleAddRoom}
          newRoom={newRoom}
          handleInputChange={handleInputChange}
          amenity={amenity}
          setAmenity={setAmenity}
          handleAddAmenity={handleAddAmenity}
          handleRemoveAmenity={handleRemoveAmenity}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      )}
    </div>
  );
};

export default RoomManagement;
