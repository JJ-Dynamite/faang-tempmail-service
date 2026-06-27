import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'One-click temporary email',
  description: 'One-click temporary email - Built with Rust + Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
