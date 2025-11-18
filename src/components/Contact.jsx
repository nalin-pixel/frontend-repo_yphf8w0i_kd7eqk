import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      message: form.get('message'),
      interest: form.get('interest')
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white">Book a discovery call</h3>
            <p className="mt-3 text-emerald-100/80">
              Tell us about your sustainability goals. We’ll follow up with a short workshop outline and recommended next steps.
            </p>
            <ul className="mt-6 space-y-2 text-emerald-100/70 text-sm">
              <li>• Free 30-min consult</li>
              <li>• Clear scope and timeline</li>
              <li>• Data + ROI guidance</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-emerald-400/20 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              <input name="email" type="email" required placeholder="Work email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              <input name="company" placeholder="Company" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
              <input name="interest" placeholder="Area of interest (e.g., energy, carbon)" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
              <textarea name="message" rows="4" placeholder="Project context" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
            </div>
            <button disabled={status==='loading'} className="mt-4 w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 font-semibold px-6 py-3 transition">
              {status==='loading' ? 'Submitting...' : 'Submit'}
            </button>
            {status==='success' && <p className="mt-3 text-emerald-300">Thanks! We’ll be in touch shortly.</p>}
            {status==='error' && <p className="mt-3 text-red-300">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
