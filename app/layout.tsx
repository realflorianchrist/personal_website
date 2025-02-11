import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/providers/language-provider";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import LanguageSwitch from "@/app/components/LanguageSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Christ",
  description: "This is my personal website"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
    <body className={inter.className}>
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
      <LanguageProvider>
        <LanguageSwitch />
        {children}
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
