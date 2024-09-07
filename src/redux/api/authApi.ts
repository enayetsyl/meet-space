import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://level-2-assignment-3-git-main-md-enayetur-rahmans-projects.vercel.app/api',
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: '/auth/signup',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    })
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
