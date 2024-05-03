import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });
// Define the environment variable
const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER;
const GOOGLE_ANALYTICS  = process.env.GOOGLE_ANALYTICS;


export const metadata: Metadata = {
  title: "OpenHCI 2024",
  description: "OPENHCI (Open Human-Computer Interaction) 2024 is a student-run workshop aims to promote the HCI community in Taiwan.",
  metadataBase: new URL("https://www.2024.openhci.com/"),
  alternates: {
    canonical: '/',
    languages: {
      // 'en-US': '/en-US',
      // 'de-DE': '/de-DE',
      'zh-Hant': '/zh-Hant',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER || 'default'} />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS || 'default'} />
    </html>
  );
}
