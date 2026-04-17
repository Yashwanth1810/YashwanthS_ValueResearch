'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Enter email');
      return;
    }

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Subscribed successfully!');
      setEmail('');
    } else {
      alert('Error subscribing');
    }
  };

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 lg:px-6">
      <div className="grid gap-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 md:grid-cols-[1.4fr,1fr] md:p-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Weekly market insights in your inbox
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Simple explanations of what&apos;s moving Indian markets. No spam, just
            one useful email every week.
          </p>
        </div>

        {/* FORM */}
        <form
          className="flex flex-col gap-3 text-sm md:flex-row md:items-center"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}