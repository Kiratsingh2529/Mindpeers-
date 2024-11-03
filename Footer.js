import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 lg:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <img src="https://th.bing.com/th?id=OIP.q78rFbEXhIfUKAOApv6mMgAAAA&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="Mindpeers Logo" className="w-10 h-10" />
          <p>Made in India, For the world</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">We're Hiring</a>
        </div>
      </div>
      <div className="text-xs text-center mt-6">
        <p>P.S. MindPeers is not an emergency care service. For urgent help, call at the national mental health helpline: 1800-599-0019.</p>
        <div className="flex justify-center mt-2 space-x-2">
          <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="mt-2">Copyright 2024 All rights reserved by MindPeers</p>
        <p className="mt-2">Terms & Conditions | Terms Of Use</p>
        <p className="mt-2">Built on HubSpot</p>
      </div>
    </footer>
  );
}

export default Footer;
