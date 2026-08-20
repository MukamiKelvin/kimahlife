import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kelvin Mukami | Frontend Developer",
    template: "%s | Kelvin Mukami",
  },

  description:
    "Kelvin Mukami is a frontend developer and IT professional building modern websites, web applications and digital solutions for businesses.",

  keywords: [
    "Kelvin Mukami",
    "KimahLife",
    "Frontend Developer",
    "Web Developer Kenya",
    "React Developer",
    "Next.js Developer",
    "Website Development",
    "Software Development",
    "WordPress Developer",
  ],

  authors: [
    {
      name: "Kelvin Mukami",
    },
  ],

  creator: "Kelvin Mukami",

  metadataBase: new URL("https://kimahlife.com"),

  openGraph: {
    title: "Kelvin Mukami | Frontend Developer",
    description:
      "I build modern websites, web applications and digital solutions that help businesses grow.",
    type: "website",
    locale: "en_KE",
    siteName: "KimahLife",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kelvin Mukami | Frontend Developer",
    description:
      "Frontend developer and IT professional building modern digital solutions.",
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-w-0 max-w-full overflow-x-hidden">
        <ThemeProvider>
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}