import GallerySection from "@/components/gallery/gallerySection";
import GalleryHeroSection from "@/components/gallery/sectionHeader";
import {  FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:"Dental Clinic Gallery | Rekha Dental Ghaziabad",

  description:"Take a look inside Rekha Dental Clinic in Ghaziabad. Explore our modern clinic, advanced equipment, treatment results, and patient experience.",
   
  keywords: [
    "Rekha Dental gallery",
    "dental clinic photos",
    "cosmetic dentistry gallery",
    "dental treatment gallery",
    "smile makeover results",
    "dental implants gallery",
    "clinic interior",
    "dental academy gallery",
    "dentist in Ghaziabad",
    "modern dental clinic",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/gallery`,
  },

  openGraph: {
    title:"Dental Clinic Gallery | Rekha Dental Ghaziabad",

    description:"Take a look inside Rekha Dental Clinic in Ghaziabad. Explore our modern clinic, advanced equipment, treatment results, and patient experience.",
    url: `${FRONTEND_URL}/gallery`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275216/20260202_165005_gqw0fw.jpg`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:"Dental Clinic Gallery | Rekha Dental Ghaziabad",

    description:"Take a look inside Rekha Dental Clinic in Ghaziabad. Explore our modern clinic, advanced equipment, treatment results, and patient experience.",

    images: [
      `https://res.cloudinary.com/dygrzu3sm/image/upload/v1784275216/20260202_165005_gqw0fw.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
function page() {
  return (
    <div>
      <GalleryHeroSection />
      <GallerySection/>
    </div>
  );
}

export default page;
