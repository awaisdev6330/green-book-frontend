import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'About Us', to: '/about-us' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Gallery', to: '/album' },
  { name: 'Marketplace', to: '/marketplace' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full p-4 transition-all duration-300 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      } ${
        hasScrolled
          ? `backdrop-blur-sm bg-opacity-60 shadow-md ${isDarkMode ? 'bg-gray-800/60' : 'bg-white/60'}`
          : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl flex justify-between items-center lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className={`-m-1.5 p-1.5 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://thechildrengreenbook.net/assets/images/_logo.png"
              alt="Company logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`text-sm font-semibold leading-6 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/user/signin"
            className={`text-sm font-semibold leading-6 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      {/* Toggle Theme Button */}
      <button
        onClick={toggleTheme}
        className={`p-2 ms-4 rounded-full focus:outline-none ${
          isDarkMode ? 'text-white bg-slate-800' : 'text-black bg-white'
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${
            isDarkMode ? 'bg-slate-900' : 'bg-white'
          } px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://thechildrengreenbook.net/assets/images/_logo.png"
                alt="Company logo"
              />
            </Link>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className={`-my-6 divide-y divide-gray-500/10 ${isDarkMode ? 'dark' : ''}`}>
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      isDarkMode
                        ? 'text-white hover:bg-slate-800'
                        : 'text-black hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/user/signin"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  } hover:bg-gray-50`}
                >
                  Log in
                </Link>
              </div>
 
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
