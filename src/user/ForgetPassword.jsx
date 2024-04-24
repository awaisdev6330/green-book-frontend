import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function ForgetPassword() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-14 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://thechildrengreenbook.net/assets/images/_logo.png"
          alt="Your Company"
        />
        <h2 className={`mt-5 text-center text-2xl font-bold leading-9 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Change your Password
        </h2>
        <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
          Your Password has expired. Please choose a new password.
        </p>
      </div>

      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="oldPassword"
                className={`block text-sm font-medium leading-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Old Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                autoComplete="current-password"
                required
                className={`block w-full rounded-md border-0 py-1.5 ${isDarkMode ? 'text-white bg-slate-800' : 'text-gray-900 bg-white'} shadow-sm ring-1 ring-inset ${isDarkMode ? 'ring-gray-700' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="newPassword"
                className={`block text-sm font-medium leading-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                New Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className={`block w-full rounded-md border-0 py-1.5 ${isDarkMode ? 'text-white bg-slate-800' : 'text-gray-900 bg-white'} shadow-sm ring-1 ring-inset ${isDarkMode ? 'ring-gray-700' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className={`block text-sm font-medium leading-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Confirm New Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className={`block w-full rounded-md border-0 py-1.5 ${isDarkMode ? 'text-white bg-slate-800' : 'text-gray-900 bg-white'} shadow-sm ring-1 ring-inset ${isDarkMode ? 'ring-gray-700' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-600'} px-3 py-1.5 text-sm font-semibold leading-6 ${isDarkMode ? 'text-white' : 'text-white'} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Password Update Now
            </button>
          </div>
        </form>

        <p className={`mt-10 text-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
          Go to?{' '}
          <Link
            to="/user/signin"
            className={`font-semibold leading-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} hover:${isDarkMode ? 'text-indigo-500' : 'text-indigo-500'}`}
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}
