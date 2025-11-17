import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 blur-3xl opacity-60" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
          >
            Building delightful software experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600"
          >
            Full‑stack developer crafting fast, accessible, and beautiful web apps with modern technologies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border border-gray-300 hover:border-gray-400 text-gray-700 transition-colors">Contact Me</a>
          </motion.div>
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance work
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-xl border border-black/5 bg-gradient-to-br from-white to-gray-50 shadow-sm">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-[0.15]"></div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900 text-white p-4">
                  <p className="text-xs text-gray-400">Component</p>
                  <p className="font-mono text-sm mt-1">Button.jsx</p>
                  <p className="text-xs mt-2">State: hover, focus, disabled</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">Performance</p>
                  <p className="text-3xl font-bold mt-2">99</p>
                  <p className="text-xs text-gray-500">Lighthouse</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">Framework</p>
                  <p className="text-lg font-semibold mt-1">React + FastAPI</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">Deploy</p>
                  <p className="text-lg font-semibold mt-1">1-click</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
