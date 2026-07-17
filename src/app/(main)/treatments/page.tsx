import Banner from "@/components/general/generalBanner";
import CtaAction from "@/components/landingPage/ctaAction";
import ServiceGrid from "@/components/services/serviceGrid";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),
  title:
    "Dental Treatments & Services | Rekha Dental",

  description:
    "Explore advanced dental treatments at Rekha Dental including dental implants, smile makeovers, cosmetic dentistry, root canal treatment, orthodontics, oral surgery, and preventive dental care in Ghaziabad.",

  keywords: [
    "dental treatments",
    "dental services Ghaziabad",
    "cosmetic dentistry",
    "dental implants",
    "root canal treatment",
    "smile makeover",
    "orthodontics",
    "oral surgery",
    "teeth whitening",
    "preventive dental care",
    "best dental clinic Ghaziabad",
    "Rekha Dental",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/treatments`,
  },

  openGraph: {
    title:
      "Dental Treatments & Services | Rekha Dental",

    description:
      "Discover precision-driven dental treatments led by experienced specialists at Rekha Dental.",

    url: `${FRONTEND_URL}/treatments`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/banner`,
        width: 1200,
        height: 630,
        alt: "Dental Treatments at Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Treatments & Services | Rekha Dental",

    description:
      "Explore advanced cosmetic, restorative, implant, and preventive dental treatments at Rekha Dental.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/banner`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <div>
      <Banner
        imageSrc={`${CLOUDINARY_BASE}/rekha-dental/banner`}
        tag="TREATMENTS"
        title="A complete practice, performed by specialists."
        subtitle="Each treatment is led by a doctor whose career is devoted to that discipline."
        highlightText=""
      />
      <ServiceGrid />
      <CtaAction />
    </div>
  );
}

export default Page;
