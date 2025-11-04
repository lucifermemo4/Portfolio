export default function Header({ theme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass header-glow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold theme-text-primary">
            Lucifer Memo
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-300 hover:theme-text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-current">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:theme-text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-current">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:theme-text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-current">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}