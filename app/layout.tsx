import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


export const metadata: Metadata = {
  title: "Bakari Morris - Full Stack Engineer",
  description: "Full-Stack Engineer with 8+ years of experience owning and scaling React/Next.js applications. Expert in TypeScript, performance optimization, and frontend state management.",
  keywords: "Bakari Morris, Full Stack Engineer, React, Next.js, TypeScript, Software Engineer, Frontend Developer, JavaScript",
  authors: [{ name: "Bakari Morris" }],
  creator: "Bakari Morris",
  metadataBase: new URL('https://bakari.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bakari.tech',
    title: 'Bakari Morris - Full Stack Engineer',
    description: 'Full-Stack Engineer with 8+ years of experience owning and scaling React/Next.js applications.',
    siteName: 'Bakari Morris Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bakari Morris - Full Stack Engineer',
    description: 'Full-Stack Engineer with 8+ years of experience owning and scaling React/Next.js applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header></Header>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
