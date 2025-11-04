import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThemePicker from './components/ThemePicker'

// Complete theme configurations with coordinated colors
const themeConfig = {
  premiumDark: {
    name: 'Matte Black',
    colors: {
      primary: '#ffffff',           // Pure white for crisp edges
      primaryDark: '#d4d4d4',       // Light gray
      background: '#000000',        // Pure black
      surface: '#0a0a0a',           // Near black
      surfaceLight: '#171717',      // Dark gray
      text: '#ffffff',              // White
      textSecondary: '#737373',     // Medium gray
      accent: '#a3a3a3',            // Light gray accent
      gradient: 'from-neutral-900/10 to-neutral-950'
    },
    style: {
      buttonGradient: 'from-neutral-700 to-neutral-800', // Subtle gray gradient
      cardGradient: 'from-neutral-900/5 to-neutral-950/10',
      glassTint: 'rgba(255, 255, 255, 0.03)'  // Almost invisible white tint
    }
  }, // <- Fixed: removed extra style object and added comma
  crimson: {
    name: 'Crimson Elegance',
    colors: {
      primary: '#dc2626',
      primaryDark: '#991b1b',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#fecaca',
      gradient: 'from-red-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-red-600 to-red-700',
      cardGradient: 'from-red-950/10 to-black',
      glassTint: 'rgba(220, 38, 38, 0.1)'
    }
  },
  emerald: {
    name: 'Emerald Serenity',
    colors: {
      primary: '#10b981',
      primaryDark: '#047857',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#a7f3d0',
      gradient: 'from-emerald-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-emerald-600 to-emerald-700',
      cardGradient: 'from-emerald-950/10 to-black',
      glassTint: 'rgba(16, 185, 129, 0.1)'
    }
  },
  blue: {
    name: 'Azure Depth',
    colors: {
      primary: '#3b82f6',
      primaryDark: '#1d4ed8',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#93c5fd',
      gradient: 'from-blue-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-blue-600 to-blue-700',
      cardGradient: 'from-blue-950/10 to-black',
      glassTint: 'rgba(59, 130, 246, 0.1)'
    }
  },
  purple: {
    name: 'Royal Amethyst',
    colors: {
      primary: '#8b5cf6',
      primaryDark: '#7c3aed',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#c4b5fd',
      gradient: 'from-purple-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-purple-600 to-purple-700',
      cardGradient: 'from-purple-950/10 to-black',
      glassTint: 'rgba(139, 92, 246, 0.1)'
    }
  },
  amber: {
    name: 'Golden Hour',
    colors: {
      primary: '#f59e0b',
      primaryDark: '#d97706',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#fde68a',
      gradient: 'from-amber-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-amber-600 to-amber-700',
      cardGradient: 'from-amber-950/10 to-black',
      glassTint: 'rgba(245, 158, 11, 0.1)'
    }
  },
  cyan: {
    name: 'Arctic Flow',
    colors: {
      primary: '#06b6d4',
      primaryDark: '#0891b2',
      background: '#000000',
      surface: '#0a0a0a',
      surfaceLight: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#a3a3a3',
      accent: '#a5f3fc',
      gradient: 'from-cyan-900/20 to-black'
    },
    style: {
      buttonGradient: 'from-cyan-600 to-cyan-700',
      cardGradient: 'from-cyan-950/10 to-black',
      glassTint: 'rgba(6, 182, 212, 0.1)'
    }
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('premiumDark') // Fixed: use theme key, not name

  // Apply complete theme to CSS variables
  useEffect(() => {
    const theme = themeConfig[currentTheme]
    const root = document.documentElement
    
    // Apply all color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [currentTheme])

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themeConfig[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  // Save theme
  useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme)
  }, [currentTheme])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header theme={themeConfig[currentTheme]} />
      <Hero theme={themeConfig[currentTheme]} />
      <Projects theme={themeConfig[currentTheme]} />
      <Skills theme={themeConfig[currentTheme]} />
      <Contact theme={themeConfig[currentTheme]} />
      <ThemePicker 
        currentTheme={currentTheme} 
        setCurrentTheme={setCurrentTheme}
        themeConfig={themeConfig}
      />
    </div>
  )
}

export default App