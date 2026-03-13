import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mentivis - Conseil et Transformation Éducative",
  description: "Piloter & réinventer les systèmes de formation en entreprise. Talent OS, Corporate Campus, Skills Factory, Education Rescue, Investor Lab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
