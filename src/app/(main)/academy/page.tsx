import StorySection from "@/components/about/storySection";
import AlumniSection from "@/components/academy/alumniSection";
import AcademyCoursesSection from "@/components/academy/courseSection";
import CurrentBatch from "@/components/academy/currentBatch";
import ExtraImageSection from "@/components/academy/extraImageSection";
import FaqSections from "@/components/academy/faqSections";
import HandsOnTrainingSection from "@/components/academy/trainingCards";
import ReviewsSection from "@/components/doctor/reviewSection";
import SectionHeader from "@/components/general/sectionHeader";
import { alumniReviewsData } from "@/data/academy";
import { CLOUDINARY_BASE, FRONTEND_URL } from "@/utils/endpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title:
    "Rekha Dental Academy | Advanced Clinical Dental Training in Ghaziabad",

  description:
    "Join Rekha Dental Academy for hands-on clinical dental training programs led by experienced mentors. Learn advanced restorative, implant, and patient-care techniques through real-world case exposure in Ghaziabad.",

  keywords: [
    "Rekha Dental Academy",
    "dental academy in Ghaziabad",
    "clinical dental training",
    "hands-on dental courses",
    "implant training",
    "cosmetic dentistry training",
    "dental workshops India",
    "advanced dental education",
    "dentist mentorship program",
    "live patient dental training",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/academy`,
  },

  openGraph: {
    title:
      "Rekha Dental Academy | Advanced Clinical Dental Training in Ghaziabad",

    description:
      "Hands-on dental education focused on live patient cases, mentorship, and modern clinical excellence.",

    url: `${FRONTEND_URL}/academy`,

    siteName: "Rekha Dental Clinic",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${CLOUDINARY_BASE}/rekha-dental/academyBanner`,
        width: 1200,
        height: 630,
        alt: "Rekha Dental Academy Training Programs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rekha Dental Academy | Advanced Clinical Dental Training in Ghaziabad",

    description:
      "Explore hands-on clinical dental education programs guided by experienced mentors and live patient training.",

    images: [`${CLOUDINARY_BASE}/rekha-dental/academyBanner`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div className="pt-10">
      <SectionHeader
        tag="REKHA ACADEMY"
        title="Where clinicians refine craft into mastery."
        subtitle="Rekha Academy delivers immersive, hands-on dental education designed to elevate clinical confidence, precision, and real-world expertise through mentor-led training and live patient exposure."
      />
      <StorySection
        images={[
          `${CLOUDINARY_BASE}/rekha-dental/academyBanner`,
          // `${CLOUDINARY_BASE}/rekha-dental/academy/academy1`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current3`,
          `${CLOUDINARY_BASE}/rekha-dental/current/current4`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new1`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new2`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new3`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new4`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new5`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new6`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new7`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new8`,
          `${CLOUDINARY_BASE}/rekha-dental/academy-new/academy-new9`,
        ]}
        tag="ABOUT THE ACADEMY"
        title="An atelier, not a classroom."
        paragraphs={[
          "Rekha Dental Academy was founded on a single belief — that exceptional dentistry cannot be taught in slides alone. Our programs are built around live patient cases, small mentor-led cohorts, and the same protocols our specialists use every day in clinic.",
          
        ]}
      />
      <ExtraImageSection/>
      <AcademyCoursesSection />
      <AlumniSection />
      <HandsOnTrainingSection />
      <ReviewsSection
        tag="ALUMINI STORIES"
        title="What alumini say?"
        subtitle=""
        data={alumniReviewsData}
      />
      <CurrentBatch />
      <FaqSections />
      <div className="flex-col flex items-center justify-center mb-8 ">
        <SectionHeader
          tag="ENROLL NOW"
          title="Advance your clinical expertise with our Academy."
          subtitle="Hands-on dental training programs led by experienced mentors, designed to refine practical skills, elevate confidence, and shape the future of modern dentistry."
        />
        <a
          href="tel:+918130406405"
          className="flex lg:h-12 h-10  active:scale-95 transition-all items-center justify-center bg-brand px-8 lg:px-10 text-sm font-semibold uppercase tracking-[0.24em] text-white  duration-300 "
        >
          Call Now
        </a>
      </div>
    </div>
  );
}

export default page;
