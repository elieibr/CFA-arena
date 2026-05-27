import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CharterPath — Préparation Level 1 avec l'IA",
  description: "Plan d'étude adaptatif, questions ciblées sur vos points faibles, et révision espacée calibrée pour l'examen CFA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
