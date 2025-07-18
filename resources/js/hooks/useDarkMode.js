import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage or system preference
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('darkMode');
            if (stored) {
                return JSON.parse(stored);
            }
            // Check system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        // Save to localStorage
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    }, [isDark]);

    return [isDark, setIsDark];
} 