import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL;

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setStatus('');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to send');
      setStatus('Thanks! We\'ll be in touch.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-violet-50/40">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-3xl font-semibold text-slate-900">Say hello</h3>
          <p className="mt-2 text-slate-600">Questions about pricing, features or onboarding? We\'re here.</p>
          <form onSubmit={submit} className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm space-y-3">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email address" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="How can we help?" rows="4" className="w-full rounded-lg border border-slate-200 px-3 py-2" required />
            <button disabled={loading} className="w-full rounded-lg bg-violet-500 text-white py-2 font-medium hover:bg-violet-600 transition disabled:opacity-60">{loading ? 'Sending...' : 'Send message'}</button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </form>
        </div>
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">We typically reply within 1 business day</h4>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2"/> Human, friendly support</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2"/> Transparent policies</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2"/> No dark patterns</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;