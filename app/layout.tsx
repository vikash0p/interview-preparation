import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/GlobalComponents/Navbar";
import { LayoutMetadata } from "@/utils/seo/meta/LayoutMetadata";
import ScrollToTop from "@/components/GlobalComponents/ScrollToTop";

export const metadata: Metadata = LayoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased text-gray-400 bg-black`}>
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
