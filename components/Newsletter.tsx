'use client';

export function Newsletter() {
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
        <form
          className="flex flex-col gap-3 text-sm md:flex-row md:items-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
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

