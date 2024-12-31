import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import Customers from './pages/customers/Customers';
import Vehicles from './pages/vehicles/Vehicles';
import Rentals from './pages/rentals/Rentals';
import Settings from './pages/settings/Settings';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/customers/*" element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            } />
            <Route path="/vehicles/*" element={
              <PrivateRoute>
                <Vehicles />
              </PrivateRoute>
            } />
            <Route path="/rentals/*" element={
              <PrivateRoute>
                <Rentals />
              </PrivateRoute>
            } />
            <Route path="/settings" element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}