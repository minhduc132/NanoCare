import localFont from "next/font/local";
import "./globals.css";

const nanocareFont = localFont({
    src: [
        {
            path: "../../public/fonts/TWFucmwZSFeHRyYUxpZhLnRZg.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-nanocare",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <body className={`${nanocareFont.variable} bg-[#FAFAFA] text-base`}>
                {children}
            </body>
        </html>
    );
}
