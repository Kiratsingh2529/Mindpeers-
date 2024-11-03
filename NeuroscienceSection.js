import React from 'react';

const NeuroscienceSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Neuroscience behind MindPeers</h1>
          <p className="text-lg mb-4">
            Rooted in Behaviour & Neuroscience | Evidence based Approach | Partnerships with Insurance & Healthcare
          </p>
          <button className="bg-white text-black px-6 py-2 mt-6 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
            PARTNER WITH US
          </button>
        </div>
        
        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/our-science/Our-Science-Banner.png?width=2480&height=2470&name=Our-Science-Banner.png"
            alt="Smartphone Mockup"
            className="h-96 w-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NeuroscienceSection;
