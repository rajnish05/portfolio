import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rajnishkumar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rajnish Kumar | Senior Software Engineer",
    template: "%s | Rajnish Kumar",
  },
  description:
    "Senior Software Engineer with 6+ years of experience specializing in React Native, mobile architecture, and developer tools. Building high-performance mobile applications.",
  keywords: [
    "Rajnish Kumar",
    "Senior Software Engineer",
    "React Native",
    "Mobile Development",
    "Developer Tools",
  ],
  authors: [{ name: "Rajnish Kumar" }],
  openGraph: {
    title: "Rajnish Kumar | Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in React Native and mobile architecture.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajnish Kumar | Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in React Native and mobile architecture.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');else document.documentElement.setAttribute('data-theme','dark');})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
