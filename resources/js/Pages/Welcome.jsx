import React, { useState } from 'react';
import AppLayout from '../Layouts/AppLayout';

export default function Welcome({ version }) {
    const [count, setCount] = useState(0);

    return (
        <AppLayout title="Welcome">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Welcome to Laravel + React + Inertia!
                        </h2>
                        
                        <div className="mb-8">
                            <p className="text-lg text-gray-600 mb-4">
                                You're running Laravel {version} with React and Inertia.js
                            </p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold mb-4">React Counter Example</h3>
                                <p className="text-2xl font-bold text-blue-600 mb-4">Count: {count}</p>
                                <div className="space-x-4">
                                    <button
                                        onClick={() => setCount(count + 1)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Increment
                                    </button>
                                    <button
                                        onClick={() => setCount(count - 1)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Decrement
                                    </button>
                                    <button
                                        onClick={() => setCount(0)}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">Laravel Backend</h4>
                                <p className="text-blue-700 text-sm">Powerful PHP framework with elegant syntax</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-2">React Frontend</h4>
                                <p className="text-green-700 text-sm">Modern JavaScript library for building UIs</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-2">Inertia.js</h4>
                                <p className="text-purple-700 text-sm">The modern monolith approach to building SPAs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 