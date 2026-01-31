import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colibri Global LLC | Strategic Excellence, Global Impact",
  description:
    "Colibri Global LLC is a premier consulting firm delivering strategic excellence and driving global impact through innovative solutions and expert guidance.",
  keywords: [
    "consulting",
    "strategic consulting",
    "business transformation",
    "market analysis",
    "growth advisory",
    "global consulting",
    "business strategy",
  ],
  authors: [{ name: "Colibri Global LLC" }],
  openGraph: {
    title: "Colibri Global LLC | Strategic Excellence, Global Impact",
    description:
      "Premier consulting firm delivering strategic excellence and driving global impact.",
    url: "https://colibriglobal.com",
    siteName: "Colibri Global LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colibri Global LLC | Strategic Excellence, Global Impact",
    description:
      "Premier consulting firm delivering strategic excellence and driving global impact.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white text-[#333333]`}
      >
        {children}
      </body>
    </html>
  );
}
