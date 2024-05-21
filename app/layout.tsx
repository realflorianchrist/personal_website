import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "./animations.css";
import {Providers} from "@/app/providers/providers";
import NavBar from "@/app/components/nav-bar";
import ThemeSwitch from "@/app/components/theme-switch";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Florian Christ",
    description: "This is my personal website",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="de" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <Providers>
                    <NavBar />
                    <ThemeSwitch />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
