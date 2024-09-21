import React, { useState } from 'react';
import logo from './logo.png'

const LoginPage = () => {
  const [userType, setUserType] = useState('');

  return (
    <div className="flex min-h-screen">
      {/* Left section */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white p-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome</h1>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select user type</option>
              <option value="student">Student</option>
              <option value="institution">Institution</option>
              <option value="verifier">Verifier</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Login with MetaMask Wallet
          </button>
        </div>
      </div>

      {/* Right section with image */}
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
        <img
          src={logo} // Update this path with the actual path to your image
          alt="EduChain Image"
          className="w-[23rem] h-[23rem] object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
