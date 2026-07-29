import GallerySection from "@/components/gallery/gallerySection";
import GalleryHeroSection from "@/components/gallery/sectionHeader";
import { FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Smile Gallery | Before & After Dental Transformations",

  description:
    "Explore Rekha Dental's smile gallery showcasing successful smile makeovers, implants, veneers, orthodontics, and cosmetic dentistry.",
  keywords: [
    "before after smile",
    "dental gallery",
    "smile makeover",
    "veneers",
    "dental implants",
    "cosmetic dentistry",
    "teeth whitening",
    "Rekha Dental",
    "patient results",
    "dentist Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/gallery`,
  },

  openGraph: {
    title: "Smile Gallery | Before & After Dental Transformations",

    description:
      "Explore Rekha Dental's smile gallery showcasing successful smile makeovers, implants, veneers, orthodontics, and cosmetic dentistry.",
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

    title: "Smile Gallery | Before & After Dental Transformations",

  description:
    "Explore Rekha Dental's smile gallery showcasing successful smile makeovers, implants, veneers, orthodontics, and cosmetic dentistry.",
  
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
      <GallerySection />
    </div>
  );
}

export default page;
