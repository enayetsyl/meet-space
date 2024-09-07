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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    errorElement: <Error404/>,
    children:[
      {
        path: "/", element: <Home/>
      },
      {
        path: "/meeting-rooms", element: <MeetingRooms/>
      },
      {
        path: "/about-us", element: <AboutUs/>
      },
      {
        path: "/contact-us", element: <ContactUs/>
      },
      {
        path: "/login", element: <Login/>
      },
      {
        path: "/sign-up", element: <SignUp/>
      },
      {
        path: "/my-bookings", element: <MyBookings/>
      },
      {
        path: "/single-room/:roomId", element: <RoomDetails/>
      },
      {
        path: "/checkout", element: <Checkout/>
      },
    ]
  },
  {
    path:"/dashboard",
    element: <AdminLayout/>,
    children:[
      {
        path: "/dashboard", element: <BookingManagement/>
      }, 
      {
        path: "/dashboard/room-management", element: <RoomManagement/>
      }, 
      {
        path: "/dashboard/slot-management", element: <SlotsManagement/>
      }, 
    ]
  }
]);

export default router;