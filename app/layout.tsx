import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Methodica — Estructura, Gestión y Control Financiero para Empresas",
  description:
    "Gestión empresarial estratégica para empresas en crecimiento. Estructura organizacional, control financiero y orden administrativo sin el costo de un departamento interno.",
  keywords: [
    "gestión empresarial",
    "estructura empresarial",
    "control financiero",
    "orden administrativo",
    "consultoría empresarial",
    "organización financiera",
    "optimización de procesos",
    "gestión administrativa",
    "empresas en crecimiento",
    "Perú",
    "Lima",
  ],
  authors: [{ name: "Methodica" }],
  creator: "Methodica",
  metadataBase: new URL("https://methodica.pe"),
  alternates: {
    canonical: "/",
    languages: {
      "es-PE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://methodica.pe",
    siteName: "Methodica",
    title: "Methodica — Estructura, Gestión y Control Financiero para Empresas",
    description:
      "Tu equipo completo de gestión empresarial, control financiero y orden administrativo. Sin el costo de un departamento interno. Estructura para crecer con claridad.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Methodica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodica — Estructura, Gestión y Control Financiero para Empresas",
    description:
      "Gestión empresarial estratégica para empresas en crecimiento. Estructura, control financiero y orden administrativo.",
    images: ["/og-image.png"],
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
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-KHLEDXWY7V" />
      </body>
    </html>
  );
}
