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
  title: "Rekha Dental | Premium Dental Care in Greater Noida",
  description:
    "Expert dental care, cosmetic dentistry, implants, and smile transformations at Rekha Dental.",
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
