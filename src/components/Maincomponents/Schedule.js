import React from 'react';

const Schedule = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Our Opening Hours</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Monday to Friday</h2>
              <p><b>Open</b> Lunch</p>
              <p><b>Open</b> Dinner</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Saturday</h2>
              <p><b>Open</b> Dinner</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Sunday</h2>
              <p>CLOSED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
