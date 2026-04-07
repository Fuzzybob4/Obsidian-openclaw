import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenClaw Mission Control',
  description: 'A visual command center for Kal, agents, and businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
