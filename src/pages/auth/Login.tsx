import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';

interface LoginForm {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
}).required();

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      dispatch(loginStart());
      // TODO: Replace with actual API call
      const response = { user: { id: '1', username: data.username, role: 'admin', name: 'Admin User' }, token: 'dummy-token' };
      dispatch(loginSuccess(response));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure(error instanceof Error ? error.message : 'Login failed'));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-gray-600 mb-8">Enter your credentials to access your account.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 block mb-2">Username</label>
              <input
                type="text"
                {...register('username')}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-2">Password</label>
              <input
                type="password"
                {...register('password')}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="border-gray-300 rounded-sm focus:ring-0 focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-gray-600 hover:text-black">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block w-1/2 bg-amber-300">
        <div className="h-full flex items-center justify-center p-12" style={{ backgroundImage: 'url(https://4kwallpapers.com/images/wallpapers/porsche-911-gt3-rs-1284x2778-12365.jpg)', backgroundSize: 'cover' , backgroundPosition: 'center' }}>
          {/* <img
            src="https://wallpapersmug.com/download/750x1334/de750e/porsche-gt3rs-yellow.jpg"
            alt="Car"
            className="max-w-full h-auto object-contain"
          /> */}
        </div>
      </div>
    </div>
  );
}