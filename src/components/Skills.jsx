function Skills() {
  const groups = [
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'Tailwind', 'Redux', 'Framer Motion']
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Node', 'Postgres', 'MongoDB', 'Prisma']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma']
    }
  ]

  return (
    <section id="skills" className="py-20 border-t border-black/5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-black/5 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
