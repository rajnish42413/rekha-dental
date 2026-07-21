import LandingPage from "@/components/landingPage/landingPage";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

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

  alternates: {
    canonical: `${FRONTEND_URL}`,
  },

  openGraph: {
    title:
      "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental",

    description:
      "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",

    url: `${FRONTEND_URL}`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/banner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental",

    description:
      "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",
    images: [`${CLOUDINARY_BASE}/rekha-dental/banner`],
  },

  robots: {
    index: true,
    follow: true,
  },
};
function page() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default page;
