import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chemasalamanca.com"),
  title: "Chema Salamanca | Transformacion Empresarial y Humana Aumentada con IA",
  description:
    "Fisico, MBA y CEO de BEAI Energy. Conecto IA, personas y negocio para generar impacto sostenible en energia e industria. +25 anos de experiencia internacional.",
  keywords: [
    "Chema Salamanca",
    "BEAI Energy",
    "Inteligencia Artificial",
    "Transformacion Digital",
    "IA Etica",
    "Consultoria IA",
    "Energia",
    "Industria",
    "CEO",
    "Consejos de Administracion",
  ],
  authors: [{ name: "Chema Salamanca" }],
  creator: "Chema Salamanca",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://chemasalamanca.com",
    siteName: "Chema Salamanca",
    title: "Chema Salamanca | Transformacion Empresarial y Humana Aumentada con IA",
    description:
      "Fisico, MBA y CEO de BEAI Energy. Conecto IA, personas y negocio para generar impacto sostenible.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Chema Salamanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chema Salamanca | Transformacion Empresarial con IA",
    description:
      "CEO de BEAI Energy. La tecnologia al servicio de las personas, nunca en su lugar.",
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
