import { useState } from "react";
import Button from "../../components/shared/Button";
import { useDeleteBookingMutation, useGetAllBookingsQuery, useUpdateBookingMutation } from "../../redux/api/bookingApi";

import DeleteBookingModal from "../../components/admin/BookingManagement/DeleteBookingModal";
import ApproveBookingModal from "../../components/admin/BookingManagement/ApproveBookingModal";
import RejectBookingModal from "../../components/admin/BookingManagement/RejectBookingModal";
import {  BackendError, BookingData } from "../../types";
import toast from "react-hot-toast";

const BookingManagement = () => {
  const { data, refetch} = useGetAllBookingsQuery();
  const bookings = data?.data || []

  const [updateBooking] = useUpdateBookingMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(null);
  const [isApproveBookingModalOpen, setIsApproveBookingModalOpen] = useState(false);
  const [isRejectBookingModalOpen, setIsRejectBookingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openApproveModal = (booking: BookingData) => {
    setSelectedBooking(booking);
    setIsApproveBookingModalOpen(true);
  };

  const openRejectModal = (booking: BookingData) => {
    setSelectedBooking(booking);
    setIsRejectBookingModalOpen(true);
  };

  const openDeleteModal = (booking: BookingData) => {
    setSelectedBooking(booking);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteBooking = async (selectedBooking: BookingData) => {
    const id = selectedBooking._id as string;
    try {
      const response = await deleteBooking(id).unwrap();
      if(response.statusCode === 200) {
        toast.success("Booking deleted successfully");
        refetch();
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
  }

  const handleApproveBooking = async (selectedBooking: BookingData) => {
    const id = selectedBooking._id as string;
    try {
      const response = await updateBooking({ 
        id, 
        updatedBooking: { 
          isConfirmed: "confirmed" 
        } 
      }).unwrap();
      if(response.statusCode === 200) {
        toast.success("Booking approved successfully");
        refetch();
        setIsApproveBookingModalOpen(false);
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
    }

  const handleRejectBooking = async (selectedBooking: BookingData) => {
    const id = selectedBooking._id as string;
    try {
      const response = await updateBooking({ 
        id, 
        updatedBooking: { 
          isConfirmed: "canceled" 
        } 
      }).unwrap();
      if(response.statusCode === 200) {
        toast.success("Booking canceled successfully");
        refetch();
        setIsRejectBookingModalOpen(false);
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
    }

  return (
    <div className="p-5">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pt-10 pb-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">Booking Dashboard</h1>
      {/* Booking List Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-x-auto">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left font-bold">Room Name</th>
              <th className="px-6 py-4 text-left font-bold">User Name</th>
              <th className="px-6 py-4 text-left font-bold">Date</th>
              <th className="px-6 py-4 text-left font-bold">Time</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking._id} className="border-t">
                <td className="px-6 py-4">{booking.room.name}</td>
                <td className="px-6 py-4">{booking.user.name}</td>
                <td className="px-6 py-4">{booking.slots[0].date}</td>
                <td className="px-6 py-4">{booking.slots[0].startTime} - {booking.slots[0].endTime} </td>
                <td className="px-6 py-4 capitalize">{booking.isConfirmed}</td>
                <td className="px-6 py-4 flex gap-1 flex-wrap">
                  <Button
                    onClick={() => openApproveModal(booking)}
                    className=" px-4 py-2  bg-customOrange hover:bg-customGreen transition"
                    size="small"
                    type="button"
                    variant="primary"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => openRejectModal(booking)}
                    className=" text-white px-[19px] py-2  hover:bg-red-600 transition"
                    size="small"
                    type="button"
                    variant="danger"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => openDeleteModal(booking)}
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
    

      {/* Approve Booking Modal */}
      {isApproveBookingModalOpen && (
        <ApproveBookingModal
          selectedBooking={selectedBooking}
          handleApproveBooking={handleApproveBooking}
          setIsApproveBookingModalOpen={setIsApproveBookingModalOpen}
        />
      )}
     
      {/* Reject Booking  Modal */}
      {isRejectBookingModalOpen && (
        <RejectBookingModal
          selectedBooking={selectedBooking}
          handleRejectBooking={handleRejectBooking}
          setIsRejectBookingModalOpen={setIsRejectBookingModalOpen}
        />
      )}

 {/* Delete Booking  Modal */}
 {isDeleteModalOpen && (
        <DeleteBookingModal
          selectedBooking={selectedBooking}
          handleDeleteBooking={handleDeleteBooking}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
    
    </div>
  );
}

export default BookingManagement