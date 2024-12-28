import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RentalFormData } from './types';

const schema = yup.object({
  customerId: yup.string().required('Customer is required'),
  vehicleId: yup.string().required('Vehicle is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string().required('End date is required'),
  pickupLocation: yup.string().required('Pickup location is required'),
  returnLocation: yup.string().required('Return location is required'),
  dailyRate: yup.number().required('Daily rate is required').min(0),
  securityDeposit: yup.number().required('Security deposit is required').min(0),
  primaryDriver: yup.object({
    fullName: yup.string().required('Driver name is required'),
    driverLicenseNumber: yup.string().required('License number is required'),
    driverLicenseExpiry: yup.string().required('License expiry date is required'),
  }),
}).required();

export default function RentalForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RentalFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: RentalFormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">New Rental Agreement</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Customer</label>
            <select
              {...register('customerId')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select a customer</option>
              {/* TODO: Add customer options */}
            </select>
            {errors.customerId && (
              <p className="mt-1 text-sm text-red-600">{errors.customerId.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Vehicle</label>
            <select
              {...register('vehicleId')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select a vehicle</option>
              {/* TODO: Add vehicle options */}
            </select>
            {errors.vehicleId && (
              <p className="mt-1 text-sm text-red-600">{errors.vehicleId.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              {...register('startDate')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              {...register('endDate')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.endDate && (
              <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Rental Agreement
        </button>
      </form>
    </div>
  );
}