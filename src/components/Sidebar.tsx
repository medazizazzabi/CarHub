import { Link, useLocation } from 'react-router-dom';
import { Car, Users, CalendarRange, LayoutDashboard, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Vehicles', href: '/vehicles', icon: Car },
  { name: 'Rentals', href: '/rentals', icon: CalendarRange },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-900">
      <div className="flex h-16 items-center justify-center">
        <Car className="h-8 w-8 text-white" />
        <span className="ml-2 text-xl font-bold text-white">CarRental</span>
      </div>
      <nav className="mt-5 px-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`
                group flex items-center px-2 py-2 text-base font-medium rounded-md
                ${isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <item.icon
                className={`
                  mr-4 h-6 w-6 flex-shrink-0
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
                `}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}