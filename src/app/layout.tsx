import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#10243A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://surhires.vercel.app"),
  title: {
    default: "Surhires — Great talent. Better hiring. Faster.",
    template: "%s | Surhires",
  },
  description:
    "Surhires connects ambitious companies with exceptional people. Discover better candidates, simplify your hiring process, and build teams that move your business forward.",
  keywords: [
    "recruitment",
    "hiring platform",
    "tech jobs India",
    "frontend developer jobs",
    "software engineering roles",
    "remote jobs",
    "ATS candidate tracking",
    "talent platform",
  ],
  authors: [{ name: "Surhires Team" }],
  creator: "Surhires",
  publisher: "Surhires",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://surhires.vercel.app",
    siteName: "Surhires",
    title: "Surhires — Great talent. Better hiring. Faster.",
    description:
      "Connect with verified candidates and discover high-impact roles in engineering, product, and design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surhires — Great talent. Better hiring. Faster.",
    description:
      "Surhires connects ambitious companies with exceptional people.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#FAFAF7] text-[#10243A] font-body selection:bg-[#0F9D91]/20 selection:text-[#10243A]">
        {/* Accessible skip link for keyboard / screen-reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F9D91] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global sticky navigation bar */}
        <Navbar />

        {/* Main page content container */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
