import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-1" />
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <Bell className="h-6 w-6" />
            </button>

            <div className="ml-3 relative">
              <div className="flex items-center">
                <button
                  type="button"
                  className="flex items-center max-w-xs rounded-full text-sm focus:outline-none"
                >
                  <User className="h-8 w-8 rounded-full bg-gray-100 p-1" />
                  <span className="ml-3 text-sm font-medium text-gray-700">{user?.name}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}