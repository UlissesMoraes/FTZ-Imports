import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FTZ Imports | Apple Premium em Blumenau - SC",
  description:
    "FTZ Imports é a sua loja Apple Premium em Blumenau - SC. iPhone, MacBook, iPad, Apple Watch e AirPods com atendimento humano, transparente e assistência técnica especializada.",
  keywords: [
    "FTZ Imports",
    "Apple Blumenau",
    "iPhone Blumenau",
    "MacBook Blumenau",
    "iPad",
    "AirPods",
    "Apple Watch",
    "assistência técnica Apple",
    "loja Apple Blumenau SC",
  ],
  openGraph: {
    title: "FTZ Imports | Apple Premium em Blumenau - SC",
    description:
      "Produtos Apple selecionados, atendimento humano e assistência técnica especializada em Blumenau - SC.",
    url: "https://ftzimports.com.br",
    siteName: "FTZ Imports",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/0a1128/ffffff?text=FTZ+Imports",
        width: 1200,
        height: 630,
        alt: "FTZ Imports",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FTZ Imports",
    image: "https://placehold.co/1200x630/0a1128/ffffff?text=FTZ+Imports",
    "@id": "https://ftzimports.com.br",
    url: "https://ftzimports.com.br",
    telephone: "+5547997927547",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Presidente Getúlio Vargas, 196",
      addressLocality: "Blumenau",
      addressRegion: "SC",
      postalCode: "89010-140",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-graphite-900 dark:bg-graphite-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
