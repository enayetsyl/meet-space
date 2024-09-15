import { AddSlotProps } from "../../../types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddSlotModal = ({
  handleAddSlot,
  newSlot,
  handleInputChange,
  setIsAddSlotModalOpen,
  rooms
}: AddSlotProps) => {

   // Helper function to format the date as yyyy-MM-dd
   const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
      <div className="bg-white mt-10 lg:mt-0 p-5 pt-5 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
        {" "}
        {/* Adjusted margin top */}
        <h2 className="text-2xl font-bold mb-5">Add Room</h2>
        <form onSubmit={handleAddSlot}>
        <div className="mb-4">
            <label className="block text-gray-700">Select Room</label>
            <select
              name="room"
              value={newSlot?.room || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room._id} value={room._id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <DatePicker
              selected={newSlot.date ? new Date(newSlot.date) : null}
              onChange={(date: Date | null) => handleInputChange({ target: { name: "date", value: formatDate(date) } })}
              dateFormat="yyyy-MM-dd"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Time</label>
            <input
              type="time"
              placeholder="Enter Start Time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="startTime"
              value={newSlot.startTime}
              onChange={handleInputChange}
              step="60"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Time</label>
            <input
              type="time"
              placeholder="Enter end time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="endTime"
              value={newSlot.endTime}
              onChange={handleInputChange}
              step="60"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Add Slot
            </button>
            <button
              onClick={() => setIsAddSlotModalOpen(false)}
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

export default AddSlotModal;
