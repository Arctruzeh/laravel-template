import React, { useState } from 'react';
import AppLayout from '../Layouts/AppLayout';

export default function Welcome({ version }) {
    const [count, setCount] = useState(0);

    return (
        <AppLayout title="Welcome">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Welcome to Laravel + React + Inertia!
                        </h2>
                        
                        <div className="mb-8">
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                You're running Laravel {version} with React and Inertia.js
                            </p>
                            
                            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">React Counter Example</h3>
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Count: {count}</p>
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
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Laravel Backend</h4>
                                <p className="text-blue-700 dark:text-blue-400 text-sm">Powerful PHP framework with elegant syntax</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">React Frontend</h4>
                                <p className="text-green-700 dark:text-green-400 text-sm">Modern JavaScript library for building UIs</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Inertia.js</h4>
                                <p className="text-purple-700 dark:text-purple-400 text-sm">The modern monolith approach to building SPAs</p>
                            </div>
                        </div>

                        {/* Tailwind CSS Test Section */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">🎨 Tailwind CSS Test</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Colors Test */}
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Colors</h4>
                                    <div className="flex space-x-2">
                                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                    </div>
                                </div>
                                
                                {/* Spacing Test */}
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Spacing</h4>
                                    <div className="space-y-1">
                                        <div className="h-2 bg-gray-300 rounded"></div>
                                        <div className="h-2 bg-gray-400 rounded ml-2"></div>
                                        <div className="h-2 bg-gray-500 rounded ml-4"></div>
                                    </div>
                                </div>
                                
                                {/* Typography Test */}
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Typography</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Extra Small</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Small</p>
                                    <p className="text-base text-gray-800 dark:text-gray-200 font-bold">Bold Base</p>
                                </div>
                                
                                {/* Effects Test */}
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Effects</h4>
                                    <div className="w-full h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"></div>
                                </div>
                            </div>
                            
                            {/* Interactive Test */}
                            <div className="mt-6 text-center">
                                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    Hover & Click Me! 🚀
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 