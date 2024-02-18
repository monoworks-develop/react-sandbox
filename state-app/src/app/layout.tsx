import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { styles } from './layout.css';

import { Header } from '@/components/UI/Header';

import 'ress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={styles.root}>
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
