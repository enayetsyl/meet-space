import { DeleteSlotModalProps } from "../../../types";

const DeleteSlotModal = ({
  selectedSlot,
  handleDeleteSlot,
  setIsDeleteSlotModalOpen,
}: DeleteSlotModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Delete Slot</h2>
        <p>Are you sure you want to delete this Slot?</p>
        <div className="flex justify-end mt-5">
          <button
            onClick={() => {
              if (selectedSlot) {
                handleDeleteSlot(selectedSlot);
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={() => setIsDeleteSlotModalOpen(false)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSlotModal;
