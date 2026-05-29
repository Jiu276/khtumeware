import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
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
  title: {
    default: "KhtumeWare | Cabinet Handles & Home Hardware",
    template: "%s | KhtumeWare",
  },
  description:
    "Premium cabinet pulls, knobs, bathroom and door hardware. B2B wholesale & B2C retail. Free shipping over $65.",
  keywords: [
    "cabinet handles",
    "cabinet pulls",
    "cabinet knobs",
    "brushed brass handles",
    "matte black hardware",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
