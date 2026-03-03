import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { getDictionary } from '@/i18n/dictionaries';
import { DictionaryProvider } from '@/i18n/context';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import '@/app/globals.css';

// -- Fonts -----------------------------------------------------------------------
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// -- Types -----------------------------------------------------------------------
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// -- Static params ----------------------------------------------------------------
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// -- Metadata --------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';

  const shared = {
    metadataBase: new URL('https://chemasalamanca.com'),
    icons: { icon: '/favicon.svg' },
  };

  if (isSpanish) {
    return {
      ...shared,
      title: 'Chema Salamanca | Transformaci\u00f3n Empresarial y Humana Aumentada con IA',
      description:
        'CEO y Fundador de BEAI Energy. F\u00edsico, MBA y l\u00edder global con m\u00e1s de 25 a\u00f1os impulsando la transformaci\u00f3n de empresas e industrias con IA \u00e9tica. Conferenciante, consejero y emprendedor.',
      keywords: [
        'Chema Salamanca',
        'transformaci\u00f3n digital',
        'inteligencia artificial \u00e9tica',
        'liderazgo empresarial',
        'BEAI Energy',
        'consultor\u00eda IA',
        'arquitectura empresarial',
        'conferenciante IA',
        'CEO energ\u00eda',
        'industria 4.0',
      ],
      authors: [{ name: 'Chema Salamanca' }],
      creator: 'Chema Salamanca',
      publisher: 'Chema Salamanca',
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      },
      alternates: {
        canonical: 'https://chemasalamanca.com/es',
        languages: {
          en: 'https://chemasalamanca.com/en',
          es: 'https://chemasalamanca.com/es',
        },
      },
      openGraph: {
        type: 'website',
        locale: 'es_ES',
        alternateLocale: 'en_US',
        url: 'https://chemasalamanca.com/es',
        siteName: 'Chema Salamanca',
        title: 'Chema Salamanca | Transformaci\u00f3n Empresarial y Humana Aumentada con IA',
        description:
          'CEO y Fundador de BEAI Energy. F\u00edsico, MBA y l\u00edder global con m\u00e1s de 25 a\u00f1os impulsando la transformaci\u00f3n con IA \u00e9tica.',
        images: [
          {
            url: 'https://chemasalamanca.com/images/chema-og.jpg',
            width: 1200,
            height: 630,
            alt: 'Chema Salamanca \u2014 Transformaci\u00f3n Empresarial y Humana Aumentada con IA',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Chema Salamanca | Transformaci\u00f3n con IA',
        description:
          'CEO y Fundador de BEAI Energy. +25 a\u00f1os liderando transformaciones en sectores de energ\u00eda e industria.',
        images: ['https://chemasalamanca.com/images/chema-og.jpg'],
        creator: '@chemasalamanca',
      },
    };
  }

  // English (default)
  return {
    ...shared,
    title: 'Chema Salamanca | Augmented Business & Human Transformation with AI',
    description:
      'CEO & Founder of BEAI Energy. Physicist, MBA, and global leader with 25+ years driving transformation in energy and industrial sectors with ethical AI. Speaker, board member, and entrepreneur.',
    keywords: [
      'Chema Salamanca',
      'digital transformation',
      'ethical artificial intelligence',
      'business leadership',
      'BEAI Energy',
      'AI consulting',
      'enterprise architecture',
      'AI keynote speaker',
      'energy CEO',
      'industry 4.0',
    ],
    authors: [{ name: 'Chema Salamanca' }],
    creator: 'Chema Salamanca',
    publisher: 'Chema Salamanca',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: 'https://chemasalamanca.com/en',
      languages: {
        en: 'https://chemasalamanca.com/en',
        es: 'https://chemasalamanca.com/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'es_ES',
      url: 'https://chemasalamanca.com/en',
      siteName: 'Chema Salamanca',
      title: 'Chema Salamanca | Augmented Business & Human Transformation with AI',
      description:
        'CEO & Founder of BEAI Energy. Physicist, MBA, and global leader with 25+ years driving transformation in energy and industrial sectors with ethical AI.',
      images: [
        {
          url: 'https://chemasalamanca.com/images/chema-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Chema Salamanca \u2014 Augmented Business & Human Transformation with AI',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Chema Salamanca | Augmented Transformation with AI',
      description:
        'CEO & Founder of BEAI Energy. 25+ years leading transformations in energy and industrial sectors.',
      images: ['https://chemasalamanca.com/images/chema-og.jpg'],
      creator: '@chemasalamanca',
    },
  };
}

// -- JSON-LD: Person Schema -------------------------------------------------------
function PersonSchema({ locale }: { locale: string }) {
  const isSpanish = locale === 'es';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chema Salamanca',
    jobTitle: isSpanish ? 'CEO y Fundador' : 'CEO & Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'BEAI Energy',
      url: 'https://beaienergy.com',
    },
    url: isSpanish
      ? 'https://chemasalamanca.com/es'
      : 'https://chemasalamanca.com/en',
    sameAs: [
      'https://www.linkedin.com/in/chema-salamanca-a869402/',
      'https://beaienergy.com',
    ],
    knowsAbout: isSpanish
      ? [
          'Inteligencia Artificial',
          'Transformaci\u00f3n Digital',
          'Arquitectura Empresarial',
          'Liderazgo Ejecutivo',
          'Sector Energ\u00e9tico',
        ]
      : [
          'Artificial Intelligence',
          'Digital Transformation',
          'Enterprise Architecture',
          'Executive Leadership',
          'Energy Sector',
        ],
    description: isSpanish
      ? 'CEO y Fundador de BEAI Energy. F\u00edsico, MBA y l\u00edder global con m\u00e1s de 25 a\u00f1os impulsando la transformaci\u00f3n con IA \u00e9tica en energ\u00eda e industria.'
      : 'CEO & Founder of BEAI Energy. Physicist, MBA, and global leader with 25+ years driving ethical AI transformation in energy and industrial sectors.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// -- JSON-LD: Website Schema -----------------------------------------------------
function WebsiteSchema({ locale }: { locale: string }) {
  const isSpanish = locale === 'es';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chema Salamanca',
    url: isSpanish
      ? 'https://chemasalamanca.com/es'
      : 'https://chemasalamanca.com/en',
    description: isSpanish
      ? 'Transformaci\u00f3n Empresarial y Humana Aumentada con IA. CEO y Fundador de BEAI Energy.'
      : 'Augmented Business & Human Transformation with AI. CEO & Founder of BEAI Energy.',
    inLanguage: isSpanish ? 'es-ES' : 'en-US',
    author: {
      '@type': 'Person',
      name: 'Chema Salamanca',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// -- Layout ----------------------------------------------------------------------
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <PersonSchema locale={locale} />
        <WebsiteSchema locale={locale} />
      </head>
      <body className="antialiased">
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
