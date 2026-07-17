import GallerySection from "@/components/gallery/gallerySection";
import GalleryHeroSection from "@/components/gallery/sectionHeader";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Dental Clinic Gallery | Rekha Dental Ghaziabad",

  description:
    "Explore the Rekha Dental gallery featuring modern treatment spaces, smile transformations, advanced dental procedures, academy sessions, and patient-focused clinical care in Ghaziabad.",

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
    title:
      "Dental Clinic Gallery | Rekha Dental",

    description:
      "Discover treatment spaces, advanced dental care, smile transformations, and academy moments at Rekha Dental .",

    url: `${FRONTEND_URL}/gallery`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Clinic Gallery | Rekha Dental ",

    description:
      "Browse the gallery of Rekha Dental  showcasing treatments, clinic spaces, academy sessions, and patient care experiences.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
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
