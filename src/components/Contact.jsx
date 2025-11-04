export default function Contact({ theme }) {
  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Theme gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.style.cardGradient}`}></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 theme-text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div 
          className="glass-theme rounded-2xl p-8 md:p-12 card-glow"
          style={{ borderColor: `var(--color-primary)` }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 theme-text-primary">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300 hover:theme-text-primary transition-colors duration-300 group">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:theme-shadow-primary"
                    style={{ backgroundColor: `var(--color-primary)` }}
                  >
                    <span>📧</span>
                  </div>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 hover:theme-text-primary transition-colors duration-300 group">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:theme-shadow-primary"
                    style={{ backgroundColor: `var(--color-primary)` }}
                  >
                    <span>💼</span>
                  </div>
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 hover:theme-text-primary transition-colors duration-300 group">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:theme-shadow-primary"
                    style={{ backgroundColor: `var(--color-primary)` }}
                  >
                    <span>🐙</span>
                  </div>
                  <span>GitHub Profile</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:theme-shadow-primary"
                    style={{ borderColor: `var(--color-primary)` }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:theme-shadow-primary"
                    style={{ borderColor: `var(--color-primary)` }}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:theme-shadow-primary resize-none"
                    style={{ borderColor: `var(--color-primary)` }}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className={`w-full px-6 py-3 bg-gradient-to-r ${theme.style.buttonGradient} text-white rounded-lg hover:theme-shadow-glow transition-all transform hover:scale-105 duration-300 theme-shadow-primary`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}