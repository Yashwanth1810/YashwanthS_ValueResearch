import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { getAllBlogs } from '@/lib/mdx';
import type { BlogCategory } from '@/lib/types';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All articles on stocks, IPOs, mutual funds, and personal finance from Yashwanth S: Value Research.',
};

const PAGE_SIZE = 9;

interface BlogIndexProps {
  searchParams: Promise<{
    page?: string;
    category?: BlogCategory;
    q?: string;
  }>;
}

export default async function BlogIndexPage({ searchParams }: BlogIndexProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const category = params.category;
  const q = params.q?.toLowerCase() ?? '';

  const all = getAllBlogs();

  const filtered = all.filter((post) => {
    const m = post.frontmatter;
    const matchesCategory = category ? m.category === category : true;
    const matchesQuery = q
      ? m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
      : true;
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Articles
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            In-depth explainers and practical guides on Indian markets and
            personal finance.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {paginated.map((post, index) => (
            <BlogCard
              key={post.frontmatter.slug ?? `post-${index}`}
              post={post.frontmatter}
            />
          ))}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} />
      </main>
      <Footer />
    </>
  );
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2 text-xs"
      aria-label="Pagination"
    >
      {Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;
        const isActive = page === currentPage;
        return (
          <Link
            key={page}
            href={`/blog?page=${page}`}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
              isActive
                ? 'border-brand bg-brand text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-brand/60 hover:text-brand'
            }`}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}

