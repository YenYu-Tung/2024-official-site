import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], weight: ["100", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "2024 OPENHCI Official website",
  description: "Official website of 2024 OPENHCI workshop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansTC.className}>{children}</body>
    </html>
  );
}
