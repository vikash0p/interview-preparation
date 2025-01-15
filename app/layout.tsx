import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatedTabsHover } from "@/components/ui/AnimatedTabsHover";
import Footer from "@/components/GlobalComponents/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InterViewPrap | Ace Your Job Interviews",
  description:
    "Prepare effectively for your next job interview with InterViewPrap. Explore tailored resources, practice questions, and expert guidance for success.",
  keywords:
    "job interview, interview preparation, career guidance, practice questions, mock interviews, career success",
  openGraph: {
    title: "InterViewPrap | Ace Your Job Interviews",
    description:
      "Your ultimate platform for mastering job interviews. Access personalized preparation tools, expert tips, and resources to land your dream job.",
    url: "https://www.interviewprap.com",
    type: "website",
    images: [
      {
        url: "https://www.interviewprap.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InterViewPrap - Ace Your Job Interviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InterViewPrap | Ace Your Job Interviews",
    description:
      "Unlock your career potential with InterViewPrap. Discover tools, tips, and resources to nail your next job interview.",
    site: "@InterViewPrap",
    creator: "@InterViewPrapTeam",
    images: [
      {
        url: "https://www.interviewprap.com/assets/twitter-card.jpg",
        alt: "InterViewPrap - Ace Your Job Interviews",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-400 bg-black`}
      >
        <AnimatedTabsHover />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
