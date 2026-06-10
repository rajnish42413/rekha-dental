import DoctorDetails from "@/components/doctor/doctorDetails";
import DoctorHero from "@/components/doctor/doctorHero";
import ReviewsSection from "@/components/doctor/reviewSection";
import SectionHeader from "@/components/general/sectionHeader";
import CtaAction from "@/components/landingPage/ctaAction";
import {
  doctorDetailsMamta,
  doctorGauravDetails,
  reviewsData,
} from "@/utils/constants";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

  description:
    "Meet Dr. Gaurav Saxena and Dr. Mamta Raghav Saxena at Rekha Dental Clinic, Ghaziabad. Experienced specialists in dental implants, cosmetic dentistry, root canal treatment, oral medicine, and precision-driven patient care.",

  keywords: [
    "Dr Gaurav Saxena",
    "Dr Mamta Raghav Saxena",
    "dentist in Ghaziabad",
    "implantologist Ghaziabad",
    "cosmetic dentist",
    "root canal specialist",
    "oral medicine specialist",
    "dental implant doctor",
    "Rekha Dental Clinic doctors",
    "best dentist in Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/doctor`,
  },

  openGraph: {
    title:
      "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

    description:
      "Explore the expertise, experience, and patient-first approach of the specialists at Rekha Dental Clinic.",

    url: `${FRONTEND_URL}/doctor`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/doctor/doctor1`,
        width: 1200,
        height: 630,
        alt: "Doctors at Rekha Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

    description:
      "Learn about the experienced dental specialists leading Rekha Dental Clinic in Ghaziabad.",

    images: [
      `${CLOUDINARY_BASE}/rekha-dental/doctor/doctor1`,
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
      <DoctorHero
        name="Dr. Gaurav Saxena"
        role="Director"
        specialization="Chief Dental Surgeon & Implantologist"
        experience="19+ Years of Practice"
        clinic="Rekha Dental Clinic & Implant Center"
        location="Ghaziabad, Uttar Pradesh"
        rating={5.0}
        reviews={1200}
        description="Dr. Gaurav Saxena completed his BDS from DJ College of Dental Sciences & Research,
         Modinagar in 2007 and MDS from the Institute of Dental Sciences & Technologies. With over 14 years of clinical experience, 
         he specializes in root canal treatment, dental implants,
          and crown & bridge procedures. Renowned 
          for his calm and patient-friendly approach, Dr. Gaurav is also a distinguished member of the Indian Dental Association,
           IAOMR, and ISOI. He has additionally received advanced training in Lasers and Esthetic Fillings from Germany. He has been invited to conduct one-day Zimmer Implantology courses in Vietnam and Bali, reflecting his expertise and recognition in the field of dental implants."
        image={`${CLOUDINARY_BASE}/rekha-dental/doctor/doctor1`}
      />
      <SectionHeader
        tag="CREDENTIALS"
        title="Experience shaped by precision, trust, and patient care."
        subtitle="Over 14 years of expertise in advanced dental treatments, implantology, and aesthetic dentistry."
      />
      <DoctorDetails data={doctorGauravDetails} />
      <DoctorHero
        name="Dr. Mamta Raghav Saxena"
        role="Director"
        specialization="Dental Implants & Cosmetic Dentistry"
        experience="16+ Years of Practice"
        clinic="Rekha Dental, Laser & Implant Center"
        location="Raj Nagar Extension, Ghaziabad"
        rating={5.0}
        reviews={1000}
        description="Dr. Mamta Raghav Saxena is a highly experienced dentist and radiologist who completed her BDS from King George’s Medical College (KGMC), Lucknow in 2008 and MDS from Nair Government Hospital, Mumbai in 2013 with specialization in Oral Medicine and Radiology. With more than 10 years of clinical experience, she specializes in implant and cosmetic dentistry, along with diagnosis and management of oral lesions, ulcers, and precancerous conditions. She has also served as an Associate Professor at Government Dental College, Aurangabad and as a Senior Lecturer at ITS Dental College. Known for her calm and patient-friendly approach, Dr. Mamta is widely trusted for comprehensive and compassionate dental care."
        image={`${CLOUDINARY_BASE}/rekha-dental/doctor/doctorMamta`}
      />
      <SectionHeader
        tag="EXPERTISE"
        title="Dedicated to precision-driven and compassionate dental care."
        subtitle="Combining clinical expertise, academic excellence, and advanced diagnostic knowledge to deliver personalized treatment experiences."
      />
      <DoctorDetails data={doctorDetailsMamta} />
      <ReviewsSection data={reviewsData} />
      <CtaAction />
    </div>
  );
}

export default page;
