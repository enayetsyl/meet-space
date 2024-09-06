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
  })
})

export const { useGetRoomsQuery } = roomApi;