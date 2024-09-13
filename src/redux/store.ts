import { configureStore } from "@reduxjs/toolkit";
import { roomApi } from "./api/roomApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";
import authReducer from "./features/authSlice"
import { slotApi } from "./api/slotApi";

const store = configureStore({
  reducer: {
    [roomApi.reducerPath]: roomApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [slotApi.reducerPath]: slotApi.reducer,
    auth: authReducer,
  },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roomApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export  default store;