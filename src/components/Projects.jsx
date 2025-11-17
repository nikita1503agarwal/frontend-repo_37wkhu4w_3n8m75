function Projects() {
  const projects = [
    {
      title: 'Realtime Chat',
      desc: 'WebSocket powered chat with rooms, typing indicators, and message persistence.',
      tags: ['React', 'FastAPI', 'MongoDB'],
      link: '#'
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless storefront with product search, cart, and checkout flows.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Role-based dashboard with charts, filters, and exports.',
      tags: ['Vite', 'D3', 'Shadcn'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Selected work</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">See all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border border-black/5 p-5 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 border border-black/5 mb-4" />
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-950">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
