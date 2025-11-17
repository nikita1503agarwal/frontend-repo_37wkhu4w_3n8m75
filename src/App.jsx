import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/60 to-blue-50/60 text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-10 border-t border-black/5 text-center text-sm text-gray-600 bg-white">© {new Date().getFullYear()} — Built with love and caffeine.</footer>
    </div>
  )
}

export default App
