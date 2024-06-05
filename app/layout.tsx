import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "./animations.css";
import {UseRefProviders} from "@/app/providers/useRef-providers";
import NavBar from "@/app/components/NavBar";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import {LanguageProvider} from "@/app/providers/language-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Florian Christ",
    description: "This is my personal website",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="de" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <LanguageProvider>
                    <UseRefProviders>
                        <NavBar />
                        <ThemeSwitch />
                        {children}
                    </UseRefProviders>
                </LanguageProvider>
            </body>
        </html>
    );
}
