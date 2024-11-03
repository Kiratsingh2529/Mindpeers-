import React from 'react';

const ResearchSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Latest from MindPeers Research</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-purple-500 rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">
            85% women couldn’t achieve leadership roles
          </h4>
          <img
            src="https://th.bing.com/th/id/OIP.aMDt6Slix5PmQECq-tzgOAHaKS?w=140&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.2"  // Replace with actual image URL
            alt="Chair"
            className="mx-auto mb-4"
          />
          <p className="text-white">
            because of lack of mental health support
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-red-500 rounded-lg p-6 text-center">
          
          <h4 className="text-xl font-semibold mb-2">
            Employees of 50% organisations complained of low energy levels
          </h4>
          <img
            src = "https://th.bing.com/th?q=Low+Battery+Warning+PNG&w=120&h=150&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" // Replace with actual image URL
            alt="Low Energy Levels"
            className="mx-auto mb-4"
          />
          <p className="text-white">
            because of burnout & mental stress
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-teal-500 rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">
            45% companies in India are low on self expertise
          </h4>
          <img
            src="https://th.bing.com/th/id/OIP.dyTqYBiclwcn6FKdUZD45gHaE8?w=254&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"  // Replace with actual image URL
            alt="Low Self Expertise"
            className="mx-auto mb-4"
          />
          <p className="text-white">
            because of burnout and no mental health policy. How?
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-md hover:bg-gray-200">
          MENTAL HEALTH & CORPORATE INDIA: A REPORT
        </button>
      </div>
    </div>
  );
};

export default ResearchSection;