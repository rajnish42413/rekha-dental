import LandingPage from "@/components/landingPage/landingPage"
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",

  description:
    "Rekha Dental Clinic in Ghaziabad offers advanced dental implants, cosmetic dentistry, smile makeovers, root canal treatment, and precision-driven oral healthcare with a calm, patient-first experience.",

  keywords: [
    "Rekha Dental Clinic",
    "dentist in Ghaziabad",
    "best dental clinic Ghaziabad",
    "cosmetic dentistry",
    "dental implants",
    "root canal treatment",
    "smile makeover",
    "oral healthcare",
    "dental specialists",
    "Raj Nagar Extension dentist",
    "luxury dental clinic",
    "advanced dental care",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}`,
  },

  openGraph: {
    title:
      "Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",

    description:
      "Experience precision dentistry, advanced treatments, and compassionate patient care at Rekha Dental Clinic.",

    url: `${FRONTEND_URL}`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/banner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Clinic Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rekha Dental Clinic | Luxury Dental Care in Ghaziabad",

    description:
      "Advanced dental care, smile makeovers, implants, and patient-first dentistry in Ghaziabad.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/banner`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
function page() {
  return (
    <div><LandingPage/></div>
  )
}

export default page