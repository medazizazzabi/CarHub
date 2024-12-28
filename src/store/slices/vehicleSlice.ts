import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../../types';

interface VehicleState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  loading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  vehicles: [],
  selectedVehicle: null,
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    fetchVehiclesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchVehiclesSuccess: (state, action: PayloadAction<Vehicle[]>) => {
      state.loading = false;
      state.vehicles = action.payload;
    },
    fetchVehiclesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.selectedVehicle = action.payload;
    },
    clearSelectedVehicle: (state) => {
      state.selectedVehicle = null;
    },
  },
});

export const {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
  setSelectedVehicle,
  clearSelectedVehicle,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;