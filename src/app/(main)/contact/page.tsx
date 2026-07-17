import ContactHighlightSection from "@/components/contact/contactHighlightSection";
import ContactInfoSection from "@/components/contact/contactInformation";
import ContactMapSection from "@/components/contact/contactMaps";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Contact Rekha Dental | Book Dental Appointment in Ghaziabad",

  description:
    "Get in touch with Rekha Dental in Ghaziabad for dental consultations, smile makeovers, implants, cosmetic dentistry, and advanced oral care treatments. Visit our clinic locations or book an appointment today.",

  keywords: [
    "contact Rekha Dental",
    "dentist in Ghaziabad",
    "dental clinic contact",
    "book dental appointment",
    "cosmetic dentist Ghaziabad",
    "dental implants Ghaziabad",
    "root canal specialist",
    "Raj Nagar Extension dentist",
    "oral healthcare clinic",
    "best dental clinic Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/contact`,
  },

  openGraph: {
    title:
      "Contact Rekha Dental | Book Dental Appointment in Ghaziabad",

    description:
      "Connect with Rekha Dental for expert dental care, consultations, smile enhancement, implants, and advanced treatments in Ghaziabad.",

    url: `${FRONTEND_URL}/contact`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
        width: 1200,
        height: 630,
        alt: "Contact Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Rekha Dental | Book Dental Appointment in Ghaziabad",

    description:
      "Reach out to Rekha Dental for premium dental care, consultations, and modern oral healthcare solutions.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/aboutBanner`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <main className=" py-10">
      <section className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-6 2xl:grid-cols-3 lg:px-10">
        <div className="lg:col-span-1">
          <div className="h-full border border-[#E7E0D5] bg-[#F3EFE8]">
            <ContactInfoSection />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="h-full border border-[#E7E0D5] bg-[#FAF8F4]">
            <ContactHighlightSection />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <ContactMapSection />
      </section>
    </main>
  );
}

export default Page;