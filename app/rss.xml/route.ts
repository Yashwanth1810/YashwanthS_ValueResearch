import { getAllBlogs } from "@/lib/mdx";

export async function GET() {
  const posts = getAllBlogs();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Yashwanth's Valued Research Insights</title>
  <link>https://yashwanths.in</link>
  <description>Stock market insights and research</description>
  ${posts
    .map(
      (post) => `
    <item>
      <title>${post.frontmatter.title}</title>
      <link>https://yashwanths.in/blog/${post.frontmatter.slug}</link>
      <description>${post.frontmatter.description}</description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("")}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}