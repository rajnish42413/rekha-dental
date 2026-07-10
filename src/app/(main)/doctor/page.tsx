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

  title: "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

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
    title: "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

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

    title: "Meet Our Dental Specialists | Rekha Dental Clinic Ghaziabad",

    description:
      "Learn about the experienced dental specialists leading Rekha Dental Clinic in Ghaziabad.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/doctor/doctor1`],
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
        clinic="Rekha Dental"
        location="Ghaziabad, Uttar Pradesh"
        rating={5.0}
        reviews={1200}
        description={`
          <p>
            Dr. Gaurav Saxena completed his <strong>BDS</strong> from
           <strong> DJ College of Dental Sciences & Research, Modinagar</strong> in 2007
            and <strong>MDS</strong> from the
            <strong>Institute of Dental Sciences & Technologies.</strong>
          
            With more than 19 years of clinical experience, he
            specializes in Root Canal Treatment,
            Dental Implants, and
            Crown & Bridge Procedures.
          
            Renowned for his calm and patient-friendly approach,
            Dr. Gaurav is also a distinguished member of the
          <strong> Indian Dental Association (IDA),
           IAOMR, and ISOI </strong>.
          
            He has additionally received advanced training in
           Lasers and
            Esthetic Fillings from <strong>Germany </strong>.
          
            He has been invited to conduct
           one-day Zimmer Implantology courses in
            <strong>Vietnam</strong> and implant course in <strong>Bali, Indonesia</strong>, reflecting his expertise
            and international recognition in the field of
            Dental Implants.
          </p>
          `}
        image={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1783688070/1000197520_ujhf4w.png`}
      />
      <SectionHeader
        tag="CREDENTIALS"
        title="Experience shaped by precision, trust, and patient care."
        subtitle="More than 19 years of expertise in advanced dental treatments, implantology, and esthetic dentistry."
      />
      <DoctorDetails data={doctorGauravDetails} />
      <DoctorHero
        name="Dr. Mamta Raghav Saxena"
        role="Founder"
        specialization="Dental Implants & Cosmetic Dentistry"
        experience="16+ Years of Practice"
        clinic="Rekha Dental"
        location="Raj Nagar Extension, Ghaziabad"
        rating={5.0}
        reviews={1000}
        description={`
          <p>
            Dr. Mamta Raghav Saxena is a highly experienced dentist and radiologist who completed her <strong>BDS</strong> from <strong>King George's Medical College (KGMC), Lucknow</strong> in 2008 and <strong>MDS</strong> from <strong>Nair Government Hospital, Mumbai</strong> in 2013 with specialization in Oral Medicine and Radiology.
          
            With more than 16 years of clinical experience, she specializes in Implant Dentistry, Cosmetic Dentistry, and the diagnosis and management of oral lesions, ulcers, and precancerous conditions.
          
            She has also served as an <strong>Associate Professor at Government Dental College, Aurangabad</strong> and as a <strong>Senior Lecturer at ITS Dental College</strong>.

            Known for her and patient-friendly approach, Dr. Mamta is widely trusted for providing comprehensive, compassionate, and evidence-based dental care.
          </p>
          `}
        image={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1783688070/1000197500_embrft.png`}
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
