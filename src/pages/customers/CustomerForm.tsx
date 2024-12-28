import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CustomerFormData } from './types';

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  birthplace: yup.string().required('Birthplace is required'),
  nationality: yup.string().required('Nationality is required'),
  idCardNumber: yup.string().required('ID card number is required'),
  idCardIssueDate: yup.string().required('ID card issue date is required'),
  driverLicenseNumber: yup.string().required('Driver license number is required'),
  driverLicenseExpiry: yup.string().required('Driver license expiry date is required'),
  address: yup.string().required('Address is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
}).required();

export default function CustomerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CustomerFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: CustomerFormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">New Customer</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                {...register('fullName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                {...register('dateOfBirth')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Identity Documents</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Card Number</label>
              <input
                type="text"
                {...register('idCardNumber')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.idCardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.idCardNumber.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Driver License Number</label>
              <input
                type="text"
                {...register('driverLicenseNumber')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.driverLicenseNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.driverLicenseNumber.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Driver License Expiry</label>
              <input
                type="date"
                {...register('driverLicenseExpiry')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.driverLicenseExpiry && (
                <p className="mt-1 text-sm text-red-600">{errors.driverLicenseExpiry.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
}