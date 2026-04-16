import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = await getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Yashwanth's Valued Research Insights - Stock Market Analysis</title>
      <link>https://yashwanths.in</link>
      <description>Stock market insights and analysis</description>
      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>https://yashwanths.in/blog/${post.slug}</link>
          <description>${post.description}</description>
        </item>`
        )
        .join('')}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}