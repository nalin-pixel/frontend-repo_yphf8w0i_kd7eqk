import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500" />
            <span className="text-white font-semibold">Evergreen AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-emerald-100/90">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-3 text-emerald-100/90">
            <a href="#solutions" className="block py-2">Solutions</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
