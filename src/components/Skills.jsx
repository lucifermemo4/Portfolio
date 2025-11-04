export default function Skills({ theme }) {
  const skills = [
    { name: "React", level: 4, category: "Frontend" },
    { name: "JavaScript", level: 5, category: "Frontend" },
    { name: "Tailwind CSS", level: 5, category: "Frontend" },
    { name: "HTML/CSS", level: 5, category: "Frontend" },
    { name: "Node.js", level: 3, category: "Backend" },
    { name: "Python", level: 3, category: "Backend" },
    { name: "Git", level: 4, category: "Tools" },
    { name: "Figma", level: 3, category: "Tools" },
  ]

  const categories = {
    Frontend: "text-blue-400 border-blue-400",
    Backend: "text-green-400 border-green-400", 
    Tools: "text-purple-400 border-purple-400"
  }

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Theme background */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black ${theme.style.gradient}`}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 theme-text-primary">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group glass-theme rounded-2xl p-6 transition-all duration-500 hover:glass-hover hover:transform hover:scale-105 theme-shadow-primary"
              style={{ borderColor: `var(--color-primary)` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full border-2 group-hover:theme-shadow-primary transition-all duration-300"
                    style={{ 
                      backgroundColor: `var(--color-primary)`,
                      borderColor: `var(--color-primary)`
                    }}
                  ></div>
                  <h3 
                    className="text-lg font-semibold text-white group-hover:theme-text-primary transition-colors duration-300"
                  >
                    {skill.name}
                  </h3>
                </div>
                <span 
                  className="text-xs px-2 py-1 rounded-full border transition-all duration-300 group-hover:theme-shadow-primary"
                  style={{ 
                    color: `var(--color-primary)`,
                    borderColor: `var(--color-primary)`,
                    backgroundColor: `var(--color-primary)`,
                    opacity: 0.1
                  }}
                >
                  {skill.category}
                </span>
              </div>

              {/* Skill Level Dots */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                      dot <= skill.level 
                        ? 'theme-shadow-primary' 
                        : 'bg-white/10 group-hover:bg-white/20'
                    } ${dot === skill.level ? 'animate-pulse' : ''}`}
                    style={{ 
                      backgroundColor: dot <= skill.level ? `var(--color-primary)` : undefined
                    }}
                  ></div>
                ))}
              </div>

              {/* Skill Level Text */}
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Beginner</span>
                <span 
                  className="font-medium transition-colors duration-300 group-hover:theme-text-primary"
                >
                  {skill.level === 5 && 'Expert'}
                  {skill.level === 4 && 'Advanced'}
                  {skill.level === 3 && 'Intermediate'}
                  {skill.level === 2 && 'Basic'}
                  {skill.level === 1 && 'Learning'}
                </span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Legend */}
        <div 
          className="glass-theme rounded-2xl p-6 mt-8 max-w-md mx-auto theme-shadow-primary"
          style={{ borderColor: `var(--color-primary)` }}
        >
          <h4 className="text-lg font-semibold theme-text-primary mb-4 text-center">Proficiency Levels</h4>
          <div className="flex justify-between text-sm text-gray-400">
            <div className="text-center">
              <div 
                className="w-3 h-3 rounded-full mx-auto mb-1 theme-shadow-primary"
                style={{ backgroundColor: `var(--color-primary)` }}
              ></div>
              <span>Strong</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-white/30 rounded-full mx-auto mb-1"></div>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}