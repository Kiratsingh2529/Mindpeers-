import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      {/* Top Notification Bar */}
      <div className="text-center text-sm px-4">
        <span>72,000+ Young Adults: Biggest Mental Strength Research Study Of India Released.</span>
        <a href="your-link-here" className="text-green-400 ml-1 hover:underline">
          Read here.
        </a>
      </div>
      {/* Main Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-4 px-5">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="https://th.bing.com/th?id=OIP.q78rFbEXhIfUKAOApv6mMgAAAA&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="mindpeers logo" className="h-10 w-auto mr-2" />
          <span className="text-lg font-semibold">mindpeers</span>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm md:text-base">
          <a href="#for-individual" className="hover:text-green-400">For Individual</a>
          <a href="#for-teams" className="hover:text-green-400">For Teams</a>
          <a href="#therapeers" className="hover:text-green-400">TheraPeers</a>
          <a href="#our-science" className="hover:text-green-400">Our Science</a>
          <a href="#blog" className="hover:text-green-400">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
