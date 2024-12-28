import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import customerReducer from './slices/customerSlice';
import vehicleReducer from './slices/vehicleSlice';
import rentalReducer from './slices/rentalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    vehicles: vehicleReducer,
    rentals: rentalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;