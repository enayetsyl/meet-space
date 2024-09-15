import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Slot } from "../../types";


export const slotApi = createApi({
  reducerPath:"slotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api/slots`,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["slots"],
  endpoints:(builder) => ({
    getSlots: builder.query<ApiResponse<Slot[]>, void>({
      query: () => '/availability',
      providesTags: ["slots"],
    }),
    createSlot: builder.mutation<ApiResponse<Slot>, Partial<Slot>>({
      query: (slot) => ({
        url: '/',
        method: 'POST',
        body: slot,
      }),
      invalidatesTags: ["slots"],
    }), 
    updateSlot: builder.mutation<ApiResponse<Slot>, {id: string; updatedSlot: Partial<Slot>}>({
      query:({id, updatedSlot})=>({
        url: `/${id}`,
        method: 'PUT',
        body: updatedSlot
      }),
      invalidatesTags: ["slots"],
    }),
    deleteSlot: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["slots"],
    })
  })
})

export const {
  useGetSlotsQuery,
  useCreateSlotMutation,
  useUpdateSlotMutation,
  useDeleteSlotMutation 
} = slotApi;