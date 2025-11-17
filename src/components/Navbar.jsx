import { Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold">{`</>`}</span>
          <span className="font-semibold text-gray-800">Developer</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="p-2 hover:bg-gray-100 rounded-md text-gray-700 hover:text-gray-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 hover:bg-gray-100 rounded-md text-gray-700 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 hover:bg-gray-100 rounded-md text-gray-700 hover:text-gray-900 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
