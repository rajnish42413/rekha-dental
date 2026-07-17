import PaymentVerificationClient from '@/components/payment/paymentVerification'
import { CLOUDINARY_BASE, FRONTEND_URL } from '@/utils/endpoints';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Appointment Payment Verification | Rekha Dental",

  description:
    "Securely verify your appointment booking payment with Rekha Dental. Submit your payment details to confirm your dental consultation or treatment appointment.",

  keywords: [
    "payment verification",
    "appointment booking",
    "dental appointment payment",
    "Rekha Dental ",
    "consultation booking",
    "UPI payment verification",
    "dental clinic payment",
    "appointment confirmation",
    "secure payment verification",
    "dentist appointment Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/payment`,
  },

  openGraph: {
    title:
      "Appointment Payment Verification | Rekha Dental",

    description:
      "Verify your appointment booking payment securely with Rekha Dental.",

    url: `${FRONTEND_URL}/payment`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/banner`,
        width: 1200,
        height: 630,
        alt: "Payment Verification - Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Appointment Payment Verification | Rekha Dental",

    description:
      "Securely confirm your appointment payment with Rekha Dental",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/banner`,
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

function page() {
  return (
    <div><PaymentVerificationClient/></div>
  )
}

export default page