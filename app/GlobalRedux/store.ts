'use client';

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import your reducers
import navbarReducer from "./Features/navbar/navbarSlice";
import bookingReducer from "./Features/booking/bookingSlice";
import menuReducer from "./Features/bookingMenu/menuSlice";
import appointmentsReducer from "./Features/appointments/appointmentsSlice";

// Combine your reducers
const rootReducer = combineReducers({
  navbar: navbarReducer,
  booking: bookingReducer,
  menu: menuReducer,
  appointments: appointmentsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage, 
  blacklist: ['navbar', 'booking', 'menu']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  // Add other store configuration options here if needed
});

// Create the Redux Persist store
export const persistor = persistStore(store);