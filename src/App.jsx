import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-emerald-100/70 bg-slate-950/80">
        © {new Date().getFullYear()} Evergreen AI — Sustainable intelligence at scale
      </footer>
    </div>
  )
}

export default App
