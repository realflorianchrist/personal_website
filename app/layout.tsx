import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { LanguageProvider } from "@/app/providers/language-provider";
import NavBar from "@/app/components/NavBar";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import LanguageSwitch from "@/app/components/LanguageSwitch";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

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
        <NavBar />
        <ThemeSwitch />
        <LanguageSwitch />
        {children}
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
