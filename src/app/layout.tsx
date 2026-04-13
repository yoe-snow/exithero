import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExitHero — LOI Intelligence Tool",
  description:
    "Understand your Letter of Intent in minutes. AI-powered LOI analysis for startup founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
