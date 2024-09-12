import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Room } from "../../types";

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://level-2-assignment-3-git-main-md-enayetur-rahmans-projects.vercel.app/api/rooms',
  }),
  tagTypes: ['Rooms'],
  endpoints: (builder) => ({
    getRooms: builder.query<ApiResponse<Room[]>, void>({
      query: () => '/',
      providesTags: ['Rooms'],
    }),
    getRoomById: builder.query<ApiResponse<Room>, string>({
      query: (id) => `/${id}`,
      providesTags: ['Rooms'],
    }),
    createRoom: builder.mutation<ApiResponse<Room>, Partial<Room>>({
      query: (newRoom) => ({
        url: '/',
        method: 'POST',
        body: newRoom,
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
})

export const { useGetRoomsQuery, useGetRoomByIdQuery, useCreateRoomMutation } = roomApi;