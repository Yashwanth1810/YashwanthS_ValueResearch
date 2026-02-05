import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yashwanths.in';
  const posts = getAllBlogs();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.frontmatter.slug}`,
      lastModified: post.frontmatter.date
        ? new Date(post.frontmatter.date)
        : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}