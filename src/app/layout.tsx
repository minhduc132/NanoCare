import { Hind } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const hindFont = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-hind",
    display: "swap",
});

// Get base URL - prioritize custom domain, then Vercel URL, then fallback
const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'https://nanocare.vercel.app'; // Fallback to Vercel subdomain
};

export const metadata: Metadata = {
    metadataBase: new URL(getBaseUrl()),
    title: {
        default: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
        template: "%s | Nanocare"
    },
    description: "Nanocare focuses on producing a wide range of products that clean nasal passages, providing you with a sensation of unrestricted breathing. Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products.",
    keywords: ["nasal irrigation", "nasal rinse kit", "nasal care", "saline solution", "nasal health", "respiratory care", "nasal cleansing"],
    authors: [{ name: "Nanocare" }],
    creator: "Nanocare",
    publisher: "Nanocare",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "Nanocare",
        title: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
        description: "Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products. Clean nasal passages for unrestricted breathing.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Nanocare - Nasal Care Products",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
        description: "Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Add Google Search Console verification if available
        // google: "verification_token_here",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

import Header from '../components/Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${hindFont.variable} bg-white text-base`}>
                <Header />
                {children}
            </body>
        </html>
    );
}

