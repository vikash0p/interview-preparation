import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import { Nunito } from 'next/font/google';
import { LayoutMeta } from '@/main/meta/LayoutMetadata';
import { LayoutViewport } from '@/main/meta/viewport';
import MainLayout from '@/components/layout-components/MainLayout';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = LayoutMeta;
export const viewport = LayoutViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${nunito.className} antialiased text-gray-400  bg-gray-900 overflow-x-hidden scroll-smooth `}>
          <MainLayout>{children} </MainLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
