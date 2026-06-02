import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
