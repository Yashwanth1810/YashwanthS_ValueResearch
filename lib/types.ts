export type BlogCategory = 'stocks' | 'ipo' | 'mutual-funds' | 'finance-basics';

export interface BlogFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: BlogCategory;
  featured?: boolean;
  image?: string;
  tags?: string[];
}

