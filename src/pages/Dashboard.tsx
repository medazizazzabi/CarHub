import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Car, Users, CalendarRange, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);

  const stats = [
    { name: 'Total Vehicles', value: '24', icon: Car, color: 'bg-blue-500' },
    { name: 'Active Customers', value: '156', icon: Users, color: 'bg-green-500' },
    { name: 'Current Rentals', value: '18', icon: CalendarRange, color: 'bg-purple-500' },
    { name: 'Maintenance Due', value: '3', icon: AlertTriangle, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="mt-1 text-sm text-gray-500">Here's what's happening with your fleet today.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${item.color}`}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}