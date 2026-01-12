import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { BlogFrontmatter } from './types';

const BLOGS_PATH = path.join(process.cwd(), 'content', 'blogs');

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_PATH)) return [];
  return fs
    .readdirSync(BLOGS_PATH)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOGS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return posts;
}

