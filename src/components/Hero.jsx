export default function Hero({ theme }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Theme-specific background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.style.cardGradient}`}></div>
      
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Main heading with strategic hero glow */}
        <div 
          className="glass-theme rounded-2xl p-8 md:p-12 mb-8 inline-block hero-glow"
          style={{ borderColor: `var(--color-primary)` }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Lucifer Memo
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto mb-6 glow-soft"
            style={{ backgroundColor: `var(--color-primary)` }}
          ></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer & UI Designer
          </p>
        </div>

        {/* CTA Button with button glow */}
        <button 
          className={`group relative px-8 py-4 bg-gradient-to-r ${theme.style.buttonGradient} rounded-full button-glow transition-all duration-300 transform hover:scale-105 hover:button-glow-hover`}
        >
          <span className="text-white font-semibold text-lg relative z-10">
            View My Work
          </span>
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Theme-colored scroll indicator with subtle glow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center glow-soft"
            style={{ borderColor: `var(--color-primary)` }}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 glow-soft"
              style={{ backgroundColor: `var(--color-primary)` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}