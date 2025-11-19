import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-3 py-1 text-xs text-rose-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-rose-400"></span>
            Fintech-grade, pastel-clean UI
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Launch your SaaS with calm confidence
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-600 text-lg sm:text-xl">
            A minimalist landing with pricing, authentication, blog and a contact form. Crafted with soft pastels to inspire trust and clarity.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-rose-500 text-white px-5 py-3 shadow hover:bg-rose-600 transition">
              See Pricing
            </a>
            <a href="#auth" className="inline-flex items-center justify-center rounded-xl bg-white/80 text-slate-800 px-5 py-3 shadow ring-1 ring-slate-200 hover:bg-white transition">
              Create an account
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/70" />
    </section>
  );
}

export default Hero;