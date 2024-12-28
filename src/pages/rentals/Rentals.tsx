import { Routes, Route } from 'react-router-dom';
import RentalList from './RentalList';
import RentalForm from './RentalForm';
import RentalDetails from './RentalDetails';

export default function Rentals() {
  return (
    <Routes>
      <Route index element={<RentalList />} />
      <Route path="new" element={<RentalForm />} />
      <Route path=":id" element={<RentalDetails />} />
      <Route path=":id/edit" element={<RentalForm />} />
    </Routes>
  );
}