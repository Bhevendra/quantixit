import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantixit.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Quantix IT Ltd. | Data Engineering, BI & AI Solutions',
    template: '%s | Quantix IT Ltd.',
  },
  description:
    'Quantix IT Ltd. builds scalable data systems, Power BI dashboards and AI-driven solutions on Azure, Databricks and Microsoft Fabric. Transform your data into decisions — trusted by teams in London and Bengaluru.',
  applicationName: 'Quantix IT',
  keywords: [
    'Quantix IT',
    'data engineering',
    'business intelligence',
    'Power BI consulting',
    'Azure Databricks',
    'Microsoft Fabric',
    'data lakehouse',
    'predictive analytics',
    'AI solutions',
    'machine learning consulting',
    'workflow automation',
    'data consultancy London',
    'data consultancy Bengaluru',
    'BI dashboards',
    'ETL pipelines',
    'data warehouse',
    'analytics consulting',
  ],
  authors: [{ name: 'Quantix IT Ltd.' }],
  creator: 'Quantix IT Ltd.',
  publisher: 'Quantix IT Ltd.',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'Quantix IT Ltd.',
    title: 'Quantix IT Ltd. | Transform Your Data Into Decisions',
    description:
      'Scalable data systems, powerful dashboards and AI-driven solutions for modern businesses. Data engineering, BI and machine learning — delivered.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quantix IT Ltd. — Transform Your Data Into Decisions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantix IT Ltd. | Data, BI & AI Solutions',
    description:
      'We build scalable data systems, powerful dashboards and AI-driven solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Quantix IT Ltd.',
  legalName: 'Quantix IT Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'Data engineering, business intelligence and AI solutions for modern businesses.',
  email: 'hr-uk@quantixit.in',
  telephone: '+44 7776 802047',
  sameAs: ['https://www.linkedin.com/company/quantix-it/'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  ],
  areaServed: ['United Kingdom', 'India', 'Europe', 'Worldwide'],
  knowsAbout: [
    'Data Engineering',
    'Business Intelligence',
    'Power BI',
    'Azure',
    'Databricks',
    'Microsoft Fabric',
    'Artificial Intelligence',
    'Machine Learning',
    'Predictive Analytics',
    'Workflow Automation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased dark:bg-ink-950 dark:text-ink-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
