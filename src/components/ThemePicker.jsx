import { useState, useEffect, useRef } from 'react'

export default function ThemePicker({ currentTheme, setCurrentTheme, themeConfig }) {
  const [isOpen, setIsOpen] = useState(false)
  const pickerRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName)
    setIsOpen(false)
  }

  return (
    <div ref={pickerRef} className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 glass-theme rounded-full flex items-center justify-center hover:glass-hover transition-all duration-300 hover:scale-110 shadow-2xl theme-shadow-primary active:scale-95"
        style={{ backgroundColor: `var(--color-primary)` }}
      >
        <div className="w-7 h-7 relative">
          <div className="absolute inset-0 theme-gradient-bg rounded-full"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 theme-bg-accent rounded-full"></div>
        </div>
        
        {isOpen && (
          <div className="absolute inset-0 border-2 theme-border-accent rounded-full animate-ping"></div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 glass-theme rounded-2xl p-4 shadow-2xl theme-shadow-glow backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300 min-w-[200px]">
          <div className="text-white text-sm font-semibold mb-3 text-center theme-text-primary">
            Choose Theme
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(themeConfig).map(([key, theme]) => (
              <button
                key={key}
                className={`group flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 active:scale-95 ${
                  currentTheme === key ? 'bg-white/10 ring-2 theme-ring-primary' : ''
                }`}
                onClick={() => handleThemeChange(key)}
              >
                <div 
                  className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-white/60 group-hover:scale-110 transition-all duration-200 shadow-lg theme-shadow-primary"
                  style={{ backgroundColor: theme.colors.primary }}
                ></div>
                <span className="text-xs theme-text-primary font-medium text-center leading-tight">
                  {theme.name}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 px-3 py-2 text-xs text-gray-400 hover:text-white border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}