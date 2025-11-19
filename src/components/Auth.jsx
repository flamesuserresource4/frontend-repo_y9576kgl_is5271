import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL;

function Auth() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [mode, setMode] = useState('register');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const url = `${API}/api/auth/${mode}`;
      const body = mode === 'login' ? { email: form.email, password: form.password } : form;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Request failed');
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auth" className="py-20 bg-gradient-to-b from-rose-50/40 to-sky-50/40">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Create an account</h3>
          <p className="mt-2 text-slate-600">Register or sign in to explore the dashboard.</p>
          <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex gap-2 mb-4">
              <button onClick={() => setMode('register')} className={`px-3 py-1 rounded-lg text-sm ${mode==='register' ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'}`}>Register</button>
              <button onClick={() => setMode('login')} className={`px-3 py-1 rounded-lg text-sm ${mode==='login' ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'}`}>Login</button>
            </div>
            <form className="space-y-3" onSubmit={submit}>
              {mode === 'register' && (
                <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
              )}
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
              <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
              <button disabled={loading} className="w-full rounded-lg bg-rose-500 text-white py-2 font-medium hover:bg-rose-600 transition disabled:opacity-60">{loading ? 'Please wait...' : mode === 'login' ? 'Sign in' : 'Create account'}</button>
              {error && <p className="text-rose-600 text-sm">{error}</p>}
              {user && <p className="text-emerald-600 text-sm">Welcome, {user.name || user.email}!</p>}
            </form>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">Why sign up?</h4>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2"/> Save your projects</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2"/> Access premium templates</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2"/> Priority support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Auth;