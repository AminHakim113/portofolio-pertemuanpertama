import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamin — Portofolio",
  description: "Portofolio personal Kamin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}