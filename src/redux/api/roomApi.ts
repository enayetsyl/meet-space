import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Room } from "../../types";

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://level-2-assignment-3-git-main-md-enayetur-rahmans-projects.vercel.app/api/rooms',
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token'); 
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); 
      }
      return headers;
    },
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
    updateRoom: builder.mutation<ApiResponse<Room>,{id: string; updatedRoom: Partial<Room>}>({
      query:({id, updatedRoom}) =>({
        url:`/${id}`,
        method: 'PUT',
        body:updatedRoom,
      }),
      invalidatesTags: ['Rooms']
    })
  }),
})

export const { useGetRoomsQuery, useGetRoomByIdQuery, useCreateRoomMutation, useUpdateRoomMutation  } = roomApi;