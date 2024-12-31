import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Plus, X } from 'lucide-react';
import { RentalFormData, CustomerFormData } from '../../types';
import QuickCustomerForm from '../../components/customers/QuickCustomerForm';

const schema = yup.object({
  customerId: yup.string().required('Customer is required'),
  vehicleId: yup.string().required('Vehicle is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string().required('End date is required'),
  pickupLocation: yup.string().required('Pickup location is required'),
  returnLocation: yup.string().required('Return location is required'),
  dailyRate: yup.number().required('Daily rate is required').min(0),
  securityDeposit: yup.number().required('Security deposit is required').min(0),
  insuranceOption: yup.string().required('Insurance option is required'),
  additionalDrivers: yup.array().of(
    yup.object({
      fullName: yup.string().required('Driver name is required'),
      driverLicenseNumber: yup.string().required('License number is required'),
      driverLicenseExpiry: yup.string().required('License expiry date is required'),
    })
  ),
  termsAccepted: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  notes: yup.string(),
}).required();

export default function RentalForm() {
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RentalFormData>({
    resolver: yupResolver(schema)
  });

  const handleNewCustomer = (customerData: CustomerFormData) => {
    // TODO: Create new customer and get ID
    console.log('New customer data:', customerData);
    setShowNewCustomerForm(false);
  };

  const onSubmit = (data: RentalFormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">New Rental Agreement</h1>
      
      {showNewCustomerForm ? (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">New Customer</h2>
            <button
              type="button"
              onClick={() => setShowNewCustomerForm(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <QuickCustomerForm
            onSubmit={handleNewCustomer}
            onCancel={() => setShowNewCustomerForm(false)}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowNewCustomerForm(true)}
          className="mb-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Customer
        </button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Rental Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer</label>
              <select
                {...register('customerId')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a vehicle</option>
                {/* TODO: Add vehicle options */}
              </select>
              {errors.vehicleId && (
                <p className="mt-1 text-sm text-red-600">{errors.vehicleId.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="datetime-local"
                {...register('startDate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="datetime-local"
                {...register('endDate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.endDate && (
                <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Daily Rate</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  {...register('dailyRate')}
                  className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {errors.dailyRate && (
                <p className="mt-1 text-sm text-red-600">{errors.dailyRate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Security Deposit</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  {...register('securityDeposit')}
                  className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {errors.securityDeposit && (
                <p className="mt-1 text-sm text-red-600">{errors.securityDeposit.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Insurance & Additional Options</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Insurance Option</label>
              <select
                {...register('insuranceOption')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select insurance option</option>
                <option value="basic">Basic Coverage</option>
                <option value="premium">Premium Coverage</option>
                <option value="full">Full Coverage</option>
              </select>
              {errors.insuranceOption && (
                <p className="mt-1 text-sm text-red-600">{errors.insuranceOption.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                {...register('notes')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('termsAccepted')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                I accept the terms and conditions
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Rental Agreement
          </button>
        </div>
      </form>
    </div>
  );
}