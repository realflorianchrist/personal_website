import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreInitializer from '@/components/store_initializer/StoreInitializer';
import SvgFilters from '@/components/svg_filters/SvgFilters';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Florian Christ",
  description: "This is my personal website"
};

export default function RootLayout(
  {
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreInitializer />
        <SvgFilters />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
