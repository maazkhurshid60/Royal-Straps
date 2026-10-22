import './globals.css';

export const metadata = {
  title: 'Royal Straps | Handcrafted Watch Straps & Bespoke Conversion Guide',
  description: 'Discover the premier collector guide and boutique for luxury watch straps. Explore Base, Essentials, and Signature collections designed for precision timepieces.',
  keywords: 'royal straps, watch straps, bespoke straps, royal conversion, luxury watch accessories, royal pop straps',
  openGraph: {
    title: 'Royal Straps | Premium Watch Strap Guide & Store',
    description: 'Transform your luxury timepiece with precision-engineered bespoke straps.',
    url: 'https://royalconversion.co/',
    siteName: 'Royal Straps',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
