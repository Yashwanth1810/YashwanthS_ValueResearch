import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 lg:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="font-semibold text-slate-800">Yashwanth S: Value Research</div>
          <p className="mt-1 max-w-md text-xs text-slate-500">
            Educational finance content. Not investment advice. Please consult
            a SEBI-registered advisor before making investment decisions.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="/blog" className="hover:text-brand">
            Articles
          </Link>
          <Link href="/privacy" className="hover:text-brand">
            Privacy
          </Link>
          <Link href="/disclaimer" className="hover:text-brand">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}

