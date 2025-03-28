import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Pedro Gomes Branquinho",
   description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
