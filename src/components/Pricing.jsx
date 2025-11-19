function Pricing({ plans }) {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Simple, honest pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that grows with you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-white'} p-6 shadow-sm`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs rounded-full bg-rose-500 text-white px-2 py-0.5">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-900">{p.price === 0 ? 'Free' : `$${p.price}`}</span>
                {p.price !== 0 && <span className="text-slate-500">/{p.period}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium transition ${p.highlight ? 'bg-rose-500 text-white hover:bg-rose-600' : 'bg-white ring-1 ring-slate-200 hover:bg-slate-50'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;