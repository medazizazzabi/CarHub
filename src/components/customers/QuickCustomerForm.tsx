import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CustomerFormData } from '../../types';

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  idCardNumber: yup.string().required('ID number is required'),
  idCardIssueDate: yup.string().required('ID issue date is required'),
  idCardExpiryDate: yup.string().required('ID expiry date is required'),
  driverLicenseNumber: yup.string().required('Driver license number is required'),
  driverLicenseExpiry: yup.string().required('Driver license expiry date is required'),
  address: yup.string().required('Address is required'),
}).required();

interface QuickCustomerFormProps {
  onSubmit: (data: CustomerFormData) => void;
  onCancel: () => void;
}

export default function QuickCustomerForm({ onSubmit, onCancel }: QuickCustomerFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomerFormData>({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            {...register('fullName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ID Number</label>
          <input
            type="text"
            {...register('idCardNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.idCardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.idCardNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ID Expiry Date</label>
          <input
            type="date"
            {...register('idCardExpiryDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.idCardExpiryDate && (
            <p className="mt-1 text-sm text-red-600">{errors.idCardExpiryDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Driver License Number</label>
          <input
            type="text"
            {...register('driverLicenseNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.driverLicenseNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.driverLicenseNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">License Expiry Date</label>
          <input
            type="date"
            {...register('driverLicenseExpiry')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.driverLicenseExpiry && (
            <p className="mt-1 text-sm text-red-600">{errors.driverLicenseExpiry.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Customer
        </button>
      </div>
    </form>
  );
}