import { configureStore } from "@reduxjs/toolkit";
import { roomApi } from "./api/roomApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [roomApi.reducerPath]: roomApi.reducer,
  },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roomApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export  default store;