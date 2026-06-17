import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Abbas | Student & Builder",
  description:
    "Portfolio of Ahmad Abbas Bin Abu Dzarr — IT student, builder of DLP Advisor, and documentary-style photographer.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Ahmad Abbas | Student & Builder",
    description:
      "Code meets documentary. Intelligent Systems student building legaltech tools for Malaysian homeowners.",
    url: "https://sabba-san.github.io",
    siteName: "Ahmad Abbas",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main-content"
          className="fixed -top-full left-4 z-[70] px-4 py-2 rounded-b-lg bg-foreground text-background text-sm font-medium transition-all duration-300 focus-visible:top-0 focus-visible:outline-2 focus-visible:outline-accent"
        >
          Skip to content
        </a>
        <div className="noise-overlay" />
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
      </body>
    </html>
  );
}
