import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/public/Home";
import AdminLayout from "../layout/AdminLayout";
import BookingManagement from "../pages/admin/BookingManagement";
import MeetingRooms from "../pages/public/MeetingRooms";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";
import MyBookings from "../pages/public/MyBookings";
import RoomDetails from "../pages/public/RoomDetails";
import Checkout from "../pages/public/Checkout";
import RoomManagement from "../pages/admin/RoomManagement";
import SlotsManagement from "../pages/admin/SlotsManagement";
import Error404 from "../pages/public/Error404";
import Booking from "../pages/public/Booking";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/public/Payment";
import PaymentSuccess from "../components/pages/Payment/PaymentSuccess";
import AdminRoute from "./AdminRoute";
import Unauthorized from "../pages/public/Unauthorized";

const router = createBrowserRouter([
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <MeetingRooms />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute role="user">
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/single-room/:roomId",
        element: (
          <PrivateRoute role="user">
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard/booking-management",
        element: <AdminRoute><BookingManagement /></AdminRoute>,
      },
      {
        path: "/dashboard/room-management",
        element: <AdminRoute><RoomManagement /></AdminRoute>,
      },
      {
        path: "/dashboard/slot-management",
        element: <AdminRoute><SlotsManagement /></AdminRoute>,
      },
    ],
  },
]);

export default router;
