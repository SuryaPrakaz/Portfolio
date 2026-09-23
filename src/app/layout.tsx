import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Surya Prakash M | Web Developer | CSBS Student',
  description: 'Portfolio of Surya Prakash M, a Computer Science and Business Systems student focused on web development, practical software projects, and Full Stack Development.',
  keywords: [
    'Surya Prakash M',
    'Web Developer',
    'Full Stack Development',
    'Computer Science and Business Systems',
    'Francis Xavier Engineering College',
    'Tirunelveli',
    'Student Developer',
    'Software Internship'
  ],
  authors: [{ name: 'Surya Prakash M' }],
  openGraph: {
    title: 'Surya Prakash M | Web Developer | CSBS Student',
    description: 'Computer Science & Business Systems Student building practical web solutions in Tirunelveli, Tamil Nadu.',
    url: 'https://github.com/SuryaPrakaz',
    siteName: 'Surya Prakash M Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050507] text-gray-100 antialiased min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
