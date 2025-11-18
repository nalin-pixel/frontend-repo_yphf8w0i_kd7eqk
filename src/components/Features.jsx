import { Leaf, LineChart, Cog, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Carbon Intelligence',
    desc: 'Automate carbon accounting and forecast reductions with high-fidelity models.'
  },
  {
    icon: LineChart,
    title: 'Energy Optimization',
    desc: 'Real-time AI that tunes HVAC, lighting, and industrial loads to cut costs and emissions.'
  },
  {
    icon: Cog,
    title: 'Process Automation',
    desc: 'Replace manual sustainability workflows with AI copilots and robust integrations.'
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Reporting',
    desc: 'Reliable data pipelines for CSRD, SEC, and voluntary frameworks with audit-ready trails.'
  }
];

export default function Features() {
  return (
    <section id="solutions" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">What we build</h2>
        <p className="mt-3 text-center text-emerald-100/80 max-w-2xl mx-auto">
          Modular AI systems tailored to your footprint, facilities, and data maturity.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-emerald-400/20 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-emerald-100/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
