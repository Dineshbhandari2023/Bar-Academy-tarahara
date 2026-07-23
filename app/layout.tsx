import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bar Academy Tarahara | Best Bartending & Professional Barista Training in Nepal',
  description: 'Bar Academy Tarahara in Itahari, Sunsari, Koshi Province offers professional bartending, barista coffee craft, exhibition flair, and molecular mixology diploma courses with 100% practical lab training and global job placement support.',
  keywords: [
    'Bar Academy Tarahara',
    'Bartending school Nepal',
    'Barista course Itahari',
    'Bartending training Sunsari',
    'Mixology course Nepal',
    'Coffee barista training Itahari',
    'Flair bartending school Tarahara',
    'Hospitality training Koshi Province Nepal'
  ],
  authors: [{ name: 'Bar Academy Tarahara' }],
  creator: 'Bar Academy Tarahara',
  openGraph: {
    title: 'Bar Academy Tarahara - Best Bartending & Barista School in Nepal',
    description: 'Master the art of mixology, commercial espresso extraction, latte art, and exhibition flair at Bar Academy Tarahara, Itahari.',
    url: 'https://baracademytarahara.com',
    siteName: 'Bar Academy Tarahara',
    images: [
      {
        url: '/images/hero_bar_academy_1784797795228.jpg',
        width: 1200,
        height: 630,
        alt: 'Bar Academy Tarahara Training Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Academy Tarahara | Professional Beverage Training in Nepal',
    description: 'Premier institute for bartending, barista, flair, and molecular mixology in Tarahara, Itahari, Nepal.',
    images: ['/images/hero_bar_academy_1784797795228.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Bar Academy Tarahara',
    'alternateName': 'बार एकेडेमी तरहरा',
    'url': 'https://baracademytarahara.com',
    'logo': 'https://baracademytarahara.com/images/hero_bar_academy_1784797795228.jpg',
    'description': 'Premier institute for professional bartending, barista training, exhibition flair, and molecular mixology in Tarahara, Itahari, Nepal.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Dharan-Itahari Highway, Tarahara Chowk',
      'addressLocality': 'Itahari',
      'addressRegion': 'Sunsari, Koshi Province',
      'postalCode': '56705',
      'addressCountry': 'NP'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 26.7087126,
      'longitude': 87.2694582
    },
    'telephone': '+9779800000000',
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61555945627589',
      'https://www.instagram.com/bar_academy_/'
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans selection:bg-[#D4AF37] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
