import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chemasalamanca.com"),
  title: "Chema Salamanca | Transformación Empresarial y Humana Aumentada con IA",
  description:
    "Físico, MBA y CEO de BEAI Energy. Conecto IA, personas y negocio para generar impacto sostenible en energía e industria. +25 años de experiencia internacional.",
  keywords: [
    "Chema Salamanca",
    "BEAI Energy",
    "Inteligencia Artificial",
    "Transformación Digital",
    "IA Ética",
    "Consultoría IA",
    "Energía",
    "Industria",
    "CEO",
    "Consejos de Administración",
  ],
  authors: [{ name: "Chema Salamanca" }],
  creator: "Chema Salamanca",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://chemasalamanca.com",
    siteName: "Chema Salamanca",
    title: "Chema Salamanca | Transformación Empresarial y Humana Aumentada con IA",
    description:
      "Físico, MBA y CEO de BEAI Energy. Conecto IA, personas y negocio para generar impacto sostenible.",
    images: [
      {
        url: "/images/chema-og.jpg",
        width: 1200,
        height: 630,
        alt: "Chema Salamanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chema Salamanca | Transformación Empresarial con IA",
    description:
      "CEO de BEAI Energy. La tecnología al servicio de las personas, nunca en su lugar.",
    images: ["/images/chema-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chema Salamanca",
  "jobTitle": "CEO & Fundador",
  "worksFor": {
    "@type": "Organization",
    "name": "BEAI Energy",
    "url": "https://beaienergy.com"
  },
  "url": "https://chemasalamanca.com",
  "sameAs": ["https://www.linkedin.com/in/chema-salamanca-a869402/"],
  "description": "Físico, MBA y CEO de BEAI Energy. Experto en Transformación Empresarial y Humana Aumentada con IA.",
  "knowsAbout": ["Inteligencia Artificial", "Transformación Digital", "Energía", "Arquitectura Empresarial", "Liderazgo"],
  "alumniOf": [{"@type": "EducationalOrganization", "name": "Universidad Complutense de Madrid"}],
  "nationality": "Spanish",
  "image": "https://chemasalamanca.com/images/chema-og.jpg"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BEAI Energy",
  "url": "https://beaienergy.com",
  "founder": {"@type": "Person", "name": "Chema Salamanca"},
  "description": "Empresa nativa de IA especializada en soluciones para los sectores de energía e industria.",
  "foundingDate": "2025"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
