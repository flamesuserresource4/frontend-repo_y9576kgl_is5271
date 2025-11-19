import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL;

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/blog`)
      .then(r => r.json())
      .then(d => setPosts(d.posts || []))
      .catch(() => setPosts([]));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-slate-900">From the blog</h3>
          <p className="mt-2 text-slate-600">Product updates, design notes and growth ideas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 shadow-sm">
              <div className="text-xs text-slate-500">{p.published_at ? new Date(p.published_at).toLocaleDateString() : ''}</div>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h4>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(p.tags || []).map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;