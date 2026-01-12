import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example-finance-blog.com'),
  title: {
    default: 'Yashwanth S: Value Research - Practical Stock Market & Finance Insights',
    template: '%s | Yashwanth S: Value Research',
  },
  description:
    'Simple, practical articles on stocks, IPOs, mutual funds, and personal finance for Indian retail investors.',
  openGraph: {
    title: 'Yashwanth S: Value Research - Practical Stock Market & Finance Insights',
    description:
      'Simple, practical articles on stocks, IPOs, mutual funds, and personal finance.',
    type: 'website',
    url: 'https://www.example-finance-blog.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashwanth S: Value Research - Practical Stock Market & Finance Insights',
    description:
      'Simple, practical articles on stocks, IPOs, mutual funds, and personal finance.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

