import { useParams } from 'react-router-dom';
import VehicleStatusBadge from './components/VehicleStatusBadge';

export default function VehicleDetails() {
  const { id } = useParams();

  // TODO: Fetch vehicle details from Redux store
  const vehicle = {
    id,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    color: 'Silver',
    licensePlate: 'ABC123',
    vinNumber: '1HGCM82633A123456',
    currentMileage: 15000,
    status: 'available' as const,
    insurance: {
      provider: 'ABC Insurance',
      policyNumber: 'POL123456',
      expiryDate: '2024-12-31',
      coverage: 'Full Coverage',
    },
    technicalInspection: {
      date: '2024-01-15',
      expiryDate: '2025-01-15',
      status: 'passed' as const,
      notes: 'All systems functioning properly',
    },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Vehicle Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </p>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <VehicleStatusBadge status={vehicle.status} />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">License Plate</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.licensePlate}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">VIN</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.vinNumber}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Current Mileage</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {vehicle.currentMileage.toLocaleString()} km
              </dd>
            </div>
          </dl>
        </div>

        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Insurance</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Provider</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.insurance.provider}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Policy Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.insurance.policyNumber}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.insurance.expiryDate}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}