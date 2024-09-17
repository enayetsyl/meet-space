
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetMyBookingsQuery } from "../../redux/api/bookingApi";


const MyBookings = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data} = useGetMyBookingsQuery();

  const bookings  = data?.data || [];

  console.log('bookings', bookings)

  return (
    <div className="px-5 md:px-20 bg-white pb-32">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center py-10 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">Welcome, {user?.name}</h1>
      <h3 className="text-center text-2xl font-bold py-5">Your Bookings</h3>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-x-auto">
          <thead>
          <tr>
              <th className="px-6 py-4 text-left font-bold">Room Name</th>
              <th className="px-6 py-4 text-left font-bold">Date</th>
              <th className="px-6 py-4 text-left font-bold">Time</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
            </tr>
         
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="border-t">
              <td className="px-6 py-4">{booking.room.name}</td>
              <td className="px-6 py-4">{booking.slots[0].date}</td>
              <td className="px-6 py-4">{booking.slots[0].startTime} - {booking.slots[0].endTime}</td>
              <td className="px-6 py-4 capitalize">{booking.isConfirmed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default MyBookings