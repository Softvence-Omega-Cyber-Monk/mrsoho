import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice/counterSlice";
import authReducer from "./Slices/AuthSlice/authSlice";
import formReducer from "./Slices/FormSlice/FormSlice";
import { contactApi } from "./Slices/ContactSlice/contactApi"; // Import the new API

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    form: formReducer,
    [contactApi.reducerPath]: contactApi.reducer, // Add the API reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
