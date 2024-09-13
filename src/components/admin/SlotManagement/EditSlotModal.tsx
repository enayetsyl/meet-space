import { EditSlotModalProps } from "../../../types";

const EditSlotModal = ({ selectedSlot,
  setSelectedSlot,
  handleEditSlot,
  setIsEditSlotModalOpen}: EditSlotModalProps) => {
      // Form submission handler
      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission
    
        if (selectedSlot) {
          handleEditSlot(selectedSlot); // Call the update function with the selected room
        }
      };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10 ">
      <div className="bg-white  mt-10 lg:mt-0 p-5 pt-40 lg:pt-20 rounded-lg shadow-lg w-[80%] lg:w-1/2">
        {" "}
        {/* Adjust width if necessary */}
        <h2 className="text-2xl font-bold mb-5">Edit Slot</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Room</label>
            <input
              type="text"
              name="room"
              value={selectedSlot?.room || ""}
              onChange={(e) =>
                setSelectedSlot((prevSlot) =>
                  prevSlot ? { ...prevSlot, room: e.target.value } : prevSlot
                )
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="number"
              value={selectedSlot?.date}
              onChange={(e) =>
                setSelectedSlot((prevSlot) =>
                  prevSlot
                    ? { ...prevSlot, date: e.target.value }
                    : prevSlot
                )
              }
              name="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Start Time</label>
            <input
              type="number"
              name="startTime"
              value={selectedSlot?.startTime}
              onChange={(e) =>
                setSelectedSlot((prevSlot) =>
                  prevSlot
                    ? { ...prevSlot, startTime: e.target.value }
                    : prevSlot
                )
              }
              placeholder="Enter Start Time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Time</label>
            <input
              type="number"
              name="endTime"
              value={selectedSlot?.endTime}
              onChange={(e) =>
                setSelectedSlot((prevSlot) =>
                  prevSlot
                    ? { ...prevSlot, endTime: e.target.value }
                    : prevSlot
                )
              }
              placeholder="Enter end time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
      
         

          <div className="flex justify-end">
            <button
             type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditSlotModalOpen(false)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSlotModal