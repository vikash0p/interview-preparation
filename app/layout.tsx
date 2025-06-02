import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/GlobalComponents/Navbar";
import ScrollToTop from "@/components/GlobalComponents/ScrollToTop";
import { ViewTransitions } from "next-view-transitions";
import { Nunito } from "next/font/google";
import { LayoutMetadata } from "@/main/meta/LayoutMetadata";


const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});


export const metadata: Metadata = LayoutMetadata;

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${nunito.className} antialiased text-gray-300 bg-gradient-to-b from-gray-900 to-gray-900`}
        >
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
        </body>
      </html>
    </ViewTransitions>
  );
}
