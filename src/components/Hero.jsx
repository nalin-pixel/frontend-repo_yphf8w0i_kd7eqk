import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability, but allow interaction with pointer-events-none */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 pt-20 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs tracking-wide uppercase">
          AI for Sustainability
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
          Accelerate your climate impact with AI
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-emerald-100/90">
          We design and deploy intelligent systems that cut emissions, optimize energy, and make sustainable operations effortless across your organization.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/30 transition">
            Book a discovery call
          </a>
          <a href="#solutions" className="rounded-lg border border-emerald-400/40 bg-white/5 hover:bg-white/10 text-emerald-100 font-semibold px-6 py-3 backdrop-blur transition">
            Explore solutions
          </a>
        </div>
      </div>
    </section>
  );
}
