import { projects } from '../data/projects'

export default function Projects({ theme }) {
  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Theme-specific background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.style.cardGradient}`}></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 theme-text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group glass-theme rounded-2xl overflow-hidden transition-all duration-500 hover:glass-hover hover:transform hover:scale-105 theme-shadow-primary"
              style={{ borderColor: `var(--color-primary)` }}
            >
              {/* Project Image with theme overlay */}
              <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${theme.style.cardGradient}`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `var(--color-primary)`, opacity: 0.1 }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Project Image</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:theme-text-primary transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack with theme colors */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm border transition-all duration-300 group-hover:theme-shadow-primary"
                      style={{ 
                        backgroundColor: `var(--color-primary)`,
                        opacity: 0.2,
                        color: `var(--color-primary)`,
                        borderColor: `var(--color-primary)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className={`flex-1 text-center py-2 bg-gradient-to-r ${theme.style.buttonGradient} text-white rounded-lg hover:theme-shadow-glow transition-all transform hover:scale-105 duration-300`}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className="flex-1 text-center py-2 border border-white/20 text-white rounded-lg hover:theme-border-primary hover:bg-white/5 transition-all transform hover:scale-105 duration-300"
                    style={{ borderColor: `var(--color-primary)` }}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
