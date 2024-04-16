import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'
import Head from "next/head";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "ShakedKod's Podcasts",
    description: "The home for Shakedkod\'s podcasts",
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/assets/logo-w.png',
                href: '/assets/logo-w.png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/assets/logo-b.png',
                href: '/assets/logo-b.png',
            },
        ],
    }
};

const archayFont = localFont({
    src: './fonts/archay.ttf',
    variable: '--font-archay',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="@/app/favicon.ico" sizes="any" />
            </Head>
            <body className={`${archayFont.variable} bg-blue-70 text-white w-screen hide-scrollbar`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}