import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jay Doshi | Portfolio',
  description: 'Portfolio of Jay Doshi - Full Stack Developer',
  keywords: ['portfolio', 'developer', 'full stack', 'web development', 'Jay Doshi'],
  authors: [{ name: 'Jay Doshi' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#efe2cf' }, // light coffee
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
