import DoctorDetails from "@/components/doctor/doctorDetails";
import DoctorHero from "@/components/doctor/doctorHero";
import ReviewsSection from "@/components/doctor/reviewSection";
import SectionHeader from "@/components/general/sectionHeader";
import CtaAction from "@/components/landingPage/ctaAction";
import {
  doctorDetailsAbhinav,
  doctorDetailsAzeem,
  doctorDetailsMamta,
  doctorDetailsVarun,
  doctorGauravDetails,
  reviewsData,
} from "@/data/doctor";

import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Meet Our Dental Specialists | Rekha Dental ",

  description:
    "Meet Dr. Gaurav Saxena and Dr. Mamta Raghav Saxena at Rekha Dental, Ghaziabad. Experienced specialists in dental implants, cosmetic dentistry, root canal treatment, oral medicine, and precision-driven patient care.",

  keywords: [
    "Dr Gaurav Saxena",
    "Dr Mamta Raghav Saxena",
    "dentist in Ghaziabad",
    "implantologist Ghaziabad",
    "cosmetic dentist",
    "root canal specialist",
    "oral medicine specialist",
    "dental implant doctor",
    "Rekha Dental doctors",
    "best dentist in Ghaziabad",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/doctor`,
  },

  openGraph: {
    title: "Meet Our Dental Specialists | Rekha Dental",

    description:
      "Explore the expertise, experience, and patient-first approach of the specialists at Rekha Dental.",

    url: `${FRONTEND_URL}/doctor`,

    siteName: "Rekha Dental",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/doctor/doctor1`,
        width: 1200,
        height: 630,
        alt: "Doctors at Rekha Dental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Meet Our Dental Specialists | Rekha Dental",

    description:
      "Learn about the experienced dental specialists leading Rekha Dental.",

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
            Crown & Bridge Procedures. He has been conducting implant and laser courses across Delhi NCR and different states across India.
          
            Renowned for his calm and patient-friendly approach,
            Dr. Gaurav is also a distinguished member of the
          <strong> Indian Dental Association (IDA),
           IAOMR, and ISOI </strong>.
            He has additionally received advanced training in
           Lasers and
            Esthetic Fillings from <strong>Germany </strong>.
            He attended
           one-day Zimmer Implantology course in
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
      <DoctorHero
        name="Dr. Varun Grover"
        role="Consultant Orthodontist"
        specialization="Orthodontics & Clear Aligners"
        experience="20+ Years of Practice"
        clinic="Rekha Dental"
        location="Raj Nagar Extension, Ghaziabad"
        rating={5.0}
        reviews={1000}
        description={`
          <p>
            Dr. Varun Grover completed his <strong>BDS</strong> from <strong>Bapuji Dental College, Davangere</strong> in 2002 and his <strong>MDS in Orthodontics</strong> from <strong>SDM College of Dental Sciences, Dharwad</strong>. With over <strong>20 years of experience</strong>, he is a renowned orthodontist and Chief Consultant for more than <strong>30 dental clinics across Delhi</strong>. His expertise includes conventional braces, self-ligating braces, lingual orthodontics, and clear aligners. A former faculty member and keynote speaker, Dr. Grover is dedicated to delivering advanced, personalized orthodontic care with exceptional clinical outcomes.
          </p>
        `}
        image={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1783939717/1000198350_nfop0g.jpg`}
      />
      <SectionHeader
        tag="EXPERTISE"
        title="Transforming smiles through advanced orthodontic care."
        subtitle="Combining decades of clinical experience with modern orthodontic techniques to deliver comfortable, precise, and personalized smile transformations."
      />
      <DoctorDetails data={doctorDetailsVarun} />

      <DoctorHero
        name="Dr. Azeem Abbasi"
        role="Consultant Implantologist"
        specialization="Dental Implants & Full Mouth Rehabilitation"
        experience="17+ Years of Practice"
        clinic="Rekha Dental"
        location="Raj Nagar Extension, Ghaziabad"
        rating={5.0}
        reviews={1000}
        description={`
    <p>
      Dr. Azeem Abbasi graduated from the prestigious <strong>Maulana Azad Dental College, New Delhi</strong> and is a highly experienced Implantologist with over <strong>17 years of clinical practice</strong>. He completed his <strong>Maxi Course in Oral Implantology (AAID, USA)</strong> and earned an <strong>M.Sc. in Implantology from New York University</strong>. With advanced training in Digital Dentistry, Hard & Soft Tissue Regeneration, Zygomatic & Pterygoid Implants, and Full Mouth Rehabilitation, Dr. Abbasi is committed to delivering predictable, world-class implant solutions. He is also a Founder Member and Director of <strong>Delhi ISOI</strong> and actively mentors dentists through his Implantology training programs.
    </p>
  `}
        image={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1783939717/1000198347_msueil.jpg`}
      />
      <SectionHeader
        tag="EXPERTISE"
        title="Restoring smiles with advanced implant dentistry."
        subtitle="Combining global training, modern surgical techniques, and extensive clinical experience to deliver long-lasting and natural-looking implant solutions."
      />
      <DoctorDetails data={doctorDetailsAzeem} />

      <DoctorHero
        name="Dr. Abhinav Singh"
        role="Consultant Orthodontist"
        specialization="Orthodontics & Clear Aligner Therapy"
        experience="10+ Years of Practice"
        clinic="Rekha Dental"
        location="Raj Nagar Extension, Ghaziabad"
        rating={5.0}
        reviews={1000}
        description={`
    <p>
      Dr. Abhinav Singh is a highly skilled Orthodontist with over <strong>10 years of clinical experience</strong> in correcting dental and facial irregularities. He completed his <strong>BDS</strong> from the <strong>Institute of Dental Sciences & Technologies, CCS University</strong> and earned his <strong>MDS in Orthodontics</strong> from the <strong>Coorg Institute of Dental Sciences, RGUHS, Bengaluru</strong>. His expertise includes clear aligners, Damon self-ligating braces, lingual orthodontics, surgical orthodontics, and multidisciplinary treatment planning, helping patients achieve healthy, confident smiles through modern orthodontic care.
    </p>
  `}
        image={`https://res.cloudinary.com/dygrzu3sm/image/upload/v1783939717/1000198344_vfztzc.jpg`}
      />
      <SectionHeader
        tag="EXPERTISE"
        title="Delivering modern orthodontic solutions with precision."
        subtitle="Combining advanced orthodontic techniques, digital treatment planning, and evidence-based care to create healthy, confident smiles for patients of all ages."
      />
      <DoctorDetails data={doctorDetailsAbhinav} />
      <ReviewsSection data={reviewsData} />
      <CtaAction />
    </div>
  );
}

export default page;
