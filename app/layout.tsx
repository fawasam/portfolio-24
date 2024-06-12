import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Contact from "@/components/contact";
import Link from "next/link";
import Magnetic from "@/common/Magnetic";
import NameHeader from "@/components/Header/Name";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fawas am",
  description:
    "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",

  icons: {
    icon: `/images/logo.png`,
  },
  openGraph: {
    type: "website",
    url: "https://fawasam.me/",
    title: "StudentFlow",
    description:
      "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",
    images: [
      {
        url: `/images/logo.png`,
        width: 900,
        height: 800,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    site: "@fawasam",
    card: "summary_large_image",
    title: "Fawas am",
    description:
      "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",
    creator: "@fawasam",
    images: {
      url: `/images/logo.png`,
      alt: "Preview image for fawasam",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NameHeader color="black" />
      <Header />
      <body className={inter.className}>{children}</body>
      <Contact />
    </html>
  );
}
