import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: {
    google: 'HHqwUx-E-hWc9HIzNNdUJrBFctyTory1aAlOdFgOKuw',
  },
  metadataBase: new URL('https://yashwanths.in'),
  title: {
    default: 'Yashwanth S: Valued Research Insights - Practical Stock Market & Finance Insights',
    template: '%s | Yashwanth S: Value Research',
  },
  description:
    'Valued Research Insights by Yashwanth S - Simple, practical articles on stocks, IPOs, mutual funds, and personal finance for Indian retail investors.',
  openGraph: {
    title: 'Yashwanth S: Valued Research Insights - Practical Stock Market & Finance Insights',
    description:
      'Simple, practical articles on stocks, IPOs, mutual funds, and personal finance.',
    type: 'website',
    url: 'https://www.example-finance-blog.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashwanth S: Valued Research Insights - Practical Stock Market & Finance Insights',
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

