import Link from 'next/link';
import type { BlogFrontmatter } from '@/lib/types';

interface BlogCardProps {
  post: BlogFrontmatter;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm/10 transition hover:-translate-y-0.5 hover:shadow-md/10">
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
          {labelForCategory(post.category)}
        </div>
        <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.description}
        </p>
        <div className="mt-auto pt-3 text-[11px] text-slate-500">
          {post.author} · {new Date(post.date).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </div>
      </Link>
    </article>
  );
}

export function labelForCategory(category: BlogFrontmatter['category']) {
  switch (category) {
    case 'stocks':
      return 'Stocks';
    case 'ipo':
      return 'IPO';
    case 'mutual-funds':
      return 'Mutual Funds';
    case 'finance-basics':
      return 'Finance Basics';
    default:
      return 'Finance';
  }
}

