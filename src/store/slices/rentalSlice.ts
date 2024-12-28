import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RentalContract } from '../../types';

interface RentalState {
  rentals: RentalContract[];
  selectedRental: RentalContract | null;
  loading: boolean;
  error: string | null;
}

const initialState: RentalState = {
  rentals: [],
  selectedRental: null,
  loading: false,
  error: null,
};

const rentalSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {
    fetchRentalsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRentalsSuccess: (state, action: PayloadAction<RentalContract[]>) => {
      state.loading = false;
      state.rentals = action.payload;
    },
    fetchRentalsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedRental: (state, action: PayloadAction<RentalContract>) => {
      state.selectedRental = action.payload;
    },
    clearSelectedRental: (state) => {
      state.selectedRental = null;
    },
  },
});

export const {
  fetchRentalsStart,
  fetchRentalsSuccess,
  fetchRentalsFailure,
  setSelectedRental,
  clearSelectedRental,
} = rentalSlice.actions;

export default rentalSlice.reducer;