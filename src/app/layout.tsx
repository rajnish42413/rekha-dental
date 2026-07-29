export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import {
  Cormorant,
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/general/topLoader";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import WhatsAppButton from "@/components/general/whatsappButton";
import GoogleAnalytics from "@/components/general/googleAnalytics";
import MetaPixel from "@/components/general/metaPixel";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title:
    "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental",
  description:
    "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",
  keywords: [
    "best dental clinic in Raj Nagar Extension",
    "best dentist in Raj Nagar Extension",
    "dental clinic in Raj Nagar Extension",
    "dentist in Raj Nagar Extension Ghaziabad",
    "best dentist in Kotgaon",
    "dental clinic in Kotgaon",
    "dentist near Kotgaon",
    "dental implants Raj Nagar Extension",
    "root canal treatment Raj Nagar Extension",
    "cosmetic dentist Raj Nagar Extension",
    "Rekha Dental",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full  ${playfair.variable} ${cormorant.variable} scrollable-content`}
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          flex flex-col
        `}
      >
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1905091286850268&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <GoogleAnalytics />
        <MetaPixel />
        <ReactQueryProvider>
          <TopLoader />
          <main className="grow">{children}</main>
          <WhatsAppButton />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
