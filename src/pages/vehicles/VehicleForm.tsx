import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { VehicleFormData } from './types';

const schema = yup.object({
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required'),
  type: yup.string().required('Type is required'),
  year: yup.number()
    .required('Year is required')
    .min(1900, 'Invalid year')
    .max(new Date().getFullYear() + 1, 'Invalid year'),
  color: yup.string().required('Color is required'),
  licensePlate: yup.string().required('License plate is required'),
  vinNumber: yup.string().required('VIN number is required'),
  currentMileage: yup.number().required('Current mileage is required').min(0),
  status: yup.string().required('Status is required'),
  insurance: yup.object({
    provider: yup.string().required('Insurance provider is required'),
    policyNumber: yup.string().required('Policy number is required'),
    expiryDate: yup.string().required('Expiry date is required'),
    coverage: yup.string().required('Coverage details are required'),
  }),
  technicalInspection: yup.object({
    date: yup.string().required('Inspection date is required'),
    expiryDate: yup.string().required('Expiry date is required'),
    status: yup.string().required('Inspection status is required'),
    notes: yup.string(),
  }),
}).required();

export default function VehicleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<VehicleFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: VehicleFormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Add New Vehicle</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Vehicle Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Make</label>
              <input
                type="text"
                {...register('make')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.make && (
                <p className="mt-1 text-sm text-red-600">{errors.make.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Model</label>
              <input
                type="text"
                {...register('model')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.model && (
                <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Year</label>
              <input
                type="number"
                {...register('year')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.year && (
                <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                {...register('status')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select status</option>
                <option value="available">Available</option>
                <option value="rented">Rented</option>
                <option value="maintenance">Maintenance</option>
                <option value="retired">Retired</option>
              </select>
              {errors.status && (
                <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Insurance Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Provider</label>
              <input
                type="text"
                {...register('insurance.provider')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.insurance?.provider && (
                <p className="mt-1 text-sm text-red-600">{errors.insurance.provider.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="date"
                {...register('insurance.expiryDate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.insurance?.expiryDate && (
                <p className="mt-1 text-sm text-red-600">{errors.insurance.expiryDate.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
}