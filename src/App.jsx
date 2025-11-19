import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Auth from './components/Auth'
import Blog from './components/Blog'
import Contact from './components/Contact'

const API = import.meta.env.VITE_BACKEND_URL

function App() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    fetch(`${API}/api/pricing`).then(r => r.json()).then(d => setPlans(d.plans || [])).catch(() => setPlans([]))
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-rose-300 via-sky-300 to-violet-300 ring-1 ring-white shadow" />
            <span className="font-semibold">PastelPay</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#auth" className="hover:text-slate-900">Auth</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#auth" className="text-sm rounded-lg bg-rose-500 text-white px-3 py-1.5 hover:bg-rose-600">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        {plans.length > 0 && <Pricing plans={plans} />}
        <Auth />
        <div id="blog"><Blog /></div>
        <Contact />
      </main>

      <footer className="py-12 text-center text-sm text-slate-600 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PastelPay — All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
