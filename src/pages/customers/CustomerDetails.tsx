import { useParams } from 'react-router-dom';
import DocumentList from './components/DocumentList';

export default function CustomerDetails() {
  const { id } = useParams();

  // TODO: Fetch customer details from Redux store
  const customer = {
    id,
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
    birthplace: 'New York',
    nationality: 'American',
    idCardNumber: 'ID123456',
    idCardIssueDate: '2020-01-01',
    driverLicenseNumber: 'DL789012',
    driverLicenseExpiry: '2025-12-31',
    address: '123 Main St, New York, NY 10001',
    phoneNumber: '+1234567890',
    email: 'john.doe@example.com',
    documents: [
      {
        id: '1',
        type: 'id_card',
        url: '/documents/id-card.pdf',
        uploadedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: '2',
        type: 'driver_license',
        url: '/documents/driver-license.pdf',
        uploadedAt: '2024-01-15T10:00:00Z',
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Customer Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and documents.
          </p>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{customer.fullName}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{customer.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{customer.phoneNumber}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{customer.address}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Driver License</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {customer.driverLicenseNumber}
                <span className="ml-4 text-gray-500">
                  Expires: {new Date(customer.driverLicenseExpiry).toLocaleDateString()}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="px-4 py-5 sm:px-6">
          <DocumentList documents={customer.documents} />
        </div>
      </div>
    </div>
  );
}