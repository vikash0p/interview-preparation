import './globals.css';
import ScrollToTop from '@/components/global-components/ScrollToTop';
import { ViewTransitions } from 'next-view-transitions';
import { Nunito } from 'next/font/google';
import { LayoutMeta } from '@/main/meta/LayoutMetadata';
import Navbar from '@/components/layout-components/Navbar';
import { LayoutViewport } from "@/main/meta/viewport";

const nunito = Nunito({
	subsets: ['latin',],
	display: 'swap',
	weight: ['400', '700'],
});

export const metadata = LayoutMeta;
export const viewport = LayoutViewport;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {




	return (
		<ViewTransitions>
			<html lang='en'>
				<body
					className={`${nunito.className} antialiased text-gray-300 bg-gradient-to-b  from-gray-900 to-gray-900 overflow-auto`}
				>
					<Navbar />
					<main>{children}</main>
					<ScrollToTop />
				</body>
			</html>
		</ViewTransitions>
	);
}
