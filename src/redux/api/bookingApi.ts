import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Booking } from "../../types";


export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api/bookings`,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if(token){
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ["bookings"],
  endpoints: (builder) => ({
    getAvailableBookings: builder.query<ApiResponse<Booking[]>,void>({
      query:(roomId) =>`/available-for-booking/${roomId}`,
      providesTags: ["bookings"],
    }),
    getMyBookings: builder.query<ApiResponse<Booking[]>, void>({
      query: () => "/my-bookings",
      providesTags: ["bookings"],
    }),
    getAllBookings: builder.query<ApiResponse<Booking[]>, void>({
      query: () => "/",
      providesTags: ["bookings"],
    }),
    createBooking: builder.mutation<ApiResponse<Booking>, Partial<Booking>>({
      query: (booking) => ({
        url:"/",
        method: "POST",
        body: booking,
      }),
      invalidatesTags: ["bookings"],
    }),
    updateBooking: builder.mutation<ApiResponse<Booking>, {id: string; updatedBooking: Partial<Booking>}>({
      query:({id, updatedBooking}) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedBooking,
      }),
      invalidatesTags: ["bookings"],
    }),
    deleteBooking: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),
  })
})

export const {
  useGetAvailableBookingsQuery,
  useGetMyBookingsQuery, 
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,

} = bookingApi;