import { useParams } from 'react-router-dom';
import RentalStatusBadge from './components/RentalStatusBadge';

export default function RentalDetails() {
  const { id } = useParams();

  // TODO: Fetch rental details from Redux store
  const rental = {
    id,
    customerName: 'John Doe',
    vehicleName: '2023 Toyota Camry',
    startDate: '2024-03-01',
    endDate: '2024-03-07',
    status: 'active' as const,
    totalAmount: 420.00,
    pickupLocation: '123 Main St',
    returnLocation: '123 Main St',
    dailyRate: 60.00,
    securityDeposit: 500.00,
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Rental Agreement Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Agreement #{rental.id}
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1">
                <RentalStatusBadge status={rental.status} />
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
              <dd className="mt-1 text-sm text-gray-900">
                ${rental.totalAmount.toFixed(2)}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Customer</dt>
              <dd className="mt-1 text-sm text-gray-900">{rental.customerName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Vehicle</dt>
              <dd className="mt-1 text-sm text-gray-900">{rental.vehicleName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Rental Period</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {rental.startDate} - {rental.endDate}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Daily Rate</dt>
              <dd className="mt-1 text-sm text-gray-900">
                ${rental.dailyRate.toFixed(2)}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}