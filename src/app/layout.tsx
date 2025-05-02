import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Cox",
  description: "live laugh love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
