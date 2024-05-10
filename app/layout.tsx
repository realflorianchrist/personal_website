import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav-bar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Florian Christ",
    description: "This is my personal website",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="de">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
