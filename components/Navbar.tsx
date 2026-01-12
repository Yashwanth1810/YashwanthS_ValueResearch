import Link from 'next/link';

const categories = [
  { href: '/blog?category=stocks', label: 'Stocks' },
  { href: '/blog?category=ipo', label: 'IPO' },
  { href: '/blog?category=mutual-funds', label: 'Mutual Funds' },
  { href: '/blog?category=finance-basics', label: 'Finance Basics' },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand text-white flex items-center justify-center text-sm font-bold">
            Y
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Yashwanth S: Value Research
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="hover:text-brand transition-colors"
            >
              {cat.label}
            </Link>
          ))}
          <form
            action="/blog"
            className="relative ml-4 hidden items-center md:flex"
          >
            <input
              type="search"
              name="q"
              placeholder="Search articles"
              className="w-44 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand/40"
            />
          </form>
        </nav>
      </div>
    </header>
  );
}

