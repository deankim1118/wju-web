import { Footer } from '@/components/Footer';
import { Header } from '@/components/layout/header/Header';
import type { Metadata } from 'next';
import { EB_Garamond, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Inter - 본문 및 버튼용 산세리프 폰트
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Playfair Display - 제목용 세리프 폰트
const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// EB Garamond - 인용구 및 특별한 텍스트용 세리프 폰트
const garamond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Washington Jabez University | Seminary & Theological Education',
  description:
    'Washington Jabez University offers comprehensive theological education and seminary programs to prepare faithful ministers for gospel ministry.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${garamond.variable} antialiased`}
      >
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-1' id='maincontent'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
