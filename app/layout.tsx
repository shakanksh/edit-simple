import type { Metadata } from "next";
import { Anton, Roboto } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal', 'italic'],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Edit Simple",
  description: "Your Story, Seamlessly Edited.",
  icons: {
    icon: "/favicon.ico",
  },   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${anton.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
