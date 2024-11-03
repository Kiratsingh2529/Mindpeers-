import React from 'react';

const PartnerSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Partner With Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Insurance Consultation */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">01</h3>
          <h4 className="text-xl font-semibold mb-2">Insurance Consultation</h4>
          <p className="mb-6">
            If you are an insurance company or alike, you can consult us on user
            journey for mental health claims
          </p>
        </div>

        {/* Research Partnership */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">02</h3>
          <h4 className="text-xl font-semibold mb-2">Research Partnership</h4>
          <p className="mb-6">
            Are you a university, institution or subject matter expert? Join us
            on our ongoing and upcoming research projects
          </p>
        </div>

        {/* Collaboration */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">03</h3>
          <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
          <p className="mb-6">
            Join hands with MindPeers to offer mental wellbeing services,
            organise group and individual sessions and events
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-md hover:bg-gray-200">
          JOIN FORCES
        </button>
      </div>
    </div>
  );
};

export default PartnerSection;
