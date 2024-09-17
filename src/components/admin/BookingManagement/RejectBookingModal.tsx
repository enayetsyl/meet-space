import { RejectBookingModalProps } from "../../../types";

const RejectBookingModal = ({
  selectedBooking,
  handleRejectBooking,
  setIsRejectBookingModalOpen,
}: RejectBookingModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Delete Room</h2>
        <p>Are you sure you want to delete this room?</p>
        <div className="flex justify-end mt-5">
          <button
            onClick={() => {
              if (selectedBooking) {
                handleRejectBooking(selectedBooking);
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Reject
          </button>
          <button
            onClick={() => setIsRejectBookingModalOpen(false)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectBookingModal;
