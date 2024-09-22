import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { disconnectWallet } from './utils/wallet'; // Assuming you have a disconnect wallet function

const SectionButton = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 mb-2 rounded-lg transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-800 hover:bg-blue-100'
    }`}
  >
    {title}
  </button>
);

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Call disconnectWallet to disconnect the MetaMask session
      await disconnectWallet();
      // Clear any local storage data related to the user session
      localStorage.removeItem('userType');
      localStorage.removeItem('walletAddress');

      // Redirect back to the login page
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-blue-900">Student Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <LogOut className="mr-2" /> Logout
        </button>
      </div>
      <div className="w-32 h-1 bg-blue-600 mb-8"></div>

      <div className="flex space-x-8">
        <div className="w-1/3">
          <SectionButton
            title="Request Certificate"
            isActive={activeSection === 'certificate'}
            onClick={() => setActiveSection('certificate')}
          />
          <SectionButton
            title="Create ViewNFT"
            isActive={activeSection === 'create-nft'}
            onClick={() => setActiveSection('create-nft')}
          />
          <SectionButton
            title="Received NFT's"
            isActive={activeSection === 'received-nft'}
            onClick={() => setActiveSection('received-nft')}
          />
        </div>
        <AnimatePresence>
          {activeSection && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-2/3 bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                {activeSection === 'certificate' && 'Request Certificate'}
                {activeSection === 'create-nft' && 'Create ViewNFT'}
                {activeSection === 'received-nft' && "Received NFT's"}
              </h2>
              <p className="text-blue-600">
                Details for {activeSection} will be displayed here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentDashboard;
