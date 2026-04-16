import { getAllBlogs } from "@/lib/mdx";

export async function GET() {
  const posts = getAllBlogs();

  // 🔥 Function to escape XML special characters
  const escapeXml = (str: string) => {
    return str
      ?.replace(/&/g, "&amp;")
      ?.replace(/</g, "&lt;")
      ?.replace(/>/g, "&gt;")
      ?.replace(/"/g, "&quot;")
      ?.replace(/'/g, "&apos;") || "";
  };

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Yashwanth&apos;s Valued Research Insights</title>
  <link>https://yashwanths.in</link>
  <description>Stock market insights and research</description>

  ${posts
    .map((post) => {
      return `
      <item>
        <title>${escapeXml(post.frontmatter.title)}</title>
        <link>https://yashwanths.in/blog/${post.frontmatter.slug}</link>
        <description>${escapeXml(post.frontmatter.description)}</description>
        <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      </item>`;
    })
    .join("")}

</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}