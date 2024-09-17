import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useGetAvailableBookingsQuery } from "../../redux/api/bookingApi";
import { Booking as BookingType, Slot } from "../../types";
import { useEffect, useState } from "react";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state;
  const { data } = useGetAvailableBookingsQuery(room._id);
  const availableSlotsForBooking: BookingType[] = data?.data || [];
  // Access the user from the Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  

  // State to manage the selected date and available time slots for that date
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<BookingType[]>([]);

  // Automatically set the first available date with available slots
  useEffect(() => {
    if (availableSlotsForBooking.length > 0) {
      const firstAvailableSlot = availableSlotsForBooking.find(
        (slot) => !slot.isBooked
      );
      if (firstAvailableSlot) {
        setSelectedDate(firstAvailableSlot.date);
        const slotsForDate = availableSlotsForBooking.filter(
          (slot) => slot.date === firstAvailableSlot.date && !slot.isBooked
        );
        setAvailableSlots(slotsForDate);
      }
    }
  }, [availableSlotsForBooking]);

  // Handle date change and filter available slots for the selected date
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const chosenDate = event.target.value;
    setSelectedDate(chosenDate);

    // Filter available time slots for the selected date
    const slotsForDate = availableSlotsForBooking.filter(
      (slot) => slot.date === chosenDate && !slot.isBooked
    );
    setAvailableSlots(slotsForDate);
  };

  const handleCheckout = (slot:Slot) => {

    navigate('/checkout', { state: {  slot, room, user } })
  }
  

  return (
    <div className="px-5 md:px-20 bg-white pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 pt-20 md:pt-0 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
        Booking Page for {room.name}
      </h1>

      <div className="flex justify-center items-center flex-col md:flex-row gap-10 md:gap-0 p-5">
        {/* Date and time selection */}
        <div className="flex-1 w-full md:w-1/2">
          <h2 className="text-2xl mb-5 text-customOrange">Booking Information</h2>
          <div className="flex justify-start items-center gap-5">
            <h2 className="font-bold">Select Booking Date</h2>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border-2 border-[#f5f5f5] rounded-md p-2 cursor-pointer"
            />
          </div>

          {/* Display available time slots */}
         <div className="flex justify-start items-start gap-5">
           <h3 className="font-bold pt-5">Available Time Slots</h3>
          {availableSlots.length > 0 ? (
            <ul className="pt-5">
              {availableSlots.map((slot) => (
                <li key={slot._id} className="py-2">
                  <div className="flex justify-start items-center gap-5">
                    <p>
                      {slot.startTime} - {slot.endTime}
                    </p>
                 
                   <button className="bg-customOrange hover:bg-customGreen px-5 py-2 text-white font-semibold text-lg"
                   onClick={()=>handleCheckout(slot)}
                   >
                      Book Now
                    </button>
                 
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No available time slots for this date.</p>
          )}
         </div>
        </div>

        {/* User information form (pre-filled) */}
        <div className="bg-[#f5f5f5] shadow-md p-5 flex-1 w-full md:w-1/2">
          <h2 className="text-2xl mb-5 text-customOrange">User Information</h2>
          <form className="flex flex-col gap-5">
            <label>
              Name:
              <input
                type="text"
                className="ml-3 py-1 px-3"
                value={user?.name || ""}
                readOnly
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                className="ml-3 py-1 px-3"
                value={user?.email || ""}
                readOnly
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                className="ml-3 py-1 px-3 w-[80%]"
                value={user?.address || ""}
                readOnly
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                className="ml-3 py-1 px-3"
                value={user?.phone || ""}
                readOnly
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
