import React from 'react';

const Salads = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Salads</h2>
                <div className="border border-gray-300 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Caesar Salad</h3>
                    <p className="text-gray-700 mb-2">$10</p>
                    <p className="text-gray-700">Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Greek Salad</h3>
                    <p className="text-gray-700 mb-2">$12</p>
                    <p className="text-gray-700">Mixed greens, tomatoes, cucumbers, red onions, feta cheese, olives, and Greek dressing.</p>
                </div>
                {/* Add more salad options as needed */}
            </div>
        </div>
    );
}

export default Salads;
