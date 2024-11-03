import React from 'react';

const MentalStrengthSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Measure Your Mental Strength</h2>
        <p className="text-lg mb-6">
          Download our app and get on this journey of giving your mind the care and strength it deserves 🚀
        </p>
        <div className="flex space-x-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            <img
              src="google-play-url"
              alt="Get it on Google Play"
              className="w-36"
            />
          </a>
          <a
            href="https://apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            <img
              src="app-store-url"
              alt="Download on the App Store"
              className="w-36"
            />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://assets.thehansindia.com/h-upload/2023/08/09/1371271-mindpeers.webp"
          alt="Phone Mockups"
          className="w-full max-w-md"
        />
      </div> 
    </div>
  );
};

export default MentalStrengthSection;
