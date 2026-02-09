import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://constructiidurabile.ro"),
  title:
    "Constructii Durabile – Cabane A-Frame, Case din Lemn, Terase & Foișoare",
  description:
    "Constructii Durabile proiectează și execută cabane A-Frame, case din lemn, terase și foișoare. Structuri corect executate, izolație pe straturi, montaj atent și garanție.",
  openGraph: {
    title:
      "Constructii Durabile – Cabane A-Frame, Case din Lemn, Terase & Foișoare",
    description:
      "Proiectare + execuție pentru cabane A-Frame, case din lemn, terase și foișoare. Durabilitate, detalii curate și garanție.",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/aframe-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cabana A-Frame Constructii Durabile",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
