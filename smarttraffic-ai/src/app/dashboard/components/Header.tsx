import { useState } from 'react';
import { HiOutlineBell, HiOutlineSearch, HiUserCircle } from 'react-icons/hi';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Region 1');
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
      {/* Left Section: Region Dropdown and Logo */}
      <div className="flex items-center space-x-6">
        {/* Region Dropdown */}
        <div className="relative">
          <button className="text-lg font-semibold text-gray-800 dark:text-white">
            {selectedRegion} <span>&#9660;</span>
          </button>
          <div className="absolute hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-lg mt-1 w-40">
            <ul>
              {['Region 1', 'Region 2', 'Region 3'].map((region) => (
                <li
                  key={region}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Logo */}
        <div className="font-bold text-xl text-gray-800 dark:text-white">
          <span>SmartTraffic AI</span>
        </div>
      </div>

      {/* Right Section: User Profile, Search, Notifications, and Dark Mode */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <HiOutlineSearch className="absolute left-3 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-2 pl-10 pr-4 rounded-md w-64"
            placeholder="Search..."
          />
        </div>

        {/* Notifications Icon */}
        <div className="relative">
          <HiOutlineBell className="text-2xl text-gray-800 dark:text-white cursor-pointer" />
          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* User Profile Icon */}
        <HiUserCircle className="text-3xl text-gray-800 dark:text-white cursor-pointer" />

        {/* Dark Mode Toggle */}
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {darkMode ? (
            <BsFillSunFill className="text-2xl text-yellow-500" />
          ) : (
            <BsFillMoonFill className="text-2xl text-gray-800 dark:text-white" />
          )}
        </div>
      </div>
    </header>
  );
}
