import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Methodica — Gestión Empresarial, Legal y Contabilidad",
  description:
    "Gestión empresarial estratégica para empresas que quieren crecer con estructura. Integramos gestión, contabilidad y respaldo legal sin el costo de un departamento interno.",
  keywords: [
    "gestión empresarial",
    "contabilidad",
    "asesoría legal",
    "consultoría empresarial",
    "planificación estratégica",
    "optimización de procesos",
    "declaraciones fiscales",
    "constitución de empresas",
    "Perú",
    "Lima",
  ],
  authors: [{ name: "Methodica" }],
  creator: "Methodica",
  metadataBase: new URL("https://methodica.pe"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://methodica.pe",
    siteName: "Methodica",
    title: "Methodica — Gestión Empresarial, Legal y Contabilidad",
    description:
      "Tu equipo completo de gestión empresarial, contabilidad y legal. Sin el costo de un departamento interno. Estructura para crecer con claridad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodica — Gestión Empresarial, Legal y Contabilidad",
    description:
      "Gestión empresarial estratégica para empresas que quieren crecer con estructura.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
