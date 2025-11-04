import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Define all our themes with actual CSS variables
const themeConfig = {
  crimson: {
    name: 'Crimson',
    primary: '#dc2626',
    primaryDark: '#991b1b', 
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  },
  emerald: {
    name: 'Emerald',
    primary: '#10b981',
    primaryDark: '#047857',
    background: '#000000',
    surface: '#0a0a0a', 
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  },
  blue: {
    name: 'Blue',
    primary: '#3b82f6',
    primaryDark: '#1d4ed8',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  },
  purple: {
    name: 'Purple',
    primary: '#8b5cf6',
    primaryDark: '#7c3aed',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  },
  amber: {
    name: 'Amber',
    primary: '#f59e0b',
    primaryDark: '#d97706',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  },
  cyan: {
    name: 'Cyan',
    primary: '#06b6d4',
    primaryDark: '#0891b2',
    background: '#000000',
    surface: '#0a0a0a',
    text: '#ffffff',
    textSecondary: '#a3a3a3'
  }
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('crimson')

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = themeConfig[currentTheme]
    const root = document.documentElement
    
    root.style.setProperty('--color-primary', theme.primary)
    root.style.setProperty('--color-primary-dark', theme.primaryDark)
    root.style.setProperty('--color-background', theme.background)
    root.style.setProperty('--color-surface', theme.surface)
    root.style.setProperty('--color-text', theme.text)
    root.style.setProperty('--color-text-secondary', theme.textSecondary)
  }, [currentTheme])

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themeConfig[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme)
  }, [currentTheme])

  const value = {
    currentTheme,
    setCurrentTheme,
    themeConfig
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}