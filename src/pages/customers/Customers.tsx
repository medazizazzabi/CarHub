import { Routes, Route } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import CustomerDetails from './CustomerDetails';

export default function Customers() {
  return (
    <Routes>
      <Route index element={<CustomerList />} />
      <Route path="new" element={<CustomerForm />} />
      <Route path=":id" element={<CustomerDetails />} />
      <Route path=":id/edit" element={<CustomerForm />} />
    </Routes>
  );
}