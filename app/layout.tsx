import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono'
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif'
});

export const metadata: Metadata = {
  title: "CharterPath — Préparation CFA Level 1",
  description: "1 000 questions CFA Level 1, classement en temps réel, quiz adaptatif. La plateforme de préparation CFA la plus sérieuse.",
  metadataBase: new URL('https://cfa-arena.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CharterPath — Préparation CFA Level 1",
    description: "1 000 questions CFA Level 1, classement en temps réel, quiz adaptatif. La plateforme de préparation CFA la plus sérieuse.",
    url: 'https://cfa-arena.vercel.app',
    siteName: 'CharterPath',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CharterPath — Préparation CFA Level 1",
    description: "1 000 questions CFA Level 1, classement en temps réel, quiz adaptatif. La plateforme de préparation CFA la plus sérieuse.",
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
    <html lang="fr" className={`${inter.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
