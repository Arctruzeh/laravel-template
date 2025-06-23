import React from 'react';

function SimpleLayout({ children }) {
    return React.createElement(
        'div',
        { className: 'min-h-screen bg-gray-100' },
        React.createElement(
            'nav',
            { className: 'bg-white shadow p-4' },
            React.createElement('h1', { className: 'text-xl font-bold' }, 'Laravel + React')
        ),
        React.createElement(
            'main',
            { className: 'p-8' },
            children
        )
    );
}

export default SimpleLayout; 