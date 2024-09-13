import { AddSlotProps } from "../../../types";

const AddSlotModal = ({
  handleAddSlot,
  newSlot,
  handleInputChange,

  setIsAddSlotModalOpen,
}: AddSlotProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
      <div className="bg-white mt-10 lg:mt-0 p-5 pt-5 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
        {" "}
        {/* Adjusted margin top */}
        <h2 className="text-2xl font-bold mb-5">Add Room</h2>
        <form onSubmit={handleAddSlot}>
          <div className="mb-4">
            <label className="block text-gray-700">Room Number</label>
            <input
              type="text"
              placeholder="Enter room Id"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="room"
              value={newSlot?.room}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="text"
              placeholder="Enter date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="date"
              value={newSlot.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Time</label>
            <input
              type="text"
              placeholder="Enter Start Time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="text"
              value={newSlot.startTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Time</label>
            <input
              type="text"
              placeholder="Enter end time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="endTime"
              value={newSlot.endTime}
              onChange={handleInputChange}
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
