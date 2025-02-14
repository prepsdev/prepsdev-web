import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fontInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "preps.dev | Jasa Pembuatan Website & Aplikasi Profesional",
  description:
    "Butuh website profesional? preps.dev siap membantu Anda membuat website dan aplikasi berkualitas tinggi dengan teknologi modern.",
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico",
  },
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "pengembangan aplikasi web",
    "developer website Indonesia",
    "jasa pembuatan aplikasi",
    "website custom",
  ],
  openGraph: {
    title: "preps.dev | Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Jasa pembuatan website & aplikasi profesional untuk bisnis dan startup. Kami siap membantu Anda dengan teknologi modern.",
    url: "https://preps.dev",
    siteName: "preps.dev",
    images: [
      {
        url: "https://preps.dev/logo.png", // Replace with your actual image
        width: 1200,
        height: 400,
        alt: "preps.dev - Jasa Pembuatan Website & Aplikasi Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "preps.dev | Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Jasa pembuatan website & aplikasi profesional untuk bisnis dan startup. Kami siap membantu Anda dengan teknologi modern.",
    images: ["https://preps.dev/logo.png"], // Replace with your actual image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
