import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Hossein Darabi — Data Scientist & Developer",
  description:
    "I build AI-powered solutions, custom digital tools, and data-driven products that solve real problems.",
  keywords: [
    "Hossein Darabi",
    "Data Scientist",
    "Machine Learning",
    "AI",
    "Developer",
    "Custom Solutions",
    "iOS Developer",
  ],
  openGraph: {
    title: "Hossein Darabi — Data Scientist & Developer",
    description:
      "I build AI-powered solutions, custom digital tools, and data-driven products that solve real problems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#0b1120' }}>
      <head>
        <meta name="theme-color" content="#0b1120" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <AmbientBackground />
        <NavbarWrapper />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
