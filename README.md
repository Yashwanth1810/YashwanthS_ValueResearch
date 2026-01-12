# Yashwanth S: Value Research - Finance Blog Website

A modern, SEO-optimized finance blogging website built with Next.js, Tailwind CSS, and MDX - similar to TradeBrains.in.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **Static Site Generation (SSG)** with ISR
- ✅ **MDX** for blog content
- ✅ **Tailwind CSS** with Typography plugin
- ✅ **SEO Optimized** (metadata, sitemap, robots.txt, Open Graph)
- ✅ **Mobile Responsive** design
- ✅ **Clean UI** focused on readability
- ✅ **Category Filtering** (Stocks, IPO, Mutual Funds, Finance Basics)
- ✅ **Search Functionality**
- ✅ **Pagination** for blog listing
- ✅ **Table of Contents** for blog posts
- ✅ **Related Posts** section
- ✅ **Share Buttons** (Twitter, LinkedIn)

## Project Structure

```
blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── blog/
│   │   ├── page.tsx       # Blog listing with pagination
│   │   └── [slug]/
│   │       └── page.tsx   # Single blog post
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── Newsletter.tsx
│   └── Toc.tsx
├── content/
│   └── blogs/             # MDX blog posts
│       ├── getting-started-with-stocks.mdx
│       ├── understanding-ipos-india.mdx
│       ├── mutual-funds-basics.mdx
│       └── personal-finance-fundamentals.mdx
├── lib/
│   ├── types.ts           # TypeScript types
│   └── mdx.ts             # MDX utilities
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run development server:**

```bash
npm run dev
```

3. **Open browser:**

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Adding New Blog Posts

1. Create a new `.mdx` file in `content/blogs/`
2. Add frontmatter:

```mdx
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
description: "A brief description for SEO"
date: "2025-12-20"
author: "Your Name"
category: "stocks" # stocks, ipo, mutual-funds, finance-basics
featured: false
tags:
  - tag1
  - tag2
---
```

3. Write your content in Markdown/MDX below the frontmatter
4. The post will automatically appear in `/blog` and be included in the sitemap

## Configuration

### Update Site URL

Edit `app/layout.tsx` and `app/sitemap.ts` to replace `https://www.example-finance-blog.com` with your actual domain.

### Customize Brand Colors

Edit `tailwind.config.ts` to change the brand color:

```ts
colors: {
  brand: {
    DEFAULT: '#0052cc', // Your brand color
    light: '#4c8dff',
    dark: '#003a99',
  },
}
```

### Add Categories

1. Update `BlogCategory` type in `lib/types.ts`
2. Add category links in `components/Navbar.tsx`
3. Update `labelForCategory` function in `components/BlogCard.tsx`

## Deployment

### Hostinger (Node.js Hosting)

1. **Build the project:**

```bash
npm run build
```

2. **Upload files** to your Hostinger hosting:
   - Upload all files except `node_modules`
   - Make sure `.env` files are not uploaded (they're in .gitignore)

3. **Install dependencies on server:**

```bash
npm install --production
```

4. **Start the server:**

```bash
npm start
```

5. **Configure Hostinger:**
   - Set Node.js version to 18+
   - Set start command to `npm start`
   - Set build command to `npm run build`

### Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## SEO Features

- ✅ Dynamic metadata for each page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized for Core Web Vitals

## Performance

- Static Site Generation (SSG) for fast page loads
- Incremental Static Regeneration (ISR) for fresh content
- Image optimization (when using Next.js Image component)
- Font optimization
- Code splitting

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Typography plugin
- **Content:** MDX
- **Language:** TypeScript
- **Deployment:** Node.js compatible (Hostinger, Vercel, etc.)

## License

MIT License - feel free to use this for your own projects.

## Support

For issues or questions, please check the Next.js documentation or create an issue in your repository.

---

Built with ❤️ for finance education in India.
