import { Routes, Route } from 'react-router-dom';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import VehicleDetails from './VehicleDetails';

export default function Vehicles() {
  return (
    <Routes>
      <Route index element={<VehicleList />} />
      <Route path="new" element={<VehicleForm />} />
      <Route path=":id" element={<VehicleDetails />} />
      <Route path=":id/edit" element={<VehicleForm />} />
    </Routes>
  );
}