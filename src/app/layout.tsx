import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageInit from "@/components/LanguageInit";

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
    <LanguageInit/>
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}
