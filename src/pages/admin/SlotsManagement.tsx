import { useState } from "react";
import {
  useCreateSlotMutation,
  useDeleteSlotMutation,
  useGetSlotsQuery,
  useUpdateSlotMutation,
} from "../../redux/api/slotApi";
import { BackendError, Room, Slot } from "../../types";
import toast from "react-hot-toast";
import Button from "../../components/shared/Button";
import EditSlotModal from "../../components/admin/SlotManagement/EditSlotModal";
import DeleteSlotModal from "../../components/admin/SlotManagement/DeleteSlotModal";
import AddSlotModal from "../../components/admin/SlotManagement/AddSlotModal";
import { useGetRoomsQuery } from "../../redux/api/roomApi";

const SlotsManagement = () => {
  const { data, refetch } = useGetSlotsQuery();
  const slots: Slot[] = data?.data || [];

  const { data: roomsData } = useGetRoomsQuery();
  const rooms: Room[] = roomsData?.data || [];

  const [createSlot] = useCreateSlotMutation();
  const [updateSlot] = useUpdateSlotMutation();
  const [deleteSlot] = useDeleteSlotMutation();

  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [newSlot, setNewSlot] = useState<{
    room: string;
    date: string;
    startTime: string;
    endTime: string;
  }>({
    room: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const [isAddSlotModalOpen, setIsAddSlotModalOpen] = useState(false);
  const [isEditSlotModalOpen, setIsEditSlotModalOpen] = useState(false);
  const [isDeleteSlotModalOpen, setIsDeleteSlotModalOpen] = useState(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: Date | string } }
  ) => {
    const { name, value } = e.target;

    // If the field is "date" and the value is a Date object, format it to a string
    const formattedValue =
      name === "date" && value instanceof Date
        ? `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(value.getDate()).padStart(2, "0")}`
        : value;

    setNewSlot((prevSlot) => ({
      ...prevSlot,
      [name]: formattedValue,
    }));
  };

  const openAddSlotModal = () => {
    setIsAddSlotModalOpen(true);
  };
  const openEditSlotModal = (slot: Slot) => {
    setSelectedSlot(slot);
    setIsEditSlotModalOpen(true);
  };
  const openDeleteSlotModal = (slot: Slot) => {
    setSelectedSlot(slot);
    setIsDeleteSlotModalOpen(true);
  };

  const handleAddSlot = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createSlot(newSlot).unwrap();
      console.log("Response add slot:", response);
      if (response.statusCode === 200) {
        toast.success(`${response.message}`);
      }

      setIsAddSlotModalOpen(false);
      refetch();

      setNewSlot({
        room: "",
        date: "",
        startTime: "",
        endTime: "",
      });
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

  const handleEditSlot = async (updatedSlot: Slot) => {
    const id = updatedSlot._id as string;

    // Extract start and end times
    const [startHour, startMinute] = updatedSlot.startTime
      .split(":")
      .map(Number);
    const [endHour, endMinute] = updatedSlot.endTime.split(":").map(Number);

    // Calculate the total time difference in minutes
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;
    const timeDifference = endTotalMinutes - startTotalMinutes;

    // Check if the difference is more than 60 minutes (1 hour)
    if (timeDifference > 60) {
      // Show an error message
      toast.error(
        "The time difference between start and end time should not exceed 1 hour."
      );
      return; // Prevent further execution
    }

    try {
      const response = await updateSlot({ id, updatedSlot }).unwrap();
      console.log("Response edit slot:", response);
      if (response.statusCode === 200) {
        toast.success(`${response.message}`);
        setIsEditSlotModalOpen(false);
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

  const handleDeleteSlot = async (selectedSlot: Slot) => {
    const id = selectedSlot._id as string;
    try {
      const response = await deleteSlot(id).unwrap();
      if (response.statusCode === 200) {
        toast.success(`${response.message}`);
        setIsDeleteSlotModalOpen(false);
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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Slot Dashboard</h1>

      {/* Add Slot Button */}
      <button
        onClick={openAddSlotModal}
        className="mb-5  text-white px-4 py-2  bg-customOrange hover:bg-customGreen transition"
      >
        Add Slot
      </button>

      {/* Slot List Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-x-auto">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left font-bold">Room Name</th>
              <th className="px-6 py-4 text-left font-bold">Date</th>
              <th className="px-6 py-4 text-left font-bold">Start Time</th>
              <th className="px-6 py-4 text-left font-bold">End Time</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {slots?.map((slot) => (
              <tr key={slot._id} className="border-t">
                <td className="px-6 py-4">{slot.room.name}</td>
                <td className="px-6 py-4">{slot.date}</td>
                <td className="px-6 py-4">{slot.startTime}</td>
                <td className="px-6 py-4">{slot.endTime}</td>
                <td className="px-6 py-4 flex gap-1 flex-wrap">
                  <Button
                    onClick={() => openEditSlotModal(slot)}
                    className=" px-4 py-2  bg-customOrange hover:bg-customGreen transition"
                    size="small"
                    type="button"
                    variant="primary"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => openDeleteSlotModal(slot)}
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
      {isEditSlotModalOpen && (
        <EditSlotModal
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          handleEditSlot={handleEditSlot}
          setIsEditSlotModalOpen={setIsEditSlotModalOpen}
          rooms={rooms}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteSlotModalOpen && (
        <DeleteSlotModal
          selectedSlot={selectedSlot}
          handleDeleteSlot={handleDeleteSlot}
          setIsDeleteSlotModalOpen={setIsDeleteSlotModalOpen}
        />
      )}

      {/* Add Product Modal */}
      {isAddSlotModalOpen && (
        <AddSlotModal
          handleAddSlot={handleAddSlot}
          newSlot={newSlot}
          handleInputChange={handleInputChange}
          setIsAddSlotModalOpen={setIsAddSlotModalOpen}
          rooms={rooms}
        />
      )}
    </div>
  );
};

export default SlotsManagement;
