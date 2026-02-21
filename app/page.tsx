import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import { BlogCard } from '@/components/BlogCard';
import { getAllBlogs } from '@/lib/mdx';

export const revalidate = 60; // SSG with ISR

export default function HomePage() {
  const posts = getAllBlogs();
  const featured = posts.find((p) => p.frontmatter.featured) ?? posts[0];
  const latest = posts.slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Featured
            </p>
            {featured && (
              <div className="mt-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {featured.frontmatter.title}
                </h1>
                <p className="mt-3 max-w-xl text-sm text-slate-600">
                  {featured.frontmatter.description}
                </p>
                <Link
                  href={`/blog/${featured.frontmatter.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Read article
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
          <aside className="space-y-4 rounded-3xl border border-slate-100 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Learn by topic
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <CategoryPill href="/blog?category=stocks" label="Stocks" />
              <CategoryPill href="/blog?category=ipo" label="IPOs" />
              <CategoryPill
                href="/blog?category=mutual-funds"
                label="Mutual Funds"
              />
              <CategoryPill
                href="/blog?category=finance-basics"
                label="Finance Basics"
              />
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">
              Latest articles
            </h2>
            <Link
              href="/blog"
              className="text-xs font-medium text-brand hover:text-brand-dark"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {latest.map((post, index) => (
              <BlogCard
                key={post.frontmatter.slug ?? `post-${index}`}
                post={post.frontmatter}
              />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function CategoryPill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-700 hover:border-brand/50 hover:bg-white hover:text-brand"
    >
      {label}
    </Link>
  );
}

