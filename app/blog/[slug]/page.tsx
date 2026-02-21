import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toc } from '@/components/Toc';
import { getAllBlogs, getBlogBySlug, getBlogSlugs } from '@/lib/mdx';
import { BlogPost } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const revalidate = 60;

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: BlogPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const url = `/blog/${frontmatter.slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      url,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post);
  const related = getRelatedPosts(post.frontmatter.slug);

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <article className="grid gap-10 md:grid-cols-[minmax(0,2.2fr),minmax(0,1fr)]">
          <div>
            <header>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
                {(post.frontmatter.category ?? 'finance').replace('-', ' ')}
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {post.frontmatter.title}
              </h1>
              <p className="mt-3 text-sm text-slate-600">
                {post.frontmatter.description}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <span>{post.frontmatter.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString(
                    'en-IN',
                    {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    },
                  )}
                </time>
              </div>
              <ShareButtons
                slug={post.frontmatter.slug}
                title={post.frontmatter.title}
              />
            </header>

            <div className="mt-8 prose-finance">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          <aside className="space-y-6">
            <Toc items={toc} />
            {related.length > 0 && (
              <section className="rounded-2xl border border-slate-100 bg-white p-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Related articles
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((rel, index) => (
                    <li key={rel.frontmatter.slug ?? `rel-${index}`}>
                      <Link
                        href={`/blog/${rel.frontmatter.slug}`}
                        className="text-slate-700 hover:text-brand"
                      >
                        {rel.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
}

function extractToc(post: BlogPost) {
  // Very lightweight TOC based on markdown headings;
  // for production, prefer generating this via remark at build time.
  const lines = post.content.split('\n');
  const items = lines
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => {
      const level = line.startsWith('###') ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return { id, text, level };
    });
  return items;
}

function getRelatedPosts(currentSlug: string) {
  const all = getAllBlogs();
  return all
    .filter((p) => p.frontmatter.slug !== currentSlug)
    .slice(0, 4);
}

function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const baseUrl = 'https://www.example-finance-blog.com';
  const url = `${baseUrl}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
      <span>Share</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 px-2 py-1 hover:border-brand/60 hover:text-brand"
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 px-2 py-1 hover:border-brand/60 hover:text-brand"
      >
        LinkedIn
      </a>
    </div>
  );
}

