import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail || 'Failed')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-black/5 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <input name="name" required placeholder="Your name" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <input type="email" name="email" required placeholder="Email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800 transition-colors">Send message</button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
