import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const [stats, setStats] = useState({
        tokens: 0,
        lastLogin: null,
        apiEndpoints: [
            { name: 'User Profile', endpoint: '/api/user', method: 'GET' },
            { name: 'Dashboard Data', endpoint: '/api/dashboard-data', method: 'GET' },
            { name: 'User Tokens', endpoint: '/api/auth/tokens', method: 'GET' },
            { name: 'Logout', endpoint: '/api/auth/logout', method: 'POST' },
        ]
    });

    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const testApiEndpoint = async (endpoint, method = 'GET') => {
        setLoading(true);
        try {
            const csrfResponse = await fetch('/sanctum/csrf-cookie', {
                credentials: 'include'
            });
            
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'include'
            });
            
            const data = await response.json();
            setApiResponse({
                endpoint,
                method,
                status: response.status,
                data
            });
        } catch (error) {
            setApiResponse({
                endpoint,
                method,
                status: 'Error',
                data: { error: error.message }
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Section */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-6">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Welcome back, {auth.user.name}!</h3>
                                    <p className="text-gray-600 dark:text-gray-300">You're logged in with Laravel Sanctum authentication.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sanctum Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Secure Authentication</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Token-based authentication with automatic token rotation and secure cookie handling.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">SPA Ready</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Perfect for React SPAs with CSRF protection and seamless API integration.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                    <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Token Management</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Full control over API tokens with device tracking and revocation capabilities.
                            </p>
                        </div>
                    </div>

                    {/* API Testing Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Test API Endpoints
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                            Test the Sanctum-protected API endpoints directly from your dashboard.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {stats.apiEndpoints.map((api, index) => (
                                <button
                                    key={index}
                                    onClick={() => testApiEndpoint(api.endpoint, api.method)}
                                    disabled={loading}
                                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                                            api.method === 'GET' 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                        }`}>
                                            {api.method}
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-gray-100">{api.name}</span>
                                    </div>
                                    <code className="text-xs text-gray-500 dark:text-gray-400">{api.endpoint}</code>
                                </button>
                            ))}
                        </div>

                        {apiResponse && (
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {apiResponse.method} {apiResponse.endpoint}
                                    </span>
                                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                                        apiResponse.status === 200 
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                                    }`}>
                                        {apiResponse.status}
                                    </span>
                                </div>
                                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
                                    {JSON.stringify(apiResponse.data, null, 2)}
                                </pre>
                            </div>
                        )}

                        {loading && (
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Testing API endpoint...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
