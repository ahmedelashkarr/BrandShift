import { useState, useEffect } from 'react'

export function useTheme() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)

    }, [theme])

    const toggleTheme = () => {
        var header = document.querySelector("header");
        var newTheme;
        if (theme === 'dark') {
            newTheme = 'light';
            header.style.setProperty(
                "border-bottom",
                "1px solid #d1d5db",
                "important"
            );
        }
        else {
            newTheme = 'dark';
            header.style.setProperty(
                "border-bottom",
                "1px solid #1b2029",
                "important"
            );
        }
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return [theme, toggleTheme]
}

